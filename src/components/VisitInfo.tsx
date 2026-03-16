import styles from '@/styles/VisitInfo.module.css';

interface VisitInfoProps {
  visitInfoTitle: string;
  openingHours: string;
  address: string;
  accessibilityInfo: string;
}

export default function VisitInfo({
  visitInfoTitle,
  openingHours,
  address,
  accessibilityInfo,
}: VisitInfoProps) {
  return (
    <section className={`${styles.visitInfo} section-padding container`}>
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h3>Horarios de Apertura</h3>
          <p>{openingHours}</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Ubicación</h3>
          <p>{address}</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Accesibilidad</h3>
          <p>{accessibilityInfo}</p>
        </div>
      </div>
    </section>
  );
}
