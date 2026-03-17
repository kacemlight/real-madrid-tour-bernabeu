interface Highlight {
  title: string;
  description: string;
  icon: string;
}

interface TourHighlightsProps {
  highlights: Highlight[];
}

export default function TourHighlights({ highlights }: TourHighlightsProps) {
  return (
    <section className="py-16 px-4 bg-rm-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-rm-black mb-12 text-center">
          Tour Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="text-center p-6 bg-gray-100 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-rm-black mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}