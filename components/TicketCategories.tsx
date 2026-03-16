interface Ticket {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

interface TicketCategoriesProps {
  tickets: Ticket[];
}

export default function TicketCategories({ tickets }: TicketCategoriesProps) {
  return (
    <section id="tickets" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="tickets-heading">
      <h2 id="tickets-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Nos Billets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tickets.map((ticket, idx) => (
          <article key={idx} className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{ticket.name}</h3>
              <p className="text-yellow-500 font-extrabold text-2xl mt-1">{ticket.price}</p>
              <p className="text-gray-600 text-sm mt-2">{ticket.description}</p>
            </div>
            <ul className="space-y-1 flex-1">
              {ticket.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-0.5" aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={ticket.ctaUrl}
              className="mt-auto block text-center bg-gray-900 hover:bg-yellow-400 hover:text-black text-white font-semibold py-2.5 px-4 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Réserver
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
