import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{ padding: '1.2rem 0', position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-card)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <a href="#" onClick={closeMenu} style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', letterSpacing: '-1px' }}>NP<span style={{ color: 'var(--primary)' }}>.</span></a>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#about" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>About</a></li>
          <li><a href="#experience" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Experience</a></li>
          <li><a href="#skills" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Skills</a></li>
          <li><a href="#projects" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Projects</a></li>
          
          <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', borderRadius: '0.5rem' }}>Hire Me</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="mobile-menu-btn">
          <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={toggleMobileMenu} style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            <li><a href="#about" onClick={closeMenu} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>About</a></li>
            <li><a href="#experience" onClick={closeMenu} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>Experience</a></li>
            <li><a href="#skills" onClick={closeMenu} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu} style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>Projects</a></li>
            <li style={{ marginTop: '1rem' }}><a href="#contact" onClick={closeMenu} className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.8rem 2rem', fontSize: '1rem' }}>Hire Me</a></li>
          </ul>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
