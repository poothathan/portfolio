import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#service' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [active, setActive]       = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = links.map(l => l.href.slice(1))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00FF87] to-[#60EFFF] flex items-center justify-center text-[#080B0F] font-black text-sm">P</span>
            <span className="font-heading font-bold text-white text-lg tracking-tight hidden xs:block">oothathan</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className={`aul text-sm font-medium transition-colors duration-200 ${active === l.href.slice(1) ? 'g-text' : 'text-slate-400 hover:text-white'}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden md:inline-flex text-sm px-5 py-2.5">Hire Me</a>
            <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white p-1 transition-colors" aria-label="menu">
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mob-menu md:hidden ${open ? 'open' : ''}`}>
        <div className="nav-glass border-t border-white/5 px-5 pt-3 pb-5 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`py-3 px-2 text-base font-medium border-b border-white/5 transition-colors ${active === l.href.slice(1) ? 'g-text' : 'text-slate-300 hover:text-white'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">Hire Me</a>
        </div>
      </div>
    </nav>
  )
}
