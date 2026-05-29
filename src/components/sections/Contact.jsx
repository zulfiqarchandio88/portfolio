import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import SectionWrapper, { SectionHeader, itemVariants } from '../ui/SectionWrapper.jsx';
import { personalInfo } from '../../data/index.js';

function ContactLink({ icon: Icon, label, value, href, color }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.875rem 1.125rem',
        borderRadius: '13px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.09)',
        textDecoration: 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
      className="contact-link"
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '11px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: `${color}18`,
          border: `1px solid ${color}35`,
        }}
      >
        <Icon size={17} style={{ color }} />
      </div>
      <div>
        <div style={{ fontSize: '11px', color: '#475569', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
        <div style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 600 }}>{value}</div>
      </div>
    </motion.a>
  );
}

const inputStyle = (isDark) => ({
  width: '100%',
  padding: '0.8125rem 1rem',
  borderRadius: '11px',
  fontSize: '0.875rem',
  border: '1px solid rgba(255,255,255,0.09)',
  outline: 'none',
  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
  color: isDark ? '#e2e8f0' : '#0f172a',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
});

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 600,
  color: '#64748b',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '0.5rem',
};

export default function Contact({ isDark }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        badge="Get In Touch"
        title="Let's Build"
        highlight="Together"
        subtitle="Open to remote opportunities worldwide. Let's create something exceptional."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2rem, 5vw, 3.5rem)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Left */}
        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.625rem' }}>
              Ready to collaborate?
            </h3>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Whether you need a native Android app, iOS application, or cross-platform solution,
              I'm here to help bring your vision to life with 15+ years of expertise.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <ContactLink icon={FiMail}    label="Email"    value={personalInfo.email}          href={`mailto:${personalInfo.email}`} color="#6366f1" />
            <ContactLink icon={FaWhatsapp} label="WhatsApp" value="Send a message"              href={personalInfo.whatsapp}          color="#4ade80" />
            <ContactLink icon={FaLinkedin} label="LinkedIn" value="Connect professionally"      href={personalInfo.linkedin}          color="#0ea5e9" />
            <ContactLink icon={FaGithub}   label="GitHub"   value="View my code"                href={personalInfo.github}            color="#e2e8f0" />
            <ContactLink icon={FiMapPin}   label="Location" value="Karachi, Pakistan"           href="#"                              color="#f87171" />
          </div>

          {/* Availability */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '1rem 1.25rem',
              borderRadius: '13px',
              background: 'rgba(74,222,128,0.06)',
              border: '1px solid rgba(74,222,128,0.22)',
            }}
          >
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80', flexShrink: 0, animation: 'pulse 2s infinite' }} />
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#4ade80' }}>Available for Work</div>
              <div style={{ fontSize: '12px', color: '#475569' }}>Open to remote opportunities worldwide</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '1.5rem',
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.125rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { id: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} style={labelStyle}>{label}</label>
                  <input
                    id={id} name={id} type={type} required
                    value={form[id]} onChange={handleChange} placeholder={placeholder}
                    style={inputStyle(isDark)}
                    className="form-input"
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input
                id="subject" name="subject" type="text" required
                value={form.subject} onChange={handleChange}
                placeholder="Project inquiry, collaboration..."
                style={inputStyle(isDark)}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message" name="message" rows={5} required
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle(isDark), resize: 'none' }}
                className="form-input"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== 'idle'}
              whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 10px 30px rgba(99,102,241,0.4)' } : {}}
              whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.9375rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'white',
                border: 'none',
                cursor: status === 'idle' ? 'pointer' : 'default',
                opacity: status !== 'idle' ? 0.8 : 1,
                background: status === 'sent'
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                transition: 'background 0.3s ease',
              }}
            >
              {status === 'idle' && <><FiSend size={15} /> Send Message</>}
              {status === 'sending' && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white' }}
                  />
                  Sending...
                </>
              )}
              {status === 'sent' && <><span>✓</span> Message Sent!</>}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-link:hover { border-color: rgba(99,102,241,0.35) !important; box-shadow: 0 8px 24px rgba(99,102,241,0.1); }
        .form-input:focus { border-color: rgba(99,102,241,0.5) !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      `}</style>
    </SectionWrapper>
  );
}
