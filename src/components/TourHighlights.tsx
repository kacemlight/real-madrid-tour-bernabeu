import { TourHighlight } from '@/types/tour'
interface Props { highlights: TourHighlight[] }
export default function TourHighlights({ highlights }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What's Included</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-yellow-50 transition-colors">
              <div className="text-5xl mb-4">{h.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{h.label}</h3>
              <p className="text-gray-600">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}