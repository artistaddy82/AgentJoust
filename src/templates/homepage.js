'use strict'

function homepage(config) {
  const apiUrl = config.apiUrl || 'https://sidecarleads.com'

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AgentJoust — Three agents compete. You win.</title>
<meta name="description" content="Compare three life insurance proposals from top licensed independent agents. Your contact info stays locked until you choose your winner — agents compete completely blind." />

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
  --rule: #1a1611;
  --red: #c8281c;
  --red-deep: #9a1d13;
  --gold: #b8923a;
  --green: #2d5a3d;
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
  position: relative;
}

/* Paper grain texture */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(20,17,13,0.025) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(200,40,28,0.02) 0%, transparent 40%);
  mix-blend-mode: multiply;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.4;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0 0.05 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ============ NAV ============ */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 22px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(245, 241, 232, 0.72);
  border-bottom: 1px solid transparent;
  transition: border-color .3s, background .3s;
}
.nav.scrolled {
  border-bottom-color: rgba(20,17,13,.08);
}
.logo {
  font-family: 'Fraunces', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-mark {
  width: 26px;
  height: 26px;
  display: inline-block;
}
.logo span { color: var(--red); font-style: italic; }

.nav-links {
  display: flex;
  gap: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
}
.nav-links a {
  text-decoration: none;
  color: inherit;
  transition: color .2s;
}
.nav-links a:hover { color: var(--red); }
.nav-my-quotes { color: var(--muted) !important; }
.nav-my-quotes:hover { color: var(--red) !important; }

.nav-cta {
  background: var(--ink);
  color: var(--paper);
  padding: 10px 18px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: transform .2s, background .2s;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
.nav-cta:hover { background: var(--red); transform: translateY(-1px); }

/* ============ HERO ============ */
.hero {
  min-height: 72vh;
  padding-top: 72px;
  position: relative;
  z-index: 3;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  background-image: url('/img/jousters.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
  /* True transparency fade on the image — paper shows through naturally */
  -webkit-mask-image: linear-gradient(to right,
    transparent 0%,
    rgba(0,0,0,0.08) 15%,
    rgba(0,0,0,0.35) 32%,
    rgba(0,0,0,0.7) 50%);
  mask-image: linear-gradient(to right,
    transparent 0%,
    rgba(0,0,0,0.08) 15%,
    rgba(0,0,0,0.35) 32%,
    rgba(0,0,0,0.7) 50%);
}

/* Paper-tone wash over the whole image — softens the photo to match the cream palette */
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(245, 241, 232, 0.62);
  z-index: 1;
  pointer-events: none;
}

/* Soft fade at bottom to blend image into stat row */
.hero-bg::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  background: linear-gradient(to bottom,
    transparent 0%,
    var(--paper) 100%);
  z-index: 2;
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 40px 60px;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-content {
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(-0.3deg); }
}

/* Subtle red glow behind illustration */
.hero-illustration::before {
  content: '';
  position: absolute;
  inset: 10% 5%;
  background: radial-gradient(ellipse at center, rgba(200,40,28,0.08) 0%, transparent 60%);
  z-index: -1;
}

.fight-card {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.fight-card::before, .fight-card::after {
  content: '';
  height: 1px;
  background: var(--red);
  flex: 0 0 32px;
}
.fight-card::after { flex: 1; }

.headline {
  font-family: 'Fraunces', serif;
  font-size: clamp(56px, 8vw, 116px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.035em;
  margin-bottom: 36px;
  font-variation-settings: "opsz" 144;
}
.headline .line { display: block; }
.headline em {
  font-style: italic;
  font-weight: 300;
  color: var(--red);
}

.subhead {
  font-size: clamp(17px, 1.5vw, 21px);
  color: var(--ink-soft);
  max-width: 640px;
  line-height: 1.45;
  margin-bottom: 48px;
  font-weight: 400;
}
.subhead strong {
  font-weight: 600;
  color: var(--ink);
  border-bottom: 2px solid var(--red);
  padding-bottom: 1px;
}

.hero-cta-row {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: var(--ink);
  color: var(--paper);
  padding: 18px 32px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: transform .2s, background .2s, box-shadow .2s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  box-shadow: var(--shadow);
}
.btn-primary:hover {
  background: var(--red);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lift);
}
.btn-primary svg { transition: transform .2s; }
.btn-primary:hover svg { transform: translateX(4px); }

.btn-secondary {
  color: var(--ink);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color .2s, border-color .2s;
}
.btn-secondary:hover { color: var(--red); border-color: var(--red); }

.hero-meta {
  position: sticky;
  bottom: 0;
  padding: 28px 40px 24px;
  border-top: 1px solid rgba(20,17,13,.12);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  z-index: 10;
  background: var(--paper);
}
.meta-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.meta-item .num {
  font-family: 'Fraunces', serif;
  font-size: 44px;
  font-weight: 600;
  letter-spacing: -0.025em;
  display: block;
  line-height: 1;
  margin-bottom: 10px;
}
.meta-item .num em {
  font-style: italic;
  color: var(--red);
  font-weight: 500;
}
.meta-item .label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  font-weight: 500;
}

/* ============ DECORATIVE LANCES ============ */
.lance-decoration {
  position: absolute;
  pointer-events: none;
  opacity: 0.08;
  z-index: -1;
}
.lance-decoration.top-right {
  top: 80px;
  right: -100px;
  width: 600px;
  transform: rotate(-15deg);
}

/* ============ SCROLL STAGE ============ */
.stage {
  min-height: 320vh;
  position: relative;
  z-index: 3;
  margin-top: 80px;
}

.stage-pin {
  position: sticky;
  top: 72px;
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 40px;
}

/* ── VERTICAL STEP RAIL (left side) ── */
.step-rail {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0;
  z-index: 5;
  pointer-events: none;
}
.rail-step {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  position: relative;
}
/* connecting line between steps */
.rail-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 14px;
  width: 1px;
  height: calc(100% + 12px);
  background: rgba(20,17,13,.15);
  transition: background .4s;
}
.rail-step.active:not(:last-child)::after {
  background: var(--green);
}
.rail-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid rgba(20,17,13,.2);
  background: transparent;
  flex-shrink: 0;
  margin-top: 3px;
  transition: border-color .4s, background .4s, box-shadow .4s;
}
.rail-step.active .rail-dot {
  border-color: var(--green);
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(45,90,61,.18);
}
.rail-step.past .rail-dot {
  border-color: var(--green);
  background: var(--green);
}
.rail-text {
  padding-bottom: 36px;
}
.rail-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
  transition: color .4s;
}
.rail-title {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 19px;
  letter-spacing: -0.01em;
  color: rgba(20,17,13,.35);
  line-height: 1.25;
  font-weight: 400;
  transition: color .4s;
}
.rail-step.active .rail-num  { color: var(--green); }
.rail-step.active .rail-title { color: var(--ink); font-weight: 500; }
.rail-step.past   .rail-title { color: rgba(20,17,13,.5); }

