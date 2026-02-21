import React, { useState, useEffect, useRef } from 'react';

// ============================================
// SVG ICONS - Clean, professional icons
// ============================================

const Icons = {
  GitHub: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
  ),
  LinkedIn: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
  ),
  Email: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>
      </svg>
  ),
  Globe: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
  ),
  Code: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
  ),
  Database: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
  ),
  Terminal: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
  ),
  Server: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
  ),
  Cpu: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
  ),
  Box: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
  ),
  GitBranch: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/>
      </svg>
  ),
  Link: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
  ),
  Layers: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
  ),
  Location: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
  ),
  Phone: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
  )
};

// Skill icons mapping - simple line icons
const SkillIcons = {
  'Java': Icons.Code,
  'Python': Icons.Terminal,
  'JavaScript': Icons.Code,
  'SQL': Icons.Database,
  'C++': Icons.Cpu,
  'TypeScript': Icons.Code,
  'React': Icons.Layers,
  'Django': Icons.Server,
  'Spring': Icons.Layers,
  'Node.js': Icons.Server,
  'ASP.NET': Icons.Server,
  'PostgreSQL': Icons.Database,
  'Git': Icons.GitBranch,
  'Docker': Icons.Box,
  'REST APIs': Icons.Link,
};

// ============================================
// CUSTOM HOOKS
// ============================================

const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

const useInView = (threshold = 0.3) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setInView(true); },
        { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

// ============================================
// PARTICLE BACKGROUND
// ============================================

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 170, ${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 170, ${0.15 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();
    window.addEventListener('resize', () => { resize(); createParticles(); });
    return () => { cancelAnimationFrame(animationId); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />;
};

// ============================================
// COMPONENTS
// ============================================

const SkillBar = ({ name, level, delay, inView }) => {
  const Icon = SkillIcons[name] || Icons.Code;
  return (
      <div style={{ marginBottom: '1.5rem', opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-30px)', transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.9rem', color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ opacity: 0.6, color: '#00ffaa' }}><Icon /></span>
          {name}
        </span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#00ffaa', opacity: 0.8 }}>{level}%</span>
        </div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: inView ? `${level}%` : '0%', background: 'linear-gradient(90deg, #00ffaa 0%, #00d4ff 50%, #a855f7 100%)', borderRadius: '3px', transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay + 0.2}s`, boxShadow: '0 0 20px rgba(0, 255, 170, 0.5)', position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '12px', height: '12px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 15px #00ffaa', opacity: inView ? 1 : 0, transition: `opacity 0.3s ease ${delay + 1}s` }} />
          </div>
        </div>
      </div>
  );
};

const SkillCategory = ({ title, skills, inView, baseDelay }) => (
    <div style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #00ffaa, transparent)' }} />
      <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '3px', color: '#00ffaa', marginBottom: '1.5rem', opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease' }}>{title}</h3>
      {skills.map((skill, i) => <SkillBar key={skill.name} {...skill} delay={baseDelay + i * 0.1} inView={inView} />)}
    </div>
);

const Navigation = ({ activeSection }) => {
  const navItems = ['home', 'skills', 'experience', 'contact'];
  return (
      <nav style={{ position: 'fixed', top: '50%', right: '2rem', transform: 'translateY(-50%)', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map((item) => (
            <a key={item} href={`#${item}`} style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid', borderColor: activeSection === item ? '#00ffaa' : 'rgba(255,255,255,0.3)', background: activeSection === item ? '#00ffaa' : 'transparent', transition: 'all 0.3s ease', boxShadow: activeSection === item ? '0 0 15px rgba(0, 255, 170, 0.5)' : 'none' }} title={item.charAt(0).toUpperCase() + item.slice(1)} />
        ))}
      </nav>
  );
};

