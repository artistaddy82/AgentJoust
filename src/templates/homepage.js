'use strict'
const { head, header, footer, GLOBAL_SCRIPTS } = require('./layout')

function homepage(config) {
  const siteUrl  = config.siteUrl || 'https://agentjoust.com'
  const apiUrl   = config.apiUrl  || 'https://sidecarleads.com'
  const canonical = `${siteUrl}/`

  return `${head({
    title:       'AgentJoust — Let Agents Compete for Your Life Insurance Business',
    description: 'Tell us what you need. Licensed independent life insurance agents compete to earn your business — transparently, on your terms. Free for consumers.',
    canonical,
    extraHead:   `<meta name="robots" content="index,follow">`,
  })}
<body>
${header()}

<!-- ── HERO ── -->
<section class="hero-dark">
  <div class="container">
    <p class="hero-eyebrow">Free for consumers</p>
    <h1 class="display hero-title">Let agents <em>compete</em><br>for your business.</h1>
    <p class="hero-sub">Tell us what coverage you need. Licensed independent agents send you their best offer. You choose who to work with — no pressure, no spam, one winner.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:32px;">
      <a href="#request" class="btn-gold" style="font-size:17px;padding:16px 36px;">Start a request →</a>
      <a href="/how-it-works/" style="color:rgba(250,246,238,0.65);font-size:15px;font-weight:500;text-decoration:underline;text-underline-offset:3px;">See how it works</a>
    </div>
    <div style="display:flex;gap:24px;flex-wrap:wrap;">
      <span style="font-size:13px;color:rgba(250,246,238,0.5);">✓ Always free for consumers</span>
      <span style="font-size:13px;color:rgba(250,246,238,0.5);">✓ Licensed agents only</span>
      <span style="font-size:13px;color:rgba(250,246,238,0.5);">✓ One winner — no lead auction</span>
    </div>
  </div>
</section>

<!-- ── HOW IT WORKS STRIP ── -->
<section style="border-bottom:1px solid var(--rule);padding:64px 0;">
  <div class="container">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:48px;">
      ${[
        { n: '1', title: 'You describe your need', body: 'Coverage amount, policy type, health picture, budget. Two minutes of your time.' },
        { n: '2', title: 'Agents send offers', body: 'Vetted independent agents in your area review your request and submit their best pitch. You see who they are before you respond.' },
        { n: '3', title: 'You pick one', body: 'Review the offers on your terms. Choose who to work with. One agent, direct relationship — no auction aftermath.' },
      ].map(s => `
      <div>
        <div class="display" style="font-size:52px;color:var(--gold);line-height:1;margin-bottom:16px;">${s.n}</div>
        <h3 style="font-family:'Fraunces',serif;font-size:19px;font-weight:600;margin-bottom:10px;letter-spacing:-0.01em;">${s.title}</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.65;">${s.body}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ── REQUEST FORM ── -->
<section style="padding:80px 0;background:var(--cream-warm);" id="request">
  <div class="container" style="max-width:680px;">
    <p class="hero-eyebrow" style="color:var(--gold);">Start your request</p>
    <h2 class="display" style="font-size:clamp(28px,4vw,44px);margin-bottom:8px;line-height:1.1;">Tell agents what you need.</h2>
    <p style="font-size:16px;color:var(--ink-soft);margin-bottom:40px;line-height:1.6;">Fill this out once. Qualified agents compete for your business. You stay in control the whole time.</p>

    <div id="aj-form-wrap">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div><label class="field-label">First name *</label><input class="field-input" id="aj-first" placeholder="Jane" autocomplete="given-name"></div>
        <div><label class="field-label">Last name *</label><input class="field-input" id="aj-last" placeholder="Smith" autocomplete="family-name"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div><label class="field-label">Phone *</label><input class="field-input" id="aj-phone" type="tel" placeholder="(555) 555-5555" autocomplete="tel"></div>
        <div><label class="field-label">Email</label><input class="field-input" id="aj-email" type="email" placeholder="jane@example.com" autocomplete="email"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div>
          <label class="field-label">State *</label>
          <select class="field-input field-select" id="aj-state">
            <option value="">Select state</option>
            ${Object.entries({al:'Alabama',az:'Arizona',ar:'Arkansas',ca:'California',co:'Colorado',ct:'Connecticut',de:'Delaware',fl:'Florida',ga:'Georgia',id:'Idaho',il:'Illinois',in:'Indiana',ia:'Iowa',ks:'Kansas',ky:'Kentucky',la:'Louisiana',me:'Maine',md:'Maryland',ma:'Massachusetts',mi:'Michigan',mn:'Minnesota',ms:'Mississippi',mo:'Missouri',mt:'Montana',ne:'Nebraska',nv:'Nevada',nh:'New Hampshire',nj:'New Jersey',nm:'New Mexico',ny:'New York',nc:'North Carolina',nd:'North Dakota',oh:'Ohio',ok:'Oklahoma',or:'Oregon',pa:'Pennsylvania',ri:'Rhode Island',sc:'South Carolina',sd:'South Dakota',tn:'Tennessee',tx:'Texas',ut:'Utah',vt:'Vermont',va:'Virginia',wa:'Washington',wv:'West Virginia',wi:'Wisconsin',wy:'Wyoming'}).map(([v,n]) => `<option value="${v}">${n}</option>`).join('')}
          </select>
        </div>
        <div><label class="field-label">City</label><input class="field-input" id="aj-city" placeholder="Austin"></div>
      </div>
      <div style="margin-bottom:16px;">
        <label class="field-label">Policy type you're looking for *</label>
        <select class="field-input field-select" id="aj-policy">
          <option value="">Select</option>
          <option value="term">Term Life</option>
          <option value="whole">Whole Life</option>
          <option value="iul">Indexed Universal Life (IUL)</option>
          <option value="final">Final Expense</option>
          <option value="mort">Mortgage Protection</option>
          <option value="unsure">Not sure — need guidance</option>
        </select>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div>
          <label class="field-label">Coverage amount</label>
          <select class="field-input field-select" id="aj-coverage">
            <option value="">Select</option>
            <option value="under100k">Under $100K</option>
            <option value="100k">$100,000</option>
            <option value="250k">$250,000</option>
            <option value="500k">$500,000</option>
            <option value="750k">$750,000</option>
            <option value="1m">$1,000,000</option>
            <option value="over1m">Over $1M</option>
          </select>
        </div>
        <div>
          <label class="field-label">Age</label>
          <select class="field-input field-select" id="aj-age">
            <option value="">Select</option>
            <option value="18-29">18–29</option>
            <option value="30-39">30–39</option>
            <option value="40-49">40–49</option>
            <option value="50-59">50–59</option>
            <option value="60-69">60–69</option>
            <option value="70+">70+</option>
          </select>
        </div>
      </div>
      <div style="margin-bottom:32px;">
        <label class="field-label">Anything else agents should know? (optional)</label>
        <textarea class="field-input" id="aj-notes" rows="3" placeholder="Health conditions, budget range, timeline, questions…" style="resize:vertical;"></textarea>
      </div>
      <div class="geo-badge" id="aj-geo-badge" style="display:none;margin-bottom:16px;"></div>
      <div id="aj-error" style="display:none;background:#fde8e8;border:1px solid #f5b5b5;border-radius:6px;padding:12px 16px;font-size:14px;color:#b91c1c;margin-bottom:16px;"></div>
      <button class="btn-primary" style="width:100%;font-size:17px;padding:16px;" onclick="ajSubmit()">Submit my request →</button>
      <p style="margin-top:12px;font-size:13px;color:var(--ink-soft);text-align:center;line-height:1.5;">Free. No obligation. One agent will reach out — not five. <a href="/tcpa/" style="color:var(--gold);">TCPA disclosure</a>.</p>
    </div>

    <div id="aj-success" style="display:none;text-align:center;padding:48px 0;">
      <div style="font-size:56px;margin-bottom:20px;">✓</div>
      <h2 class="display" style="font-size:36px;margin-bottom:12px;">Request received.</h2>
      <p style="font-size:17px;color:var(--ink-soft);line-height:1.6;max-width:420px;margin:0 auto;">Qualified agents in your area will review your request. Expect a call within 24 hours from the agent who wins your business.</p>
    </div>
  </div>
</section>

<!-- ── WHY JOUST ── -->
<section style="padding:80px 0;border-top:1px solid var(--rule);">
  <div class="container">
    <p class="hero-eyebrow" style="color:var(--gold);">Why it's different</p>
    <h2 class="display" style="font-size:clamp(28px,4vw,44px);margin-bottom:48px;line-height:1.1;max-width:560px;">Competition makes agents<br>work harder for you.</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px;">
      ${[
        { title: 'Agents bid — you choose', body: 'Instead of picking an agent from a directory and hoping they\'re good, you describe your need and agents compete to impress you before you commit.' },
        { title: 'Full transparency', body: 'You see each agent\'s credentials, specialties, and pitch before you respond. No blind dates. No pressure calls from strangers.' },
        { title: 'You control the timeline', body: 'Agents have 48 hours to submit. You review on your schedule. No one shows up at your door until you say go.' },
      ].map(w => `
      <div style="border-top:2px solid var(--gold);padding-top:24px;">
        <h3 style="font-family:'Fraunces',serif;font-size:18px;font-weight:600;margin-bottom:10px;letter-spacing:-0.01em;">${w.title}</h3>
        <p style="font-size:14px;color:var(--ink-soft);line-height:1.65;">${w.body}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section class="intake" style="text-align:center;">
  <div class="container">
    <h2 class="display" style="font-size:clamp(28px,4vw,44px);color:var(--cream);margin-bottom:16px;">Ready to let agents compete?</h2>
    <p style="color:rgba(250,246,238,0.72);font-size:17px;margin-bottom:36px;">Free for consumers. Takes two minutes. One agent wins your business.</p>
    <a href="#request" class="btn-gold" style="font-size:16px;padding:16px 36px;">Start a request →</a>
  </div>
</section>

<script>
(function () {
  const API_URL = '${apiUrl}';

  // Geo auto-fill
  geoAutoFill(
    document.getElementById('aj-state'),
    null,
    document.getElementById('aj-geo-badge')
  );

  window.ajSubmit = function () {
    const first    = document.getElementById('aj-first').value.trim();
    const last     = document.getElementById('aj-last').value.trim();
    const phone    = document.getElementById('aj-phone').value.trim();
    const email    = document.getElementById('aj-email').value.trim();
    const state    = document.getElementById('aj-state').value;
    const city     = document.getElementById('aj-city').value.trim();
    const policy   = document.getElementById('aj-policy').value;
    const coverage = document.getElementById('aj-coverage').value;
    const age      = document.getElementById('aj-age').value;
    const notes    = document.getElementById('aj-notes').value.trim();

    const errorEl = document.getElementById('aj-error');
    errorEl.style.display = 'none';

    if (!first || !last) { showErr('Please enter your full name.'); return; }
    if (!phone)          { showErr('Please enter your phone number.'); return; }
    if (!state)          { showErr('Please select your state.'); return; }
    if (!policy)         { showErr('Please select a policy type.'); return; }

    fetch(API_URL + '/leads/web', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name:    first,
        last_name:     last,
        phone,
        email,
        state,
        city,
        policy_type:   policy,
        coverage:      coverage,
        age_range:     age,
        notes,
        lead_source:   'agentjoust-request',
        form_type:     'consumer_request',
      }),
    })
      .then(function (r) { if (!r.ok) throw new Error('err'); return r; })
      .then(function () {
        document.getElementById('aj-form-wrap').style.display = 'none';
        document.getElementById('aj-success').style.display   = 'block';
        window.scrollTo({ top: document.getElementById('request').offsetTop - 40, behavior: 'smooth' });
      })
      .catch(function () { showErr('Something went wrong. Please try again.'); });

    function showErr(msg) {
      errorEl.textContent   = msg;
      errorEl.style.display = 'block';
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
})();
</script>

${GLOBAL_SCRIPTS}
${footer()}
</body>
</html>`
}

module.exports = { homepage }