/* ── SCROLL HINT ARROW ── */
.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 5;
  pointer-events: none;
  transition: opacity .6s;
}
.scroll-hint.hidden { opacity: 0; }
.scroll-hint-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
.scroll-arrow {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(20,17,13,.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: arrowBounce 2s ease-in-out infinite;
}
.scroll-arrow svg {
  color: var(--ink-soft);
}
@keyframes arrowBounce {
  0%, 100% { transform: translateY(0);   opacity: 1; }
  50%       { transform: translateY(6px); opacity: 0.6; }
}

/* THE FORM (Step 1) */
/* ── FORM CARD ── */
.form-block {
  position: absolute;
  top: 0;
  width: min(520px, 90vw);
  background: #fff;
  border: 1px solid rgba(20,17,13,.1);
  border-radius: 0 0 18px 18px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: opacity .6s, transform .6s cubic-bezier(0.65, 0, 0.35, 1);
}
.form-block.exit {
  opacity: 0;
  transform: translateY(-40px) scale(0.94);
  pointer-events: none;
}

/* ── Step tracker bar ── */
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
  position: relative;
}
.form-step-tab:last-child { border-right: none; }
.form-step-tab.active  { background: rgba(45,90,61,.05); }
.form-step-tab.done    { background: rgba(45,90,61,.03); }
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
.form-step-tab.active .step-tab-num {
  background: var(--green);
  border-color: var(--green);
  color: #fff;
}
.form-step-tab.done .step-tab-num {
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
.form-step-tab.active .step-tab-label { color: var(--green); }
.form-step-tab.done   .step-tab-label { color: var(--green); opacity: 0.7; }

/* ── Panel container ── */
.form-panels {
  overflow: hidden;
  position: relative;
}
.form-panel {
  padding: 32px 36px 36px;
  display: none;
  animation: panelIn .3s ease;
}
.form-panel.active { display: block; }
@keyframes panelIn {
  from { opacity: 0; transform: translateX(18px); }
  to   { opacity: 1; transform: translateX(0); }
}
.panel-back {
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
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
.panel-sub {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 1.55;
}

/* ── Fields ── */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
.form-row.full { grid-template-columns: 1fr; }
.form-field { position: relative; }
.form-field label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: block;
  margin-bottom: 6px;
}
.form-field input, .form-field select {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid rgba(20,17,13,.18);
  border-radius: 10px;
  font-size: 14px;
  font-family: inherit;
  background: var(--paper);
  color: var(--ink);
  transition: border-color .2s, background .2s;
  -webkit-appearance: none;
}
.form-field input:focus, .form-field select:focus {
  outline: none;
  border-color: var(--ink);
  background: #fff;
}
.form-field input::placeholder { color: rgba(20,17,13,.3); }

/* ── Buttons ── */
.form-next, .form-submit {
  width: 100%;
  margin-top: 10px;
  background: var(--green);
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background .2s, transform .2s;
}
.form-next:hover, .form-submit:hover { background: #1e3d29; transform: translateY(-1px); }

/* ── Sealed note (panel 3) ── */
.form-sealed-note {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
  background: rgba(45,90,61,0.07);
  border: 1px solid rgba(45,90,61,0.18);
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 18px;
}
.form-privacy {
  margin-top: 12px;
  font-size: 11px;
  color: var(--muted);
  text-align: center;
  line-height: 1.5;
}
.form-privacy svg { vertical-align: -3px; margin-right: 4px; }

/* THREE CARDS (Step 2) */
.cards-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 80px 40px 0;
  opacity: 0;
  transition: opacity .6s;
  pointer-events: none;
}
.cards-stage.active { opacity: 1; pointer-events: auto; }

.proposal-card {
  flex: 0 0 300px;
  background: #fff;
  border: 1px solid rgba(20,17,13,.1);
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow);
  position: relative;
  transition:
    transform .8s cubic-bezier(0.65, 0, 0.35, 1),
    box-shadow .6s,
    border-color .6s,
    opacity .6s;
}
.proposal-card[data-pos="left"] {
  transform: translateY(0) rotate(-2deg);
}
.proposal-card[data-pos="center"] {
  transform: translateY(0) scale(1);
  z-index: 2;
}
.proposal-card[data-pos="right"] {
  transform: translateY(0) rotate(2deg);
}