const SocialButton = ({ href, icon: Icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s ease' }} title={label}><Icon /></a>
);

// ============================================
// MAIN APP
// ============================================

export default function App() {
  const { displayText, isComplete } = useTypingEffect('DIMITRIS ANTONIOU', 80);
  const [skillsRef, skillsInView] = useInView(0.2);
  const [expRef, expInView] = useInView(0.2);
  const [activeSection, setActiveSection] = useState('home');

  const languages = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'SQL', level: 82 },
    { name: 'C++', level: 75 },
    { name: 'TypeScript', level: 70 },
  ];

  const frameworks = [
    { name: 'React', level: 88 },
    { name: 'Django', level: 85 },
    { name: 'Spring', level: 82 },
    { name: 'Node.js', level: 80 },
    { name: 'ASP.NET', level: 70 },
  ];

  const tools = [
    { name: 'PostgreSQL', level: 85 },
    { name: 'Git', level: 88 },
    { name: 'Docker', level: 72 },
    { name: 'REST APIs', level: 90 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a14 0%, #0d1117 50%, #0a0a14 100%)', color: '#ffffff', fontFamily: '"Space Grotesk", sans-serif', position: 'relative', overflow: 'hidden' }}>
        <ParticleField />
        <Navigation activeSection={activeSection} />

        {/* HERO */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1, padding: '2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '900px' }}>
            <div style={{ fontSize: '0.9rem', fontFamily: '"JetBrains Mono", monospace', color: '#00ffaa', marginBottom: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.8 }}>{'<'} Software Developer {'/>'}  </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 700, letterSpacing: '-2px', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #ffffff 0%, #00ffaa 50%, #00d4ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {displayText}
              <span style={{ display: 'inline-block', width: '4px', height: '1em', background: '#00ffaa', marginLeft: '4px', animation: 'pulse 1s infinite', verticalAlign: 'text-bottom', opacity: isComplete ? 0 : 1 }} />
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 300 }}>
              Building innovative full-stack solutions with expertise in <span style={{ color: '#00ffaa' }}> Spring</span>, <span style={{ color: '#00d4ff' }}> Django</span>, <span style={{ color: '#a855f7' }}> </span> & more.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#skills" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #00ffaa 0%, #00d4ff 100%)', color: '#0a0a14', borderRadius: '50px', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s ease', animation: 'glowPulse 2s infinite' }}>Explore Skills</a>
              <a href="https://github.com/DimitrisAntoniou99" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', background: 'transparent', color: '#ffffff', borderRadius: '50px', fontWeight: 500, fontSize: '0.95rem', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.GitHub /> GitHub</a>
            </div>
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <SocialButton href="mailto:dimanton1999@gmail.com" icon={Icons.Email} label="Email" />
              <SocialButton href="https://linkedin.com/in/dimitrios-antoniou" icon={Icons.LinkedIn} label="LinkedIn" />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', animation: 'float 2s infinite ease-in-out' }}>
            <div style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '15px', position: 'relative' }}>
              <div style={{ width: '4px', height: '10px', background: '#00ffaa', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', animation: 'pulse 1.5s infinite' }} />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={skillsRef} style={{ minHeight: '100vh', padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', color: '#00ffaa', letterSpacing: '3px', textTransform: 'uppercase' }}>Technical Expertise</span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '1rem', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Skills & Technologies</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <SkillCategory title="Languages" skills={languages} inView={skillsInView} baseDelay={0} />
              <SkillCategory title="Frameworks & Libraries" skills={frameworks} inView={skillsInView} baseDelay={0.3} />
              <SkillCategory title="Tools & Databases" skills={tools} inView={skillsInView} baseDelay={0.6} />
            </div>
            <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', opacity: skillsInView ? 1 : 0, transform: skillsInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.8s ease 1s' }}>
              {['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Time Management', 'Attention to Detail'].map((skill) => (
                  <span key={skill} style={{ padding: '0.75rem 1.5rem', background: 'rgba(0, 255, 170, 0.1)', border: '1px solid rgba(0, 255, 170, 0.3)', borderRadius: '50px', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', color: '#00ffaa' }}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" ref={expRef} style={{ minHeight: '100vh', padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', color: '#00ffaa', letterSpacing: '3px', textTransform: 'uppercase' }}>Career Journey</span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '1rem', background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Experience</h2>
            </div>
            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
              <div style={{ position: 'absolute', left: '6px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #00ffaa, #00d4ff, #a855f7)', opacity: expInView ? 1 : 0, transition: 'opacity 0.5s ease' }} />
              {[
                { date: 'Apr 2024 - Present', title: 'Software Developer', company: 'Que Technologies', description: 'Contributing to European-funded projects  focusing on smart buildings and accessibility & iot data. Full-stack development with Angular, Node.js, Django, and Spring MVC.', tech: ['Spring', 'Node.js', 'Django', 'Angular', 'PostgreSQL'] },
                { date: 'Jun 2023 - Dec 2023', title: 'Computer Engineer', company: 'Hellenic Army', description: 'Managed IT infrastructure and handled confidential data with 100% accuracy. Solved technical issues across departments while maintaining high security standards.', tech: ['Python', 'MS Office', 'IT Support'] },
                { date: 'Oct 2022 - Nov 2022', title: 'Junior Software Engineer', company: 'Cotheta S.M.P.C.', description: 'Internship focused on Python/Django development. Participated in Agile processes and maintained clean, well-documented code.', tech: ['Python', 'Django', 'PostgreSQL', 'Agile'] }
              ].map((exp, index) => (
                  <div key={exp.title} style={{ marginBottom: '3rem', opacity: expInView ? 1 : 0, transform: expInView ? 'translateX(0)' : 'translateX(-30px)', transition: `all 0.6s ease ${index * 0.2}s` }}>
                    <div style={{ position: 'absolute', left: 0, width: '14px', height: '14px', background: '#0a0a14', border: '3px solid #00ffaa', borderRadius: '50%', boxShadow: '0 0 15px rgba(0, 255, 170, 0.5)' }} />
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem 2rem', marginLeft: '1.5rem' }}>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#00ffaa', opacity: 0.8 }}>{exp.date}</span>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '0.5rem', color: '#ffffff' }}>{exp.title}</h3>
                      <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>{exp.company}</p>
                      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {exp.tech.map((t) => <span key={t} style={{ padding: '0.35rem 0.75rem', background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', borderRadius: '4px', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#00d4ff' }}>{t}</span>)}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)', borderRadius: '12px', opacity: expInView ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: '#a855f7', letterSpacing: '2px', textTransform: 'uppercase' }}>Education</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '0.75rem', color: '#ffffff' }}>M.Sc. Computer Science & Engineering</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>University of Ioannina • 2017 - 2025</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem', fontSize: '0.95rem' }}>Thesis: Implementation of Stoer-Wagner Algorithm <span style={{ color: '#00ffaa', marginLeft: '0.5rem' }}>(Grade: 10/10)</span></p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ minHeight: '60vh', padding: '6rem 2rem', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', color: '#00ffaa', letterSpacing: '3px', textTransform: 'uppercase' }}>Let's Connect</span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginTop: '1rem', marginBottom: '1.5rem', color: '#ffffff' }}>Get In Touch</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>Interested in working together or have a question? I'd love to hear from you.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:dimanton1999@gmail.com" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #00ffaa 0%, #00d4ff 100%)', color: '#0a0a14', borderRadius: '50px', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.Email /> Email Me</a>
              <a href="https://linkedin.com/in/dimitrios-antoniou" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', background: 'transparent', color: '#ffffff', borderRadius: '50px', fontWeight: 500, fontSize: '0.95rem', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.LinkedIn /> LinkedIn</a>
            </div>
            <p style={{ marginTop: '3rem', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.Location /> Athens, Greece</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Icons.Phone /> +30 698 767 0176</span>
            </p>
          </div>
        </section>

        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2025 Dimitris Antoniou • Built with React</p>
        </footer>
      </div>
  );
}
