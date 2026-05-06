'use strict'

function forAgents(config) {
  const apiUrl = config.apiUrl || 'https://sidecarleads.com'

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>For Agents — AgentJoust</title>
<meta name="description" content="Stop buying leads. Start winning consumers. AgentJoust delivers life insurance buyers who are actively comparing — you compete on proposal quality, not dial speed." />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,800;1,9..144,400&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

<style>
:root {
  --paper: #f5f1e8;
  --paper-deep: #ebe4d2;
  --ink: #14110d;
  --ink-soft: #3a342a;
  --muted: #6b6253;
  --rule: rgba(20,17,13,.1);
  --red: #c8281c;
  --red-deep: #9a1d13;
  --gold: #b8923a;
  --green: #2d5a3d;
  --green-light: #e8f0eb;
  --shadow: 0 1px 0 rgba(20,17,13,.06), 0 12px 28px -16px rgba(20,17,13,.18);
  --shadow-lift: 0 2px 0 rgba(20,17,13,.08), 0 28px 60px -24px rgba(20,17,13,.32);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter Tight', sans-serif;
  background: var(--paper);
  color: var(--ink);
  line-height: 1.5;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── Paper grain ── */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.35;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0 0.05 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ══════════════════════════════════════
   NAV
══════════════════════════════════════ */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(245,241,232,0.85);
  border-bottom: 1px solid transparent;
  transition: border-color .3s;
}
.nav.scrolled { border-bottom-color: rgba(20,17,13,.08); }
.logo {
  font-family: 'Fraunces', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-joust {
  font-style: italic;
  color: var(--red);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color .2s;
}
.nav-links a:hover { color: var(--ink); }
.nav-cta {
  background: var(--ink);
  color: var(--paper) !important;
  padding: 10px 22px;
  border-radius: 100px;
  font-size: 14px !important;
  font-weight: 600 !important;
  transition: background .2s !important;
}
.nav-cta:hover { background: var(--ink-soft) !important; }

/* ══════════════════════════════════════
   HERO — dark, full-bleed
══════════════════════════════════════ */
.hero {
  background: var(--ink);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 64px;
}

/* subtle geometric accent */
.hero::before {
  content: '';
  position: absolute;
  top: -120px; right: -120px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,40,28,0.07) 0%, transparent 65%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: -80px; left: -80px;
  width: 480px; height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(45,90,61,0.1) 0%, transparent 65%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 3;
  max-width: 1280px;
  margin: 0 auto;
  padding: 100px 80px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  width: 100%;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 28px;
}
.hero-label::before,
.hero-label::after {
  content: '';
  display: block;
  height: 1px;
  background: var(--red);
  opacity: 0.5;
}
.hero-label::before { width: 32px; }
.hero-label::after  { flex: 1; max-width: 80px; }

.hero-headline {
  font-family: 'Fraunces', serif;
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--paper);
  margin-bottom: 28px;
}
.hero-headline em {
  font-style: italic;
  color: var(--red);
}
.hero-headline strong {
  font-weight: 600;
}

