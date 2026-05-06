'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

const PANELS = ['Coverage', 'Health', 'Contact']

export default function JoustForm() {
  const router = useRouter()
  const [step, setStep]       = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [showMedsOther, setShowMedsOther] = useState(false)

  // Field state
  const [fields, setFields] = useState({
    policyType: 'term',
    termLength: '20',
    coverageAmount: '500k',
    dob: '',
    gender: 'male',
    tobacco: 'never',
    health: 'excellent',
    medications: 'none',
    medsOther: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const set = (k) => (e) => {
    const val = e.target.value
    setFields(f => ({ ...f, [k]: val }))
    if (k === 'medications') setShowMedsOther(val === 'other')
  }

  const goNext = () => {
    if (step === 2 && !fields.dob) {
      setError('Please enter your date of birth.')
      return
    }
    setError('')
    setStep(s => s + 1)
  }

  const submit = async () => {
    if (!fields.firstName) { setError('Please enter your first name.'); return }
    if (!fields.email && !fields.phone) { setError('Please enter your email or phone number.'); return }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          medications: fields.medications === 'other' && fields.medsOther
            ? fields.medsOther
            : fields.medications,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      router.push(`/joust/${data.token}`)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="form-block" id="formBlock">

      {/* Step tracker */}
      <div className="form-steps-bar">
        {PANELS.map((label, i) => {
          const n = i + 1
          const isActive = step === n
          const isDone   = step > n
          return (
            <div
              key={n}
              className={`form-step-tab${isActive ? ' active' : ''}${isDone ? ' done' : ''}`}
            >
              <div className="step-tab-num">
                {isDone ? '✓' : n}
              </div>
              <div className="step-tab-label">{label}</div>
            </div>
          )
        })}
      </div>

      <div className="form-panels">

        {/* ── Panel 1: Coverage ── */}
        {step === 1 && (
          <div className="form-panel active">
            <div className="panel-title">What are you<br />looking to <em>cover?</em></div>
            <p className="panel-sub">Pick the policy type and how much coverage you need.</p>

            <div className="form-row">
              <div className="form-field">
                <label>Policy type</label>
                <select value={fields.policyType} onChange={set('policyType')}>
                  <option value="term">Term life</option>
                  <option value="whole">Whole life</option>
                  <option value="iul">Indexed universal (IUL)</option>
                  <option value="not_sure">Not sure — show me options</option>
                </select>
              </div>
              <div className="form-field">
                <label>Term length</label>
                <select value={fields.termLength} onChange={set('termLength')}>
                  <option value="10">10 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                  <option value="na">N/A — permanent</option>
                </select>
              </div>
            </div>
            <div className="form-row full">
              <div className="form-field">
                <label>Coverage amount</label>
                <select value={fields.coverageAmount} onChange={set('coverageAmount')}>
                  <option value="100k">$100,000</option>
                  <option value="250k">$250,000</option>
                  <option value="500k">$500,000</option>
                  <option value="750k">$750,000</option>
                  <option value="1m">$1,000,000</option>
                  <option value="2m+">$2,000,000+</option>
                </select>
              </div>
            </div>

            <button className="form-next" onClick={goNext}>
              Next — Health info
              <ArrowRight />
            </button>
          </div>
        )}

        {/* ── Panel 2: Health ── */}
        {step === 2 && (
          <div className="form-panel active">
            <button className="panel-back" onClick={() => { setError(''); setStep(1) }}>
              <ArrowLeft /> Back
            </button>
            <div className="panel-title">Tell us about<br />your <em>health.</em></div>
            <p className="panel-sub">Agents use this to price your policy accurately — no exam needed to get proposals.</p>

            <div className="form-row">
              <div className="form-field">
                <label>Date of birth</label>
                <input
                  type="text"
                  placeholder="MM / DD / YYYY"
                  value={fields.dob}
                  onChange={set('dob')}
                />
              </div>
              <div className="form-field">
                <label>Gender</label>
                <select value={fields.gender} onChange={set('gender')}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Tobacco use</label>
                <select value={fields.tobacco} onChange={set('tobacco')}>
                  <option value="never">Never</option>
                  <option value="former">Quit 12+ months ago</option>
                  <option value="current">Current smoker</option>
                </select>
              </div>
              <div className="form-field">
                <label>Health, generally</label>
                <select value={fields.health} onChange={set('health')}>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="fair">Fair / some conditions</option>
                </select>
              </div>
            </div>
            <div className="form-row full">
              <div className="form-field">
                <label>Prescription medications</label>
                <select value={fields.medications} onChange={set('medications')}>
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
            {showMedsOther && (
              <div className="form-row full" style={{ marginTop: '-4px' }}>
                <div className="form-field">
                  <label>Please describe</label>
                  <input
                    type="text"
                    placeholder="e.g. thyroid, asthma, ADHD…"
                    value={fields.medsOther}
                    onChange={set('medsOther')}
                  />
                </div>
              </div>
            )}

            <button className="form-next" onClick={goNext}>
              Next — Contact info
              <ArrowRight />
            </button>
          </div>
        )}

        {/* ── Panel 3: Contact ── */}
        {step === 3 && (
          <div className="form-panel active">
            <button className="panel-back" onClick={() => { setError(''); setStep(2) }}>
              <ArrowLeft /> Back
            </button>
            <div className="panel-title">Last step —<br /><em>how to reach you.</em></div>

            <div className="form-sealed-note">
              <LockIcon />
              Sealed until you choose your winner — agents never see this
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  autoComplete="given-name"
                  value={fields.firstName}
                  onChange={set('firstName')}
                />
              </div>
              <div className="form-field">
                <label>Last name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  autoComplete="family-name"
                  value={fields.lastName}
                  onChange={set('lastName')}
                />
              </div>
            </div>
            <div className="form-row full">
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  autoComplete="email"
                  value={fields.email}
                  onChange={set('email')}
                />
              </div>
            </div>
            <div className="form-row full">
              <div className="form-field">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={set('phone')}
                />
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="form-submit" onClick={submit} disabled={loading}>
              {loading ? 'Summoning agents…' : 'Summon three agents ⚔'}
            </button>

            <p className="form-privacy">
              <LockIcon size={12} />
              Only your chosen winner gets your contact info. The other two agents never see it. Ever.
            </p>
          </div>
        )}

        {step < 3 && error && <p className="form-error" style={{ padding: '0 36px 16px' }}>{error}</p>}

      </div>
    </div>
  )
}

// ── Icon helpers ──────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
function ArrowLeft() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  )
}
function LockIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  )
}
