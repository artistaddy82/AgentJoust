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
        <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
          <path d="M3 25 L12 16 M25 3 L16 12" stroke="#14110d" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="14" cy="14" r="2.8" fill="#c8281c"/>
          <path d="M1 27 L5 23 M23 5 L27 1" stroke="#c8281c" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        Agent <em>Joust</em>
      </Link>
      <div className="nav-links">
        <Link href="/#how">How it works</Link>
        <Link href="/for-agents">For agents</Link>
        <a href="https://sidecarleads.com/login" target="_blank" rel="noopener">Agent login</a>
        <Link href="/#start" className="nav-cta">Get 3 quotes</Link>
      </div>
    </nav>
  )
}
