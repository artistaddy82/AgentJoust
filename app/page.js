import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JoustForm from '@/components/JoustForm'

export const metadata = {
  title: 'AgentJoust — Three agents compete. You win.',
  description: 'Compare three life insurance proposals from top licensed independent agents. Your contact info is locked until you choose your winner.',
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-bg-img" />
            <div className="hero-bg-wash" />
            <div className="hero-bg-fade" />
          </div>
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-h1">
                <span>Agents</span>
                <span>compete.</span>
                <span>You <em>win.</em></span>
              </h1>
              <p className="hero-sub">
                Compare three life insurance proposals from top licensed independent agents.
                Your contact info is <strong>locked until you choose your winner</strong> — agents compete completely blind.
              </p>
              <div className="hero-cta-row">
                <a href="#start" className="btn-primary">
                  Start the joust
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="#how" className="btn-ghost">See how it works</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── JOUST FORM ── */}
        <section className="form-section" id="start">
          <div className="form-section-inner">
            <JoustForm />
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="how-section" id="how">
          <div className="section-tag">⚔ The Rules</div>
          <h2 className="section-title">A reverse auction for <em>your</em> business.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">i.</div>
              <h3 className="step-title">You set the terms</h3>
              <p className="step-text">Tell us your <strong>basics</strong> — coverage, health, and how to reach you. Your contact info is sealed the moment you submit. Agents never see it during the joust.</p>
            </div>
            <div className="step-card">
              <div className="step-num">ii.</div>
              <h3 className="step-title">Agents bid in private</h3>
              <p className="step-text">Three vetted, licensed independent agents review your profile and submit their <strong>best proposal</strong>. They can't see each other's bids.</p>
            </div>
            <div className="step-card">
              <div className="step-num">iii.</div>
              <h3 className="step-title">You crown the winner</h3>
              <p className="step-text">Compare side-by-side in your personal joust room. <strong>Only the winner</strong> gets your contact info. The other two agents never see it. Ever.</p>
            </div>
          </div>
        </section>

        {/* ── WHY DIFFERENT ── */}
        <section className="why-section" id="why">
          <div className="section-tag">⚔ The Difference</div>
          <h2 className="section-title">The old way sells your number to <em>everyone.</em> We don't.</h2>
          <div className="compare-table">
            <div className="compare-row head">
              <div className="cell" />
              <div className="cell brand">Agent<em>Joust</em></div>
              <div className="cell">Typical lead site</div>
            </div>
            {[
              ['Your contact info sealed until you choose a winner', 'Yes', 'No'],
              ['Agents compete on price & terms', 'Three, blind', 'No'],
              ['Number sold to multiple agents', 'Never', 'Often 5–8×'],
              ['TCPA-compliant consent flow', 'Yes', 'Varies'],
              ['Independent agents (not captive)', 'All of them', 'Mixed'],
            ].map(([label, yes, no], i) => (
              <div className="compare-row" key={i}>
                <div className="cell label">{label}</div>
                <div className="cell yes" style={i === 2 ? { color: 'var(--green)' } : {}}>{yes}</div>
                <div className="cell no"  style={i === 2 ? { color: 'var(--red)' }   : {}}>{no}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="final-cta">
          <h2>Ready to make agents <em>fight</em> for your business?</h2>
          <p>Three proposals. Your contact info locked until you crown a winner. Typical turnaround within 24 hours.</p>
          <a href="#start" className="btn-primary">Start the joust →</a>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-bg-img {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 75%;
          background: url('/img/jousters.png') center/cover no-repeat;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,1) 45%);
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,1) 45%);
        }
        .hero-bg-wash {
          position: absolute; inset: 0;
          background: rgba(245,241,232,0.38);
        }
        .hero-bg-fade {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, var(--paper));
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 120px 80px 100px;
          width: 100%;
        }
        .hero-content { max-width: 600px; }
        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 28px;
        }
        .label-line {
          display: block;
          height: 1px;
          background: var(--red);
          opacity: 0.5;
          width: 32px;
        }
        .hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(56px, 8vw, 96px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--ink);
          margin-bottom: 28px;
          display: flex;
          flex-direction: column;
        }
        .hero-h1 em { font-style: italic; color: var(--red); }
        .hero-sub {
          font-size: 18px;
          color: var(--ink-soft);
          line-height: 1.65;
          max-width: 520px;
          margin-bottom: 40px;
        }
        .hero-cta-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--ink);
          color: var(--paper);
          padding: 15px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background .2s;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-primary:hover { background: var(--ink-soft); }
        .btn-ghost {
          color: var(--muted);
          font-size: 15px;
          font-weight: 500;
          transition: color .2s;
          text-decoration: none;
        }
        .btn-ghost:hover { color: var(--ink); }

        /* ── FORM SECTION ── */
        .form-section {
          background: var(--paper-deep);
          padding: 80px 40px;
          border-top: 1px solid rgba(20,17,13,.08);
          border-bottom: 1px solid rgba(20,17,13,.08);
        }
        .form-section-inner {
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── FORM CARD ── */
        .form-block {
          background: #fff;
          border: 1px solid rgba(20,17,13,.1);
          border-radius: 18px;
          box-shadow: var(--shadow-lift);
          overflow: hidden;
        }
        .form-steps-bar {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid rgba(20,17,13,.08);
        }
        .form-step-tab {
          padding: 14px 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border-right: 1px solid rgba(20,17,13,.08);
          transition: background .25s;
        }
        .form-step-tab:last-child { border-right: none; }
        .form-step-tab.active { background: rgba(45,90,61,.05); }
        .form-step-tab.done   { background: rgba(45,90,61,.03); }
        .step-tab-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 1.5px solid rgba(20,17,13,.18);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition: background .25s, border-color .25s, color .25s;
        }
        .form-step-tab.active .step-tab-num,
        .form-step-tab.done   .step-tab-num {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }
        .step-tab-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color .25s;
        }
        .form-step-tab.active .step-tab-label,
        .form-step-tab.done   .step-tab-label { color: var(--green); }

        .form-panels { overflow: hidden; }
        .form-panel {
          padding: 32px 36px 36px;
          animation: panelIn .3s ease;
        }
        @keyframes panelIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .panel-back {
          background: none; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--muted); padding: 0; margin-bottom: 20px;
          display: flex; align-items: center; gap: 5px;
          transition: color .2s;
        }
        .panel-back:hover { color: var(--ink); }
        .panel-title {
          font-family: 'Fraunces', serif;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .panel-title em { font-style: italic; color: var(--red); font-weight: 400; }
        .panel-sub { color: var(--muted); font-size: 15px; margin-bottom: 24px; line-height: 1.55; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 12px;
        }
        .form-row.full { grid-template-columns: 1fr; }
        .form-field { position: relative; }
        .form-field label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--muted);
          display: block; margin-bottom: 6px;
        }
        .form-field input, .form-field select {
          width: 100%; padding: 12px 14px;
          border: 1px solid rgba(20,17,13,.18);
          border-radius: 10px; font-size: 14px;
          font-family: inherit; background: var(--paper);
          color: var(--ink); transition: border-color .2s;
          -webkit-appearance: none;
        }
        .form-field input:focus, .form-field select:focus {
          outline: none; border-color: var(--ink); background: #fff;
        }
        .form-field input::placeholder { color: rgba(20,17,13,.3); }

        .form-next, .form-submit {
          width: 100%; margin-top: 10px;
          background: var(--green); color: #fff;
          padding: 15px; border: none; border-radius: 10px;
          font-size: 15px; font-weight: 600; font-family: inherit;
          cursor: pointer; letter-spacing: 0.01em;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background .2s, transform .2s;
        }
        .form-next:hover, .form-submit:hover { background: #1e3d29; transform: translateY(-1px); }
        .form-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }

        .form-sealed-note {
          display: flex; align-items: center; gap: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--green);
          background: rgba(45,90,61,0.07);
          border: 1px solid rgba(45,90,61,0.18);
          border-radius: 8px; padding: 10px 14px; margin-bottom: 18px;
        }
        .form-privacy {
          margin-top: 12px; font-size: 11px;
          color: var(--muted); text-align: center; line-height: 1.5;
          display: flex; align-items: center; justify-content: center; gap: 5px;
        }
        .form-error {
          color: var(--red); font-size: 13px;
          text-align: center; margin-top: 10px;
        }

        /* ── HOW IT WORKS ── */
        .how-section {
          background: var(--ink);
          padding: 100px 40px;
          text-align: center;
        }
        .section-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.25em;
          text-transform: uppercase; color: rgba(245,241,232,0.3);
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400; letter-spacing: -0.025em;
          line-height: 1.12; color: var(--paper);
          margin-bottom: 56px;
        }
        .section-title em { font-style: italic; color: var(--red); }
        .steps-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 40px; max-width: 960px; margin: 0 auto;
          text-align: left;
        }
        .step-num {
          font-family: 'Fraunces', serif; font-style: italic;
          font-size: 40px; color: var(--red); opacity: 0.5;
          line-height: 1; margin-bottom: 16px;
        }
        .step-title {
          font-family: 'Fraunces', serif; font-size: 22px;
          font-weight: 500; letter-spacing: -0.02em;
          color: var(--paper); margin-bottom: 12px;
        }
        .step-text { font-size: 15px; color: rgba(245,241,232,0.55); line-height: 1.7; }
        .step-text strong { color: rgba(245,241,232,0.85); font-weight: 600; }

        /* ── WHY SECTION ── */
        .why-section {
          background: var(--paper); padding: 100px 40px; text-align: center;
        }
        .why-section .section-tag { color: var(--muted); }
        .why-section .section-title { color: var(--ink); }
        .compare-table {
          max-width: 720px; margin: 0 auto;
          border: 1px solid rgba(20,17,13,.1);
          border-radius: 16px; overflow: hidden;
        }
        .compare-row {
          display: grid; grid-template-columns: 1.8fr 1fr 1fr;
          border-bottom: 1px solid rgba(20,17,13,.08);
        }
        .compare-row:last-child { border-bottom: none; }
        .cell { padding: 16px 20px; font-size: 14px; }
        .compare-row.head { background: var(--ink); }
        .compare-row.head .cell { font-size: 13px; color: rgba(245,241,232,0.4); }
        .cell.brand { font-family: 'Fraunces', serif; font-size: 16px; color: var(--paper); }
        .cell.brand em { font-style: italic; color: var(--red); }
        .compare-row.head .cell:not(:first-child) { text-align: center; }
        .cell.label { color: var(--ink-soft); }
        .cell.yes, .cell.no { text-align: center; font-weight: 600; }
        .cell.yes { color: var(--green); }
        .cell.no  { color: var(--red); }
        .compare-row:not(.head) { background: #fff; }
        .compare-row:not(.head):nth-child(odd) { background: var(--paper); }

        /* ── FINAL CTA ── */
        .final-cta {
          background: var(--ink); padding: 100px 40px;
          text-align: center;
        }
        .final-cta h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 400; letter-spacing: -0.03em;
          color: var(--paper); margin-bottom: 16px;
        }
        .final-cta h2 em { font-style: italic; color: var(--red); }
        .final-cta p { font-size: 16px; color: rgba(245,241,232,0.5); margin-bottom: 36px; }
        .final-cta .btn-primary { background: var(--green); font-size: 16px; padding: 16px 40px; }
        .final-cta .btn-primary:hover { background: #1e3d29; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-inner { padding: 100px 24px 80px; }
          .form-section { padding: 60px 20px; }
          .how-section, .why-section, .final-cta { padding: 72px 20px; }
          .steps-grid { grid-template-columns: 1fr; gap: 32px; }
          .compare-row { grid-template-columns: 1.5fr 1fr 1fr; }
          .cell { padding: 14px; font-size: 13px; }
          .form-panel { padding: 28px 20px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
