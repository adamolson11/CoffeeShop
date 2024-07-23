// components/Hero.tsx
import React from 'react';
import styles from './Hero.module.css'; // Import styles from CSS module

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Coffee Shop</h1>
        <p className={styles.heroSubtitle}>Discover the best coffee in town.</p>
      </div>
    </section>
  );
};

export default Hero;
