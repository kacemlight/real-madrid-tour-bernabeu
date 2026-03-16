'use client';

import Image from 'next/image';
import styles from '@/styles/TicketCard.module.css';

interface TicketCardProps {
  ticketName: string;
  ticketPrice: string;
  ticketDescription: string;
  ticketImageRef: string;
}

export default function TicketCard({
  ticketName,
  ticketPrice,
  ticketDescription,
  ticketImageRef,
}: TicketCardProps) {
  return (
    <div className={styles.ticketCard}>
      <div className={styles.ticketImageWrapper}>
        <Image
          src={ticketImageRef}
          alt={ticketName}
          fill
          className={styles.ticketImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.ticketContent}>
        <h3 className={styles.ticketName}>{ticketName}</h3>
        <p className={styles.ticketDescription}>{ticketDescription}</p>
        <div className={styles.ticketFooter}>
          <span className={styles.ticketPrice}>{ticketPrice}</span>
          <button className={styles.bookButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
