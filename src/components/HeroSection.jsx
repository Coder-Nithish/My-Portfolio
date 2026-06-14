import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { profileData } from '../data';
import { Download, ChevronRight, Server, Database, Code, Cpu } from 'lucide-react';
import profileImageUrl from '../assets/profile.png';

const floatingIcons = [
  { Icon: Server, color: 'var(--primary)', delay: 0, x: -120, y: -80 },
  { Icon: Database, color: 'var(--secondary)', delay: 1, x: 160, y: -100 },
  { Icon: Code, color: 'var(--accent)', delay: 2, x: 120, y: 160 },
  { Icon: Cpu, color: 'var(--text-muted)', delay: 1.5, x: -140, y: 140 },
];

const HeroSection = () => {
  return (
    <section id="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Animated Background Gradients */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '5%', left: '-5%', width: '600px', height: '600px', background: 'var(--primary)', borderRadius: '50%', filter: 'blur(150px)', zIndex: -1 }} 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', bottom: '0%', right: '-5%', width: '700px', height: '700px', background: 'var(--secondary)', borderRadius: '50%', filter: 'blur(150px)', zIndex: -1 }} 
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          style={{ position: 'absolute', top: `calc(50% + ${item.y}px)`, left: `calc(50% + ${item.x}px)`, color: item.color, opacity: 0.25, zIndex: 0 }}
        >
          <item.Icon size={56} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '2rem', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--secondary)', borderRadius: '50%', display: 'inline-block' }}></span>
              Available for Hire
            </div>

            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', lineHeight: 1.1, color: 'var(--text-main)', fontWeight: 800 }}>
              Software Developer <br/>
              <span style={{ color: 'var(--text-muted)', fontSize: '2.5rem' }}>Backend Systems & MES Integration</span>
            </h1>

            <div style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 500, height: '40px' }}>
              <TypeAnimation
                sequence={[
                  'Golang & Node.js Specialist', 2000,
                  'MQTT & OPC UA Architect', 2000,
                  'AVEVA MES & System Platform', 2000,
                  'Enterprise ERP-to-MES Integration', 2000,
                  'Real-Time Data Pipelines', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
              {profileData.summary.split('.')[0]}. Specialized in designing and delivering high-performance backend systems, real-time data pipelines, and scalable cloud-to-edge integrations.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Contact Me <ChevronRight size={18} />
              </a>
              <a href="/Nithish_P_Resume.pdf" download="Nithish_P_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Premium Avatar Wrapper */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: 'relative', width: '420px', height: '420px', borderRadius: '30px', background: 'var(--bg-card-solid)', padding: '15px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05), 0 0 40px var(--primary-glow)', transform: 'rotate(2deg)' }}
            >
              <div style={{ width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden', backgroundColor: 'var(--bg-element)', border: '1px solid var(--glass-border)', transform: 'rotate(-2deg)' }}>
                <img 
                  src={profileImageUrl} 
                  alt="Nithish P" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'var(--bg-element)';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = '<span style="color:var(--text-muted);font-weight:600;font-size:1.1rem;text-align:center;">Add profile.png<br/><span style="font-size:0.8rem;font-weight:400">to src/assets/</span></span>';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
