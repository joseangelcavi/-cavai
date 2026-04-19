'use client'
import { useState, useEffect, useRef } from 'react'

const B = '#1a6fc4'
const D = '#0d1b2a'
const A = '#3b9eff'

function FadeIn({ children, delay = 0, className = '' }: any) {
  const [v, setV] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.1 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0,
      transform: v ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  )
}

function AgentCard({ icon, name, desc, delay }: { icon: string; name: string; desc: string; delay: number }) {
  const [h, setH] = useState(false)
  return (
    <FadeIn delay={delay}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        background: h ? `linear-gradient(135deg,${D},#132f4c)` : `linear-gradient(135deg,#0a1628,#0f2035)`,
        border: `1px solid ${h ? A : '#1a3a5c'}`,
        borderRadius: '16px', padding: '32px 28px', cursor: 'pointer',
        transition: 'all 0.4s ease',
        transform: h ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: h ? `0 20px 60px rgba(26,111,196,0.25)` : '0 4px 20px rgba(0,0,0,0.3)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50%', right: '-50%', width: '200px', height: '200px',
          background: `radial-gradient(circle,${A}15,transparent 70%)`,
          opacity: h ? 1 : 0, transition: 'opacity 0.4s ease',
        }} />
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>
        <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{name}</h3>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '15px', color: '#8ba3c0', lineHeight: 1.6, marginBottom: '24px', minHeight: '48px' }}>{desc}</p>
        <div style={{ borderTop: '1px solid #1a3a5c', paddingTop: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', color: '#5a7a9a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Mensual</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '32px', fontWeight: 800, color: A }}>
                $50<span style={{ fontSize: '14px', color: '#5a7a9a', fontWeight: 400 }}> USD/mes</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '11px', color: '#5a7a9a', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>Anual</div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '22px', fontWeight: 700, color: '#fff' }}>
                $400<span style={{ fontSize: '13px', color: '#5a7a9a', fontWeight: 400 }}> USD/año</span>
              </div>
              <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 600, marginTop: '2px' }}>Ahorras $200</div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [annual, setAnnual] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: D, color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(2deg)} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 20px rgba(59,158,255,0.3)} 50%{box-shadow:0 0 40px rgba(59,158,255,0.6)} }
        @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes typing { 0%,100%{opacity:1} 50%{opacity:0} }
        .cta-btn{background:linear-gradient(135deg,${B},${A});color:#fff;border:none;padding:16px 40px;border-radius:50px;font-family:'Outfit',sans-serif;font-size:17px;font-weight:700;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block;background-size:200% 200%;animation:gradient-shift 3s ease infinite}
        .cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(59,158,255,0.4)}
        .cta-secondary{background:transparent;border:2px solid ${A};color:${A};padding:14px 36px;border-radius:50px;font-family:'Outfit',sans-serif;font-size:16px;font-weight:600;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block}
        .cta-secondary:hover{background:${A}15;transform:translateY(-2px)}
        .nav-link{color:#8ba3c0;text-decoration:none;font-size:15px;font-weight:500;transition:color .2s;cursor:pointer}
        .nav-link:hover{color:#fff}
        @media(max-width:768px){
          .hero-grid{flex-direction:column!important;text-align:center!important}
          .hero-text h1{font-size:36px!important}
          .agents-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:1fr!important;gap:24px!important}
          .steps-grid{grid-template-columns:1fr!important}
          .nav-links{display:none!important}
          .hero-buttons{flex-direction:column!important;align-items:center!important}
          .section-pad{padding:60px 20px!important}
          .footer-grid{grid-template-columns:1fr!important;text-align:center!important}
          .hero-visual{display:none!important}
          .pricing-toggle{flex-direction:column!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '16px 0',
        background: scrolled ? `${D}ee` : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1a3a5c' : 'none',
        transition: 'all .3s ease',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: `linear-gradient(135deg,${B},${A})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '16px',
            }}>C</div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '22px', letterSpacing: '-0.5px' }}>
              CAV<span style={{ color: A }}>AI</span>
            </span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#agentes" className="nav-link">Agentes</a>
            <a href="#como-funciona" className="nav-link">Cómo Funciona</a>
            <a href="#precios" className="nav-link">Precios</a>
            <a href="#waitlist" className="cta-btn" style={{ padding: '10px 28px', fontSize: '14px' }}>Acceso Anticipado</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', background: `radial-gradient(circle,${B}20,transparent 70%)`, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: `radial-gradient(circle,${A}15,transparent 70%)`, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${B}08 1px,transparent 1px),linear-gradient(90deg,${B}08 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 32px 80px', display: 'flex', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1 }}>
          <div className="hero-text" style={{ flex: 1 }}>
            <FadeIn>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: `${A}15`, border: `1px solid ${A}30`, borderRadius: '50px',
                padding: '8px 20px', marginBottom: '28px', fontSize: '14px', color: A, fontWeight: 600,
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                Primera plataforma de agentes IA en español
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 style={{
                fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(36px,5vw,64px)',
                fontWeight: 900, lineHeight: 1.08, marginBottom: '24px', letterSpacing: '-2px',
              }}>
                Tu negocio vendiendo<br />
                <span style={{ background: `linear-gradient(135deg,${A},#60b8ff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  mientras duermes
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{ fontSize: '19px', color: '#8ba3c0', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}>
                Agentes de IA autónomos que venden, cobran y atienden a tus clientes 24/7 por WhatsApp.
                En español. Listos para activar. <strong style={{ color: '#fff' }}>Desde $50 USD/mes.</strong>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#waitlist" className="cta-btn">Quiero mi agente →</a>
                <a href="#como-funciona" className="cta-secondary">Ver cómo funciona</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px', paddingTop: '28px', borderTop: '1px solid #1a3a5c' }}>
                <div style={{ display: 'flex' }}>
                  {['🇲🇽', '🇨🇴', '🇦🇷', '🇨🇱', '🇪🇸'].map((f, i) => (
                    <div key={i} style={{
                      width: '36px', height: '36px', borderRadius: '50%', background: '#132f4c',
                      border: `2px solid ${D}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', marginLeft: i > 0 ? '-10px' : '0',
                    }}>{f}</div>
                  ))}
                </div>
                <div style={{ fontSize: '14px', color: '#5a7a9a' }}>
                  Para emprendedores en toda <strong style={{ color: '#8ba3c0' }}>Latinoamérica</strong>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Chat Mockup */}
          <FadeIn delay={0.3} className="hero-visual">
            <div style={{
              flex: 1, maxWidth: '440px', background: '#0a1628', borderRadius: '24px',
              border: '1px solid #1a3a5c', padding: '24px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)', animation: 'float 6s ease-in-out infinite',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #1a3a5c' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: `linear-gradient(135deg,${B},${A})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', fontWeight: 900, fontFamily: "'Outfit',sans-serif",
                }}>C</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', fontFamily: "'Outfit',sans-serif" }}>CAVAI Sales Agent</div>
                  <div style={{ fontSize: '12px', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />Activo 24/7
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ alignSelf: 'flex-end' }}>
                  <div style={{ background: `linear-gradient(135deg,${B},${A})`, borderRadius: '18px 18px 4px 18px', padding: '12px 16px', fontSize: '14px', maxWidth: '280px' }}>
                    Hola, ¿cómo funciona el agente de ventas?
                  </div>
                  <div style={{ fontSize: '11px', color: '#5a7a9a', textAlign: 'right', marginTop: '4px' }}>3:42 AM</div>
                </div>

                <div style={{ alignSelf: 'flex-start' }}>
                  <div style={{ background: '#132f4c', borderRadius: '18px 18px 18px 4px', padding: '14px 16px', fontSize: '14px', maxWidth: '300px', lineHeight: 1.5, color: '#c8ddf0' }}>
                    ¡Hola! 👋 Tu agente WhatsApp Sales responde clientes, muestra tu catálogo y cierra ventas — todo automático.<br /><br />
                    📅 <strong style={{ color: '#fff' }}>$50 USD/mes</strong> sin compromiso<br />
                    💰 <strong style={{ color: '#fff' }}>$400 USD/año</strong> (ahorras $200)<br /><br />
                    ¿Quieres activarlo hoy? 🚀
                  </div>
                  <div style={{ fontSize: '11px', color: '#5a7a9a', marginTop: '4px' }}>3:42 AM · Respuesta en 3s</div>
                </div>

                <div style={{ alignSelf: 'flex-end' }}>
                  <div style={{ background: `linear-gradient(135deg,${B},${A})`, borderRadius: '18px 18px 4px 18px', padding: '12px 16px', fontSize: '14px' }}>
                    Sí, me interesa 👀
                  </div>
                </div>

                <div style={{ alignSelf: 'flex-start' }}>
                  <div style={{ background: '#132f4c', borderRadius: '18px 18px 18px 4px', padding: '14px 16px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span style={{ animation: 'typing 1.4s infinite', animationDelay: '0s', fontSize: '20px', color: A }}>•</span>
                    <span style={{ animation: 'typing 1.4s infinite', animationDelay: '0.2s', fontSize: '20px', color: A }}>•</span>
                    <span style={{ animation: 'typing 1.4s infinite', animationDelay: '0.4s', fontSize: '20px', color: A }}>•</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-pad" style={{ padding: '100px 32px', background: `linear-gradient(180deg,${D},#0a1628)` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1px' }}>
              ¿Tu negocio duerme cuando tú duermes?
            </h2>
            <p style={{ fontSize: '18px', color: '#8ba3c0', maxWidth: '600px', margin: '0 auto 60px', lineHeight: 1.7 }}>
              Cada mensaje sin responder a las 3AM es una venta perdida. Cada cobro sin hacer es dinero que no llega. CAVAI resuelve eso.
            </p>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '24px' }}>
            {[
              { icon: '😴', problem: 'Pierdes ventas fuera de horario', solution: 'Tu agente vende 24/7' },
              { icon: '😤', problem: 'Cobrar es incómodo y tedioso', solution: 'Tu agente cobra por ti' },
              { icon: '🤯', problem: 'No das abasto con redes', solution: 'Tu agente maneja todo' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: '#0f2035', border: '1px solid #1a3a5c', borderRadius: '16px', padding: '32px 24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '16px', color: '#ff6b6b', fontWeight: 600, marginBottom: '8px', textDecoration: 'line-through', textDecorationColor: '#ff6b6b50' }}>
                    {item.problem}
                  </div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '17px', color: '#22c55e', fontWeight: 700 }}>
                    ✓ {item.solution}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTES */}
      <section id="agentes" className="section-pad" style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ display: 'inline-block', fontSize: '13px', fontWeight: 700, color: A, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px' }}>
                Catálogo de Agentes
              </div>
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-1px' }}>
                Elige tu agente. Actívalo hoy.
              </h2>
              <p style={{ fontSize: '16px', color: '#8ba3c0', marginTop: '12px' }}>
                Todos los agentes: <strong style={{ color: '#fff' }}>$50 USD/mes</strong> o <strong style={{ color: '#22c55e' }}>$400 USD/año</strong> (ahorras 2 meses)
              </p>
            </div>
          </FadeIn>

          <div className="agents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
            <AgentCard icon="💬" name="WhatsApp Sales Pro" desc="Responde clientes, muestra catálogo, negocia precios y cierra ventas. Tu vendedor que nunca duerme." delay={0} />
            <AgentCard icon="📱" name="Content Manager" desc="Genera posts, responde DMs, programa contenido. Tu community manager con inteligencia artificial." delay={0.1} />
            <AgentCard icon="💰" name="Cobrador Inteligente" desc="Recordatorios de pago amables pero persistentes. Cobra sin incomodar, las 24 horas." delay={0.2} />
          </div>

          <FadeIn delay={0.3}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px', marginTop: '24px' }}>
              <AgentCard icon="👥" name="Recruiter Bot" desc="Filtra CVs, agenda entrevistas, hace screening por WhatsApp. Tu reclutador incansable." delay={0.35} />
              <AgentCard icon="🎓" name="Tutor Personalizado" desc="Enseñanza adaptativa, seguimiento de progreso. Cada alumno aprende a su ritmo." delay={0.4} />
              <div style={{
                background: 'linear-gradient(135deg,#0a1628,#0f2035)',
                border: '1px dashed #1a3a5c', borderRadius: '16px', padding: '32px 28px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', minHeight: '280px',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🛠️</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>¿Necesitas otro?</h3>
                <p style={{ fontSize: '15px', color: '#8ba3c0', lineHeight: 1.6, marginBottom: '20px' }}>Te armamos un agente personalizado para tu negocio</p>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '16px', color: A, fontWeight: 700 }}>CAVAI Managed →</div>
                <div style={{ fontSize: '13px', color: '#5a7a9a', marginTop: '4px' }}>Desde $2,000 USD setup</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="section-pad" style={{ padding: '100px 32px', background: `linear-gradient(180deg,#0a1628,${D})` }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ display: 'inline-block', fontSize: '13px', fontWeight: 700, color: A, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px' }}>Cómo Funciona</div>
              <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-1px' }}>3 pasos. 5 minutos. Listo.</h2>
            </div>
          </FadeIn>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
            {[
              { num: '01', title: 'Elige tu agente', desc: 'Selecciona el que necesita tu negocio. Mensual o anual, tú decides.', icon: '🎯' },
              { num: '02', title: 'Conecta WhatsApp', desc: 'Vincula tu número de WhatsApp Business. Sin código, sin complicaciones.', icon: '🔗' },
              { num: '03', title: 'Tu agente trabaja', desc: 'Empieza a vender, cobrar o atender clientes automáticamente. 24/7.', icon: '🚀' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '20px',
                    background: `linear-gradient(135deg,${B}30,${A}15)`, border: `1px solid ${A}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', margin: '0 auto 20px',
                  }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '48px', fontWeight: 900, color: `${A}20`, marginBottom: '-12px' }}>{s.num}</div>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '15px', color: '#8ba3c0', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="section-pad" style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <div style={{ display: 'inline-block', fontSize: '13px', fontWeight: 700, color: A, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px' }}>Precios Simples</div>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '16px' }}>
              Un precio. Sin sorpresas.
            </h2>
            <p style={{ fontSize: '17px', color: '#8ba3c0', marginBottom: '40px' }}>Cada agente, mismo precio. Cancela cuando quieras.</p>
          </FadeIn>

          {/* Toggle */}
          <FadeIn delay={0.1}>
            <div className="pricing-toggle" style={{ display: 'inline-flex', background: '#0a1628', borderRadius: '50px', padding: '4px', border: '1px solid #1a3a5c', marginBottom: '40px' }}>
              <button onClick={() => setAnnual(false)} style={{
                padding: '12px 32px', borderRadius: '50px', border: 'none', cursor: 'pointer',
                fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '15px',
                background: !annual ? `linear-gradient(135deg,${B},${A})` : 'transparent',
                color: !annual ? '#fff' : '#5a7a9a', transition: 'all .3s ease',
              }}>Mensual</button>
              <button onClick={() => setAnnual(true)} style={{
                padding: '12px 32px', borderRadius: '50px', border: 'none', cursor: 'pointer',
                fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '15px',
                background: annual ? `linear-gradient(135deg,${B},${A})` : 'transparent',
                color: annual ? '#fff' : '#5a7a9a', transition: 'all .3s ease',
              }}>
                Anual <span style={{ fontSize: '12px', opacity: 0.8 }}>(-33%)</span>
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{
              background: 'linear-gradient(135deg,#0a1628,#0f2035)',
              border: `2px solid ${A}40`, borderRadius: '24px', padding: '48px 40px',
              boxShadow: `0 0 80px ${A}10`,
            }}>
              <div style={{ fontSize: '14px', color: A, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>
                Por agente
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '72px', fontWeight: 900, lineHeight: 1 }}>
                <span style={{ background: `linear-gradient(135deg,${A},#60b8ff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ${annual ? '33' : '50'}
                </span>
                <span style={{ fontSize: '20px', color: '#5a7a9a', fontWeight: 400 }}> USD/{annual ? 'mes' : 'mes'}</span>
              </div>
              {annual && (
                <div style={{ fontSize: '15px', color: '#22c55e', marginTop: '8px', fontWeight: 600 }}>
                  $400 USD/año — Ahorras $200
                </div>
              )}
              {!annual && (
                <div style={{ fontSize: '14px', color: '#5a7a9a', marginTop: '8px' }}>
                  Sin compromiso. Cancela cuando quieras.
                </div>
              )}

              <div style={{ margin: '32px 0', borderTop: '1px solid #1a3a5c', paddingTop: '32px', textAlign: 'left' }}>
                {[
                  'Agente IA autónomo 24/7',
                  'Integración WhatsApp + Telegram',
                  'Respuestas en español nativo',
                  'Dashboard de métricas',
                  'Configuración en 5 minutos',
                  'Soporte en español',
                  'Actualizaciones incluidas',
                  'Sin límite de conversaciones',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', fontSize: '15px', color: '#c8ddf0' }}>
                    <span style={{ color: '#22c55e', fontSize: '18px' }}>✓</span> {f}
                  </div>
                ))}
              </div>

              <a href="#waitlist" className="cta-btn" style={{ width: '100%', textAlign: 'center', padding: '18px', fontSize: '18px' }}>
                Quiero mi agente →
              </a>
            </div>
          </FadeIn>

          {/* Enterprise */}
          <FadeIn delay={0.3}>
            <div style={{
              marginTop: '24px', padding: '24px 32px', background: '#0f2035',
              borderRadius: '16px', border: '1px solid #1a3a5c',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '18px' }}>CAVAI Managed</div>
                <div style={{ fontSize: '14px', color: '#8ba3c0' }}>Agente personalizado + setup completo</div>
              </div>
              <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '20px', color: A }}>
                Desde $2,000 USD
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="section-pad" style={{ padding: '100px 32px', background: `linear-gradient(180deg,${D},#0a1628)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: `radial-gradient(circle,${B}15,transparent 70%)`, filter: 'blur(80px)' }} />

        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, marginBottom: '20px', letterSpacing: '-1.5px' }}>
              Sé de los primeros
            </h2>
            <p style={{ fontSize: '18px', color: '#8ba3c0', marginBottom: '40px', lineHeight: 1.7 }}>
              Únete al acceso anticipado y obtén tu agente IA antes que nadie. Precio de lanzamiento exclusivo para early adopters.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            {!submitted ? (
              <div style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input type="email" placeholder="tu@email.com" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1, minWidth: '240px', padding: '16px 24px', borderRadius: '50px',
                    border: '2px solid #1a3a5c', background: '#0a1628', color: '#fff',
                    fontSize: '16px', fontFamily: "'DM Sans',sans-serif", outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = A)}
                  onBlur={(e) => (e.target.style.borderColor = '#1a3a5c')}
                />
                <button onClick={() => { if (email) setSubmitted(true) }} className="cta-btn" style={{ whiteSpace: 'nowrap' }}>
                  Quiero acceso →
                </button>
              </div>
            ) : (
              <div style={{
                background: '#0f2035', border: '2px solid #22c55e', borderRadius: '16px',
                padding: '32px', animation: 'pulse-glow 2s ease-in-out infinite',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '22px', fontWeight: 700, color: '#22c55e', marginBottom: '8px' }}>
                  ¡Estás en la lista!
                </div>
                <p style={{ color: '#8ba3c0', fontSize: '15px' }}>Te avisaremos cuando tu agente esté listo.</p>
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px', flexWrap: 'wrap' }}>
              {['Sin tarjeta requerida', 'Precio de lanzamiento', 'Soporte en español'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5a7a9a' }}>
                  <span style={{ color: '#22c55e' }}>✓</span> {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 32px 40px', borderTop: '1px solid #1a3a5c' }}>
        <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: `linear-gradient(135deg,${B},${A})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '14px',
              }}>C</div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '20px' }}>
                CAV<span style={{ color: A }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#5a7a9a', lineHeight: 1.7, maxWidth: '300px' }}>
              Crear Agentes Virtuales AI. La primera plataforma de agentes IA autónomos en español para emprendedores y PyMEs latinas.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Producto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Agentes', 'Precios', 'Creators', 'API'].map((l, i) => (<a key={i} className="nav-link" style={{ fontSize: '14px' }}>{l}</a>))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Compañía</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Nosotros', 'Blog', 'Contacto', 'Soporte'].map((l, i) => (<a key={i} className="nav-link" style={{ fontSize: '14px' }}>{l}</a>))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '24px', borderTop: '1px solid #1a3a5c', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '13px', color: '#3a5a7a' }}>© 2026 CAVAI — Crear Agentes Virtuales AI. Monterrey, México.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['WhatsApp', 'Telegram', 'Instagram'].map((s, i) => (<a key={i} className="nav-link" style={{ fontSize: '13px' }}>{s}</a>))}
          </div>
        </div>
      </footer>
    </div>
  )
}
