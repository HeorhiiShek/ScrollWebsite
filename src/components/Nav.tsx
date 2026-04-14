import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastScrollY.current || y < 60)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-500"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        background: 'rgba(245,242,236,0.92)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(28,25,23,0.06)',
        transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-heading text-xl font-light tracking-[0.12em] text-ink hover:text-gold transition-colors duration-300"
        >
          G.
        </Link>
        <Link
          to="/about"
          className="font-body text-xs font-light tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-300"
        >
          About
        </Link>
      </div>
    </header>
  )
}
