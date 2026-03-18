import React, { useEffect, useRef, useState } from 'react'
import AboutImg from '../assets/AboutImg.jpg'

const skills = [
  { label: 'HTML & CSS', pct: 92 },
  { label: 'Python',     pct: 88 },
  { label: 'React',      pct: 80 },
  { label: 'MySQL',      pct: 74 },
]

const stats = [
  { val: '3+', label: 'Yrs Experience' },
  { val: '20+', label: 'Projects Done' },
  { val: '5+',  label: 'Happy Clients' },
]

export default function About() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if(e.isIntersecting){ setVis(true); ob.disconnect() } }, { threshold: 0.15 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section id="about" className="bg-[#080B0F] py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className={`text-center mb-14 reveal ${vis?'visible':''}`}>
          <span className="section-tag">Who I Am</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            About <span className="g-text">Me</span>
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF]" />
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Photo */}
          <div className={`w-full lg:w-auto flex justify-center reveal d1 ${vis?'visible':''}`}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#00FF87]/15 to-[#60EFFF]/10 blur-xl" />
              <img src={AboutImg} alt="Poothathan"
                className="relative w-60 sm:w-72 lg:w-80 h-72 sm:h-80 lg:h-96 rounded-2xl object-cover shadow-2xl" />
              {/* IIT badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0E1117] border border-[#1A1F2E] rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-[#00FF87] font-bold text-xs">IIT Madras</p>
                <p className="text-slate-400 text-xs mt-0.5">B.S. Data Science</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            <div className={`reveal d2 ${vis?'visible':''}`}>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                Full-Stack Developer &amp; <span className="g-text">Data Science Enthusiast</span>
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                I'm Poothathan Esakkimuthu — a BCA student at Bharath Institute of Higher Education and Research
                (BIHER), simultaneously pursuing a B.S. in Data Science from IIT Madras. With a strong foundation
                in web technologies and algorithmic thinking, I build efficient, scalable applications with clean
                code and a focus on user experience.
              </p>
            </div>

            {/* Skills */}
            <div className={`space-y-4 mb-10 reveal d3 ${vis?'visible':''}`}>
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-white">{s.label}</span>
                    <span className="text-xs text-slate-500 font-medium">{s.pct}%</span>
                  </div>
                  <div className="w-full bg-[#1A1F2E] rounded-full h-1.5 overflow-hidden">
                    <div className="skill-fill" style={{ width: vis ? `${s.pct}%` : '0%', transitionDelay: `${0.3 + i * 0.12}s` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-3 sm:gap-4 reveal d4 ${vis?'visible':''}`}>
              {stats.map(s => (
                <div key={s.label} className="g-card text-center p-4 sm:p-5">
                  <p className="font-heading text-2xl sm:text-3xl font-extrabold g-text">{s.val}</p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
