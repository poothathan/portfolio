import React, { useEffect, useRef, useState } from 'react'
import dsaImg        from '../assets/dsa_visualizer.png'
import connectFourImg from '../assets/connect_four.png'
import guess_game    from '../assets/guess_game.png'
import currency      from '../assets/currency_exchange.png'
import e_com         from '../assets/e-com.png'
import digital_guide from '../assets/digital_guidence.png'
import bmi_calc      from '../assets/bmi.png'
import grocery       from '../assets/online_grocery.png'
import weather       from '../assets/weather_app.png'
import todo          from '../assets/todo.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

const all = [
  { id:1,  name:'DSA Visualizer',     tech:'React',   img:dsaImg,         link:'https://poothathan.github.io/DSA-Visualizer/',            desc:'Interactive algorithm & data structure animations.' },
  { id:2,  name:'Connect Four',       tech:'Javascript', img:connectFourImg, link:'https://poothathan.github.io/connect-four/',              desc:'Classic two-player game in pure HTML/CSS/JS.' },
  { id:3,  name:'Guess the Number',   tech:'React',   img:guess_game,     link:'https://poothathan.github.io/guess-game/',               desc:'Fun number guessing with scoring system.' },
  { id:4,  name:'Currency Converter', tech:'Javascript', img:currency,       link:'https://poothathan.github.io/currency_exchange/',         desc:'Live rates via OpenExchange API.' },
  { id:5,  name:'E-Commerce Site',    tech:'Javascript', img:e_com,          link:'https://poothathan.github.io/e-commerce/',               desc:'Product listing with cart functionality.' },
  { id:6,  name:'Digital Guidance',   tech:'Javascript', img:digital_guide,  link:'https://poothathan.github.io/digital_guidance/',          desc:'Digital literacy guide application.' },
  { id:7,  name:'BMI Calculator',     tech:'React',   img:bmi_calc,       link:'https://poothathan.github.io/bmi_calc/',                  desc:'BMI calculator with health insights.' },
  { id:8,  name:'Online Grocery',     tech:'Javascript', img:grocery,        link:'https://poothathan.github.io/levioose_online_grocery/',   desc:'Grocery shopping UI with filters.' },
  { id:9,  name:'Weather App',        tech:'Javascript', img:weather,        link:'https://poothathan.github.io/weather_app/',              desc:'City weather using OpenWeather API.' },
  { id:10, name:'To Do App',          tech:'Javascript', img:todo,           link:'https://poothathan.github.io/to_do_app/',                 desc:'Task manager with localStorage.' },
]

const filters = ['All', 'React', 'Javascript']

export default function Projects() {
  const ref = useRef(null)
  const [vis, setVis]       = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if(e.isIntersecting){ setVis(true); ob.disconnect() } }, { threshold:0.05 })
    if(ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const list = filter === 'All' ? all : all.filter(p => p.tech === filter)

  return (
    <section id="projects" className="bg-[#080B0F] py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className={`text-center mb-10 reveal ${vis?'visible':''}`}>
          <span className="section-tag">My Work</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Featured <span className="g-text">Projects</span>
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF]" />
        </div>

        {/* Filter */}
        <div className={`flex justify-center gap-2 mb-12 reveal d1 ${vis?'visible':''}`}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all duration-250 ${
                filter === f
                  ? 'bg-gradient-to-r from-[#00FF87] to-[#60EFFF] border-transparent text-[#080B0F]'
                  : 'border-[#1A1F2E] text-slate-400 hover:border-[#00FF87]/30 hover:text-white'
              }`}>{f}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, i) => (
            <div key={p.id}
              className={`reveal ${vis?'visible':''} g-card overflow-hidden group`}
              style={{transitionDelay:`${i*0.06}s`}}>
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0F] via-[#080B0F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="btn-primary text-xs px-4 py-2 gap-1.5">
                    <FaExternalLinkAlt size={10}/> Live Demo
                  </a>
                </div>
                {/* Tech badge */}
                <div className="absolute top-3 left-3 chip">{p.tech === 'React' ? 'React JS' : 'HTML CSS JS'}</div>
              </div>
              {/* Body */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-base mb-1.5 group-hover:g-text transition-colors">{p.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00FF87] hover:text-[#60EFFF] transition-colors">
                  <FaExternalLinkAlt size={10}/> View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-slate-700 text-xs mt-10 reveal ${vis?'visible':''}`}>
          {list.length} of {all.length} projects
        </p>
      </div>
    </section>
  )
}
