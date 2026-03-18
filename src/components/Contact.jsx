import React, { useRef, useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const info = [
  { icon:FaEnvelope,    label:'Email',    val:'poothathan2006@gmail.com',               href:'mailto:poothathan2006@gmail.com', color:'#00FF87' },
  { icon:FaPhone,       label:'Phone',    val:'+91 9042251304',                         href:'tel:+919042251304',              color:'#60EFFF' },
  { icon:FaMapMarkerAlt,label:'Location', val:'Alangulam, Tenkasi, Tamil Nadu 627423',  href:null,                             color:'#A78BFA' },
]

export default function Contact() {
  const form = useRef()
  const ref  = useRef(null)
  const [vis,    setVis]    = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if(e.isIntersecting){ setVis(true); ob.disconnect() } }, { threshold:0.1 })
    if(ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const send = (e) => {
    e.preventDefault()
    setStatus('loading')
    emailjs.sendForm('service_j5wr7xn','template_aq3br3s', form.current, '8CvBXjH2joOwAHKG6')
      .then(()  => { setStatus('ok');  form.current.reset(); setTimeout(()=>setStatus(null),5000) })
      .catch(()  => { setStatus('err'); setTimeout(()=>setStatus(null),5000) })
  }

  return (
    <section id="contact" className="bg-[#060810] py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="orb w-96 h-96 bg-[#00FF87]/5 -top-20 -right-20 hidden lg:block" style={{animationDuration:'16s'}} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        <div className={`text-center mb-14 reveal ${vis?'visible':''}`}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1">
            Let's <span className="g-text">Connect</span>
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* Info */}
          <div className={`lg:w-80 flex-shrink-0 reveal d1 ${vis?'visible':''}`}>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              I'd love to hear<br/><span className="g-text">from you</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open.
            </p>

            <div className="space-y-5">
              {info.map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{background:`${item.color}14`}}>
                      <Icon style={{color:item.color}} size={14} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-600 mb-1">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-slate-300 text-sm hover:text-white transition-colors break-all">{item.val}</a>
                        : <p className="text-slate-300 text-sm">{item.val}</p>
                      }
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-[#1A1F2E] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" style={{boxShadow:'0 0 6px #00FF87'}} />
              <span className="text-slate-400 text-sm">Usually responds within 24 hours</span>
            </div>
          </div>

          {/* Form */}
          <div className={`flex-1 reveal d2 ${vis?'visible':''}`}>
            <div className="g-card p-6 sm:p-8">
              <form ref={form} onSubmit={send} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block mb-1.5">Name</label>
                    <input type="text" name="user_name" required placeholder="John Doe" className="field" />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block mb-1.5">Email</label>
                    <input type="email" name="user_email" required placeholder="you@example.com" className="field" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block mb-1.5">Subject</label>
                  <input type="text" name="subject" placeholder="Project inquiry..." className="field" />
                </div>
                <div>
                  <label className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 block mb-1.5">Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell me about your project..."
                    className="field resize-none" />
                </div>

                {status === 'ok'  && <div className="bg-[#00FF87]/10 border border-[#00FF87]/20 text-[#00FF87] text-sm px-4 py-3 rounded-xl">✓ Message sent! I'll be in touch soon.</div>}
                {status === 'err' && <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">✗ Failed to send. Please email directly.</div>}

                <button type="submit" disabled={status==='loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                  {status === 'loading'
                    ? <><span className="w-4 h-4 border-2 border-[#080B0F]/30 border-t-[#080B0F] rounded-full animate-spin"/>Sending…</>
                    : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
