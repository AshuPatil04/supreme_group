import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Supreme Group</h3>
            <p>Building excellence since 1990</p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Applications</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="#about">Apparel</Link>
              </li>
              <li>
                <Link href="#services">Automotive</Link>
              </li>
              <li>
                <Link href="#projects">Filtration</Link>
              </li>
              <li>
                <Link href="#contact">Customised Nonwoven</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="#about">Who We Are</Link>
              </li>
              <li>
                <Link href="#services">Global Compentency</Link>
              </li>
              <li>
                <Link href="#projects">Innovation</Link>
              </li>
              <li>
                <Link href="#contact">ESG Impact</Link>
              </li>
            </ul>
          </div>

        
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Supreme Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}