.hero-sub {
  font-size: 18px;
  line-height: 1.65;
  color: rgba(245,241,232,0.65);
  max-width: 520px;
  margin-bottom: 48px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.btn-primary {
  background: var(--red);
  color: #fff;
  padding: 15px 34px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background .2s, transform .15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover { background: var(--red-deep); transform: translateY(-1px); }
.btn-ghost {
  color: rgba(245,241,232,0.7);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color .2s;
}
.btn-ghost:hover { color: var(--paper); }

/* Hero right — proof points */
.hero-proof {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.proof-card {
  background: rgba(245,241,232,0.05);
  border: 1px solid rgba(245,241,232,0.1);
  border-radius: 16px;
  padding: 28px 32px;
  transition: background .3s, border-color .3s;
}
.proof-card:hover {
  background: rgba(245,241,232,0.08);
  border-color: rgba(245,241,232,0.18);
}
.proof-icon {
  font-size: 24px;
  margin-bottom: 12px;
  display: block;
}
.proof-title {
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 500;
  color: var(--paper);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.proof-body {
  font-size: 14px;
  color: rgba(245,241,232,0.55);
  line-height: 1.6;
}

/* ══════════════════════════════════════
   VS STRIP — old way vs joust way
══════════════════════════════════════ */
.vs-section {
  background: var(--paper);
  padding: 100px 40px;
}
.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  text-align: center;
  margin-bottom: 16px;
}
.section-headline {
  font-family: 'Fraunces', serif;
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.12;
  text-align: center;
  color: var(--ink);
  margin-bottom: 16px;
}
.section-sub {
  font-size: 17px;
  color: var(--muted);
  text-align: center;
  max-width: 560px;
  margin: 0 auto 64px;
  line-height: 1.65;
}

.vs-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
}
.vs-col {
  border-radius: 20px;
  padding: 40px;
}
.vs-col.old {
  background: rgba(20,17,13,.04);
  border: 1px solid rgba(20,17,13,.07);
}
.vs-col.new {
  background: var(--green);
  color: var(--paper);
  box-shadow: var(--shadow-lift);
}
.vs-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 100px;
  margin-bottom: 28px;
}
.vs-col.old .vs-badge {
  background: rgba(20,17,13,.07);
  color: var(--muted);
}
.vs-col.new .vs-badge {
  background: rgba(245,241,232,0.15);
  color: rgba(245,241,232,0.85);
}
.vs-col-title {
  font-family: 'Fraunces', serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
}
.vs-col.old .vs-col-title { color: var(--ink); }
.vs-col.new .vs-col-title { color: var(--paper); }
.vs-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.vs-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  line-height: 1.5;
}
.vs-col.old .vs-list li { color: var(--muted); }
.vs-col.new .vs-list li { color: rgba(245,241,232,0.85); }
.vs-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-top: 2px;
}
.vs-col.old .vs-icon {
  background: rgba(200,40,28,0.1);
  color: var(--red);
}
.vs-col.new .vs-icon {
  background: rgba(245,241,232,0.2);
  color: var(--paper);
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}
.vs-pill {
  background: var(--ink);
  color: var(--paper);
  font-family: 'Fraunces', serif;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* ══════════════════════════════════════
   HOW IT WORKS — AGENT VIEW
══════════════════════════════════════ */
.how-section {
  background: var(--ink);
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}
.how-section::before {
  content: '';
  position: absolute;
  top: -200px; right: -200px;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(45,90,61,0.08) 0%, transparent 60%);
  pointer-events: none;
}
.how-inner {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.how-section .section-label { color: rgba(245,241,232,0.35); }
.how-section .section-headline { color: var(--paper); }
.how-section .section-sub { color: rgba(245,241,232,0.5); }

.steps-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 720px;
  margin: 0 auto;
}
.timeline-step {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 32px;
  position: relative;
  padding-bottom: 48px;
}
.timeline-step:last-child { padding-bottom: 0; }

.tl-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.tl-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--paper);
  border: 3px solid rgba(245,241,232,0.3);
  flex-shrink: 0;
  margin-top: 4px;
  transition: background .3s;
}
.timeline-step:nth-child(1) .tl-dot { background: var(--red); border-color: var(--red); box-shadow: 0 0 0 5px rgba(200,40,28,0.15); }
.timeline-step:nth-child(2) .tl-dot { background: var(--gold); border-color: var(--gold); box-shadow: 0 0 0 5px rgba(184,146,58,0.15); }
.timeline-step:nth-child(3) .tl-dot { background: var(--green); border-color: var(--green); box-shadow: 0 0 0 5px rgba(45,90,61,0.2); }
.tl-line {
  width: 1px;
  flex: 1;
  background: rgba(245,241,232,0.1);
  margin-top: 8px;
}
.timeline-step:last-child .tl-line { display: none; }

