/**
 * TicketSection Component
 * Displays ticket options in a grid with pricing and CTAs
 */

import { TicketOption } from '@/types';

interface TicketSectionProps {
  title: string;
  options: TicketOption[];
}

export default function TicketSection({ title, options }: TicketSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-lg p-8 hover:border-rm-gold transition-colors"
            >
              {/* Ticket Name */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {option.ticketName}
              </h3>

              {/* Price */}
              <p className="text-4xl font-bold text-rm-gold mb-4">
                {option.ticketPrice}
              </p>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {option.ticketDescription}
              </p>

              {/* CTA Button */}
              <a
                href={option.ticketCtaUrl}
                className="block w-full text-center px-6 py-3 bg-rm-gold hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200"
              >
                {option.ticketCtaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
