import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data';
import { Mail, Phone, Link as LinkIcon, Send } from 'lucide-react';

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <div className="grid-auto-fit">
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)', fontWeight: 800, letterSpacing: '-1px' }}>Ready to build something amazing?</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Whether you have a question about Industrial IoT, need help with MES integration, or want to discuss freelance opportunities, my inbox is always open.
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                <a href={`mailto:${profileData.email}`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', backgroundColor: 'var(--bg-card)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{profileData.email}</p>
                  </div>
                </a>
                
                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{profileData.phone}</p>
                  </div>
                </div>
                
                <a href={`https://${profileData.linkedin}`} target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', textDecoration: 'none', transition: 'all 0.3s ease', backgroundColor: 'var(--bg-card)' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <LinkIcon size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</h4>
                    <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>linkedin.com/in/nithish-p</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '3rem', backgroundColor: 'var(--bg-card)' }}>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c78c3087-eac0-4b0a-8a10-ba3267bc0088" />
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
