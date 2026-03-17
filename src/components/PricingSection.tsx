import { TicketType } from '@/types/tour'
interface Props { tickets: TicketType[] }
export default function PricingSection({ tickets }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Book Your Tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((t, i) => (
            <div key={i} className="border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{t.name}</h3>
              <div className="text-5xl font-bold text-yellow-500 my-6">{t.price}</div>
              <p className="text-gray-600 mb-8">{t.description}</p>
              <a href={t.ctaUrl} className="block bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}