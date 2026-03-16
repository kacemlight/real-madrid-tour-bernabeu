import TicketCard from '@/components/TicketCard';
import styles from '@/styles/TicketsSection.module.css';

interface Ticket {
  ticketName: string;
  ticketPrice: string;
  ticketDescription: string;
  ticketImageRef: string;
}

interface TicketsSectionProps {
  ticketSectionTitle: string;
  tickets: Ticket[];
}

export default function TicketsSection({
  ticketSectionTitle,
  tickets,
}: TicketsSectionProps) {
  return (
    <section className={`${styles.ticketsSection} section-padding container`}>
      <h2 className={styles.sectionTitle}>{ticketSectionTitle}</h2>
      <div className={styles.ticketsGrid}>
        {tickets.map((ticket, index) => (
          <TicketCard
            key={index}
            ticketName={ticket.ticketName}
            ticketPrice={ticket.ticketPrice}
            ticketDescription={ticket.ticketDescription}
            ticketImageRef={ticket.ticketImageRef}
          />
        ))}
      </div>
    </section>
  );
}
