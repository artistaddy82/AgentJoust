import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JoustRoom from '@/components/JoustRoom'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  return {
    title: `Your Joust — ${params.token.slice(0, 8).toUpperCase()}`,
    description: 'Watch your three life insurance proposals arrive in real time.',
    robots: { index: false }, // personal room — don't index
  }
}

async function getInitialData(token) {
  const apiUrl = process.env.API_URL || 'https://sidecarleads.com'
  try {
    const res = await fetch(`${apiUrl}/jousts/${token}/proposals`, {
      cache: 'no-store',
    })
    if (!res.ok) return { token, proposals: [], status: 'pending' }
    return res.json()
  } catch {
    return { token, proposals: [], status: 'pending' }
  }
}

export default async function JoustPage({ params }) {
  const { token } = params
  const initialData = await getInitialData(token)

  return (
    <>
      <Nav />
      <main className="jr-page">
        <JoustRoom token={token} initialData={initialData} />
      </main>
      <Footer />

      <style>{`
        .jr-page {
          min-height: 100vh;
          padding: 100px 40px 80px;
          background: var(--ink);
        }

        /* ── Wrap ── */
        .jr-wrap {
          max-width: 960px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .jr-header {
          margin-bottom: 48px;
        }
        .jr-token-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .jr-token-mono {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(245,241,232,0.3);
        }
        .jr-live-dot {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7ec89a;
        }
        .jr-pulse {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #7ec89a;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .jr-complete-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          background: rgba(184,146,58,0.12);
          border: 1px solid rgba(184,146,58,0.25);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .jr-headline {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--paper);
          margin-bottom: 14px;
        }
        .jr-headline em { font-style: italic; color: var(--red); }
        .jr-sub {
          font-size: 17px;
          color: rgba(245,241,232,0.5);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .jr-progress-track {
          height: 3px;
          background: rgba(245,241,232,0.1);
          border-radius: 2px;
          overflow: hidden;
          max-width: 480px;
        }
        .jr-progress-bar {
          height: 100%;
          background: var(--green);
          border-radius: 2px;
          transition: width 0.6s ease;
        }

        /* ── Cards grid ── */
        .jr-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .jr-card {
          background: rgba(245,241,232,0.05);
          border: 1px solid rgba(245,241,232,0.1);
          border-radius: 18px;
          padding: 28px;
          position: relative;
          transition: border-color .3s, background .3s;
        }
        .jr-card-pending {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 280px;
          text-align: center;
          border-style: dashed;
        }
        .jr-pending-icon {
          font-size: 28px;
          opacity: 0.25;
          margin-bottom: 12px;
          animation: pendingPulse 3s ease-in-out infinite;
        }
        @keyframes pendingPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        .jr-pending-label {
          font-family: 'Fraunces', serif;
          font-size: 16px;
          color: rgba(245,241,232,0.4);
          margin-bottom: 6px;
        }
        .jr-pending-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,241,232,0.2);
        }

        /* ── Live card ── */
        .jr-card-live {
          animation: cardReveal .5s ease;
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .jr-card-winner {
          border-color: var(--gold) !important;
          background: rgba(184,146,58,0.07) !important;
        }
        .jr-card-lost { opacity: 0.45; }

        .jr-crown {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }
        .jr-winner-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 6px;
        }

        .jr-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .jr-agent-id {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,241,232,0.35);
        }
        .jr-rating {
          font-size: 12px;
          color: rgba(245,241,232,0.5);
        }
        .jr-rating strong { color: var(--gold); }
        .jr-carrier {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--paper);
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .jr-policy {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,241,232,0.3);
          margin-bottom: 20px;
        }
        .jr-price-block { margin-bottom: 20px; }
        .jr-price-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,241,232,0.3);
          margin-bottom: 4px;
        }
        .jr-price {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: -0.04em;
          color: var(--paper);
          line-height: 1;
        }
        .jr-currency {
          font-size: 22px;
          vertical-align: top;
          margin-top: 8px;
          display: inline-block;
        }
        .jr-period {
          font-size: 16px;
          color: rgba(245,241,232,0.4);
          letter-spacing: 0;
        }

        .jr-details {
          list-style: none;
          border-top: 1px solid rgba(245,241,232,0.08);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .jr-details li {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(245,241,232,0.5);
        }
        .jr-details li span:last-child { color: rgba(245,241,232,0.8); font-weight: 500; }

        .jr-crown-btn {
          width: 100%;
          background: var(--green);
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 13px;
          border-radius: 10px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 14px;
          font-weight: 600;
          transition: background .2s, transform .15s;
        }
        .jr-crown-btn:hover { background: #1e3d29; transform: translateY(-1px); }
        .jr-crown-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        /* Contact reveal */
        .jr-contact-reveal {
          background: rgba(45,90,61,0.15);
          border: 1px solid rgba(45,90,61,0.35);
          border-radius: 12px;
          padding: 16px;
          margin-top: 12px;
        }
        .jr-contact-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7ec89a;
          margin-bottom: 8px;
        }
        .jr-contact-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--paper);
          margin-bottom: 4px;
        }
        .jr-contact-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 13px;
          color: rgba(245,241,232,0.6);
        }

        /* ── Misc ── */
        .jr-sealed-notice {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(245,241,232,0.4);
          background: rgba(45,90,61,0.08);
          border: 1px solid rgba(45,90,61,0.18);
          border-radius: 10px;
          padding: 14px 18px;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .jr-bookmark {
          text-align: center;
          padding: 24px;
          border: 1px dashed rgba(245,241,232,0.1);
          border-radius: 12px;
          margin-top: 16px;
        }
        .jr-bookmark-label {
          font-size: 13px;
          color: rgba(245,241,232,0.35);
          margin-bottom: 6px;
        }
        .jr-bookmark-url {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: rgba(245,241,232,0.2);
          word-break: break-all;
        }
        .jr-error {
          text-align: center;
          color: #f08078;
          font-size: 14px;
          margin: 12px 0;
        }

        @media (max-width: 900px) {
          .jr-page { padding: 90px 20px 60px; }
          .jr-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
