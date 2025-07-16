'use client';

import { useState } from 'react';
import Container from '@/components/common/Container/Container';
import Button from '@/components/common/Button/Button';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <Container>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p>
            For general enquiries
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span>📞</span>
                <p>+91 22 25208822</p>
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span>
                <p>info@supremegroup.co.in</p>
              </div>
              <div className={styles.contactItem}>
                <span>🏢</span>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}