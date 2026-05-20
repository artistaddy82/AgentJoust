'use strict'
/**
 * AgentJoust legal pages — Privacy, Terms, TCPA
 * Company: Addison Myers Group LLC
 */

const { head, header, footer, FOOTER_CSS, GLOBAL_SCRIPTS } = require('./layout')

const YEAR    = new Date().getFullYear()
const COMPANY = 'Addison Myers Group LLC'
const BRAND   = 'Agent Joust'
const BYLINE  = 'Agent Joust — A product of Addison Myers Group LLC'
const DOMAIN  = 'agentjoust.com'
const EMAIL   = 'hello@agentjoust.com'

// Shared prose wrapper
function legalShell({ title, description, canonical, slug, html }) {
  return `${head({ title: `${title} · ${BRAND}`, description, canonical })}
<body>
${header()}
<main style="padding-top:80px;min-height:100vh;background:var(--cream,#f5f1e8);">
  <div class="container" style="max-width:760px;margin:0 auto;padding:60px 24px 100px;">

    <div style="margin-bottom:40px;">
      <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--sage,#2d5a3d);margin-bottom:8px;">${BRAND}</div>
      <h1 style="font-family:'Fraunces',serif;font-size:clamp(28px,5vw,44px);font-weight:700;color:var(--ink,#14110d);margin:0 0 12px;">${title}</h1>
      <p style="font-size:13px;color:#6b6253;margin:0;">Last updated: ${YEAR} &nbsp;·&nbsp; ${BYLINE}</p>
    </div>

    <div style="background:#fff;border-radius:12px;padding:40px 48px;box-shadow:0 1px 3px rgba(0,0,0,.06);">
      <style>
        .legal-prose h2 { font-family:'Fraunces',serif; font-size:20px; font-weight:600; color:var(--ink,#14110d); margin:36px 0 12px; padding-top:8px; border-top:1px solid #ebe4d2; }
        .legal-prose h2:first-child { border-top:none; margin-top:0; }
        .legal-prose p, .legal-prose li { font-size:15px; line-height:1.75; color:#3a342a; margin:0 0 14px; }
        .legal-prose ul { padding-left:20px; margin:0 0 14px; }
        .legal-prose li { margin-bottom:6px; }
        .legal-prose a { color:var(--sage,#2d5a3d); }
        .legal-prose strong { color:var(--ink,#14110d); }
        .legal-prose .callout { background:#f5f1e8; border-left:3px solid var(--sage,#2d5a3d); padding:16px 20px; border-radius:0 8px 8px 0; margin:20px 0; }
      </style>
      <div class="legal-prose">
        ${html}
      </div>
    </div>

    <p style="text-align:center;font-size:13px;color:#6b6253;margin-top:32px;">
      Questions? Email <a href="mailto:${EMAIL}" style="color:var(--sage,#2d5a3d);">${EMAIL}</a>
    </p>
  </div>
</main>
<style>${FOOTER_CSS}</style>
${footer()}
${GLOBAL_SCRIPTS}
</body>
</html>`
}

