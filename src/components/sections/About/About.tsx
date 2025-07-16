import Image from 'next/image';
import Container from '@/components/common/Container/Container';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/about.jpg"
              alt="About Supreme Group"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>About Supreme Group</h2>
            <p>
              Founded in 1990, Supreme Group has grown from a small local contractor to an internationally recognized construction firm with projects across multiple continents.
            </p>
            <p>
              Our commitment to quality, safety, and innovation has earned us numerous awards and the trust of clients worldwide.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span>30+</span>
                <p>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <span>500+</span>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statItem}>
                <span>50+</span>
                <p>Professional Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}