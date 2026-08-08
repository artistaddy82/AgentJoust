'use strict'
/**
 * build.js — Life Insurance TRIO static site generator
 *
 * Usage:
 *   node build.js   — full build to dist/
 */

const fs   = require('fs')
const path = require('path')

// ── Config ────────────────────────────────────────────────────────────────────
const SITE_URL = process.env.SITE_URL || 'https://lifeinsurancetrio.com'
const API_URL  = process.env.API_URL  || 'https://sidecarleads.com'
const MY_URL   = process.env.MY_URL   || 'https://clownfish-app-dfa3s.ondigitalocean.app'

const config = { siteUrl: SITE_URL, apiUrl: API_URL, myUrl: MY_URL }

// ── Templates ─────────────────────────────────────────────────────────────────
const { homepage }           = require('./src/templates/homepage')
const { forAgents }          = require('./src/templates/for-agents')
const { privacy, terms, tcpa } = require('./src/templates/legal-pages')

// ── Helpers ───────────────────────────────────────────────────────────────────
function mkdirp(dir) { fs.mkdirSync(dir, { recursive: true }) }

function write(filePath, content) {
  mkdirp(path.dirname(filePath))
  fs.writeFileSync(filePath, content, 'utf8')
  const kb = (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1)
  console.log(`  ✓ ${path.relative(process.cwd(), filePath).padEnd(52)} ${kb.padStart(6)} KB`)
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  mkdirp(dest)
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(srcPath, destPath)
    else {
      fs.copyFileSync(srcPath, destPath)
      console.log(`  ✓ ${path.relative(process.cwd(), destPath).padEnd(52)} (asset)`)
    }
  }
}

// ── Build ─────────────────────────────────────────────────────────────────────
async function build() {
  const start = Date.now()
  console.log('\n🔨 Life Insurance TRIO build starting…\n')
  mkdirp('dist')

  console.log('Assets:')
  copyDir('public', 'dist')
  console.log()

  console.log('Pages:')
  write('dist/index.html',               homepage(config))
  write('dist/for-agents/index.html',    forAgents(config))
  write('dist/privacy/index.html',       privacy(config))
  write('dist/terms/index.html',         terms(config))
  write('dist/tcpa/index.html',          tcpa(config))

  // ── Sitemap + robots ────────────────────────────────────────────────────────
  const staticUrls = [
    `${SITE_URL}/`,
    `${SITE_URL}/for-agents/`,
    `${SITE_URL}/privacy/`,
    `${SITE_URL}/terms/`,
    `${SITE_URL}/tcpa/`,
  ]
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map(u => `  <url><loc>${u}</loc><changefreq>weekly</changefreq></url>`).join('\n')}
</urlset>`
  write('dist/sitemap.xml', sitemap)
  write('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`)

  const elapsed = ((Date.now() - start) / 1000).toFixed(1)
  console.log(`\n✅ Build complete in ${elapsed}s\n`)
}

build().catch(err => { console.error('Build failed:', err); process.exit(1) })
