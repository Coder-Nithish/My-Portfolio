import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{ padding: '1.5rem 0', position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-card)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', letterSpacing: '-1px' }}>NP<span style={{ color: 'var(--primary)' }}>.</span></a>
        <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <li><a href="#about" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>About</a></li>
          <li><a href="#experience" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Experience</a></li>
          <li><a href="#skills" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Skills</a></li>
          <li><a href="#projects" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Projects</a></li>
          
          <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '0.5rem' }}>Hire Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