.cards-stage.crowned .proposal-card[data-pos="left"] {
  transform: translateY(20px) translateX(-12px) rotate(-6deg) scale(0.95);
  opacity: 0.55;
}
.cards-stage.crowned .proposal-card[data-pos="right"] {
  transform: translateY(20px) translateX(12px) rotate(6deg) scale(0.95);
  opacity: 0.55;
}
.cards-stage.crowned .proposal-card[data-pos="center"] {
  transform: translateY(60px) scale(1.08);
  border-color: var(--gold);
  box-shadow: var(--shadow-lift), 0 0 0 3px rgba(184,146,58,.15);
  z-index: 3;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(20,17,13,.08);
}
.agent-id {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.agent-rating {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--ink);
}
.agent-rating strong { font-weight: 600; }

.card-carrier {
  font-family: 'Fraunces', serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}
.card-policy {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 24px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em;
}

.price-block {
  margin-bottom: 20px;
}
.price-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 4px;
}
.price-amount {
  font-family: 'Fraunces', serif;
  font-size: 44px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.price-amount .currency { font-size: 22px; color: var(--muted); }
.price-amount .period { font-size: 14px; color: var(--muted); font-style: italic; margin-left: 4px; }

.coverage-list {
  list-style: none;
  font-size: 13px;
  color: var(--ink-soft);
}
.coverage-list li {
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(20,17,13,.08);
}
.coverage-list li:last-child { border-bottom: none; }
.coverage-list span:last-child { font-weight: 500; color: var(--ink); }

.crown-badge {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: var(--gold);
  color: var(--paper);
  padding: 6px 14px;
  border-radius: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: transform .5s cubic-bezier(0.34, 1.56, 0.64, 1) .3s;
}
.cards-stage.crowned .proposal-card[data-pos="center"] .crown-badge {
  transform: translateX(-50%) scale(1);
}

.crown-svg {
  position: absolute;
  top: -64px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  width: 56px;
  height: 56px;
  transition: transform .6s cubic-bezier(0.34, 1.56, 0.64, 1) .5s;
}
.cards-stage.crowned .proposal-card[data-pos="center"] .crown-svg {
  transform: translateX(-50%) scale(1);
}

/* Lance/clash motion lines */
.clash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 2px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .4s;
  pointer-events: none;
}
.clash.active { opacity: 1; }
.clash::before, .clash::after {
  content: '';
  position: absolute;
  height: 1px;
  background: var(--red);
}
.clash::before {
  width: 40px;
  left: -50px;
  top: 0;
  animation: clashLeft 1.5s ease-out infinite;
}
.clash::after {
  width: 40px;
  right: -50px;
  top: 0;
  animation: clashRight 1.5s ease-out infinite;
}
@keyframes clashLeft {
  0%, 100% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(20px); opacity: 1; }
}
@keyframes clashRight {
  0%, 100% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(-20px); opacity: 1; }
}

