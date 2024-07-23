// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Import styles from CSS module

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
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
    </header>
  );
};

export default Header;
