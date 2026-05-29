import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiHeart } from 'react-icons/fi';
import { navLinks, personalInfo } from '../../data/index.js';

export default function Footer({ isDark }) {
  const year = new Date().getFullYear();
  const handleNavClick = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      style={{
        position: 'relative',
        background: isDark ? 'rgba(5,5,12,0.98)' : 'rgba(241,245,249,0.98)',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #6366f1 35%, #06b6d4 65%, transparent 100%)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '3rem',
          }}
        >
          {/* Brand — spans 2 cols on wide screens */}
          <div style={{ gridColumn: 'span 2' }} className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '15px',
                  flexShrink: 0,
                }}
              >
                Z
              </div>
              <div>
                <div style={{ fontWeight: 700, color: isDark ? '#f1f5f9' : '#0f172a', fontSize: '0.9375rem' }}>
                  Zulfiqar Ali Chandio
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Senior Mobile Engineer</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.75, maxWidth: '280px' }}>
              Building scalable mobile experiences for government, enterprise, fintech, and consumer platforms.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '12px', color: '#4ade80' }}>Available for remote work</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, color: isDark ? '#f1f5f9' : '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.125rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      color: '#64748b',
                      padding: 0,
                      transition: 'color 0.2s',
                      fontFamily: 'inherit',
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 600, color: isDark ? '#f1f5f9' : '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.125rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: FaLinkedin, label: 'LinkedIn',  href: personalInfo.linkedin,              color: '#0ea5e9' },
                { icon: FaGithub,   label: 'GitHub',    href: personalInfo.github,                color: '#e2e8f0' },
                { icon: FaWhatsapp, label: 'WhatsApp',  href: personalInfo.whatsapp,              color: '#4ade80' },
                { icon: FiMail,     label: 'Email',     href: `mailto:${personalInfo.email}`,     color: '#818cf8' },
              ].map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.875rem',
                    color: '#64748b',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  <Icon size={13} style={{ color, flexShrink: 0 }} />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '12px', color: '#475569' }}>
            © {year} Zulfiqar Ali Chandio. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with <FiHeart size={11} style={{ color: '#f87171' }} /> React + Vite + Tailwind
          </p>
          <p style={{ fontSize: '12px', color: '#475569' }}>📍 Karachi, Pakistan</p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #818cf8 !important; }
        @media (max-width: 640px) { .footer-brand { grid-column: span 1 !important; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </footer>
  );
}
