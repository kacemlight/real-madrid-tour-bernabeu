interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface HighlightsProps {
  highlights: Highlight[];
}

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <section className="bg-gray-50 py-16" aria-labelledby="highlights-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="highlights-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Points forts du Tour</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {highlights.map((item, idx) => (
            <li key={idx} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-3">
              <span className="text-4xl" role="img" aria-label={item.title}>{item.icon}</span>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
