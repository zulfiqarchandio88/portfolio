import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      className={`relative ${className}`}
      style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
    >
      {/* Constrained content */}
      <div
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeader({ badge, title, highlight, subtitle }) {
  return (
    <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '4rem' }}>
      {badge && (
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase glass border border-indigo-500/30 text-indigo-400"
          style={{
            padding: '0.375rem 1rem',
            borderRadius: '99px',
            marginBottom: '1rem',
            letterSpacing: '0.12em',
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className="font-bold text-white"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: '1rem' }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className="text-slate-400"
          style={{ fontSize: '1.0625rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
