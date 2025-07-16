'use client';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container/Container';
import styles from './Services.module.css';

const services = [
  {
    title: 'General Contracting',
    description: 'Full-service construction management from concept to completion',
    video: '/videos/Passenger Alpha.bc06b347f5b526ad9a60.mp4'
  },
  {
    title: 'Design Build',
    description: 'Integrated approach delivering design and construction as one entity',
    video: '/videos/Cabin.3260d3e4f52b3804dae5.mp4'
  },
  {
    title: 'Construction Management',
    description: 'Professional project oversight ensuring quality and efficiency',
    video: '/videos/Exterior.a127ebb308e655c7e32c.mp4'
  },
  {
    title: 'Pre-construction',
    description: 'Comprehensive planning and budgeting before breaking ground',
    video: '/videos/Cabin.3260d3e4f52b3804dae5.mp4'
  },
  {
    title: 'Building Information Modeling',
    description: 'Advanced 3D modeling for optimal project visualization',
    video: '/videos/Commercial-Engine.d8957f7c027ca396858e.mp4'
  },
  {
    title: 'Sustainable Construction',
    description: 'Eco-friendly building practices for a greener future',
    video: '/videos/Front.8f5fda304d3095ab6b02.mp4'
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.sectionHeader}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.sectionTitle}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.sectionSubtitle}
          >
            Delivering excellence through comprehensive construction solutions
          </motion.p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.serviceCard}
            >
              <div className={styles.videoContainer}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.serviceVideo}
                >
                  <source src={service.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className={styles.videoOverlay}></div>
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}