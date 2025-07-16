'use client';

import { motion } from 'framer-motion';
import Button from '@/components/common/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        >
          <source src="/videos/automotive.224e7418884105595114.mp4" type="video/mp4" />
          
          <img src="/images/hero-fallback.jpg" alt="Construction site" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>


      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            Building <span>Excellence</span> Since 1990
          </h1>
          <p className={styles.heroSubtitle}>
            Supreme Group delivers world-class construction services with unmatched quality and reliability.
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary">Our Services</Button>
            <Button variant="outline">View Projects</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}