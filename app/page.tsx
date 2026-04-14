const S = {
  bg: '#1a1d2e', alt: '#151726', dark: '#12141f',
  gold: '#c8a96e', gold2: '#a8894e',
  text: '#e8e6e1', muted: 'rgba(232,230,225,0.55)',
  rule: 'rgba(200,169,110,0.25)',
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "-apple-system, 'Helvetica Neue', Arial, sans-serif",
};

export default function Guida() {
  return (
    <>
      <style>{`
        html { font-size: 18px; scroll-behavior: smooth; }
        body { background: ${S.bg}; color: ${S.text}; margin: 0; -webkit-font-smoothing: antialiased; }
        * { box-sizing: border-box; }
        a { color: inherit; }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.4rem 8vw; display: flex; align-items: center; justify-content: space-between; background: rgba(26,29,46,0.88); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(200,169,110,0.12); font-family: ${S.sans}; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; }
        .nav-brand { color: ${S.gold}; font-weight: 600; }
        .nav-link { color: rgba(232,230,225,0.4); text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: ${S.gold}; }
        .screen { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 100px 8vw 80px; }
        .label { font-family: ${S.sans}; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: ${S.gold}; margin-bottom: 2rem; }
        .headline { font-family: ${S.serif}; font-size: clamp(2.4rem, 4.5vw, 4.8rem); font-weight: 400; line-height: 1.08; color: ${S.gold}; letter-spacing: -0.01em; margin: 0 0 2rem; }
        .headline--white { color: ${S.text}; }
        .body { font-family: ${S.sans}; font-size: clamp(0.95rem, 1.3vw, 1.1rem); line-height: 1.8; color: ${S.muted}; max-width: 560px; margin: 0; }
        .rule { width: 100%; height: 1px; background: ${S.rule}; margin: 2.5rem 0; border: none; }
        .features { list-style: none; padding: 0; margin: 0; max-width: 640px; }
        .features li { font-family: ${S.sans}; font-size: clamp(0.95rem, 1.3vw, 1.1rem); line-height: 1.55; color: ${S.text}; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.07); display: flex; gap: 1rem; }
        .features li::before { content: '—'; color: ${S.gold}; flex-shrink: 0; }
        .for-line { font-family: ${S.serif}; font-size: clamp(1.2rem, 2vw, 1.8rem); font-style: italic; font-weight: 400; line-height: 1.45; color: ${S.text}; margin: 0 0 1.75rem; max-width: 680px; }
        .footer { padding: 1.8rem 8vw; border-top: 1px solid rgba(200,169,110,0.1); background: ${S.dark}; font-family: ${S.sans}; font-size: 0.72rem; color: rgba(232,230,225,0.3); letter-spacing: 0.06em; display: flex; justify-content: space-between; }
      `}</style>

      <nav className="nav">
        <span className="nav-brand">GUIDA</span>
        <a href="https://dasuite.mov" className="nav-link">DA SUITE →</a>
      </nav>

      {/* HERO */}
      <section className="screen" style={{ background: S.bg }}>
        <div className="label">GUIDA · guida.mov</div>
        <h1 className="headline">55 treaties.<br />Instant compliance.<br />No surprises.</h1>
        <hr className="rule" />
        <p className="body">Co-production intelligence built from every bilateral treaty in Europe. Guida tells you whether your project qualifies, what it requires, and where the gaps are — before you sign anything.</p>
      </section>

      {/* WHAT IT DOES */}
      <section className="screen" style={{ background: S.alt }}>
        <div className="label">What GUIDA does</div>
        <h2 className="headline headline--white" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', marginBottom: '1.5rem' }}>Treaty intelligence for the serious co-production.</h2>
        <ul className="features">
          <li>Treaty eligibility checked instantly for any territory combination</li>
          <li>Cultural test requirements mapped by country and fund</li>
          <li>Co-producer search and match across the European production landscape</li>
          <li>Compliance gaps identified before contracts are signed</li>
          <li>Key person obligations, creative control requirements, and spend thresholds</li>
          <li>Updates automatically as treaty terms and fund requirements change</li>
        </ul>
      </section>

      {/* WHO IT'S FOR */}
      <section className="screen" style={{ background: S.dark }}>
        <div className="label">The moment it saves you</div>
        <p className="for-line">— The project that needs a French co-producer to unlock the CNC, with two weeks to find the right one and no time to read the treaty.</p>
        <p className="for-line">— The German-Swedish co-production that had been structured incorrectly for three months before anyone noticed.</p>
        <p className="for-line">— The producer pitching at a market who needs to know, in one sentence, why this qualifies as a genuine European co-production.</p>
        <hr className="rule" />
        <p className="body">Every independent production company in Europe. Every project that crosses a border.</p>
        <p style={{ marginTop: '2rem', fontFamily: S.sans, fontSize: '0.72rem', letterSpacing: '0.18em', color: 'rgba(200,169,110,0.5)', textTransform: 'uppercase' }}>
          Part of DA SUITE · <a href="https://dasuite.mov" style={{ color: S.gold, textDecoration: 'none' }}>dasuite.mov</a>
        </p>
      </section>

      <footer className="footer">
        <span>GUIDA · guida.mov</span>
        <span>DA SUITE · dasuite.mov</span>
      </footer>
    </>
  );
}
