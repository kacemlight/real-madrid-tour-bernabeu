'use client';

import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';

interface HeroSectionProps {
  heroImageRef: string;
  heroImageAlt: string;
  pageTitle: string;
  pageSubtitle: string;
  ctaLabel: string;
  ctaUrl: string;
}

export default function HeroSection({
  heroImageRef,
  heroImageAlt,
  pageTitle,
  pageSubtitle,
  ctaLabel,
  ctaUrl,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrapper}>
        <Image
          src={heroImageRef}
          alt={heroImageAlt}
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
      </div>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{pageTitle}</h1>
          <p className={styles.heroSubtitle}>{pageSubtitle}</p>
          <a href={ctaUrl} className={styles.ctaButton}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
