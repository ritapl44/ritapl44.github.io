import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';

const interests = ['Creative ideas', 'Good conversations', 'Learning by making'];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Home">R</a>
        <div className="nav-links"><a href="#about">About</a><a href="#interests">Interests</a><a className="nav-cta" href="mailto:hello@example.com">Say hello <ArrowUpRight size={15} /></a></div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><Sparkles size={14} /> My first corner of the internet</div>
        <h1>Hello, I’m <span>Rita.</span><br />Nice to meet you.</h1>
        <p className="hero-copy">I’m curious, creative, and always learning something new. This little website is where I’ll share the things I care about.</p>
        <a className="scroll-link" href="#about">Come in and look around <ArrowDownRight size={18} /></a>
        <div className="orbit" aria-hidden="true"><div className="orbit-ring" /><div className="orbit-dot orbit-dot-one" /><div className="orbit-dot orbit-dot-two" /><span>hello!</span></div>
      </section>

      <section className="about" id="about">
        <p className="section-label">01 / About me</p>
        <div className="about-grid">
          <h2>A work in progress—<br />in the best way.</h2>
          <div className="about-copy"><p>I made this site as a place to begin. No grand launch, no perfect plan—just a small page that feels like me.</p><p>I believe the best things often start simply: one idea, one conversation, one brave first try.</p></div>
        </div>
      </section>

      <section className="interests" id="interests">
        <p className="section-label">02 / Things I’m into</p>
        <div className="interest-list">{interests.map((interest, index) => <div className="interest-row" key={interest}><span>0{index + 1}</span><h3>{interest}</h3><ArrowUpRight aria-hidden="true" /></div>)}</div>
      </section>

      <footer>
        <div><p className="section-label">03 / Let’s connect</p><h2>Have something<br />to say?</h2></div>
        <a className="footer-link" href="mailto:hello@example.com">hello@example.com <ArrowUpRight /></a>
        <p className="copyright">Made with curiosity · 2026</p>
      </footer>
    </main>
  );
}
