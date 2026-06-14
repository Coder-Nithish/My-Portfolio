import React from 'react';
import { profileData } from '../data';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-color)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem', letterSpacing: '-1px' }}>NP<span style={{ color: 'var(--primary)' }}>.</span></h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 500 }}>
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
