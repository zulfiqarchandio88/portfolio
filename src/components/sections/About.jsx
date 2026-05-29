import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { stats } from '../../data/index.js';
import { useCounter } from '../../hooks/useCounter.js';

function StatCard({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(stat.value, 2000, inView);
  const suffix = stat.value.replace(/[0-9]/g, '');

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ scale: 1.04, y: -5 }}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.25rem',
        padding: '1.75rem 1.25rem',
        textAlign: 'center',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      className="stat-card"
    >
      <div style={{ fontSize: '2rem', marginBottom: '0.625rem' }}>{stat.icon}</div>
      <div
        className="gradient-text"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.375rem' }}
      >
        {inView ? `${count}${suffix}` : `0${suffix}`}
      </div>
      <div style={{ color: '#94a3b8', fontSize: '0.8125rem', fontWeight: 500 }}>{stat.label}</div>
    </motion.div>
  );
}

const expertise = [
  { icon: '🤖', label: 'Native Android Development' },
  { icon: '🍎', label: 'iOS Development' },
  { icon: '⚛️', label: 'Cross-Platform Applications' },
  { icon: '🏗️', label: 'Production-ready Architecture' },
  { icon: '⚡', label: 'Performance Optimization' },
  { icon: '📈', label: 'Scalable Mobile Systems' },
  { icon: '🔄', label: 'Full Mobile App Lifecycle' },
  { icon: '🏢', label: 'Enterprise & Government Apps' },
];

export default function About({ isDark }) {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        badge="About Me"
        title="Mobile Engineer"
        highlight="& Architect"
        subtitle="Passionate about building mobile experiences that scale from thousands to millions of users."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
          marginBottom: '4rem',
        }}
      >
        {/* Left — Profile image */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Glow ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '1.75rem',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(6,182,212,0.35))',
                filter: 'blur(16px)',
                zIndex: 0,
              }}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                position: 'relative',
                zIndex: 1,
                width: 'clamp(220px, 30vw, 280px)',
                height: 'clamp(220px, 30vw, 280px)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '4rem' }}>👨‍💻</span>
                <span style={{ color: '#475569', fontSize: '11px', fontFamily: 'monospace' }}>Profile Photo</span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(99,102,241,0.3) 0%, transparent 60%)',
                }}
              />
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              style={{
                position: 'absolute',
                bottom: '-14px',
                right: '-14px',
                zIndex: 2,
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: '14px',
                padding: '0.625rem 0.875rem',
                textAlign: 'center',
              }}
            >
              <div className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>15+</div>
              <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '2px' }}>Years Exp.</div>
            </motion.div>
          </div>

          {/* Social proof pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.125rem',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', marginRight: '4px' }}>
              {['🏛️', '💳', '🛒', '🚗'].map((emoji, i) => (
                <div
                  key={i}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '2px solid #0a0a14',
                    background: 'linear-gradient(135deg, #1e1e3f, #2d2d5e)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    marginLeft: i > 0 ? '-8px' : 0,
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#e2e8f0' }}>50+ Projects Delivered</div>
              <div style={{ fontSize: '11px', color: '#475569' }}>Government · Fintech · Enterprise</div>
            </div>
          </div>
        </motion.div>

        {/* Right — Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <motion.div variants={itemVariants}>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.875rem' }}>
              Professional Summary
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              Mobile Engineer with extensive experience building scalable consumer and enterprise mobile
              applications across{' '}
              <span style={{ color: '#818cf8', fontWeight: 500 }}>fintech</span>,{' '}
              <span style={{ color: '#22d3ee', fontWeight: 500 }}>e-commerce</span>,{' '}
              <span style={{ color: '#c084fc', fontWeight: 500 }}>logistics</span>, and{' '}
              <span style={{ color: '#f472b6', fontWeight: 500 }}>government sectors</span>.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.9375rem', marginTop: '0.75rem' }}>
              With 15+ years of hands-on experience, I specialize in architecting production-ready
              mobile systems that handle millions of users, with a strong focus on performance,
              maintainability, and clean code.
            </p>
          </motion.div>

          {/* Expertise grid */}
          <motion.div variants={itemVariants}>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.875rem',
              }}
            >
              Areas of Expertise
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
              {expertise.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.875rem',
                    color: isDark ? '#cbd5e1' : '#475569',
                    padding: '0.25rem 0',
                  }}
                >
                  <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.4rem 0.875rem',
                borderRadius: '8px',
                fontSize: '13px',
                color: isDark ? '#cbd5e1' : '#475569',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              📍 Karachi, Pakistan
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.4rem 0.875rem',
                borderRadius: '8px',
                fontSize: '13px',
                color: '#4ade80',
                background: 'rgba(74,222,128,0.06)',
                border: '1px solid rgba(74,222,128,0.25)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
              Open to Remote Worldwide
            </span>
          </motion.div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}
      >
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </motion.div>

      <style>{`
        .stat-card:hover { border-color: rgba(99,102,241,0.4) !important; box-shadow: 0 16px 48px rgba(99,102,241,0.12); }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </SectionWrapper>
  );
}
