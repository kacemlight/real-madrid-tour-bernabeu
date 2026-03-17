interface PricingSectionProps {
  amount: number;
  currency: string;
}

export default function PricingSection({ amount, currency }: PricingSectionProps) {
  return (
    <section className="py-12 px-4 bg-rm-gold">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tour Pricing</h2>
        <div className="bg-white rounded-lg p-12 shadow-lg">
          <p className="text-gray-600 mb-4 text-lg">Per Person</p>
          <div className="text-6xl font-bold text-rm-black mb-2">
            {currency} {amount.toLocaleString()}
          </div>
          <button className="mt-8 bg-rm-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
