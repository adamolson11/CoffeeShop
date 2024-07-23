// components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import styles from './Hero.module.css'; // Import styles from CSS module

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/images/coffee-shop.jpg" // Correct path to image in public folder
          alt="Coffee Shop"
          fill // Use fill to make image responsive
          className={styles.heroImage}
          priority // Optional: loads the image immediately for better performance
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Coffee Shop</h1>
        <p className={styles.heroSubtitle}>Discover the best coffee in town.</p>
      </div>
    </section>
  );
};

export default Hero;
