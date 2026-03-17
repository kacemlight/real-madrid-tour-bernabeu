interface TourHighlightsProps {
  highlights: string[];
}

export default function TourHighlights({ highlights }: TourHighlightsProps) {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Tour Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
