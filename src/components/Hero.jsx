import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/AboutImg.jpg'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient blobs */}
      <div className="orb w-[500px] h-[500px] bg-[#00FF87]/8 -top-20 -left-40" style={{animationDuration:'14s'}} />
      <div className="orb w-[400px] h-[400px] bg-[#60EFFF]/6 bottom-0 right-0" style={{animationDuration:'18s',animationDelay:'-5s'}} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize:'32px 32px'}} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

          {/* ── Text ── */}
          <div className={`flex-1 w-full text-center lg:text-left transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-[#00FF87]/8 border border-[#00FF87]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" style={{boxShadow:'0 0 6px #00FF87', animation:'pulse 2s infinite'}} />
              <span className="text-[#00FF87] text-xs font-semibold tracking-widest uppercase">Open to Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="font-heading text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5 text-white">
              Hi, I'm<br />
              <span className="g-text">Poothathan</span>
            </h1>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {['Full-Stack Dev','React','Python','Data Science'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Final-year BCA student at BIHER & B.S. Data Science at IIT Madras.
              I build fast, modern web applications from frontend to backend.
            </p>

            {/* CTA row */}
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
              <a href="#contact" className="btn-primary w-full xs:w-auto justify-center">Get In Touch</a>
              <button onClick={() => window.open('https://poothathan-softwaredeveloper-resume.tiiny.site','_blank')}
                className="btn-outline w-full xs:w-auto justify-center">View Resume ↗</button>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center lg:justify-start gap-5">
              {[
                {icon: FaGithub,   href:'https://github.com/poothathan', label:'GitHub',   color:'hover:text-white'},
                {icon: FaLinkedin, href:'https://www.linkedin.com/in/poothathan-esakkimuthu-a010652a7/', label:'LinkedIn', color:'hover:text-[#60EFFF]'},
                {icon: FaWhatsapp, href:'https://wa.me/919042251304', label:'WhatsApp', color:'hover:text-[#00FF87]'},
              ].map(({icon: Icon, href, label, color}) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`text-slate-500 ${color} transition-all duration-300 hover:scale-110`}>
                  <Icon size={20} />
                </a>
              ))}
              <div className="w-px h-5 bg-slate-700" />
              <span className="text-slate-600 text-xs font-medium">@poothathan</span>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className={`flex-shrink-0 transition-all duration-700 delay-200 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative mx-auto" style={{width:'fit-content'}}>
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full"
                style={{background:'conic-gradient(from 0deg, #00FF87, #60EFFF, #00FF87)', padding:'2px', borderRadius:'50%', animation:'spin 6s linear infinite'}}>
                <div className="w-full h-full rounded-full bg-[#080B0F]" />
              </div>
              {/* Soft glow behind */}
              <div className="absolute inset-[-20px] rounded-full bg-[#00FF87]/10 blur-3xl" style={{animation:'pulse 3s ease-in-out infinite'}} />
              {/* Photo */}
              <img src={HeroImage} alt="Poothathan"
                className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover z-10"
                style={{animation:'float 5s ease-in-out infinite'}} />

              {/* Floating stat cards */}
              <div className="absolute -left-8 sm:-left-14 top-8 bg-[#0E1117] border border-[#1A1F2E] rounded-xl px-3 py-2 shadow-xl z-20 hidden sm:block">
                <p className="text-[#00FF87] font-bold text-lg leading-none">20+</p>
                <p className="text-slate-400 text-xs mt-0.5">Projects</p>
              </div>
              <div className="absolute -right-8 sm:-right-14 bottom-10 bg-[#0E1117] border border-[#1A1F2E] rounded-xl px-3 py-2 shadow-xl z-20 hidden sm:block">
                <p className="text-[#60EFFF] font-bold text-lg leading-none">3+</p>
                <p className="text-slate-400 text-xs mt-0.5">Years Exp.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30"
          style={{animation:'bounce 2s infinite'}}>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#00FF87] to-transparent" />
          <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes bounce{ 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
      `}</style>
    </section>
  )
}