/* ============ HOW IT WORKS ============ */
.how-section {
  padding: 160px 40px 120px;
  position: relative;
  z-index: 3;
  max-width: 1280px;
  margin: 0 auto;
}
.section-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 20px;
}
.section-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -0.025em;
  margin-bottom: 80px;
  max-width: 900px;
}
.section-title em { font-style: italic; color: var(--red); }

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(20,17,13,.1);
  border: 1px solid rgba(20,17,13,.1);
  border-radius: 16px;
  overflow: hidden;
}
.step-card {
  background: var(--paper);
  padding: 40px 32px;
  position: relative;
  transition: background .3s;
}
.step-card:hover { background: #fff; }
.step-num {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 64px;
  font-weight: 300;
  color: var(--red);
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.04em;
}
.step-title {
  font-family: 'Fraunces', serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.015em;
  margin-bottom: 12px;
}
.step-text {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.55;
}
.step-text strong { color: var(--ink); font-weight: 600; }

/* ============ WHY DIFFERENT ============ */
.why-section {
  padding: 80px 40px 140px;
  position: relative;
  z-index: 3;
  max-width: 1280px;
  margin: 0 auto;
}

.compare-table {
  border: 1px solid rgba(20,17,13,.12);
  border-radius: 18px;
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow);
}
.compare-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid rgba(20,17,13,.08);
}
.compare-row:last-child { border-bottom: none; }
.compare-row.head {
  background: var(--ink);
  color: var(--paper);
}
.compare-row.head .cell {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245,241,232,.7);
  padding: 18px 24px;
}
.compare-row.head .cell.brand {
  color: var(--paper);
  font-family: 'Fraunces', serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-transform: none;
}
.compare-row.head .cell.brand em { color: var(--red); font-style: italic; }
.cell {
  padding: 22px 24px;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cell.label {
  font-weight: 500;
  color: var(--ink);
}
.cell.yes { color: var(--green); font-weight: 500; }
.cell.no { color: var(--muted); }
.cell.yes::before {
  content: '';
  width: 18px; height: 18px;
  background: var(--green);
  border-radius: 50%;
  display: inline-block;
  flex: 0 0 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f5f1e8' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
}
.cell.no::before {
  content: '';
  width: 18px; height: 18px;
  border: 1.5px solid rgba(20,17,13,.2);
  border-radius: 50%;
  display: inline-block;
  flex: 0 0 18px;
  position: relative;
}

/* ============ FINAL CTA ============ */
.final-cta {
  padding: 120px 40px;
  position: relative;
  z-index: 3;
  text-align: center;
  background: var(--ink);
  color: var(--paper);
  margin: 0 40px 40px;
  border-radius: 24px;
  overflow: hidden;
}
.final-cta::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(200,40,28,0.4) 0%, transparent 60%);
  opacity: 0.7;
}
.final-cta h2 {
  font-family: 'Fraunces', serif;
  font-size: clamp(44px, 6vw, 80px);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.final-cta h2 em { font-style: italic; color: #ff8a7a; font-weight: 300; }
.final-cta p {
  color: rgba(245,241,232,.7);
  font-size: 18px;
  max-width: 540px;
  margin: 0 auto 36px;
  position: relative;
}
.final-cta .btn-primary {
  background: var(--red);
  color: #fff;
  position: relative;
}
.final-cta .btn-primary:hover { background: #fff; color: var(--ink); }

/* ============ FOOTER ============ */
.footer {
  padding: 40px 40px 60px;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--muted);
  flex-wrap: wrap;
  gap: 20px;
}
.footer-links { display: flex; gap: 24px; }
.footer-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color .2s;
}
.footer-links a:hover { color: var(--red); }
.footer-fine {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.05em;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
  .nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .hero {
    padding-top: 80px;
  }
  .hero-bg {
    width: 100%;
    opacity: 0.45;
  }
  .hero-bg::before {
    background: linear-gradient(to bottom,
      rgba(245, 241, 232, 0.6) 0%,
      rgba(245, 241, 232, 0.85) 60%,
      var(--paper) 100%);
  }
  .hero-inner {
    padding: 40px 20px 40px;
  }
  .hero-content {
    max-width: 100%;
  }
  .hero-meta {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-left: calc(-1 * (50vw - 50%) - 20px);
    margin-right: calc(-1 * (50vw - 50%) - 20px);
    padding: 28px 20px 24px;
  }
  .meta-item .num { font-size: 36px; }
  .meta-item .label { font-size: 10px; letter-spacing: 0.1em; }
  .stage { min-height: 280vh; }
  .cards-stage {
    flex-direction: column;
    gap: 12px;
    padding: 80px 20px 20px;
    overflow-y: auto;
  }
  .proposal-card { flex: 0 0 auto; width: 100%; max-width: 360px; }
  .proposal-card[data-pos] { transform: none; }
  .cards-stage.crowned .proposal-card[data-pos="left"],
  .cards-stage.crowned .proposal-card[data-pos="right"] {
    transform: scale(0.94);
  }
  .cards-stage.crowned .proposal-card[data-pos="center"] {
    transform: scale(1.02);
  }
  .stage-pin { padding: 20px; }
  .step-rail {
    left: 10px;
    gap: 0;
  }
  .rail-text { display: none; }
  .rail-dot  { width: 9px; height: 9px; margin-top: 0; }
  .rail-step {
    align-items: center;
    padding-bottom: 28px;
  }
  .rail-step:last-child { padding-bottom: 0; }
  .rail-step:not(:last-child)::after {
    left: 4px;
    top: 11px;
    height: calc(100% + 2px);
  }
  .form-block { padding: 28px; width: calc(100% - 40px); }
  .steps-grid { grid-template-columns: 1fr; }
  .compare-row { grid-template-columns: 1.5fr 1fr 1fr; }
  .cell { padding: 16px 14px; font-size: 13px; }
  .how-section, .why-section { padding: 80px 20px; }
  .final-cta { margin: 0 20px 20px; padding: 80px 24px; }
  .footer { padding: 30px 20px; }
}
</style>
</head>
<body>

<!-- NAV -->
<nav class="nav" id="nav">
  <div class="logo">
    <svg class="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28 L14 18 M28 4 L18 14" stroke="#14110d" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="3" fill="#c8281c"/>
      <path d="M2 30 L6 26 M26 6 L30 2" stroke="#c8281c" stroke-width="2" stroke-linecap="round"/>
    </svg>
    Agent<span>Joust</span>
  </div>
  <div class="nav-links">
    <a href="#how">How it works</a>
    <a href="#why">Why us</a>
    <a href="#agents">For agents</a>
    <a href="${config.myUrl || 'https://my.agentjoust.com'}" class="nav-my-quotes">My Quotes</a>
  </div>
  <button class="nav-cta" onclick="scrollToForm()">Get 3 quotes</button>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-inner">
    <div class="hero-content">
      <div class="fight-card">Life Insurance</div>
      <h1 class="headline">
        <span class="line">Agents compete.</span>
        <span class="line">You <em>win.</em></span>
      </h1>

      <p class="subhead">
        Compare three life insurance proposals from top licensed independent agents. Your contact info is <strong>locked until you choose your winner</strong> — agents compete completely blind.
      </p>

      <div class="hero-cta-row">
        <button class="btn-primary" onclick="scrollToForm()">
          Start the joust
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
        <a href="#how" class="btn-secondary">See how it works</a>
      </div>
    </div>

  </div>
  <div class="hero-meta">
    <div class="meta-item">
      <span class="num"><em>3</em></span>
      <span class="label">Proposals · side by side</span>
    </div>
    <div class="meta-item">
      <span class="num">0</span>
      <span class="label">Agent contact until you pick</span>
    </div>
    <div class="meta-item">
      <span class="num">24<em>hr</em></span>
      <span class="label">Turnaround, typical</span>
    </div>
    <div class="meta-item">
      <span class="num">100<em>%</em></span>
      <span class="label">Licensed independent agents</span>
    </div>
  </div>
</section>

<!-- THE SCROLL STAGE -->
<section class="stage" id="form">
  <div class="stage-pin">

    <!-- Vertical step rail -->
    <div class="step-rail">
      <div class="rail-step active" id="step1">
        <div class="rail-dot"></div>
        <div class="rail-text">
          <div class="rail-num">Step 01</div>
          <div class="rail-title">You set<br>the terms</div>
        </div>
      </div>
      <div class="rail-step" id="step2">
        <div class="rail-dot"></div>
        <div class="rail-text">
          <div class="rail-num">Step 02</div>
          <div class="rail-title">Three agents<br>joust</div>
        </div>
      </div>
      <div class="rail-step" id="step3">
        <div class="rail-dot"></div>
        <div class="rail-text">
          <div class="rail-num">Step 03</div>
          <div class="rail-title">You crown<br>the winner</div>
        </div>
      </div>
    </div>

    <!-- Scroll hint arrow -->
    <div class="scroll-hint" id="scrollHint">
      <div class="scroll-hint-label">Scroll</div>
      <div class="scroll-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
        </svg>
      </div>
    </div>

    <!-- The form -->
    <div class="form-block" id="formBlock">

      <!-- Step tracker -->
      <div class="form-steps-bar">
        <div class="form-step-tab active" id="tab1">
          <div class="step-tab-num">1</div>
          <div class="step-tab-label">Coverage</div>
        </div>
        <div class="form-step-tab" id="tab2">
          <div class="step-tab-num">2</div>
          <div class="step-tab-label">Health</div>
        </div>
        <div class="form-step-tab" id="tab3">
          <div class="step-tab-num">3</div>
          <div class="step-tab-label">Contact</div>
        </div>
      </div>

      <div class="form-panels">

        <!-- Panel 1 — Coverage -->
        <div class="form-panel active" id="panel1">
          <div class="panel-title">What are you<br>looking to <em>cover?</em></div>
          <p class="panel-sub">Pick the policy type and how much coverage you need.</p>

          <div class="form-row">
            <div class="form-field">
              <label>Policy type</label>
              <select id="aj-type">
                <option value="term">Term life</option>
                <option value="whole">Whole life</option>
                <option value="iul">Indexed universal (IUL)</option>
                <option value="not_sure">Not sure — show me options</option>
              </select>
            </div>
            <div class="form-field">
              <label>Term length</label>
              <select id="aj-term">
                <option value="10">10 years</option>
                <option value="20" selected>20 years</option>
                <option value="30">30 years</option>
                <option value="na">N/A — permanent</option>
              </select>
            </div>
          </div>
          <div class="form-row full">
            <div class="form-field">
              <label>Coverage amount</label>
              <select id="aj-coverage">
                <option value="100k">$100,000</option>
                <option value="250k">$250,000</option>
                <option value="500k" selected>$500,000</option>
                <option value="750k">$750,000</option>
                <option value="1m">$1,000,000</option>
                <option value="2m+">$2,000,000+</option>
              </select>
            </div>
          </div>
          <div class="form-row full">
            <div class="form-field">
              <label>Your state</label>
              <select id="aj-state">
                <option value="">Select your state…</option>
                <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <button class="form-next" onclick="goToPanel(2)">
            Next — Health info
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        <!-- Panel 2 — Health -->
        <div class="form-panel" id="panel2">
          <button class="panel-back" onclick="goToPanel(1)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <div class="panel-title">Tell us about<br>your <em>health.</em></div>
          <p class="panel-sub">Agents use this to price your policy accurately — no exam needed to get proposals.</p>

          <div class="form-row">
            <div class="form-field">
              <label>Date of birth</label>
              <input type="text" id="aj-dob" placeholder="MM / DD / YYYY" inputmode="numeric" maxlength="14" oninput="formatDob(this)" />
            </div>
            <div class="form-field">
              <label>Gender</label>
              <select id="aj-gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Tobacco use</label>
              <select id="aj-tobacco">
                <option value="never">Never</option>
                <option value="former">Quit 12+ months ago</option>
                <option value="current">Current smoker</option>
              </select>
            </div>
            <div class="form-field">
              <label>Health, generally</label>
              <select id="aj-health">
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="fair">Fair / some conditions</option>
              </select>
            </div>
          </div>
          <div class="form-row full">
            <div class="form-field">
              <label>Prescription medications</label>
              <select id="aj-meds" onchange="toggleMedsOther(this.value)">
                <option value="none">None currently</option>
                <option value="bp_chol">Blood pressure / Cholesterol</option>
                <option value="diabetes">Diabetes (Type 1 or 2)</option>
                <option value="heart">Heart / Cardiovascular</option>
                <option value="mental_health">Mental health (anxiety, depression, etc.)</option>
                <option value="cancer">Cancer history</option>
                <option value="other">Other / Multiple conditions</option>
              </select>
            </div>
          </div>
          <div class="form-row full" id="aj-meds-other-row" style="display:none;margin-top:-4px;">
            <div class="form-field">
              <label>Please describe</label>
              <input type="text" id="aj-meds-other" placeholder="e.g. thyroid, asthma, ADHD…" />
            </div>
          </div>

          <button class="form-next" onclick="goToPanel(3)">
            Next — Contact info
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        <!-- Panel 3 — Contact -->
        <div class="form-panel" id="panel3">
          <button class="panel-back" onclick="goToPanel(2)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <div class="panel-title">Last step —<br><em>how to reach you.</em></div>
          <div class="form-sealed-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Sealed until you choose your winner — agents never see this
          </div>

          <div class="form-row">
            <div class="form-field">
              <label>First name</label>
              <input type="text" id="aj-fname" placeholder="Jane" autocomplete="given-name" />
            </div>
            <div class="form-field">
              <label>Last name</label>
              <input type="text" id="aj-lname" placeholder="Smith" autocomplete="family-name" />
            </div>
          </div>
          <div class="form-row full">
            <div class="form-field">
              <label>Email</label>
              <input type="email" id="aj-email" placeholder="jane@email.com" autocomplete="email" />
            </div>
          </div>
          <div class="form-row full">
            <div class="form-field">
              <label>Phone</label>
              <input type="tel" id="aj-phone" placeholder="(555) 000-0000" autocomplete="tel" />
            </div>
          </div>

          <button class="form-submit" onclick="advanceStage()">
            Summon three agents ⚔
          </button>

          <p class="form-privacy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            Only your chosen winner gets your contact info. The other two agents never see it. Ever.
          </p>
        </div>

      </div>
    </div>

    <!-- The three cards -->
    <div class="cards-stage" id="cardsStage">

      <div class="proposal-card" data-pos="left">
        <div class="card-header">
          <span class="agent-id">Agent · 047</span>
          <span class="agent-rating"><strong>4.9</strong> ★</span>
        </div>
        <div class="card-carrier">Banner Life</div>
        <div class="card-policy">20-YR TERM · OPT</div>

        <div class="price-block">
          <div class="price-label">Monthly premium</div>
          <div class="price-amount">
            <span class="currency">$</span>42<span class="period">/mo</span>
          </div>
        </div>

        <ul class="coverage-list">
          <li><span>Coverage</span><span>$500,000</span></li>
          <li><span>Underwriting</span><span>Accelerated</span></li>
          <li><span>Conversion</span><span>Yes, age 70</span></li>
        </ul>
      </div>

      <div class="proposal-card" data-pos="center">
        <svg class="crown-svg" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 36 L14 18 L22 28 L28 14 L34 28 L42 18 L48 36 Z" fill="#b8923a" stroke="#14110d" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M8 36 L48 36 L46 44 L10 44 Z" fill="#9a7a2e" stroke="#14110d" stroke-width="1.5" stroke-linejoin="round"/>
          <circle cx="14" cy="18" r="2.5" fill="#c8281c"/>
          <circle cx="28" cy="14" r="2.5" fill="#c8281c"/>
          <circle cx="42" cy="18" r="2.5" fill="#c8281c"/>
        </svg>
        <span class="crown-badge">★ Winner</span>

        <div class="card-header">
          <span class="agent-id">Agent · 112</span>
          <span class="agent-rating"><strong>5.0</strong> ★</span>
        </div>
        <div class="card-carrier">Pacific Life</div>
        <div class="card-policy">20-YR TERM · PRO</div>

        <div class="price-block">
          <div class="price-label">Monthly premium</div>
          <div class="price-amount">
            <span class="currency">$</span>36<span class="period">/mo</span>
          </div>
        </div>

        <ul class="coverage-list">
          <li><span>Coverage</span><span>$500,000</span></li>
          <li><span>Underwriting</span><span>No exam</span></li>
          <li><span>Conversion</span><span>Yes, age 75</span></li>
        </ul>
      </div>

      <div class="proposal-card" data-pos="right">
        <div class="card-header">
          <span class="agent-id">Agent · 084</span>
          <span class="agent-rating"><strong>4.8</strong> ★</span>
        </div>
        <div class="card-carrier">Protective</div>
        <div class="card-policy">20-YR TERM · CL2</div>

        <div class="price-block">
          <div class="price-label">Monthly premium</div>
          <div class="price-amount">
            <span class="currency">$</span>44<span class="period">/mo</span>
          </div>
        </div>

        <ul class="coverage-list">
          <li><span>Coverage</span><span>$500,000</span></li>
          <li><span>Underwriting</span><span>Standard</span></li>
          <li><span>Conversion</span><span>Yes, age 70</span></li>
        </ul>
      </div>

      <div class="clash" id="clash"></div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how-section" id="how">
  <div class="section-tag">⚔ The Rules</div>
  <h2 class="section-title">A reverse auction for <em>your</em> business — not the other way around.</h2>

  <div class="steps-grid">
    <div class="step-card">
      <div class="step-num">i.</div>
      <h3 class="step-title">You set the terms</h3>
      <p class="step-text">Tell us your <strong>basics</strong> — coverage, health, and how to reach you. Your contact info is sealed in a vault the moment you submit. Agents never see it during the joust.</p>
    </div>
    <div class="step-card">
      <div class="step-num">ii.</div>
      <h3 class="step-title">Agents bid in private</h3>
      <p class="step-text">Three vetted, licensed independent agents review your profile and submit their <strong>best proposal</strong>. They can't see each other's bids.</p>
    </div>
    <div class="step-card">
      <div class="step-num">iii.</div>
      <h3 class="step-title">You crown the winner</h3>
      <p class="step-text">Compare side-by-side. <strong>Only the winner</strong> gets your contact info from us. The other two agents never see it. Ever.</p>
    </div>
  </div>
</section>

<!-- WHY DIFFERENT -->
<section class="why-section" id="why">
  <div class="section-tag">⚔ The Difference</div>
  <h2 class="section-title">The old way sells your number to <em>everyone.</em> We don't.</h2>

  <div class="compare-table">
    <div class="compare-row head">
      <div class="cell"></div>
      <div class="cell brand">Agent<em>Joust</em></div>
      <div class="cell">Typical lead site</div>
    </div>
    <div class="compare-row">
      <div class="cell label">Your contact info sealed until you choose a winner</div>
      <div class="cell yes">Yes</div>
      <div class="cell no">No</div>
    </div>
    <div class="compare-row">
      <div class="cell label">Agents compete on price &amp; terms</div>
      <div class="cell yes">Three, blind</div>
      <div class="cell no">No</div>
    </div>
    <div class="compare-row">
      <div class="cell label">Number sold to multiple agents</div>
      <div class="cell yes" style="color: var(--green);">Never</div>
      <div class="cell no" style="color: var(--red);">Often 5–8×</div>
    </div>
    <div class="compare-row">
      <div class="cell label">TCPA-compliant consent flow</div>
      <div class="cell yes">Yes</div>
      <div class="cell no">Varies</div>
    </div>
    <div class="compare-row">
      <div class="cell label">Independent agents (not captive)</div>
      <div class="cell yes">All of them</div>
      <div class="cell no">Mixed</div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta">
  <h2>Ready to make agents <em>fight</em> for your business?</h2>
  <p>Three proposals. Your contact info locked until you crown a winner. Typical turnaround within 24 hours.</p>
  <button class="btn-primary" onclick="scrollToForm()">
    Start the joust
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  </button>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div>© ${new Date().getFullYear()} AgentJoust. All rights reserved.</div>
  <div class="footer-links">
    <a href="/privacy/">Privacy</a>
    <a href="/terms/">Terms</a>
    <a href="/tcpa/">TCPA</a>
    <a href="/for-agents/">For agents</a>
  </div>
  <div class="footer-fine">NOT INSURANCE · A LEAD-MATCHING SERVICE</div>
</footer>


<script>
const API_URL = '${apiUrl}';

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll to form/stage
function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

// Stage choreography
const stage      = document.querySelector('.stage');
const formBlock  = document.getElementById('formBlock');
const cardsStage = document.getElementById('cardsStage');
const clash      = document.getElementById('clash');
const scrollHint = document.getElementById('scrollHint');
const railSteps  = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
];

