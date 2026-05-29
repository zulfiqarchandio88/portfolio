import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme.js';
import LoadingScreen from './components/ui/LoadingScreen.jsx';
import Navbar from './components/sections/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Projects from './components/sections/Projects.jsx';
import Services from './components/sections/Services.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/sections/Footer.jsx';

// Subtle alternating section tint
const altBg = 'rgba(255,255,255,0.018)';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <div style={{ minHeight: '100vh', background: isDark ? '#070710' : '#f1f5f9' }}>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <main>
            <Hero isDark={isDark} />

            {/* About — tinted */}
            <div style={{ background: isDark ? altBg : 'rgba(0,0,0,0.015)' }}>
              <About isDark={isDark} />
            </div>

            <Skills isDark={isDark} />

            {/* Experience — tinted */}
            <div style={{ background: isDark ? altBg : 'rgba(0,0,0,0.015)' }}>
              <Experience isDark={isDark} />
            </div>

            <Projects isDark={isDark} />

            {/* Services — tinted */}
            <div style={{ background: isDark ? altBg : 'rgba(0,0,0,0.015)' }}>
              <Services isDark={isDark} />
            </div>

            <Testimonials isDark={isDark} />

            {/* Contact — tinted */}
            <div style={{ background: isDark ? altBg : 'rgba(0,0,0,0.015)' }}>
              <Contact isDark={isDark} />
            </div>
          </main>

          <Footer isDark={isDark} />
        </div>
      )}
    </>
  );
}
