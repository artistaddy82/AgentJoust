'use client'
import { useState } from 'react'

export default function AgentApplyForm() {
  const [fields, setFields] = useState({ firstName:'', lastName:'', email:'', phone:'', npn:'', licenseStates:'', carriers:'', message:'' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const set = k => e => setFields(f => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!fields.firstName || !fields.email) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://sidecarleads.com'}/leads/web`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'agent_application',
          source: 'agentjoust.com',
          first_name: fields.firstName,
          last_name: fields.lastName,
          email: fields.email,
          phone: fields.phone,
          npn: fields.npn,
          license_states: fields.licenseStates,
          carriers: fields.carriers,
          message: fields.message,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background:'rgba(45,90,61,.15)', border:'1px solid rgba(45,90,61,.35)', borderRadius:'16px', padding:'40px', textAlign:'center' }}>
        <div style={{ fontSize:'32px', marginBottom:'16px' }}>✓</div>
        <div style={{ fontFamily:'Fraunces,serif', fontSize:'24px', color:'var(--paper)', marginBottom:'12px' }}>Application received.</div>
        <div style={{ fontSize:'15px', color:'rgba(245,241,232,.6)' }}>We'll be in touch within 2 business days.</div>
      </div>
    )
  }

  return (
    <div style={{ background:'rgba(245,241,232,.05)', border:'1px solid rgba(245,241,232,.1)', borderRadius:'20px', padding:'40px' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
        {[['First name','firstName','Jane','given-name','text'],['Last name','lastName','Smith','family-name','text']].map(([label,key,ph,ac,type]) => (
          <div key={key} style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
            <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'10px', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(245,241,232,.4)' }}>{label}</label>
            <input type={type} placeholder={ph} autoComplete={ac} value={fields[key]} onChange={set(key)}
              style={{ background:'rgba(245,241,232,.07)', border:'1px solid rgba(245,241,232,.12)', borderRadius:'10px', padding:'12px 14px', fontFamily:'inherit', fontSize:'14px', color:'var(--paper)', outline:'none' }} />
          </div>
        ))}
      </div>
      {[['Email','email','jane@agency.com','email','email'],['Phone','phone','(555) 000-0000','tel','tel'],['NPN #','npn','12345678','','text'],['Licensed states','licenseStates','TX, FL, CA…','','text'],['Carriers appointed with','carriers','Protective, Banner…','','text']].map(([label,key,ph,ac,type]) => (
        <div key={key} style={{ display:'flex', flexDirection:'column', gap:'6px', marginBottom:'14px' }}>
          <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'10px', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(245,241,232,.4)' }}>{label}</label>
          <input type={type} placeholder={ph} autoComplete={ac} value={fields[key]} onChange={set(key)}
            style={{ background:'rgba(245,241,232,.07)', border:'1px solid rgba(245,241,232,.12)', borderRadius:'10px', padding:'12px 14px', fontFamily:'inherit', fontSize:'14px', color:'var(--paper)', outline:'none' }} />
        </div>
      ))}
      <div style={{ display:'flex', flexDirection:'column', gap:'6px', marginBottom:'24px' }}>
        <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'10px', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(245,241,232,.4)' }}>Anything else? (optional)</label>
        <textarea value={fields.message} onChange={set('message')} placeholder="Years in business, production volume, why you want to joust…"
          style={{ background:'rgba(245,241,232,.07)', border:'1px solid rgba(245,241,232,.12)', borderRadius:'10px', padding:'12px 14px', fontFamily:'inherit', fontSize:'14px', color:'var(--paper)', outline:'none', resize:'vertical', minHeight:'88px' }} />
      </div>
      {status === 'error' && <p style={{ color:'#f08078', fontSize:'13px', textAlign:'center', marginBottom:'12px' }}>Please fill in your name and email.</p>}
      <button onClick={submit} disabled={status === 'loading'}
        style={{ width:'100%', background:'var(--red)', color:'#fff', border:'none', borderRadius:'100px', padding:'15px', fontSize:'15px', fontWeight:'600', fontFamily:'inherit', cursor:'pointer' }}>
        {status === 'loading' ? 'Submitting…' : 'Submit application →'}
      </button>
      <p style={{ marginTop:'12px', fontSize:'11px', color:'rgba(245,241,232,.3)', textAlign:'center' }}>We review every application. No spam, ever.</p>
    </div>
  )
}
