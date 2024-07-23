// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; // Import styles from CSS module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyRight}>© 2024 Coffee Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
