import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link href="/" className="footer-logo">Life Insurance <em>TRIO</em></Link>
        <nav className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/for-agents">For agents</Link>
          <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
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
