'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="logo">
        <img src="/shield-logo.svg" width="26" height="30" alt="" style={{display:'block',flexShrink:0}} />
        Life Insurance <em>TRIO</em>
      </Link>
      <div className="nav-links">
        <Link href="/#how">How it works</Link>
        <Link href="/for-agents">For agents</Link>
        <Link href="/#start" className="nav-cta">Get 3 quotes</Link>
      </div>
    </nav>
  )
}
