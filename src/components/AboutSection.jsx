import React from 'react';
import { profileData, educationData, certificationsData } from '../data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>About Me</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              {profileData.summary}
            </p>
            
            <div className="glass-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 700 }}>Contact Details</h3>
              <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Location:</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{profileData.location}</span>
                </li>
                <li style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Email:</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{profileData.email}</span>
                </li>
                <li style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Phone:</span>
                  <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{profileData.phone}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 700 }}>Education</h3>
              {educationData.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1rem', backgroundColor: 'var(--bg-card)' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 700 }}>{edu.degree}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{edu.institution}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 700 }}>Certifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <a href="/Nithish P_T030304221.pdf" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)', display: 'block', textDecoration: 'none' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Java Full Stack Development</h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>TNSIF (6-month program, 2024–2025)</div>
                  <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Click to View Certificate →</div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
