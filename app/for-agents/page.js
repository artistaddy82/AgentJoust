import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'For Agents',
  description: 'Stop buying leads. Start winning consumers. AgentJoust delivers life insurance buyers who are actively comparing — you compete on proposal quality, not dial speed.',
}

export default function ForAgentsPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="fa-hero">
          <div className="fa-hero-inner">
            <div className="fa-hero-left">
              <div className="fa-label">For licensed agents</div>
              <h1 className="fa-headline">
                Stop buying<br />leads. <em>Start<br />winning</em> consumers.
              </h1>
              <p className="fa-sub">
                AgentJoust delivers life insurance buyers who are already comparing proposals —
                and you compete on what you do best, not on who dials fastest.
                No cold calls. No spam complaints. No wasted hours.
              </p>
              <div className="fa-actions">
                <a href="#apply" className="fa-btn-primary">
                  Apply to join →
                </a>
                <a href="#how" className="fa-btn-ghost">See how it works ↓</a>
              </div>
            </div>
            <div className="fa-hero-right">
              {[
                { icon: '🎯', title: 'Buyers, not leads', body: "Every consumer on AgentJoust has already decided they need life insurance. You're competing for the sale, not creating demand." },
                { icon: '⚔️', title: 'Win on merit', body: 'Three agents submit blind proposals. The consumer picks based on your coverage, price, and approach — not who called first.' },
                { icon: '🛡️', title: 'Zero compliance risk', body: 'We handle consent, TCPA compliance, and contact management. You focus on writing business.' },
              ].map(({ icon, title, body }) => (
                <div className="fa-proof-card" key={title}>
                  <span className="fa-proof-icon">{icon}</span>
                  <div className="fa-proof-title">{title}</div>
                  <p className="fa-proof-body">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VS ── */}
        <section className="fa-vs">
          <div className="fa-section-label">The difference</div>
          <h2 className="fa-section-h2">The old way is costing you.</h2>
          <p className="fa-section-sub">Recycled leads, race-to-dial, spam complaints — or a platform built around the agent who brings the best proposal.</p>
          <div className="fa-vs-grid">
            <div className="fa-vs-col fa-vs-old">
              <div className="fa-vs-badge">Traditional lead buying</div>
              <div className="fa-vs-title">Buy a name, hope for the best</div>
              <ul className="fa-vs-list">
                {['Leads sold to 5+ agents simultaneously','Race to call first — quality doesn\'t matter','Consumers have no idea who\'s calling or why','Spam complaints and do-not-call risk','10–15% close rate on a good day','Pay whether you close or not'].map(item => (
                  <li key={item}><span className="fa-vs-icon fa-bad">✕</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="fa-vs-divider"><div className="fa-vs-pill">vs</div></div>
            <div className="fa-vs-col fa-vs-new">
              <div className="fa-vs-badge">AgentJoust</div>
              <div className="fa-vs-title">Compete for buyers who've decided</div>
              <ul className="fa-vs-list">
                {['Exclusive 3-agent competition — not a data dump','Win on proposal quality, not dial speed','Consumers know they\'re reviewing 3 proposals','Full TCPA consent on file before any contact','Higher intent = higher close rates','Pay only when you\'re in a joust — no wasted spend'].map(item => (
                  <li key={item}><span className="fa-vs-icon fa-good">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="fa-how" id="how">
          <div className="fa-how-inner">
            <div className="fa-section-label fa-light">Your side of the joust</div>
            <h2 className="fa-section-h2 fa-light">Three steps. One winner. You.</h2>
            <p className="fa-section-sub fa-light">Here's exactly what happens from the moment a consumer enters the arena.</p>
            <div className="fa-timeline">
              {[
                { n: '01', color: 'var(--red)', title: 'You receive the brief', note: '⚡ Avg brief delivery: under 4 minutes', body: <>A consumer submits their coverage needs — age, health class, face amount, term length, and budget. <strong>You get a clear, detailed brief</strong> — no guessing, no dead-end calls.</> },
                { n: '02', color: 'var(--gold)', title: 'You submit your best proposal', note: '🕐 Standard response window: 24 hours', body: <>Build your proposal — carrier, rate, coverage structure. <strong>Submissions are blind</strong>: you don't see your competitors' proposals and they don't see yours. The best offer wins.</> },
                { n: '03', color: 'var(--green)', title: 'Consumer crowns the winner', note: '🏆 Winner gets exclusive contact info + warm intro', body: <>The consumer reviews all three proposals and picks their champion. <strong>If they choose you</strong>, you're connected immediately. No pitch needed. Just close.</> },
              ].map(({ n, color, title, note, body }) => (
                <div className="fa-tl-step" key={n}>
                  <div className="fa-tl-left">
                    <div className="fa-tl-dot" style={{ background: color, borderColor: color }} />
                    <div className="fa-tl-line" />
                  </div>
                  <div className="fa-tl-right">
                    <div className="fa-tl-num">Step {n}</div>
                    <div className="fa-tl-title">{title}</div>
                    <p className="fa-tl-body">{body}</p>
                    <div className="fa-tl-note">{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NUMBERS ── */}
        <div className="fa-numbers">
          {[
            { num: '3', sup: 'x', label: 'Higher intent than\ntraditional leads' },
            { num: '0',  sup: '',  label: 'Spam complaints\non joust wins' },
            { num: '24', sup: 'hr',label: 'Max response window\nper joust' },
            { num: '50', sup: '',  label: 'States — licensed\nagents nationwide' },
          ].map(({ num, sup, label }) => (
            <div className="fa-num-item" key={num + label}>
              <div className="fa-num">{num}<span>{sup}</span></div>
              <div className="fa-num-label">{label}</div>
            </div>
          ))}
        </div>

        {/* ── QUALIFY ── */}
        <section className="fa-qualify">
          <div className="fa-qualify-inner">
            <div className="fa-section-label">Requirements</div>
            <h2 className="fa-section-h2">Who we're looking for</h2>
            <p className="fa-section-sub">AgentJoust is a curated network. We keep it selective so every consumer gets three serious proposals.</p>
            <div className="fa-qualify-grid">
              <div>
                <div className="fa-qualify-title">You should apply if…</div>
                <ul className="fa-qualify-list">
                  {['You hold an active life insurance license in at least one state','You\'re appointed with one or more A-rated term or permanent life carriers','You respond to leads within 24 hours — reliably','You want to compete on proposal quality, not speed-to-dial','You\'re independent or work at an IMO that allows direct writing'].map(item => (
                    <li key={item}><span className="fa-q-check fa-q-yes">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="fa-qualify-title">This isn't for you if…</div>
                <ul className="fa-qualify-list">
                  {['You rely on pressure tactics or urgency selling','You\'re looking for raw leads to cold call','Your license has active complaints or disciplinary actions','You can\'t commit to a 24-hour response window','You only represent a single captive carrier'].map(item => (
                    <li key={item}><span className="fa-q-check fa-q-no">✕</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── APPLY FORM ── */}
        <section className="fa-apply" id="apply">
          <div className="fa-apply-inner">
            <div className="fa-section-label fa-light">Join the arena</div>
            <h2 className="fa-section-h2 fa-light">Apply to joust.</h2>
            <p className="fa-section-sub fa-light">We review every application. If you're a fit, we'll reach out within 2 business days.</p>
            <AgentApplyForm />
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ── HERO ── */
        .fa-hero { background: var(--ink); min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding-top: 64px; }
        .fa-hero::before { content:''; position:absolute; top:-120px; right:-120px; width:600px; height:600px; border-radius:50%; background:radial-gradient(circle,rgba(200,40,28,0.07) 0%,transparent 65%); pointer-events:none; }
        .fa-hero-inner { max-width:1280px; margin:0 auto; padding:100px 80px; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; width:100%; }
        .fa-label { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:var(--red); margin-bottom:24px; display:inline-flex; align-items:center; gap:10px; }
        .fa-label::before,.fa-label::after { content:''; display:block; height:1px; background:var(--red); opacity:.5; width:32px; }
        .fa-headline { font-family:'Fraunces',serif; font-size:clamp(40px,5vw,64px); font-weight:400; line-height:1.08; letter-spacing:-0.03em; color:var(--paper); margin-bottom:24px; }
        .fa-headline em { font-style:italic; color:var(--red); }
        .fa-sub { font-size:17px; line-height:1.65; color:rgba(245,241,232,.6); max-width:500px; margin-bottom:40px; }
        .fa-actions { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
        .fa-btn-primary { background:var(--red); color:#fff; padding:15px 32px; border-radius:100px; font-size:15px; font-weight:600; transition:background .2s; }
        .fa-btn-primary:hover { background:var(--red-deep); }
        .fa-btn-ghost { color:rgba(245,241,232,.6); font-size:14px; font-weight:500; transition:color .2s; }
        .fa-btn-ghost:hover { color:var(--paper); }
        .fa-hero-right { display:flex; flex-direction:column; gap:16px; }
        .fa-proof-card { background:rgba(245,241,232,.05); border:1px solid rgba(245,241,232,.1); border-radius:16px; padding:24px 28px; }
        .fa-proof-icon { font-size:22px; margin-bottom:10px; display:block; }
        .fa-proof-title { font-family:'Fraunces',serif; font-size:18px; font-weight:500; color:var(--paper); margin-bottom:6px; }
        .fa-proof-body { font-size:13px; color:rgba(245,241,232,.5); line-height:1.6; }

        /* ── VS ── */
        .fa-vs { background:var(--paper); padding:100px 40px; }
        .fa-section-label { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:var(--muted); text-align:center; margin-bottom:14px; }
        .fa-section-label.fa-light { color:rgba(245,241,232,.35); }
        .fa-section-h2 { font-family:'Fraunces',serif; font-size:clamp(30px,4vw,48px); font-weight:400; letter-spacing:-0.025em; line-height:1.12; text-align:center; color:var(--ink); margin-bottom:14px; }
        .fa-section-h2.fa-light { color:var(--paper); }
        .fa-section-sub { font-size:16px; color:var(--muted); text-align:center; max-width:540px; margin:0 auto 56px; line-height:1.65; }
        .fa-section-sub.fa-light { color:rgba(245,241,232,.5); }
        .fa-vs-grid { max-width:960px; margin:0 auto; display:grid; grid-template-columns:1fr auto 1fr; gap:0; align-items:stretch; }
        .fa-vs-col { border-radius:20px; padding:36px; }
        .fa-vs-old { background:rgba(20,17,13,.04); border:1px solid rgba(20,17,13,.07); }
        .fa-vs-new { background:var(--green); box-shadow:var(--shadow-lift); }
        .fa-vs-badge { display:inline-block; font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:.2em; text-transform:uppercase; padding:5px 12px; border-radius:100px; margin-bottom:24px; }
        .fa-vs-old .fa-vs-badge { background:rgba(20,17,13,.07); color:var(--muted); }
        .fa-vs-new .fa-vs-badge { background:rgba(245,241,232,.15); color:rgba(245,241,232,.85); }
        .fa-vs-title { font-family:'Fraunces',serif; font-size:22px; font-weight:500; letter-spacing:-0.02em; margin-bottom:24px; }
        .fa-vs-old .fa-vs-title { color:var(--ink); }
        .fa-vs-new .fa-vs-title { color:var(--paper); }
        .fa-vs-list { list-style:none; display:flex; flex-direction:column; gap:12px; }
        .fa-vs-list li { display:flex; align-items:flex-start; gap:12px; font-size:14px; line-height:1.5; }
        .fa-vs-old .fa-vs-list li { color:var(--muted); }
        .fa-vs-new .fa-vs-list li { color:rgba(245,241,232,.85); }
        .fa-vs-icon { flex-shrink:0; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; margin-top:2px; }
        .fa-bad { background:rgba(200,40,28,.1); color:var(--red); }
        .fa-good { background:rgba(245,241,232,.2); color:var(--paper); }
        .fa-vs-divider { display:flex; align-items:center; justify-content:center; padding:0 20px; }
        .fa-vs-pill { background:var(--ink); color:var(--paper); font-family:'Fraunces',serif; font-size:14px; font-style:italic; width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; }

        /* ── HOW ── */
        .fa-how { background:var(--ink); padding:100px 40px; position:relative; overflow:hidden; }
        .fa-how-inner { max-width:1000px; margin:0 auto; position:relative; z-index:2; }
        .fa-timeline { display:flex; flex-direction:column; gap:0; max-width:680px; margin:0 auto; }
        .fa-tl-step { display:grid; grid-template-columns:52px 1fr; gap:28px; padding-bottom:44px; }
        .fa-tl-step:last-child { padding-bottom:0; }
        .fa-tl-left { display:flex; flex-direction:column; align-items:center; }
        .fa-tl-dot { width:14px; height:14px; border-radius:50%; border:3px solid; flex-shrink:0; margin-top:4px; }
        .fa-tl-line { width:1px; flex:1; background:rgba(245,241,232,.1); margin-top:8px; }
        .fa-tl-step:last-child .fa-tl-line { display:none; }
        .fa-tl-num { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.2em; text-transform:uppercase; color:rgba(245,241,232,.3); margin-bottom:8px; }
        .fa-tl-title { font-family:'Fraunces',serif; font-size:24px; font-weight:400; letter-spacing:-0.02em; color:var(--paper); margin-bottom:10px; }
        .fa-tl-body { font-size:14px; color:rgba(245,241,232,.55); line-height:1.7; }
        .fa-tl-body strong { color:rgba(245,241,232,.85); font-weight:600; }
        .fa-tl-note { display:inline-flex; align-items:center; gap:6px; margin-top:12px; background:rgba(245,241,232,.06); border:1px solid rgba(245,241,232,.1); border-radius:8px; padding:7px 13px; font-size:11px; color:rgba(245,241,232,.5); font-family:'JetBrains Mono',monospace; letter-spacing:.05em; }

        /* ── NUMBERS ── */
        .fa-numbers { background:var(--paper-deep); border-top:1px solid rgba(20,17,13,.08); border-bottom:1px solid rgba(20,17,13,.08); padding:60px 40px; display:grid; grid-template-columns:repeat(4,1fr); gap:40px; max-width:900px; margin:0 auto; text-align:center; }
        .fa-num { font-family:'Fraunces',serif; font-size:52px; font-weight:400; letter-spacing:-0.04em; color:var(--ink); line-height:1; margin-bottom:8px; }
        .fa-num span { font-style:italic; color:var(--green); }
        .fa-num-label { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); line-height:1.6; white-space:pre-line; }

        /* ── QUALIFY ── */
        .fa-qualify { background:var(--paper); padding:100px 40px; }
        .fa-qualify-inner { max-width:1000px; margin:0 auto; }
        .fa-qualify-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; margin-top:56px; align-items:start; }
        .fa-qualify-title { font-family:'Fraunces',serif; font-size:20px; font-weight:500; letter-spacing:-0.02em; color:var(--ink); margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--rule); }
        .fa-qualify-list { list-style:none; display:flex; flex-direction:column; gap:14px; }
        .fa-qualify-list li { display:flex; align-items:flex-start; gap:12px; font-size:14px; color:var(--ink-soft); line-height:1.55; }
        .fa-q-check { flex-shrink:0; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; margin-top:2px; }
        .fa-q-yes { background:var(--green-light); color:var(--green); }
        .fa-q-no  { background:rgba(200,40,28,.08); color:var(--red); }

        /* ── APPLY ── */
        .fa-apply { background:var(--ink); padding:100px 40px; position:relative; overflow:hidden; }
        .fa-apply-inner { max-width:660px; margin:0 auto; position:relative; z-index:2; }

        @media (max-width:900px) {
          .fa-hero-inner { grid-template-columns:1fr; padding:80px 24px 60px; gap:40px; }
          .fa-hero-right { display:none; }
          .fa-vs-grid { grid-template-columns:1fr; max-width:480px; }
          .fa-vs-divider { display:none; }
          .fa-vs-col { border-radius:16px; }
          .fa-numbers { grid-template-columns:repeat(2,1fr); gap:28px; padding:48px 20px; }
          .fa-qualify-grid { grid-template-columns:1fr; gap:36px; }
          .fa-vs, .fa-qualify, .fa-apply { padding:72px 20px; }
          .fa-how { padding:72px 20px; }
        }
      `}</style>
    </>
  )
}

// ── Agent apply form (client component inlined) ───────────────────────────────
function AgentApplyForm() {
  // This is a server component page, so we import the client form separately
  return <AgentApplyFormClient />
}

// We need this to be a separate client component — keep it simple here
import AgentApplyFormClient from '@/components/AgentApplyForm'
