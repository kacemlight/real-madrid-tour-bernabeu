import styles from '@/styles/IntroSection.module.css';

interface Highlight {
  title: string;
  description: string;
}

interface IntroSectionProps {
  introductionText: string;
  tourHighlights: Highlight[];
}

export default function IntroSection({
  introductionText,
  tourHighlights,
}: IntroSectionProps) {
  return (
    <section className={`${styles.intro} section-padding container`}>
      <div className={styles.introContent}>
        <h2 className={styles.introTitle}>Bienvenido al Bernabéu</h2>
        <p className={styles.introText}>{introductionText}</p>
      </div>

      <div className={styles.highlightsGrid}>
        {tourHighlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