.tl-right { padding-top: 0; }
.tl-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,241,232,0.3);
  margin-bottom: 8px;
}
.tl-title {
  font-family: 'Fraunces', serif;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--paper);
  margin-bottom: 12px;
  line-height: 1.2;
}
.tl-body {
  font-size: 15px;
  color: rgba(245,241,232,0.55);
  line-height: 1.7;
}
.tl-body strong {
  color: rgba(245,241,232,0.85);
  font-weight: 600;
}
.tl-note {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  background: rgba(245,241,232,0.06);
  border: 1px solid rgba(245,241,232,0.1);
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 12px;
  color: rgba(245,241,232,0.55);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em;
}

/* ══════════════════════════════════════
   NUMBERS STRIP
══════════════════════════════════════ */
.numbers-strip {
  background: var(--paper-deep);
  border-top: 1px solid rgba(20,17,13,.08);
  border-bottom: 1px solid rgba(20,17,13,.08);
  padding: 64px 40px;
}
.numbers-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}
.num-item .num {
  font-family: 'Fraunces', serif;
  font-size: 52px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 8px;
}
.num-item .num span { font-style: italic; color: var(--green); }
.num-item .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  line-height: 1.5;
}

/* ══════════════════════════════════════
   WHO WE'RE LOOKING FOR
══════════════════════════════════════ */
.qualify-section {
  background: var(--paper);
  padding: 100px 40px;
}
.qualify-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.qualify-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-top: 64px;
}
.qualify-col-title {
  font-family: 'Fraunces', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--rule);
}
.qualify-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.qualify-list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 15px;
  color: var(--ink-soft);
  line-height: 1.55;
}
.q-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-top: 2px;
}
.q-check.yes { background: var(--green-light); color: var(--green); }
.q-check.no  { background: rgba(200,40,28,.08); color: var(--red); }

