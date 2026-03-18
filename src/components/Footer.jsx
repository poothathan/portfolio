import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa'

const socials = [
  { icon:FaGithub,    href:'https://github.com/poothathan',                                           label:'GitHub',    color:'hover:text-white' },
  { icon:FaLinkedin,  href:'https://www.linkedin.com/in/poothathan-esakkimuthu-a010652a7/',            label:'LinkedIn',  color:'hover:text-[#60EFFF]' },
  { icon:FaWhatsapp,  href:'https://wa.me/919042251304',                                               label:'WhatsApp',  color:'hover:text-[#00FF87]' },
  { icon:FaInstagram, href:'#',                                                                        label:'Instagram', color:'hover:text-pink-400' },
  { icon:FaFacebook,  href:'#',                                                                        label:'Facebook',  color:'hover:text-blue-400' },
]

const navLinks = [
  {label:'Home',     href:'#home'},
  {label:'About',    href:'#about'},
  {label:'Services', href:'#service'},
  {label:'Projects', href:'#projects'},
  {label:'Contact',  href:'#contact'},
]

export default function Footer() {
  const form = useRef()
  const [sub, setSub] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    setSub('loading')
    emailjs.sendForm('service_j5wr7xn','template_ypiys0l', form.current, '8CvBXjH2joOwAHKG6')
      .then(() => { setSub('ok'); form.current.reset() })
      .catch(() => setSub('err'))
  }

  return (
    <footer className="bg-[#060810] border-t border-[#1A1F2E]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00FF87] to-[#60EFFF] flex items-center justify-center text-[#080B0F] font-black text-sm">P</span>
              <span className="font-heading font-bold text-white text-xl tracking-tight">oothathan</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer based in Tamil Nadu, India. Building fast, modern web experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="aul text-sm text-slate-400 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-5">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe for project updates and news.</p>
            <form ref={form} onSubmit={subscribe} className="flex gap-2">
              <input name="email" type="email" required placeholder="your@email.com"
                className="field flex-1 min-w-0 text-sm py-2.5 px-3" />
              <button type="submit" disabled={sub==='loading'}
                className="btn-primary text-sm px-4 py-2.5 flex-shrink-0 disabled:opacity-60">
                {sub==='loading' ? '…' : '→'}
              </button>
            </form>
            {sub==='ok'  && <p className="text-[#00FF87] text-xs mt-2">✓ Subscribed!</p>}
            {sub==='err' && <p className="text-red-400 text-xs mt-2">✗ Failed. Try again.</p>}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A1F2E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Poothathan · Made with <FaHeart className="text-red-500 text-[10px]"/> in Tamil Nadu
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({icon:Icon, href, label, color}) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className={`text-slate-600 ${color} transition-all duration-250 hover:scale-110`}>
                <Icon size={16}/>
              </a>
            ))}
          </div>

          <div className="flex gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
