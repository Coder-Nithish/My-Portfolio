import React from 'react';
import { experienceData } from '../data';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 500 }}>{exp.company}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    {exp.period}
                  </span>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.location}</p>
                </div>
              </div>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative', color: 'var(--text-muted)' }}>
                    <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
