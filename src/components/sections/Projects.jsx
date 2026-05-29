import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { projects } from '../../data/index.js';

const categories = ['All', 'Government', 'Fintech', 'Consumer', 'Enterprise'];

const typeStyle = {
  Government: { color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',  border: 'rgba(96,165,250,0.3)'  },
  Fintech:    { color: '#fbbf24', bg: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.3)'  },
  Consumer:   { color: '#4ade80', bg: 'rgba(74,222,128,0.12)',  border: 'rgba(74,222,128,0.3)'  },
  Enterprise: { color: '#c084fc', bg: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.3)' },
};

const gradientMap = {
  'from-blue-600 to-cyan-500':    'linear-gradient(135deg, #2563eb, #06b6d4)',
  'from-indigo-600 to-purple-500':'linear-gradient(135deg, #4f46e5, #a855f7)',
  'from-pink-600 to-rose-500':    'linear-gradient(135deg, #db2777, #f43f5e)',
  'from-slate-600 to-gray-500':   'linear-gradient(135deg, #475569, #6b7280)',
  'from-green-600 to-emerald-500':'linear-gradient(135deg, #16a34a, #10b981)',
  'from-cyan-600 to-teal-500':    'linear-gradient(135deg, #0891b2, #14b8a6)',
  'from-amber-600 to-yellow-500': 'linear-gradient(135deg, #d97706, #eab308)',
  'from-orange-600 to-red-500':   'linear-gradient(135deg, #ea580c, #ef4444)',
  'from-violet-600 to-indigo-500':'linear-gradient(135deg, #7c3aed, #6366f1)',
  'from-blue-600 to-indigo-500':  'linear-gradient(135deg, #2563eb, #6366f1)',
  'from-teal-600 to-cyan-500':    'linear-gradient(135deg, #0d9488, #06b6d4)',
};

function ProjectCard({ project }) {
  const bg = gradientMap[project.color] || 'linear-gradient(135deg, #6366f1, #06b6d4)';
  const ts = typeStyle[project.type] || typeStyle.Government;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      className="project-card"
    >
      {/* Card banner */}
      <div
        style={{
          position: 'relative',
          height: '140px',
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.18 }}>
          <div style={{ position: 'absolute', top: '8px', right: '8px', width: '80px', height: '80px', borderRadius: '50%', border: '1.5px solid white' }} />
          <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '48px', height: '48px', borderRadius: '50%', border: '1.5px solid white' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid white' }} />
        </div>

        {/* App icon */}
        <motion.div
          whileHover={{ scale: 1.12, rotate: 6 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid rgba(255,255,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
          }}
        >
          {project.icon}
        </motion.div>

        {/* Type badge */}
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <span
            style={{
              padding: '3px 9px',
              borderRadius: '7px',
              fontSize: '10px',
              fontWeight: 600,
              color: ts.color,
              background: ts.bg,
              border: `1px solid ${ts.border}`,
            }}
          >
            {project.type}
          </span>
        </div>

        {/* Hover overlay with action buttons */}
        <div
          className="card-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            transition: 'opacity 0.25s ease',
          }}
        >
          {project.playStore && (
            <motion.a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="View on Google Play"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '11px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <SiGoogleplay size={16} />
            </motion.a>
          )}
          {project.appStore && (
            <motion.a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="View on App Store"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '11px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <SiAppstore size={16} />
            </motion.a>
          )}
          {(project.playStore || project.appStore) && (
            <motion.a
              href={project.playStore || project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Open app"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '11px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              <FiExternalLink size={15} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem 1.375rem 1.375rem' }}>
        <h3 style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '0.9375rem', marginBottom: '2px' }}>
          {project.name}
        </h3>
        <p style={{ fontSize: '11px', color: '#818cf8', fontWeight: 500, marginBottom: '0.625rem' }}>
          {project.category}
        </p>
        <p style={{ color: '#64748b', fontSize: '0.8125rem', lineHeight: 1.65, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '0.875rem' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '11px',
                color: '#64748b',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Store buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 11px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#4ade80',
                background: 'rgba(74,222,128,0.08)',
                border: '1px solid rgba(74,222,128,0.25)',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              className="store-btn"
            >
              <SiGoogleplay size={11} /> Play Store
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 11px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#60a5fa',
                background: 'rgba(96,165,250,0.08)',
                border: '1px solid rgba(96,165,250,0.25)',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              className="store-btn"
            >
              <SiAppstore size={11} /> App Store
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ isDark }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        badge="Portfolio"
        title="Featured"
        highlight="Projects"
        subtitle="Mobile applications delivered across government, fintech, enterprise, and consumer sectors."
      />

      {/* Filter tabs */}
      <motion.div
        variants={itemVariants}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.625rem', marginBottom: '2.5rem' }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              ...(activeFilter === cat
                ? {
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    color: 'white',
                    boxShadow: '0 4px 16px rgba(99,102,241,0.35)',
                  }
                : {
                    background: 'rgba(255,255,255,0.05)',
                    color: '#94a3b8',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }),
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Category summary */}
      <motion.div
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
        }}
      >
        {[
          { label: 'Government Apps',    count: projects.filter(p => p.type === 'Government').length, icon: '🏛️', color: 'rgba(96,165,250,0.12)',  border: 'rgba(96,165,250,0.25)',  text: '#60a5fa' },
          { label: 'Fintech Apps',       count: projects.filter(p => p.type === 'Fintech').length,    icon: '💳', color: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.25)',  text: '#fbbf24' },
          { label: 'Consumer Apps',      count: projects.filter(p => p.type === 'Consumer').length,   icon: '📱', color: 'rgba(74,222,128,0.12)',  border: 'rgba(74,222,128,0.25)',  text: '#4ade80' },
          { label: 'Enterprise Mobility',count: 5,                                                    icon: '🏢', color: 'rgba(192,132,252,0.12)', border: 'rgba(192,132,252,0.25)', text: '#c084fc' },
        ].map((cat) => (
          <motion.div
            key={cat.label}
            whileHover={{ scale: 1.04, y: -3 }}
            style={{
              borderRadius: '1rem',
              padding: '1.25rem',
              textAlign: 'center',
              background: cat.color,
              border: `1px solid ${cat.border}`,
            }}
          >
            <div style={{ fontSize: '1.75rem', marginBottom: '0.375rem' }}>{cat.icon}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: cat.text }}>{cat.count}+</div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{cat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .project-card:hover { border-color: rgba(99,102,241,0.3) !important; }
        .project-card:hover .card-overlay { opacity: 1 !important; }
        .store-btn:hover { filter: brightness(1.15); }
      `}</style>
    </SectionWrapper>
  );
}
