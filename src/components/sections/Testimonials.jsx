import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { testimonials } from '../../data/index.js';

const gradientMap = {
  'from-blue-500 to-cyan-500':    'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'from-purple-500 to-indigo-500':'linear-gradient(135deg, #a855f7, #6366f1)',
  'from-amber-500 to-orange-500': 'linear-gradient(135deg, #f59e0b, #f97316)',
  'from-pink-500 to-rose-500':    'linear-gradient(135deg, #ec4899, #f43f5e)',
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDirection(1);  setCurrent((c) => (c + 1) % testimonials.length); };

  const variants = {
    enter:  (d) => ({ x: d > 0 ? 260 : -260, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d) => ({ x: d > 0 ? -260 : 260, opacity: 0 }),
  };

  const t = testimonials[current];
  const dotBg = gradientMap[t.color] || 'linear-gradient(135deg, #6366f1, #06b6d4)';

  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="What Clients"
        highlight="Say"
        subtitle="Feedback from colleagues and clients across government, enterprise, and consumer projects."
      />

      <motion.div variants={itemVariants} style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Main card */}
        <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1.5rem',
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
              }}
            >
              <FaQuoteLeft size={28} style={{ color: '#6366f1', opacity: 0.6, marginBottom: '1.25rem' }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24', fontSize: '17px' }}>★</span>
                ))}
              </div>

              <p style={{ color: '#cbd5e1', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.75rem' }}>
                "{t.text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '13px',
                    background: dotBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '14px',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.9375rem' }}>{t.name}</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>{t.role}</div>
                  <div style={{ fontSize: '12px', color: '#818cf8' }}>{t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Dots */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                style={{
                  borderRadius: '99px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? '#6366f1' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[{ fn: prev, Icon: FiChevronLeft }, { fn: next, Icon: FiChevronRight }].map(({ fn, Icon }, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={fn}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '11px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                className="arrow-btn"
              >
                <Icon size={17} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          {testimonials.map((item, i) => {
            const bg = gradientMap[item.color] || 'linear-gradient(135deg, #6366f1, #06b6d4)';
            return (
              <motion.button
                key={item.id}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                whileHover={{ scale: 1.02 }}
                style={{
                  textAlign: 'left',
                  padding: '0.875rem 1rem',
                  borderRadius: '12px',
                  border: i === current ? '1px solid rgba(99,102,241,0.45)' : '1px solid rgba(255,255,255,0.08)',
                  background: i === current ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.04)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '9px',
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>{item.company}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <style>{`
        .arrow-btn:hover { border-color: rgba(99,102,241,0.4) !important; color: white !important; }
      `}</style>
    </SectionWrapper>
  );
}
