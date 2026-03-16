import { TicketCardProps } from '@/lib/types';

export function TicketCard({
  ticketName,
  ticketPrice,
  ticketDescription,
  ticketImageRef
}: TicketCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
      role="article"
      aria-label={`${ticketName} ticket option`}
    >
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('${ticketImageRef}')`
        }}
        role="img"
        aria-label={ticketName}
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{ticketName}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{ticketPrice}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          {ticketDescription}
        </p>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          aria-label={`Select ${ticketName} ticket`}
        >
          Select Ticket
        </button>
      </div>
    </div>
  );
}
