import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import ParticleBackground from '../ui/ParticleBackground.jsx';
import { personalInfo } from '../../data/index.js';

const typingTexts = [
  'Android Engineer',
  'iOS Developer',
  'React Native Expert',
  'Mobile Architect',
  'Fintech Specialist',
  'Enterprise Mobility',
];

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const current = typingTexts[textIndex];
    const speed = isDeleting ? 45 : 75;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) setTimeout(() => setIsDeleting(true), 1800);
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % typingTexts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="gradient-text" style={{ fontWeight: 700 }}>
      {displayText}
      <span style={{ color: '#818cf8', animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  );
}

const floatingCards = [
  { icon: '🤖', label: 'Android',      delay: 0,   x: '4%',  y: '22%' },
  { icon: '🍎', label: 'iOS',          delay: 0.5, x: '82%', y: '18%' },
  { icon: '⚛️', label: 'React Native', delay: 1,   x: '78%', y: '62%' },
  { icon: '🔥', label: 'Firebase',     delay: 1.5, x: '6%',  y: '68%' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #070710 0%, #0c0c1e 45%, #080d1a 100%)',
      }}
    >
      <ParticleBackground />

      {/* Ambient orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            filter: 'blur(80px)',
            background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '-120px',
            right: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            filter: 'blur(80px)',
            background: 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            filter: 'blur(100px)',
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating tech cards — only on very wide screens */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: card.delay + 1.8, duration: 0.5 },
            scale:   { delay: card.delay + 1.8, duration: 0.5 },
            y:       { delay: card.delay + 2.3, duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            left: card.x,
            top: card.y,
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '13px',
            fontWeight: 500,
            color: '#cbd5e1',
          }}
          className="floating-card"
        >
          <span style={{ fontSize: '16px' }}>{card.icon}</span>
          {card.label}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '860px',
          margin: '0 auto',
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 8vw, 6rem)',
          textAlign: 'center',
        }}
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '99px',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(99,102,241,0.3)',
            fontSize: '13px',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', flexShrink: 0, animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#cbd5e1' }}>Available for Remote Opportunities</span>
          <span style={{ color: '#475569' }}>·</span>
          <span style={{ color: '#818cf8' }}>Karachi, Pakistan</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.75rem, 9vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          <span style={{ color: '#f1f5f9' }}>Zulfiqar</span>
          <br />
          <span className="gradient-text text-glow">Ali Chandio</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.625rem)',
            fontWeight: 600,
            minHeight: '2.5rem',
            marginBottom: '1.5rem',
          }}
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{
            color: '#94a3b8',
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.875rem',
            marginBottom: '2.75rem',
          }}
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(99,102,241,0.45)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 1.875rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: 'white',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              boxShadow: '0 6px 20px rgba(99,102,241,0.35)',
            }}
          >
            View Projects <FiArrowRight size={15} />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 1.875rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: '#e2e8f0',
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <FiDownload size={15} /> Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.875rem 1.875rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: '#22d3ee',
              textDecoration: 'none',
              border: '1px solid rgba(6,182,212,0.35)',
              background: 'rgba(6,182,212,0.06)',
            }}
          >
            <FiMail size={15} /> Contact Me
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          {[
            { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0ea5e9' },
            { icon: FaGithub,   href: personalInfo.github,   label: 'GitHub',   color: '#e2e8f0' },
            { icon: FaWhatsapp, href: personalInfo.whatsapp, label: 'WhatsApp', color: '#4ade80' },
          ].map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.18, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
              }}
            >
              <Icon size={19} style={{ color }} />
            </motion.a>
          ))}

          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.15)', margin: '0 4px' }} />

          <span style={{ color: '#475569', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>
            15+ Years Experience
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ color: '#334155', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{
              width: '20px',
              height: '32px',
              borderRadius: '99px',
              border: '1.5px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingTop: '5px',
            }}
          >
            <div style={{ width: '4px', height: '8px', borderRadius: '99px', background: '#6366f1' }} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1280px) { .floating-card { display: flex !important; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        @keyframes blink  { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
