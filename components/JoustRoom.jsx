'use client'
import { useState, useEffect, useCallback } from 'react'

const POLL_INTERVAL = 20000 // 20 seconds

export default function JoustRoom({ token, initialData }) {
  const [data, setData]         = useState(initialData)
  const [winner, setWinner]     = useState(null)
  const [crowning, setCrowning] = useState(null) // agentId being crowned
  const [error, setError]       = useState('')

  const proposals  = data?.proposals  || []
  const joustStatus = data?.status    || 'pending'
  const isComplete  = joustStatus === 'complete' || winner

  // ── Polling ──────────────────────────────────────────────────────────────────
  const poll = useCallback(async () => {
    if (isComplete) return
    try {
      const res  = await fetch(`/api/joust/${token}`, { cache: 'no-store' })
      const json = await res.json()
      setData(json)
    } catch { /* silent */ }
  }, [token, isComplete])

  useEffect(() => {
    if (isComplete) return
    const id = setInterval(poll, POLL_INTERVAL)
    return () => clearInterval(id)
  }, [poll, isComplete])

  // ── Crown winner ─────────────────────────────────────────────────────────────
  const crownWinner = async (agentId) => {
    setCrowning(agentId)
    setError('')
    try {
      const res  = await fetch(`/api/joust/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setWinner(agentId)
      setData(d => ({ ...d, status: 'complete', winner: json }))
    } catch (err) {
      setError(err.message || 'Could not record your choice. Please try again.')
    } finally {
      setCrowning(null)
    }
  }

  // ── Derived counts ────────────────────────────────────────────────────────────
  const received = proposals.length
  const total    = 3

  return (
    <div className="jr-wrap">

      {/* Header */}
      <div className="jr-header">
        <div className="jr-token-label">
          <span className="jr-token-mono">JOUST · {token.slice(0, 8).toUpperCase()}</span>
          {!isComplete && (
            <span className="jr-live-dot">
              <span className="jr-pulse" />
              Live
            </span>
          )}
          {isComplete && <span className="jr-complete-badge">Complete</span>}
        </div>
        <h1 className="jr-headline">
          {isComplete
            ? <>Your winner has been <em>crowned.</em></>
            : <>Your joust is <em>live.</em></>
          }
        </h1>
        <p className="jr-sub">
          {isComplete
            ? 'Your chosen agent will be in touch shortly with next steps.'
            : `${received} of ${total} proposals received. Agents have 24 hours to respond.`
          }
        </p>

        {/* Progress bar */}
        {!isComplete && (
          <div className="jr-progress-track">
            <div
              className="jr-progress-bar"
              style={{ width: `${(received / total) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Proposal cards */}
      <div className="jr-cards">
        {Array.from({ length: total }).map((_, i) => {
          const proposal = proposals[i]
          const isWinner = winner && proposal?.agentId === winner

          if (!proposal) {
            return (
              <div key={i} className="jr-card jr-card-pending">
                <div className="jr-pending-icon">⚔</div>
                <div className="jr-pending-label">Agent reviewing brief…</div>
                <div className="jr-pending-sub">Proposal {i + 1} of 3</div>
              </div>
            )
          }

          return (
            <div
              key={proposal.agentId}
              className={`jr-card jr-card-live${isWinner ? ' jr-card-winner' : ''}${winner && !isWinner ? ' jr-card-lost' : ''}`}
            >
              {isWinner && (
                <div className="jr-crown">
                  <svg viewBox="0 0 56 32" fill="none" width="56" height="32">
                    <path d="M4 24 L10 8 L18 16 L28 4 L38 16 L46 8 L52 24 Z" fill="#b8923a" stroke="#14110d" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M4 24 L52 24 L50 30 L6 30 Z" fill="#9a7a2e" stroke="#14110d" strokeWidth="1.2"/>
                  </svg>
                  <span className="jr-winner-label">★ Your champion</span>
                </div>
              )}

              <div className="jr-card-head">
                <span className="jr-agent-id">Agent · {proposal.agentId?.slice(-3)}</span>
                {proposal.rating && (
                  <span className="jr-rating"><strong>{proposal.rating}</strong> ★</span>
                )}
              </div>

              <div className="jr-carrier">{proposal.carrier || '—'}</div>
              <div className="jr-policy">{proposal.policyLabel || ''}</div>

              <div className="jr-price-block">
                <div className="jr-price-label">Monthly premium</div>
                <div className="jr-price">
                  <span className="jr-currency">$</span>
                  {proposal.monthlyPremium}
                  <span className="jr-period">/mo</span>
                </div>
              </div>

              <ul className="jr-details">
                <li><span>Coverage</span><span>{proposal.coverage}</span></li>
                <li><span>Underwriting</span><span>{proposal.underwriting}</span></li>
                {proposal.conversion && (
                  <li><span>Conversion</span><span>{proposal.conversion}</span></li>
                )}
              </ul>

              {!winner && (
                <button
                  className="jr-crown-btn"
                  onClick={() => crownWinner(proposal.agentId)}
                  disabled={!!crowning}
                >
                  {crowning === proposal.agentId ? 'Crowning…' : '👑 Choose this agent'}
                </button>
              )}

              {isWinner && data?.winner?.contactInfo && (
                <div className="jr-contact-reveal">
                  <div className="jr-contact-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                    Your agent's contact
                  </div>
                  <div className="jr-contact-name">{data.winner.contactInfo.name}</div>
                  <div className="jr-contact-details">
                    {data.winner.contactInfo.phone && <span>{data.winner.contactInfo.phone}</span>}
                    {data.winner.contactInfo.email && <span>{data.winner.contactInfo.email}</span>}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {error && <p className="jr-error">{error}</p>}

      {/* Sealed notice (pre-winner) */}
      {!winner && received > 0 && (
        <div className="jr-sealed-notice">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          Your contact info stays sealed until you crown a winner. The other two agents never see it. Ever.
        </div>
      )}

      {/* Bookmark reminder */}
      <div className="jr-bookmark">
        <div className="jr-bookmark-label">🔖 Bookmark this page to return anytime</div>
        <div className="jr-bookmark-url">{typeof window !== 'undefined' ? window.location.href : ''}</div>
      </div>

    </div>
  )
}
