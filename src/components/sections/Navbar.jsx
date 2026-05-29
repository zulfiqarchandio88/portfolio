import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../../data/index.js';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          ...(scrolled
            ? {
                background: 'rgba(7, 7, 16, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }
            : { background: 'transparent' }),
        }}
      >
        <nav
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4rem)',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            whileHover={{ scale: 1.04 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none', flexShrink: 0 }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
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
            <span style={{ fontWeight: 700, fontSize: '14px', display: 'none' }} className="sm-show">
              <span className="gradient-text">Zulfiqar</span>
              <span style={{ color: isDark ? '#cbd5e1' : '#475569' }}> Chandio</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.25rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      position: 'relative',
                      padding: '0.375rem 0.875rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      borderRadius: '8px',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      color: isActive ? '#818cf8' : isDark ? '#94a3b8' : '#64748b',
                      transition: 'color 0.2s',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '8px',
                          background: 'rgba(99,102,241,0.12)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span style={{ position: 'relative' }}>{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#94a3b8' : '#64748b',
              }}
            >
              {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hire-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.5rem 1.125rem',
                borderRadius: '9px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'white',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  animation: 'pulse 2s infinite',
                }}
              />
              Hire Me
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#94a3b8' : '#64748b',
              }}
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              zIndex: 40,
              background: 'rgba(7,7,16,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <ul
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '1rem clamp(1.5rem, 5vw, 4rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                listStyle: 'none',
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: 'none',
                      background:
                        activeSection === link.href.replace('#', '')
                          ? 'rgba(99,102,241,0.12)'
                          : 'transparent',
                      color:
                        activeSection === link.href.replace('#', '')
                          ? '#818cf8'
                          : isDark ? '#cbd5e1' : '#475569',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: '0.5rem' }}>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 640px) { .sm-show { display: block !important; } }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 639px) { .hire-btn { display: none !important; } }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