let stageProgress = 0;
let manualAdvance = false;
let hasScrolled   = false;

function updateStage() {
  const rect        = stage.getBoundingClientRect();
  const stageHeight = stage.offsetHeight - window.innerHeight;
  const scrolled    = -rect.top;
  const progress    = Math.max(0, Math.min(1, scrolled / stageHeight));
  stageProgress     = progress;

  // Hide scroll hint once user starts scrolling
  if (scrolled > 40 && !hasScrolled) {
    hasScrolled = true;
    scrollHint.classList.add('hidden');
  }

  if (progress < 0.30 && !manualAdvance) {
    formBlock.classList.remove('exit');
    cardsStage.classList.remove('active', 'crowned');
    clash.classList.remove('active');
    setActiveStep(1);
  } else if (progress < 0.55) {
    formBlock.classList.add('exit');
    cardsStage.classList.add('active');
    cardsStage.classList.remove('crowned');
    clash.classList.add('active');
    setActiveStep(2);
  } else {
    formBlock.classList.add('exit');
    cardsStage.classList.add('active', 'crowned');
    clash.classList.remove('active');
    setActiveStep(3);
  }
}

function setActiveStep(n) {
  railSteps.forEach((el, i) => {
    el.classList.toggle('active', i === n - 1);
    el.classList.toggle('past',   i <  n - 1);
  });
}
window.addEventListener('scroll', updateStage, { passive: true });
window.addEventListener('resize', updateStage);
updateStage();

