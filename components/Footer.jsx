import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link href="/" className="footer-logo" style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <img src="/shield-logo.svg" width="18" height="21" alt="" style={{display:'block',filter:'brightness(0) invert(1)',opacity:.7}} />
          Life Insurance <em>TRIO</em>
        </Link>
        <nav className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/for-agents">For agents</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <p className="footer-copy">
        © {year} Life Insurance TRIO — Independent agent competition platform. Not affiliated with any carrier.
      </p>
    </footer>
  )
}
