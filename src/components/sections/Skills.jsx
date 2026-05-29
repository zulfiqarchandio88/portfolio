import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { skills } from '../../data/index.js';

const gradientMap = {
  'from-indigo-500 to-purple-600':  'linear-gradient(135deg, #6366f1, #9333ea)',
  'from-cyan-500 to-blue-600':      'linear-gradient(135deg, #06b6d4, #2563eb)',
  'from-violet-500 to-indigo-600':  'linear-gradient(135deg, #8b5cf6, #4f46e5)',
  'from-pink-500 to-rose-600':      'linear-gradient(135deg, #ec4899, #e11d48)',
  'from-teal-500 to-cyan-600':      'linear-gradient(135deg, #14b8a6, #0891b2)',
  'from-amber-500 to-orange-600':   'linear-gradient(135deg, #f59e0b, #ea580c)',
  'from-green-500 to-emerald-600':  'linear-gradient(135deg, #22c55e, #059669)',
  'from-red-500 to-pink-600':       'linear-gradient(135deg, #ef4444, #db2777)',
  'from-blue-500 to-indigo-600':    'linear-gradient(135deg, #3b82f6, #4f46e5)',
};

function SkillCard({ skill }) {
  const bg = gradientMap[skill.color] || 'linear-gradient(135deg, #6366f1, #4f46e5)';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -6, boxShadow: '0 20px 50px rgba(99,102,241,0.15)' }}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
      className="skill-card"
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '11px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            background: bg,
            flexShrink: 0,
          }}
        >
          {skill.icon}
        </div>
        <h3 style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.9375rem' }}>{skill.category}</h3>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skill.items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.06 }}
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 500,
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              cursor: 'default',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            className="skill-tag"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills({ isDark }) {
  return (
    <SectionWrapper
      id="skills"
      style={{ background: isDark ? 'rgba(255,255,255,0.01)' : undefined }}
    >
      <SectionHeader
        badge="Technical Skills"
        title="My Tech"
        highlight="Stack"
        subtitle="15+ years of hands-on experience across the full mobile development ecosystem."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.125rem',
          marginBottom: '2rem',
        }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.category} skill={skill} />
        ))}
      </div>

      {/* Emerging tech bar */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '1.25rem',
          padding: '1.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
          Continuously learning and adopting new technologies to stay at the forefront of mobile development.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem' }}>
          {['Kotlin Multiplatform', 'Compose Multiplatform', 'ML Kit', 'ARCore', 'Wear OS'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.375rem 0.875rem',
                borderRadius: '99px',
                fontSize: '12px',
                fontWeight: 500,
                color: '#818cf8',
                background: 'rgba(99,102,241,0.08)',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        .skill-card:hover { border-color: rgba(99,102,241,0.35) !important; }
        .skill-tag:hover  { color: #818cf8 !important; border-color: rgba(99,102,241,0.35) !important; }
      `}</style>
    </SectionWrapper>
  );
}
