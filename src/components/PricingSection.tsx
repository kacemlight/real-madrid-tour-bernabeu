interface PricingOption {
  type: string;
  price: number;
  duration: string;
  includes: string;
}

interface PricingSectionProps {
  pricing: PricingOption[];
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section className="py-16 px-4 bg-rm-black text-rm-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-rm-gold">
          Ticket Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((option, idx) => (
            <div key={idx} className="bg-gray-900 p-8 rounded-lg border-2 border-rm-gold hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-rm-gold mb-4">{option.type}</h3>
              <div className="text-4xl font-bold mb-2">€{option.price}</div>
              <p className="text-sm text-gray-300 mb-4">{option.duration}</p>
              <p className="text-gray-300">{option.includes}</p>
              <button className="mt-6 w-full bg-rm-gold text-rm-black font-bold py-2 rounded hover:bg-yellow-400 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}