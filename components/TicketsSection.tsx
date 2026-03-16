import { TicketsSectionProps } from '@/lib/types';
import { TicketCard } from './TicketCard';

export function TicketsSection({
  ticketSectionTitle,
  tickets
}: TicketsSectionProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Tickets Section"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          {ticketSectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
      </div>
    </section>
  );
}