/* ══════════════════════════════════════
   APPLY FORM
══════════════════════════════════════ */
.apply-section {
  background: var(--ink);
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}
.apply-section::before {
  content: '';
  position: absolute;
  bottom: -150px; right: -150px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,40,28,0.07) 0%, transparent 60%);
  pointer-events: none;
}
.apply-inner {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.apply-section .section-label { color: rgba(245,241,232,0.35); }
.apply-section .section-headline { color: var(--paper); }
.apply-section .section-sub { color: rgba(245,241,232,0.5); margin-bottom: 48px; }

.apply-form {
  background: rgba(245,241,232,0.05);
  border: 1px solid rgba(245,241,232,0.1);
  border-radius: 24px;
  padding: 48px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.form-row.full { grid-template-columns: 1fr; }
.field-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.field-group label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245,241,232,0.45);
}
.field-group input,
.field-group select,
.field-group textarea {
  background: rgba(245,241,232,0.07);
  border: 1px solid rgba(245,241,232,0.12);
  border-radius: 10px;
  padding: 13px 16px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  color: var(--paper);
  outline: none;
  transition: border-color .2s, background .2s;
  -webkit-appearance: none;
}
.field-group input::placeholder { color: rgba(245,241,232,0.25); }
.field-group select option { background: var(--ink); color: var(--paper); }
.field-group input:focus,
.field-group select:focus,
.field-group textarea:focus {
  border-color: rgba(245,241,232,0.3);
  background: rgba(245,241,232,0.1);
}
.field-group textarea {
  resize: vertical;
  min-height: 90px;
  line-height: 1.6;
}
.form-divider {
  border: none;
  border-top: 1px solid rgba(245,241,232,0.08);
  margin: 28px 0;
}
.form-submit-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.form-disclaimer {
  font-size: 11px;
  color: rgba(245,241,232,0.3);
  line-height: 1.5;
  max-width: 300px;
}
.submit-btn {
  background: var(--red);
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 15px 36px;
  border-radius: 100px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: background .2s, transform .15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.submit-btn:hover { background: var(--red-deep); transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

/* success / error states */
.form-message {
  display: none;
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  font-size: 15px;
  margin-top: 20px;
}
.form-message.success {
  display: block;
  background: rgba(45,90,61,0.2);
  border: 1px solid rgba(45,90,61,0.4);
  color: #7ec89a;
}
.form-message.error {
  display: block;
  background: rgba(200,40,28,0.12);
  border: 1px solid rgba(200,40,28,0.3);
  color: #f08078;
}

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
.footer {
  background: var(--ink);
  border-top: 1px solid rgba(245,241,232,0.07);
  padding: 48px 40px 32px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-logo {
  font-family: 'Fraunces', serif;
  font-size: 18px;
  font-weight: 500;
  color: var(--paper);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer-logo em { font-style: italic; color: var(--red); }
.footer-links {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}
.footer-links a {
  font-size: 13px;
  color: rgba(245,241,232,0.4);
  text-decoration: none;
  transition: color .2s;
}
.footer-links a:hover { color: rgba(245,241,232,0.75); }
.footer-copy {
  width: 100%;
  font-size: 12px;
  color: rgba(245,241,232,0.2);
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(245,241,232,0.06);
  text-align: center;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .hero-inner {
    grid-template-columns: 1fr;
    padding: 80px 24px 60px;
    gap: 48px;
  }
  .hero-proof { display: none; }
  .vs-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }
  .vs-divider { display: none; }
  .vs-col.old { border-radius: 16px 16px 0 0; }
  .vs-col.new { border-radius: 0 0 16px 16px; }
  .numbers-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .qualify-grid { grid-template-columns: 1fr; gap: 40px; }
  .apply-form { padding: 28px 20px; }
  .form-row { grid-template-columns: 1fr; }
  .form-submit-row { flex-direction: column; align-items: stretch; }
  .form-disclaimer { max-width: 100%; }
  .submit-btn { width: 100%; justify-content: center; }
  .vs-section, .qualify-section { padding: 72px 20px; }
  .how-section, .apply-section { padding: 72px 20px; }
  .numbers-strip { padding: 48px 20px; }
}
</style>
</head>
<body>

<!-- ══ NAV ══ -->
<nav class="nav" id="nav">
  <a href="/" class="logo">
    <svg viewBox="0 0 28 28" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 25 L12 16 M25 3 L16 12" stroke="#14110d" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="14" cy="14" r="2.8" fill="#c8281c"/>
      <path d="M1 27 L5 23 M23 5 L27 1" stroke="#c8281c" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
    Agent <span class="logo-joust">Joust</span>
  </a>
  <div class="nav-links">
    <a href="/#how-it-works">How it works</a>
    <a href="/for-agents/" aria-current="page">For agents</a>
    <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
    <a href="/#start" class="nav-cta">Get 3 quotes</a>
  </div>
</nav>

<!-- ══ HERO ══ -->
<section class="hero">
  <div class="hero-inner">

    <div class="hero-left">
      <div class="hero-label">For licensed agents</div>
      <h1 class="hero-headline">
        Stop buying<br>leads. <em>Start<br>winning</em> consumers.
      </h1>
      <p class="hero-sub">
        AgentJoust delivers life insurance buyers who are already comparing proposals —
        and you compete on what you do best, not on who dials fastest.
        No cold calls. No spam complaints. No wasted hours.
      </p>
      <div class="hero-actions">
        <a href="#apply" class="btn-primary">
          Apply to join
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#how-it-works" class="btn-ghost">
          See how it works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>

    <div class="hero-proof">
      <div class="proof-card">
        <span class="proof-icon">🎯</span>
        <div class="proof-title">Buyers, not leads</div>
        <p class="proof-body">Every consumer on AgentJoust has already decided they need life insurance. You're competing for the sale, not trying to create demand.</p>
      </div>
      <div class="proof-card">
        <span class="proof-icon">⚔️</span>
        <div class="proof-title">Win on merit</div>
        <p class="proof-body">Three agents submit blind proposals. The consumer picks based on your coverage, price, and approach — not who called first.</p>
      </div>
      <div class="proof-card">
        <span class="proof-icon">🛡️</span>
        <div class="proof-title">Zero compliance risk</div>
        <p class="proof-body">We handle consent, TCPA compliance, and contact management. You focus on writing business.</p>
      </div>
    </div>

  </div>
</section>

<!-- ══ OLD WAY VS JOUST ══ -->
<section class="vs-section">
  <div class="section-label">The difference</div>
  <h2 class="section-headline">The old way is costing you.</h2>
  <p class="section-sub">Recycled leads, race-to-dial, spam complaints — or a platform built around the agent who brings the best proposal.</p>

  <div class="vs-grid">
    <div class="vs-col old">
      <div class="vs-badge">Traditional lead buying</div>
      <div class="vs-col-title">Buy a name, hope for the best</div>
      <ul class="vs-list">
        <li>
          <span class="vs-icon">✕</span>
          Leads sold to 5+ agents simultaneously
        </li>
        <li>
          <span class="vs-icon">✕</span>
          Race to call first — quality doesn't matter
        </li>
        <li>
          <span class="vs-icon">✕</span>
          Consumers have no idea who's calling or why
        </li>
        <li>
          <span class="vs-icon">✕</span>
          Spam complaints and do-not-call risk
        </li>
        <li>
          <span class="vs-icon">✕</span>
          10–15% close rate on a good day
        </li>
        <li>
          <span class="vs-icon">✕</span>
          Pay whether you close or not
        </li>
      </ul>
    </div>

    <div class="vs-divider">
      <div class="vs-pill">vs</div>
    </div>

    <div class="vs-col new">
      <div class="vs-badge">AgentJoust</div>
      <div class="vs-col-title">Compete for buyers who've decided</div>
      <ul class="vs-list">
        <li>
          <span class="vs-icon">✓</span>
          Exclusive 3-agent competition — not a data dump
        </li>
        <li>
          <span class="vs-icon">✓</span>
          Win on proposal quality, not dial speed
        </li>
        <li>
          <span class="vs-icon">✓</span>
          Consumers know they're reviewing 3 proposals
        </li>
        <li>
          <span class="vs-icon">✓</span>
          Full TCPA consent on file before any contact
        </li>
        <li>
          <span class="vs-icon">✓</span>
          Higher intent = higher close rates
        </li>
        <li>
          <span class="vs-icon">✓</span>
          Pay only when you're in a joust — no wasted spend
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- ══ HOW IT WORKS — AGENT VIEW ══ -->
<section class="how-section" id="how-it-works">
  <div class="how-inner">
    <div class="section-label">Your side of the joust</div>
    <h2 class="section-headline">Three steps. One winner. You.</h2>
    <p class="section-sub">Here's exactly what happens from the moment a consumer enters the arena.</p>

    <div class="steps-timeline">

      <div class="timeline-step">
        <div class="tl-left">
          <div class="tl-dot"></div>
          <div class="tl-line"></div>
        </div>
        <div class="tl-right">
          <div class="tl-num">Step 01</div>
          <div class="tl-title">You receive the brief</div>
          <p class="tl-body">A consumer submits their coverage needs — age, health class, face amount, term length, and budget. <strong>You get a clear, detailed brief</strong> — no guessing, no dead-end calls. You know exactly what they're shopping for before you build anything.</p>
          <div class="tl-note">⚡ Average brief delivery: under 4 minutes</div>
        </div>
      </div>

      <div class="timeline-step">
        <div class="tl-left">
          <div class="tl-dot"></div>
          <div class="tl-line"></div>
        </div>
        <div class="tl-right">
          <div class="tl-num">Step 02</div>
          <div class="tl-title">You submit your best proposal</div>
          <p class="tl-body">Build your proposal — carrier, rate, coverage structure, any differentiators you bring. <strong>Submissions are blind</strong>: you don't see your competitors' proposals and they don't see yours. The best offer wins, full stop. You have a set window to respond before the round closes.</p>
          <div class="tl-note">🕐 Standard response window: 24 hours</div>
        </div>
      </div>

      <div class="timeline-step">
        <div class="tl-left">
          <div class="tl-dot"></div>
          <div class="tl-line"></div>
        </div>
        <div class="tl-right">
          <div class="tl-num">Step 03</div>
          <div class="tl-title">Consumer crowns the winner</div>
          <p class="tl-body">The consumer reviews all three proposals side by side and picks their champion. <strong>If they choose you</strong>, you're connected immediately — they've already compared, already decided, and are ready to move forward. No pitch needed. Just close.</p>
          <div class="tl-note">🏆 Winner gets exclusive contact info + warm intro</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ NUMBERS ══ -->
<div class="numbers-strip">
  <div class="numbers-grid">
    <div class="num-item">
      <div class="num">3<span>x</span></div>
      <div class="label">Higher intent than<br>traditional leads</div>
    </div>
    <div class="num-item">
      <div class="num">0</div>
      <div class="label">Spam complaints<br>on joust wins</div>
    </div>
    <div class="num-item">
      <div class="num">24<span>hr</span></div>
      <div class="label">Max response window<br>per joust</div>
    </div>
    <div class="num-item">
      <div class="num">50</div>
      <div class="label">States — we work<br>with licensed agents nationwide</div>
    </div>
  </div>
</div>

<!-- ══ WHO QUALIFIES ══ -->
<section class="qualify-section">
  <div class="qualify-inner">
    <div class="section-label">Requirements</div>
    <h2 class="section-headline">Who we're looking for</h2>
    <p class="section-sub">AgentJoust is a curated network. We keep it selective so every consumer gets three serious proposals — not three cold reads.</p>

    <div class="qualify-grid">
      <div>
        <div class="qualify-col-title">You should apply if…</div>
        <ul class="qualify-list">
          <li>
            <span class="q-check yes">✓</span>
            You hold an active life insurance license in at least one state
          </li>
          <li>
            <span class="q-check yes">✓</span>
            You're appointed with one or more A-rated term or permanent life carriers
          </li>
          <li>
            <span class="q-check yes">✓</span>
            You respond to leads within 24 hours — reliably
          </li>
          <li>
            <span class="q-check yes">✓</span>
            You want to compete on proposal quality, not speed-to-dial
          </li>
          <li>
            <span class="q-check yes">✓</span>
            You're independent or work at an IMO that allows direct writing
          </li>
          <li>
            <span class="q-check yes">✓</span>
            You're comfortable with a transparent, consumer-first process
          </li>
        </ul>
      </div>
      <div>
        <div class="qualify-col-title">This isn't for you if…</div>
        <ul class="qualify-list">
          <li>
            <span class="q-check no">✕</span>
            You rely on pressure tactics or urgency selling
          </li>
          <li>
            <span class="q-check no">✕</span>
            You're looking for raw leads to cold call
          </li>
          <li>
            <span class="q-check no">✕</span>
            Your license has active complaints or disciplinary actions
          </li>
          <li>
            <span class="q-check no">✕</span>
            You can't commit to a 24-hour response window
          </li>
          <li>
            <span class="q-check no">✕</span>
            You only represent a single captive carrier with limited options
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ══ APPLY FORM ══ -->
<section class="apply-section" id="apply">
  <div class="apply-inner">
    <div class="section-label">Join the arena</div>
    <h2 class="section-headline">Apply to joust.</h2>
    <p class="section-sub">We review every application. If you're a fit, we'll reach out within 2 business days to get you set up.</p>

    <div class="apply-form">
      <form id="agentApplyForm" novalidate>

        <div class="form-row">
          <div class="field-group">
            <label for="first_name">First name</label>
            <input type="text" id="first_name" name="first_name" placeholder="Jane" autocomplete="given-name" required />
          </div>
          <div class="field-group">
            <label for="last_name">Last name</label>
            <input type="text" id="last_name" name="last_name" placeholder="Smith" autocomplete="family-name" required />
          </div>
        </div>

        <div class="form-row">
          <div class="field-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="jane@agency.com" autocomplete="email" required />
          </div>
          <div class="field-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" autocomplete="tel" required />
          </div>
        </div>

        <div class="form-row">
          <div class="field-group">
            <label for="npn">NPN #</label>
            <input type="text" id="npn" name="npn" placeholder="12345678" inputmode="numeric" />
          </div>
          <div class="field-group">
            <label for="license_states">Licensed states</label>
            <input type="text" id="license_states" name="license_states" placeholder="TX, FL, CA…" />
          </div>
        </div>

        <div class="form-row full">
          <div class="field-group">
            <label for="carriers">Carriers you're appointed with</label>
            <input type="text" id="carriers" name="carriers" placeholder="Protective, Banner, Transamerica…" />
          </div>
        </div>

        <div class="form-row full">
          <div class="field-group">
            <label for="message">Anything else we should know? (optional)</label>
            <textarea id="message" name="message" placeholder="Years in the business, production volume, why you want to joust…"></textarea>
          </div>
        </div>

        <hr class="form-divider" />

        <div class="form-submit-row">
          <p class="form-disclaimer">By submitting you agree to be contacted by AgentJoust regarding your application. We don't sell your info.</p>
          <button type="submit" class="submit-btn" id="applySubmit">
            Submit application
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>

        <div class="form-message" id="applyMessage"></div>

      </form>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer class="footer">
  <div class="footer-inner">
    <a href="/" class="footer-logo">
      Agent <em>Joust</em>
    </a>
    <nav class="footer-links">
      <a href="/">Home</a>
      <a href="/#how-it-works">How it works</a>
      <a href="/for-agents/">For agents</a>
      <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
    </nav>
  </div>
  <div class="footer-inner">
    <p class="footer-copy">© ${new Date().getFullYear()} AgentJoust — Independent agent competition platform. Not affiliated with any carrier.</p>
  </div>
</footer>

<script>
// ── Nav scroll state ──────────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Smooth scroll for anchor links ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Apply form ────────────────────────────────────────────────────────────────
document.getElementById('agentApplyForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('applySubmit');
  const msg = document.getElementById('applyMessage');

  btn.disabled = true;
  btn.textContent = 'Submitting…';
  msg.className = 'form-message';
  msg.style.display = 'none';

  const fd = new FormData(this);
  const payload = {
    form_type:      'agent_application',
    source:         'agentjoust.com',
    first_name:     fd.get('first_name') || '',
    last_name:      fd.get('last_name')  || '',
    email:          fd.get('email')      || '',
    phone:          fd.get('phone')      || '',
    npn:            fd.get('npn')        || '',
    license_states: fd.get('license_states') || '',
    carriers:       fd.get('carriers')   || '',
    message:        fd.get('message')    || '',
  };

  try {
    const res = await fetch('${apiUrl}/leads/web', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      msg.textContent = '✓ Application received! We'll be in touch within 2 business days.';
      msg.className = 'form-message success';
      msg.style.display = 'block';
      this.reset();
    } else {
      throw new Error('server');
    }
  } catch {
    msg.textContent = 'Something went wrong — please email us at hello@agentjoust.com.';
    msg.className = 'form-message error';
    msg.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Submit application <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
});
</script>

</body>
</html>`
}

module.exports = { forAgents }
