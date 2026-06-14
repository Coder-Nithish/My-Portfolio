import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data';
import { Building2 } from 'lucide-react';

const TimelineSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" ref={ref} style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--timeline-line)' }}></div>

          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative' }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-card-solid)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, flexShrink: 0 }}>
                <Building2 size={20} color="var(--primary)" />
              </div>
              
              {/* Content Card */}
              <div className="glass-card" style={{ flexGrow: 1, padding: '2.5rem', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.25rem', fontWeight: 700 }}>{exp.role}</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500 }}>{exp.company}</h4>
                  </div>
                  <span style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--bg-element)', color: 'var(--text-muted)', borderRadius: '0.5rem', fontSize: '0.85rem', fontWeight: 600, border: '1px solid var(--glass-border)' }}>
                    {exp.period}
                  </span>
                </div>
                
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {exp.highlights.slice(0, 5).map((highlight, hIdx) => (
                    <li key={hIdx} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}></span>
                      {highlight}
                    </li>
                  ))}
                  {exp.highlights.length > 5 && (
                    <li style={{ paddingLeft: '1.5rem', color: 'var(--primary)', fontStyle: 'italic', fontWeight: 500, marginTop: '1rem' }}>
                      + {exp.highlights.length - 5} more enterprise accomplishments
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
