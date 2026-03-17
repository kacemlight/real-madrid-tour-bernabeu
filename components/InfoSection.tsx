import React from 'react';

interface InfoSubsection {
  id: string;
  heading: string;
  content: string;
}

interface InfoSectionProps {
  title: string;
  content: string;
  sections: InfoSubsection[];
  contactEmail: string;
  contactPhone: string;
}

export default function InfoSection({
  title,
  content,
  sections,
  contactEmail,
  contactPhone,
}: InfoSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {content}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-blue-600 rounded-lg p-8 sm:p-12 text-white">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-100 mb-2">Email</p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                {contactEmail}
              </a>
            </div>
            <div>
              <p className="text-blue-100 mb-2">Phone</p>
              <a
                href={`tel:${contactPhone}`}
                className="text-lg font-semibold hover:text-blue-200 transition-colors"
              >
                {contactPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
