import { motion } from 'framer-motion';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { services } from '../../data/index.js';

const gradientMap = {
  'from-green-500 to-emerald-600':  'linear-gradient(135deg, #22c55e, #059669)',
  'from-blue-500 to-indigo-600':    'linear-gradient(135deg, #3b82f6, #4f46e5)',
  'from-cyan-500 to-blue-600':      'linear-gradient(135deg, #06b6d4, #2563eb)',
  'from-orange-500 to-amber-600':   'linear-gradient(135deg, #f97316, #d97706)',
  'from-purple-500 to-violet-600':  'linear-gradient(135deg, #a855f7, #7c3aed)',
  'from-slate-500 to-gray-600':     'linear-gradient(135deg, #64748b, #4b5563)',
  'from-yellow-500 to-orange-600':  'linear-gradient(135deg, #eab308, #ea580c)',
  'from-pink-500 to-rose-600':      'linear-gradient(135deg, #ec4899, #e11d48)',
};

function ServiceCard({ service }) {
  const bg = gradientMap[service.color] || 'linear-gradient(135deg, #6366f1, #4f46e5)';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -7 }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: '1.25rem',
        padding: '1.75rem',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
      className="service-card"
    >
      {/* Subtle top-right glow */}
      <div
        className="service-glow"
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: bg,
          filter: 'blur(40px)',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '13px',
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          marginBottom: '1.125rem',
        }}
      >
        {service.icon}
      </motion.div>

      <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.625rem' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.7 }}>
        {service.description}
      </p>

      <div
        className="service-arrow"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginTop: '1rem',
          fontSize: '12px',
          fontWeight: 500,
          color: '#6366f1',
          opacity: 0,
          transform: 'translateX(-6px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        Learn more →
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        badge="What I Do"
        title="Services &"
        highlight="Expertise"
        subtitle="End-to-end mobile development services from architecture to deployment."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '1.125rem',
          marginBottom: '3rem',
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {/* CTA banner */}
      <motion.div
        variants={itemVariants}
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.06))',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '1.5rem',
          padding: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.625rem)', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>
          Need a custom mobile solution?
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.9375rem', maxWidth: '480px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
          Let's discuss your project requirements and build something exceptional together.
        </p>
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(99,102,241,0.4)' }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.875rem 2rem',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.9375rem',
            color: 'white',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            boxShadow: '0 6px 20px rgba(99,102,241,0.3)',
          }}
        >
          Start a Conversation →
        </motion.a>
      </motion.div>

      <style>{`
        .service-card:hover { border-color: rgba(99,102,241,0.3) !important; box-shadow: 0 20px 50px rgba(99,102,241,0.12); }
        .service-card:hover .service-glow  { opacity: 0.25 !important; }
        .service-card:hover .service-arrow { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>
    </SectionWrapper>
  );
}
