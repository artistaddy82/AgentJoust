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

const FOOTER_CSS = `
.site-footer { background:#14110d; border-top:1px solid rgba(245,241,232,.07); padding:48px 40px 32px; }
.site-footer-inner { max-width:1280px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; margin-bottom:20px; }
.site-footer-inner:last-child { margin-bottom:0; }
.site-footer-logo { font-family:'Fraunces',serif; font-size:18px; font-weight:500; color:#f5f1e8; text-decoration:none; }
.site-footer-logo em { font-style:italic; color:#c8281c; }
.site-footer-nav { display:flex; gap:28px; flex-wrap:wrap; }
.site-footer-nav a { font-size:13px; color:rgba(245,241,232,.4); text-decoration:none; transition:color .2s; }
.site-footer-nav a:hover { color:rgba(245,241,232,.75); }
.site-footer-copy { font-size:12px; color:rgba(245,241,232,.25); margin:0; }`

function footer() {
  return `<footer class="site-footer">
  <div class="site-footer-inner">
    <a href="/" class="site-footer-logo">Agent <em>Joust</em></a>
    <nav class="site-footer-nav">
      <a href="/">Home</a>
      <a href="/#how-it-works">How it works</a>
      <a href="/for-agents/">For agents</a>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
      <a href="/tcpa/">TCPA</a>
      <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
    </nav>
  </div>
  <div class="site-footer-inner">
    <p class="site-footer-copy">© ${new Date().getFullYear()} Agent Joust — A product of Addison Myers Group LLC. Not affiliated with any carrier.</p>
  </div>
</footer>`
}

const GLOBAL_SCRIPTS = `<script src="/js/global.js"></script>`

module.exports = { head, header, footer, FOOTER_CSS, GLOBAL_SCRIPTS }
