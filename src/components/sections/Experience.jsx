import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { experience } from '../../data/index.js';

const typeColors = {
  Government: { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.3)'  },
  Consumer:   { color: '#4ade80', bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.3)'  },
  Enterprise: { color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.3)' },
  Fintech:    { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.3)'  },
  Various:    { color: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.3)' },
};

const gradientMap = {
  'from-blue-500 to-cyan-500':    'linear-gradient(135deg, #3b82f6, #06b6d4)',
  'from-indigo-500 to-purple-500':'linear-gradient(135deg, #6366f1, #a855f7)',
  'from-violet-500 to-indigo-500':'linear-gradient(135deg, #8b5cf6, #6366f1)',
  'from-pink-500 to-rose-500':    'linear-gradient(135deg, #ec4899, #f43f5e)',
  'from-amber-500 to-orange-500': 'linear-gradient(135deg, #f59e0b, #f97316)',
  'from-teal-500 to-green-500':   'linear-gradient(135deg, #14b8a6, #22c55e)',
};

function TimelineItem({ item, isLast }) {
  const tc = typeColors[item.type] || typeColors.Various;
  const dotBg = gradientMap[item.color] || 'linear-gradient(135deg, #6366f1, #06b6d4)';

  return (
    <motion.div
      variants={itemVariants}
      style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}
    >
      {/* Left — dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <motion.div
          whileHover={{ scale: 1.2 }}
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
            fontSize: '15px',
            boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {item.id}
        </motion.div>
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              marginTop: '8px',
              minHeight: '32px',
              background: 'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(6,182,212,0.1))',
              borderRadius: '99px',
            }}
          />
        )}
      </div>

      {/* Right — card */}
      <motion.div
        whileHover={{ x: 5 }}
        style={{
          flex: 1,
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '1.25rem',
          padding: '1.5rem',
          marginBottom: isLast ? 0 : '1.25rem',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        className="exp-card"
      >
        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '2px' }}>
              {item.company}
            </h3>
            {item.location && (
              <span style={{ fontSize: '13px', color: '#64748b' }}>📍 {item.location}</span>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: '7px',
                fontSize: '11px',
                fontWeight: 600,
                color: tc.color,
                background: tc.bg,
                border: `1px solid ${tc.border}`,
              }}
            >
              {item.type}
            </span>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: '7px',
                fontSize: '11px',
                fontFamily: 'monospace',
                color: '#64748b',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {item.duration}
            </span>
          </div>
        </div>

        {/* Role */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.875rem' }}>
          <div style={{ width: '3px', height: '16px', borderRadius: '99px', background: dotBg, flexShrink: 0 }} />
          <span style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.875rem' }}>{item.role}</span>
        </div>

        {/* Projects */}
        {item.projects && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#475569' }}>Projects:</span>
            {item.projects.map((p) => (
              <span
                key={p}
                style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#22d3ee',
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.25)',
                }}
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {/* Clients */}
        {item.clients && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#475569' }}>Key Clients:</span>
            {item.clients.map((c) => (
              <span
                key={c}
                style={{
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#fbbf24',
                  background: 'rgba(251,191,36,0.08)',
                  border: '1px solid rgba(251,191,36,0.25)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Responsibilities */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0, listStyle: 'none' }}>
          {item.responsibilities.map((r, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
              <span style={{ color: '#6366f1', flexShrink: 0, marginTop: '2px' }}>▸</span>
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        badge="Work History"
        title="Professional"
        highlight="Experience"
        subtitle="15+ years of building impactful mobile applications across the UAE and beyond."
      />

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {experience.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>

      <style>{`
        .exp-card:hover { border-color: rgba(99,102,241,0.3) !important; box-shadow: 0 12px 40px rgba(99,102,241,0.1); }
      `}</style>
    </SectionWrapper>
  );
}