// "Summon three agents" — validate, submit to SidecarLeads, then animate
// ── DOB auto-format MM / DD / YYYY ───────────────────────────────────────────
function formatDob(el) {
  const pos = el.selectionStart;
  const prev = el.value;
  // Strip everything except digits
  const digits = prev.replace(/\D/g, '').slice(0, 8);
  let out = '';
  if (digits.length > 4)      out = digits.slice(0,2) + ' / ' + digits.slice(2,4) + ' / ' + digits.slice(4);
  else if (digits.length > 2) out = digits.slice(0,2) + ' / ' + digits.slice(2);
  else                        out = digits;
  el.value = out;
  // Restore cursor — move forward past separators when inserting
  const added = out.length - prev.length;
  el.setSelectionRange(pos + added, pos + added);
}

// ── Medications "other" reveal ────────────────────────────────────────────────
function toggleMedsOther(val) {
  const row = document.getElementById('aj-meds-other-row');
  row.style.display = val === 'other' ? 'grid' : 'none';
  if (val !== 'other') document.getElementById('aj-meds-other').value = '';
}

// ── 3-part form navigation ────────────────────────────────────────────────────
function goToPanel(n) {
  [1, 2, 3].forEach(i => {
    document.getElementById('panel' + i).classList.toggle('active', i === n);
    const tab = document.getElementById('tab' + i);
    tab.classList.toggle('active', i === n);
    tab.classList.toggle('done',   i < n);
  });
}

