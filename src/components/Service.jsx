import React, { useEffect, useRef, useState } from 'react'
import { FaPaintBrush, FaCode, FaServer, FaLayerGroup, FaPen, FaMobileAlt } from 'react-icons/fa'

const services = [
  { id:1, title:'Web Design',              icon:FaPaintBrush, color:'#FF6B9D', bg:'rgba(255,107,157,0.1)',  desc:'Crafting visually stunning, user-centric interfaces that capture your brand.' },
  { id:2, title:'Frontend Development',    icon:FaCode,       color:'#00FF87', bg:'rgba(0,255,135,0.08)',  desc:'Building blazing-fast, responsive UIs with React and modern CSS.' },
  { id:3, title:'Backend Development',     icon:FaServer,     color:'#60EFFF', bg:'rgba(96,239,255,0.08)', desc:'Robust server logic, REST APIs, and scalable database architecture.' },
  { id:4, title:'Full-Stack Development',  icon:FaLayerGroup, color:'#A78BFA', bg:'rgba(167,139,250,0.1)', desc:'End-to-end application development bridging frontend and backend.' },
  { id:5, title:'Content Writing',         icon:FaPen,        color:'#FBBF24', bg:'rgba(251,191,36,0.08)', desc:'Clear, compelling technical and business content for your audience.' },
  { id:6, title:'Mobile App Development',  icon:FaMobileAlt,  color:'#34D399', bg:'rgba(52,211,153,0.08)', desc:'Intuitive Android applications built to platform best practices.' },
]

export default function Service() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if(e.isIntersecting){ setVis(true); ob.disconnect() } }, { threshold:0.1 })
    if(ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="service" className="bg-[#060810] py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className={`text-center mb-14 reveal ${vis?'visible':''}`}>
          <span className="section-tag">What I Do</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            My <span className="g-text">Services</span>
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.id}
                className={`reveal d${(i%6)+1} ${vis?'visible':''} g-card p-6 cursor-default group`}
                style={{transitionDelay:`${i*0.07}s`}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{background: s.bg}}>
                  <Icon style={{color: s.color}} size={18} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase mb-2 block" style={{color:s.color}}>
                  0{s.id}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
