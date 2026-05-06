'use strict'
/**
 * AgentJoust shared layout components.
 * All functions return raw HTML strings.
 */

function head({ title, description, canonical, extraHead = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/main.css?v=1">
${extraHead}
</head>`
}

function header() {
  return `<header>
  <div class="nav">
    <a href="/" class="logo">
      <span class="logo-mark">AJ</span>
      AgentJoust
    </a>
    <div class="nav-links">
      <a href="/how-it-works/">How it works</a>
      <a href="/for-agents/">For agents</a>
      <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
      <a href="/#search" class="nav-cta">Compare agents</a>
    </div>
  </div>
</header>`
}

function footer() {
  return `<footer>
  <div class="container">
    <div class="foot-grid">
      <div class="foot-about">
        <a href="/" class="logo" style="color:var(--cream);margin-bottom:16px;">
          <span class="logo-mark" style="background:var(--cream);color:var(--ink);">AJ</span>
          AgentJoust
        </a>
        <p>An independent platform where life insurance agents compete for your business — transparently, on your terms. We never sell policies. We create competition.</p>
      </div>
      <div class="foot-col">
        <h5>For consumers</h5>
        <a href="/how-it-works/">How it works</a>
        <a href="/faq/">FAQ</a>
        <a href="/about/">About</a>
      </div>
      <div class="foot-col">
        <h5>For agents</h5>
        <a href="/for-agents/">Why join</a>
        <a href="/agents/apply/">Apply to join</a>
        <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <a href="/contact/">Contact</a>
        <a href="/privacy/">Privacy</a>
        <a href="/terms/">Terms</a>
        <a href="/tcpa/">TCPA disclosure</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} AgentJoust. Independent agent competition platform.</span>
      <span>Licensed agents in all 50 states</span>
    </div>
  </div>
</footer>`
}

const GLOBAL_SCRIPTS = `<script src="/js/global.js"></script>`

module.exports = { head, header, footer, GLOBAL_SCRIPTS }