// ── PRIVACY POLICY ────────────────────────────────────────────────────────────
function privacy({ siteUrl }) {
  return legalShell({
    title:       'Privacy Policy',
    description: 'How AgentJoust collects, uses, and protects your personal information.',
    canonical:   `${siteUrl}/privacy/`,
    html: `
<h2>Overview</h2>
<p>${BYLINE}. This Privacy Policy explains how we collect, use, and protect information you provide when using ${DOMAIN} and its subdomains (the "Platform").</p>
<div class="callout">
  <strong>Core promise:</strong> Your contact information is sealed the moment you submit a joust request. The two agents you don't choose <em>never</em> see it. Only your chosen winner receives your name, email, and phone number.
</div>

<h2>Information We Collect</h2>
<p>When you submit a joust request we collect:</p>
<ul>
  <li><strong>Contact details</strong> — first name, last name, email address, phone number</li>
  <li><strong>Insurance details</strong> — policy type, coverage amount, term length, tobacco use, health class, and any medications disclosed</li>
  <li><strong>Technical data</strong> — IP address, browser type, device type, referring URL, and pages visited on the Platform</li>
</ul>
<p>We do <strong>not</strong> collect Social Security numbers, financial account numbers, or payment card details through this Platform.</p>

<h2>How We Use Your Information</h2>
<ul>
  <li>Create and manage your joust request and unique joust room</li>
  <li>Send you your magic-link email so you can return to view proposals</li>
  <li>Share your insurance details (not contact details) with invited agents so they can prepare proposals</li>
  <li>Release your contact details <strong>only to your chosen winning agent</strong> after you crown a winner</li>
  <li>Improve and secure the Platform</li>
  <li>Comply with applicable law</li>
</ul>

<h2>Information Shared With Agents</h2>
<p>During an active joust, participating agents see your coverage needs and health information but <strong>not</strong> your name, email, or phone number. Only after you select a winner does that agent receive your full contact information. Agents who are not selected receive no contact information from us.</p>
<p>Agents on our platform are independent licensed professionals and are subject to their own privacy obligations. Once contact information is released to a winning agent, their privacy practices govern any further communications.</p>

<h2>Cookies and Tracking</h2>
<p>We use standard web technologies (cookies, local storage, page-view beacons) to understand how visitors use the Platform, remember your joust token, and improve performance. We do not use third-party advertising trackers. You may disable cookies in your browser, though some features may not function correctly.</p>

<h2>Data Retention</h2>
<p>Joust records are retained for up to 3 years for compliance and dispute-resolution purposes. You may request deletion of your data at any time by emailing <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

<h2>Children's Privacy</h2>
<p>The Platform is not directed to individuals under 18. We do not knowingly collect personal information from minors.</p>

<h2>California Residents (CCPA)</h2>
<p>California residents may request to know, delete, or opt out of the sale of their personal information. We do not sell personal information. To exercise your rights, contact <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

<h2>Changes to This Policy</h2>
<p>We may update this policy periodically. Material changes will be posted here with an updated date. Continued use of the Platform after changes constitutes acceptance.</p>

<h2>Contact</h2>
<p><strong>${BYLINE}</strong><br>
Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
`,
  })
}

// ── TERMS OF SERVICE ──────────────────────────────────────────────────────────
function terms({ siteUrl }) {
  return legalShell({
    title:       'Terms of Service',
    description: `Terms and conditions for using the ${BRAND} platform.`,
    canonical:   `${siteUrl}/terms/`,
    html: `
<h2>Agreement</h2>
<p>By using ${DOMAIN} or any subdomain (the "Platform"), you agree to these Terms of Service ("Terms") with ${BYLINE}. If you do not agree, do not use the Platform.</p>

<h2>What ${BRAND} Is</h2>
<p>${BRAND} is a neutral marketplace where consumers solicit life insurance proposals from independent licensed agents. We are <strong>not</strong> an insurance company, insurer, or licensed insurance agent. We do not underwrite, issue, or sell insurance policies. We create the competitive environment; the agent you select is solely responsible for any policy they quote or place.</p>

<h2>Eligibility</h2>
<p>You must be at least 18 years old and a resident of the United States to submit a joust request. By submitting, you represent that the information you provide is accurate and complete.</p>

<h2>The Joust Process</h2>
<ul>
  <li>You submit a request describing your life insurance needs.</li>
  <li>We invite up to three independent licensed agents to prepare proposals.</li>
  <li>Agents prepare and submit proposals without access to your contact details.</li>
  <li>You review proposals and select a winner. Only the winning agent receives your contact information.</li>
  <li>You are under no obligation to purchase any policy.</li>
</ul>

<h2>No Guarantee of Proposals</h2>
<p>We do not guarantee that any specific number of agents will submit proposals, that proposals will meet your coverage or pricing expectations, or that the joust will be completed within any particular time frame.</p>

<h2>User Conduct</h2>
<p>You agree not to:</p>
<ul>
  <li>Submit false, fraudulent, or misleading information</li>
  <li>Use the Platform for any unlawful purpose</li>
  <li>Attempt to reverse-engineer, scrape, or disrupt the Platform</li>
  <li>Create multiple joust requests for the same coverage need to manipulate the system</li>
</ul>

<h2>Intellectual Property</h2>
<p>All content, design, and code on the Platform is the property of ${COMPANY} or its licensors. You may not copy, reproduce, or distribute any portion without written permission.</p>

<h2>Disclaimer of Warranties</h2>
<p>THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. ${COMPANY.toUpperCase()} MAKES NO WARRANTY THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT PROPOSALS WILL MEET YOUR REQUIREMENTS.</p>

<h2>Limitation of Liability</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${COMPANY.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE PLATFORM OR ANY INSURANCE POLICY OBTAINED THROUGH IT. OUR TOTAL LIABILITY SHALL NOT EXCEED $100.</p>

<h2>Indemnification</h2>
<p>You agree to indemnify and hold harmless ${COMPANY} and its officers, employees, and agents from any claims, losses, or damages arising from your use of the Platform or violation of these Terms.</p>

<h2>Governing Law</h2>
<p>These Terms are governed by the laws of the State of North Carolina. Any disputes shall be resolved in the courts of North Carolina.</p>

<h2>Changes to Terms</h2>
<p>We may update these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the revised Terms.</p>

<h2>Contact</h2>
<p><strong>${BYLINE}</strong><br>
Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
`,
  })
}