function advanceStage() {
  const fname    = document.getElementById('aj-fname').value.trim();
  const lname    = document.getElementById('aj-lname').value.trim();
  const email    = document.getElementById('aj-email').value.trim();
  const phone    = document.getElementById('aj-phone').value.trim();
  const dob      = document.getElementById('aj-dob').value.trim();
  const gender   = document.getElementById('aj-gender').value;
  const coverage = document.getElementById('aj-coverage').value;
  const type     = document.getElementById('aj-type').value;
  const term     = document.getElementById('aj-term').value;
  const tobacco  = document.getElementById('aj-tobacco').value;
  const health   = document.getElementById('aj-health').value;
  const meds      = document.getElementById('aj-meds').value;
  const medsOther = document.getElementById('aj-meds-other').value.trim();
  const state     = document.getElementById('aj-state').value;

  if (!state) {
    alert('Please select your state so we can match you with licensed agents.');
    goToPanel(1);
    return;
  }
  if (!fname) {
    alert('Please enter your first name.');
    return;
  }
  if (!email && !phone) {
    alert('Please enter your email or phone number so your winner can reach you.');
    return;
  }

  // Disable button to prevent double-submit
  const btn = document.querySelector('.form-submit');
  if (btn) { btn.disabled = true; btn.textContent = 'Launching your joust…'; }

  // Submit to my.agentjoust.com — generates unique token & sends magic link email
  fetch('${config.myUrl || 'https://my.agentjoust.com'}/api/submit', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lead_source:     'agentjoust-joust',
      first_name:      fname,
      last_name:       lname,
      email,
      phone,
      dob,
      gender,
      policy_type:     type,
      coverage_amount: coverage,
      term_length:     term,
      tobacco_use:     tobacco,
      health_class:    health,
      medications:     meds === 'other' && medsOther ? medsOther : meds,
      state,
    }),
  })
  .then(r => r.json())
  .then(json => {
    if (json.joustUrl) {
      window.location.href = json.joustUrl;
    } else {
      throw new Error(json.error || 'No joust URL returned');
    }
  })
  .catch(() => {
    // Fallback: scroll animation while we figure out what went wrong
    if (btn) { btn.disabled = false; btn.textContent = 'Start My Joust'; }
    manualAdvance = true;
    const rect = stage.getBoundingClientRect();
    const stageTop = window.scrollY + rect.top;
    const targetScroll = stageTop + (stage.offsetHeight - window.innerHeight) * 0.45;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setTimeout(() => { manualAdvance = false; }, 1500);
  });
}
</script>

</body>
</html>`
}

module.exports = { homepage }
