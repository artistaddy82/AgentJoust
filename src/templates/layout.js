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

const NAV_CSS = `
.site-nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:22px 40px; display:flex; justify-content:space-between; align-items:center; backdrop-filter:blur(8px); background:rgba(245,241,232,.85); border-bottom:1px solid transparent; transition:border-color .3s,background .3s; }
.site-nav.scrolled { border-bottom-color:rgba(20,17,13,.08); }
.site-nav-logo { font-family:'Fraunces',serif; font-size:22px; font-weight:600; letter-spacing:-.02em; color:#14110d; text-decoration:none; display:flex; align-items:center; gap:10px; }
.site-nav-logo em { font-style:italic; color:#c8281c; }
.site-nav-links { display:flex; align-items:center; gap:32px; }
.site-nav-links a { font-size:14px; font-weight:500; color:#3a342a; text-decoration:none; transition:color .2s; }
.site-nav-links a:hover { color:#c8281c; }
.site-nav-cta { background:#14110d; color:#f5f1e8; padding:10px 18px; border-radius:100px; font-size:13px; font-weight:600; text-decoration:none; letter-spacing:.02em; transition:transform .2s,background .2s; white-space:nowrap; }
.site-nav-cta:hover { background:#c8281c; transform:translateY(-1px); }
@media(max-width:640px){.site-nav{padding:16px 20px;}.site-nav-links{display:none;}}`

const NAV_SCRIPT = `<script>
(function(){
  var n = document.getElementById('site-nav');
  if(!n) return;
  window.addEventListener('scroll', function(){ n.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
})();
</script>`

function header() {
  return `<nav class="site-nav" id="site-nav">
  <a href="/" class="site-nav-logo">
    <svg viewBox="0 0 28 28" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 25 L12 16 M25 3 L16 12" stroke="#14110d" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="14" cy="14" r="2.8" fill="#c8281c"/>
      <path d="M1 27 L5 23 M23 5 L27 1" stroke="#c8281c" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
    Agent <em>Joust</em>
  </a>
  <div class="site-nav-links">
    <a href="/#how-it-works">How it works</a>
    <a href="/for-agents/">For agents</a>
    <a href="https://my.sidecarleads.com">My Quotes</a>
    <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
  </div>
  <a href="/#form" class="site-nav-cta">Get 3 quotes</a>
</nav>`
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

module.exports = { head, header, footer, NAV_CSS, NAV_SCRIPT, FOOTER_CSS, GLOBAL_SCRIPTS }
