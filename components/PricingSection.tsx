import React from 'react';

interface PricingOption {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  featured?: boolean;
}

interface PricingSectionProps {
  pricing: PricingOption[];
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tour Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect experience for your visit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((option) => (
            <div
              key={option.id}
              className={`relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl ${
                option.featured ? 'ring-2 ring-blue-600 md:scale-105' : ''
              }`}
            >
              {/* Featured Badge */}
              {option.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${option.featured ? 'bg-blue-50' : 'bg-white'}`}>
                {/* Header */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-gray-600 ml-2">per person</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href={option.buttonUrl}
                  className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-300 ${
                    option.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {option.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