// ── TCPA DISCLOSURE ───────────────────────────────────────────────────────────
function tcpa({ siteUrl }) {
  return legalShell({
    title:       'TCPA Disclosure',
    description: `Your consent rights and communication preferences for ${BRAND}.`,
    canonical:   `${siteUrl}/tcpa/`,
    html: `
<h2>What Is TCPA?</h2>
<p>The Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, is a federal law that restricts telemarketing calls, auto-dialed calls, pre-recorded calls, text messages, and unsolicited faxes. It gives you specific rights regarding how and when businesses may contact you.</p>

<h2>Your Consent When You Submit a Joust</h2>
<div class="callout">
  When you submit a joust request on ${DOMAIN}, you expressly consent to be contacted by ${COMPANY} and the winning licensed insurance agent you select — by phone, text message (SMS), or email — regarding your life insurance inquiry, even if your number is listed on a state or federal Do Not Call registry.
</div>
<p>Specifically, by submitting the form you agree that:</p>
<ul>
  <li>You are providing your written consent under the TCPA and applicable state laws to receive communications related to your joust request.</li>
  <li>Calls or texts may be made using automated telephone dialing systems or pre-recorded messages, if applicable.</li>
  <li>Your consent is not a condition of any purchase.</li>
  <li>Message and data rates may apply for SMS communications.</li>
</ul>

<h2>Who May Contact You</h2>
<p>Once you select a winning agent, <strong>only that agent</strong> receives your contact information and may reach out to you. Agents who do not win your joust <strong>never</strong> receive your contact details and will not contact you.</p>
<p>Additionally, ${COMPANY} may contact you with service-related communications such as your magic-link email, proposal status updates, and follow-up on your joust experience.</p>

<h2>Revoking Consent</h2>
<p>You may revoke your consent to receive further communications at any time by:</p>
<ul>
  <li><strong>Text:</strong> Reply STOP to any text message you receive from us or the agent.</li>
  <li><strong>Email:</strong> Reply UNSUBSCRIBE or contact <a href="mailto:${EMAIL}">${EMAIL}</a>.</li>
  <li><strong>Phone:</strong> Tell the caller you do not wish to be contacted further.</li>
</ul>
<p>Revocation applies to future marketing contacts. It does not affect service messages required to complete an active joust (e.g., delivering your magic link).</p>

<h2>Do Not Call Registry</h2>
<p>By submitting a joust request, you expressly consent to be contacted even if your number is registered on the National Do Not Call Registry or any state equivalent. This consent is specific to your life insurance inquiry and the agent you select.</p>

<h2>SMS Message Frequency</h2>
<p>Message frequency varies. You may receive confirmation, status update, and follow-up text messages related to your joust. Standard message and data rates apply. Reply HELP for help, STOP to opt out.</p>

<h2>Contact</h2>
<p>For questions about this disclosure or to exercise your rights, contact:</p>
<p><strong>${BYLINE}</strong><br>
Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
`,
  })
}

module.exports = { privacy, terms, tcpa }
