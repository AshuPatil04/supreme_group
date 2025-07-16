'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/common/Button/Button';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoPrimary}>SUPREME</span>
            <span>GROUP</span>
          </Link>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.show : ''}`}>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            <Button variant="primary">Get a Quote</Button>
          </div>

          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
          </button>
        </nav>
      </div>
    </header>
  );
}