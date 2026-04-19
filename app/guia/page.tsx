'use client'
import { useState } from 'react'

const B = '#1a6fc4'
const D = '#0d1b2a'
const A = '#3b9eff'

function Section({ icon, chapter, title, children }: any) {
  return (
    <section style={{ marginBottom: '60px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <span style={{ fontSize: '28px' }}>{icon}</span>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '13px', fontWeight: 700, color: A, textTransform: 'uppercase', letterSpacing: '2px' }}>{chapter}</span>
      </div>
      <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, color: '#fff', marginBottom: '24px', letterSpacing: '-1px', lineHeight: 1.2 }}>{title}</h2>
      <div style={{ fontSize: '16px', color: '#b0c4d8', lineHeight: 1.8 }}>{children}</div>
    </section>
  )
}

function StatBox({ label, before, after }: any) {
  return (
    <div style={{ background: '#0f2035', borderRadius: '12px', padding: '20px', border: '1px solid #1a3a5c', textAlign: 'center' }}>
      <div style={{ fontSize: '13px', color: '#5a7a9a', marginBottom: '12px', fontWeight: 600 }}>{label}</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#ff6b6b', marginBottom: '4px' }}>SIN AGENTE</div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '20px', fontWeight: 800, color: '#ff6b6b' }}>{before}</div>
        </div>
        <div style={{ color: '#3a5a7a', fontSize: '20px' }}>→</div>
        <div>
          <div style={{ fontSize: '11px', color: '#22c55e', marginBottom: '4px' }}>CON AGENTE</div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '20px', fontWeight: 800, color: '#22c55e' }}>{after}</div>
        </div>
      </div>
    </div>
  )
}

function AgentCard2({ num, icon, name, sub, what, who, roi }: any) {
  return (
    <div style={{ background: '#0f2035', border: '1px solid #1a3a5c', borderRadius: '16px', padding: '28px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <span style={{ fontSize: '32px' }}>{icon}</span>
        <div>
          <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '20px', fontWeight: 700, color: '#fff' }}>{name}</div>
          <div style={{ fontSize: '14px', color: A, fontStyle: 'italic' }}>{sub}</div>
        </div>
      </div>
      <p style={{ color: '#b0c4d8', lineHeight: 1.7, marginBottom: '12px' }}><strong style={{ color: '#fff' }}>Que hace:</strong> {what}</p>
      <p style={{ color: '#b0c4d8', lineHeight: 1.7, marginBottom: '12px' }}><strong style={{ color: '#fff' }}>Para quien:</strong> {who}</p>
      <p style={{ color: '#b0c4d8', lineHeight: 1.7 }}><strong style={{ color: '#22c55e' }}>ROI:</strong> {roi}</p>
    </div>
  )
}

export default function Guia() {
  const [email, setEmail] = useState('')
  const [showGuide, setShowGuide] = useState(false)

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: D, color: '#fff', minHeight: '100vh' }}>
      <style>{`
        @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .cta-btn{background:linear-gradient(135deg,${B},${A});color:#fff;border:none;padding:16px 40px;border-radius:50px;font-family:'Outfit',sans-serif;font-size:17px;font-weight:700;cursor:pointer;transition:all .3s ease;text-decoration:none;display:inline-block;background-size:200% 200%;animation:gradient-shift 3s ease infinite}
        .cta-btn:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(59,158,255,0.4)}
        @media(max-width:768px){
          .guide-hero h1{font-size:32px!important}
          .stats-grid{grid-template-columns:1fr!important}
          .steps-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{ padding: '16px 0', borderBottom: '1px solid #1a3a5c', background: `${D}ee`, backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: `linear-gradient(135deg,${B},${A})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '14px', color: '#fff' }}>C</div>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '18px', color: '#fff' }}>CAV<span style={{ color: A }}>AI</span></span>
          </a>
          <a href="/#waitlist" className="cta-btn" style={{ padding: '8px 24px', fontSize: '13px' }}>Quiero mi agente</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="guide-hero" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 40px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: `radial-gradient(circle,${B}20,transparent 70%)`, filter: 'blur(80px)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${A}15`, border: `1px solid ${A}30`, borderRadius: '50px', padding: '6px 18px', marginBottom: '24px', fontSize: '13px', color: A, fontWeight: 600 }}>
            Guia gratuita de CAVAI
          </div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-2px' }}>
            Como Automatizar tu Negocio con <span style={{ background: `linear-gradient(135deg,${A},#60b8ff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Agentes de IA</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#8ba3c0', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px' }}>
            La guia definitiva para emprendedores y PyMEs que quieren vender, cobrar y atender clientes 24/7 sin contratar mas personal.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '16px', fontSize: '14px', color: '#5a7a9a' }}>
            {['14 minutos de lectura', '8 capitulos', 'Casos reales LATAM'].map((t, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#22c55e' }}>✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GATE OR CONTENT */}
      {!showGuide ? (
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
          <div style={{ background: '#0f2035', border: `1px solid ${A}40`, borderRadius: '20px', padding: '40px 32px' }}>
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>📘</div>
            <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Accede a la guia completa</h3>
            <p style={{ fontSize: '15px', color: '#8ba3c0', marginBottom: '24px', lineHeight: 1.6 }}>Dejanos tu email y accede inmediatamente. Sin spam, solo valor.</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, minWidth: '200px', padding: '14px 20px', borderRadius: '50px', border: '2px solid #1a3a5c', background: '#0a1628', color: '#fff', fontSize: '15px', fontFamily: "'DM Sans',sans-serif", outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = A}
                onBlur={(e) => e.target.style.borderColor = '#1a3a5c'}
              />
              <button onClick={() => { if (email) setShowGuide(true) }} className="cta-btn" style={{ whiteSpace: 'nowrap', padding: '14px 28px' }}>
                Leer guia →
              </button>
            </div>
            <div style={{ fontSize: '12px', color: '#3a5a7a', marginTop: '12px' }}>100% gratis. Sin tarjeta. Sin compromiso.</div>
          </div>
        </div>
      ) : (
        <article style={{ maxWidth: '750px', margin: '0 auto', padding: '0 24px 80px' }}>

          {/* INTRO */}
          <div style={{ background: '#0f2035', borderRadius: '16px', padding: '28px', border: '1px solid #1a3a5c', marginBottom: '50px', fontSize: '16px', color: '#b0c4d8', lineHeight: 1.8 }}>
            <p>Si estas leyendo esto, ya sabes que la IA esta cambiando los negocios. Pero hay una diferencia enorme entre <strong style={{ color: '#fff' }}>saberlo y hacerlo</strong>.</p>
            <p style={{ marginTop: '12px' }}>Esta guia es un manual practico. No necesitas saber programar. No necesitas equipo tecnico. Solo necesitas entender que problema resolver y activar el agente correcto.</p>
          </div>

          {/* CAP 1 */}
          <Section icon="⚡" chapter="Capitulo 01" title="Por que tu negocio necesita un agente de IA">
            <p>Son las <strong style={{ color: '#fff' }}>3:47 de la manana</strong>. Un cliente potencial encuentra tu producto en Instagram. Le encanta. Te escribe por WhatsApp.</p>
            <p style={{ margin: '12px 0' }}>Tu estas dormido.</p>
            <p>A las 8 de la manana despiertas, respondes. Pero ya es tarde — tu cliente encontro a alguien mas que si le respondio a las 3:47.</p>
            <p style={{ margin: '16px 0' }}>Esta historia se repite <strong style={{ color: '#fff' }}>miles de veces al dia en toda Latinoamerica</strong>.</p>
            
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '30px 0' }}>
              <StatBox label="Tiempo de respuesta" before="2-12 hrs" after="3 seg" />
              <StatBox label="Disponibilidad" before="8 hrs/dia" after="24/7/365" />
              <StatBox label="Costo mensual" before="$15,000+" after="$900 MXN" />
            </div>
            
            <p>Un agente de IA no reemplaza tu talento. <strong style={{ color: '#fff' }}>Reemplaza las tareas repetitivas</strong> que te impiden enfocarte en lo que realmente importa.</p>
          </Section>

          {/* CAP 2 */}
          <Section icon="🧠" chapter="Capitulo 02" title="Que es un agente de IA (y que NO es)">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '20px 0' }}>
              <div style={{ background: '#0a1628', borderRadius: '12px', padding: '20px', border: '1px solid #1a3a5c' }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '16px', fontWeight: 700, color: '#22c55e', marginBottom: '12px' }}>✓ Lo que SI es</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Empleado digital autonomo 24/7', 'Vendedor que piensa y negocia', 'Maneja 100+ chats simultaneos', 'Se paga con UNA venta'].map((t, i) => (
                    <li key={i} style={{ padding: '6px 0', borderBottom: '1px solid #1a3a5c', fontSize: '14px' }}>{t}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#0a1628', borderRadius: '12px', padding: '20px', border: '1px solid #1a3a5c' }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '16px', fontWeight: 700, color: '#ff6b6b', marginBottom: '12px' }}>✗ Lo que NO es</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['No es un chatbot basico', 'No es magia sin configurar', 'No reemplaza tu criterio', 'No es perfecto desde el dia 1'].map((t, i) => (
                    <li key={i} style={{ padding: '6px 0', borderBottom: '1px solid #1a3a5c', fontSize: '14px' }}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '16px' }}>La diferencia clave: un chatbot <strong style={{ color: '#ff6b6b' }}>repite respuestas como grabadora</strong>. Un agente de IA <strong style={{ color: '#22c55e' }}>analiza, razona, negocia y cierra</strong>.</p>
          </Section>

          {/* CAP 3 */}
          <Section icon="🤖" chapter="Capitulo 03" title="Los 5 agentes que todo negocio necesita">
            <p style={{ marginBottom: '24px' }}>Despues de analizar cientos de PyMEs en LATAM, estos 5 agentes cubren el 90% de las necesidades:</p>
            <AgentCard2 num="1" icon="💬" name="WhatsApp Sales Pro" sub="Tu vendedor que nunca duerme" what="Responde clientes 24/7, muestra catalogo, negocia precios y cierra ventas por WhatsApp." who="Tiendas online, ecommerce, servicios, restaurantes, clinicas." roi="Ticket promedio $500 MXN x 2 ventas extra/dia = $30,000 MXN/mes adicionales." />
            <AgentCard2 num="2" icon="📱" name="Content Manager" sub="Tu community manager con superpoderes" what="Genera posts para Instagram, Facebook, TikTok. Responde DMs. Programa contenido." who="Marcas personales, coaches, consultores, creadores." roi="Un CM humano cuesta $12,000-20,000 MXN/mes. El agente cuesta $900 MXN/mes." />
            <AgentCard2 num="3" icon="💰" name="Cobrador Inteligente" sub="Cobra sin incomodar, cobra sin parar" what="Recordatorios de pago automaticos por WhatsApp. Amable pero persistente. 24/7." who="Freelancers, consultorias, clinicas, escuelas." roi="$50,000 MXN en cuentas por cobrar x 60% recuperado = $30,000 MXN." />
            <AgentCard2 num="4" icon="👥" name="Recruiter Bot" sub="Tu reclutador incansable" what="Filtra CVs, agenda entrevistas, screening por WhatsApp." who="Empresas con alto volumen de contratacion, restaurantes, retail." roi="Reducir tiempo de contratacion de 3 semanas a 5 dias." />
            <AgentCard2 num="5" icon="🎓" name="Tutor Personalizado" sub="Cada alumno a su ritmo" what="Ensenanza adaptativa, seguimiento de progreso, ejercicios personalizados." who="Academias, cursos online, capacitacion corporativa." roi="Reducir desercion del 40% al 15%. Cada alumno retenido = revenue." />
          </Section>

          {/* CAP 4 */}
          <Section icon="🎯" chapter="Capitulo 04" title="Como elegir el agente correcto">
            <p style={{ marginBottom: '20px' }}>No necesitas los 5 al mismo tiempo. Empieza con el que resuelve tu dolor mas grande:</p>
            <div style={{ background: '#0f2035', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1a3a5c' }}>
              {[
                ['Pierdo ventas fuera de horario', 'WhatsApp Sales Pro'],
                ['No puedo cobrar a mis clientes', 'Cobrador Inteligente'],
                ['No tengo tiempo para redes', 'Content Manager'],
                ['Tardo mucho en contratar', 'Recruiter Bot'],
                ['Mis alumnos desertan', 'Tutor Personalizado'],
              ].map(([pain, agent], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: i < 4 ? '1px solid #1a3a5c' : 'none', background: i % 2 === 0 ? '#0f2035' : '#0a1628' }}>
                  <span style={{ color: '#b0c4d8' }}>{pain}</span>
                  <span style={{ color: A, fontWeight: 700, fontFamily: "'Outfit',sans-serif" }}>→ {agent}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '20px' }}><strong style={{ color: '#fff' }}>Regla de oro:</strong> un agente a la vez. Dominalo, mide resultados, despues agrega el siguiente.</p>
          </Section>

          {/* CAP 5 */}
          <Section icon="🔧" chapter="Capitulo 05" title="Implementacion paso a paso">
            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', margin: '20px 0' }}>
              {[
                ['🎯', '1. Elige tu agente', '2 min', 'Selecciona el que resuelve tu dolor principal.'],
                ['🔗', '2. Conecta WhatsApp', '5 min', 'Escanea un QR como WhatsApp Web.'],
                ['📋', '3. Carga catalogo', '15 min', 'Productos, precios, descripciones.'],
                ['⚙️', '4. Define reglas', '10 min', 'Descuentos, horarios, politicas.'],
                ['🧪', '5. Prueba', '20 min', '5 conversaciones simuladas.'],
                ['🚀', '6. Lanza', 'Continuo', 'Activa y monitorea 3 dias.'],
              ].map(([ico, title, time, desc], i) => (
                <div key={i} style={{ background: '#0f2035', borderRadius: '12px', padding: '20px', border: '1px solid #1a3a5c' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: '#fff' }}>{ico} {title}</span>
                    <span style={{ fontSize: '12px', color: A, fontWeight: 600, background: `${A}15`, padding: '2px 10px', borderRadius: '20px' }}>{time}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#8ba3c0', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ background: `${A}10`, border: `1px solid ${A}30`, borderRadius: '12px', padding: '16px 20px', textAlign: 'center', marginTop: '16px' }}>
              <p style={{ color: A, fontStyle: 'italic', margin: 0 }}>"La mayoria de nuestros clientes tienen su agente vendiendo en menos de 30 minutos."</p>
            </div>
          </Section>

          {/* CAP 6 */}
          <Section icon="📊" chapter="Capitulo 06" title="Calculadora de ROI">
            <p style={{ marginBottom: '20px' }}>Numeros conservadores para una tienda online con WhatsApp Sales Pro:</p>
            <div style={{ background: '#0f2035', borderRadius: '16px', padding: '24px', border: '1px solid #1a3a5c', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ textAlign: 'center', padding: '16px', background: '#0a1628', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#ff6b6b', fontWeight: 600, marginBottom: '8px' }}>SIN AGENTE</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '28px', fontWeight: 900, color: '#ff6b6b' }}>$14,400</div>
                  <div style={{ fontSize: '13px', color: '#8ba3c0' }}>MXN/mes en ventas</div>
                  <div style={{ fontSize: '12px', color: '#5a7a9a', marginTop: '8px' }}>18 ventas • 60% respuesta</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#0a1628', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 600, marginBottom: '8px' }}>CON AGENTE CAVAI</div>
                  <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '28px', fontWeight: 900, color: '#22c55e' }}>$36,000</div>
                  <div style={{ fontSize: '13px', color: '#8ba3c0' }}>MXN/mes en ventas</div>
                  <div style={{ fontSize: '12px', color: '#5a7a9a', marginTop: '8px' }}>45 ventas • 100% respuesta</div>
                </div>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px', padding: '16px', background: `${A}10`, borderRadius: '12px' }}>
                <div style={{ fontSize: '13px', color: '#8ba3c0' }}>Revenue EXTRA mensual</div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: '36px', fontWeight: 900, color: '#22c55e' }}>+$20,700 MXN</div>
                <div style={{ fontSize: '14px', color: A, fontWeight: 600 }}>ROI: 2,200% — Inviertes $900, recuperas $20,700</div>
              </div>
            </div>
            <p><strong style={{ color: '#fff' }}>La formula:</strong> si tus ventas perdidas al mes superan $900 MXN ($50 USD), el agente se paga solo con la primera venta que cierre.</p>
          </Section>

          {/* CAP 7 */}
          <Section icon="⚠️" chapter="Capitulo 07" title="6 errores fatales al implementar IA">
            {[
              ['No darle info suficiente', 'Dedica 30 min a preparar catalogo y precios ANTES de activar.'],
              ['Esperar perfeccion el dia uno', 'Planea una semana de ajuste. Como cualquier empleado.'],
              ['No revisar conversaciones', '15 minutos cada lunes revisando metricas y chats.'],
              ['Automatizar todo de golpe', 'Un proceso a la vez. Domina, mide, expande.'],
              ['Sin escalamiento humano', 'Quejas serias y clientes VIP necesitan toque humano.'],
              ['Precios desactualizados', 'Actualiza cada vez que cambies precios. Toma 2 minutos.'],
            ].map(([title, desc], i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: i < 5 ? '1px solid #1a3a5c' : 'none' }}>
                <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '14px', fontWeight: 800, color: '#ff6b6b', minWidth: '24px' }}>{i + 1}</span>
                <div>
                  <strong style={{ color: '#fff' }}>{title}.</strong>
                  <span style={{ color: '#8ba3c0' }}> {desc}</span>
                </div>
              </div>
            ))}
          </Section>

          {/* CAP 8 */}
          <Section icon="📅" chapter="Capitulo 08" title="Tu plan de accion de 30 dias">
            <div style={{ background: '#0f2035', borderRadius: '16px', border: '1px solid #1a3a5c', overflow: 'hidden' }}>
              {[
                ['Dia 1', 'Identifica tu dolor principal', '15 min'],
                ['Dia 2', 'Calcula tu ROI potencial', '10 min'],
                ['Dia 3', 'Contacta CAVAI y elige tu agente', '5 min'],
                ['Dia 4', 'Conecta tu WhatsApp Business', '5 min'],
                ['Dia 5', 'Carga tu catalogo de productos', '30 min'],
                ['Dia 6-7', 'Define reglas y haz pruebas', '35 min'],
                ['Dia 8-14', 'Monitoreo activo: 10 chats/dia', '15 min/dia'],
                ['Dia 15-21', 'Ajusta respuestas con datos reales', '10 min/dia'],
                ['Dia 22-30', 'Evalua y decide siguiente agente', '30 min'],
              ].map(([day, action, time], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', background: i % 2 === 0 ? '#0f2035' : '#0a1628', borderBottom: i < 8 ? '1px solid #1a3a5c' : 'none' }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: A, minWidth: '80px', fontSize: '14px' }}>{day}</span>
                  <span style={{ flex: 1, color: '#b0c4d8', fontSize: '14px' }}>{action}</span>
                  <span style={{ fontSize: '12px', color: '#5a7a9a', minWidth: '70px', textAlign: 'right' }}>{time}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '20px' }}>Tiempo total: <strong style={{ color: '#fff' }}>~5 horas en 30 dias</strong>. Resultado: un agente vendiendo 24/7 por ti.</p>
          </Section>

          {/* CTA FINAL */}
          <div style={{ background: `linear-gradient(135deg, #0a1628, #132f4c)`, border: `2px solid ${A}40`, borderRadius: '24px', padding: '48px 36px', textAlign: 'center', marginTop: '40px' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🚀</div>
            <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Tu siguiente paso</h2>
            <p style={{ fontSize: '17px', color: '#8ba3c0', marginBottom: '28px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 28px' }}>
              Ya tienes el conocimiento. Mientras lees esto, tus competidores ya estan automatizando. Activa tu agente hoy.
            </p>
            <a href="/#waitlist" className="cta-btn" style={{ fontSize: '18px', padding: '18px 48px' }}>
              Quiero mi agente CAVAI →
            </a>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px', flexWrap: 'wrap', fontSize: '14px', color: '#5a7a9a' }}>
              <span>Desde $50 USD/mes</span>
              <span>•</span>
              <span>Sin compromiso</span>
              <span>•</span>
              <span>Cancela cuando quieras</span>
            </div>
          </div>

          {/* FOOTER */}
          <div style={{ textAlign: 'center', marginTop: '60px', padding: '30px 0', borderTop: '1px solid #1a3a5c' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `linear-gradient(135deg,${B},${A})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit',sans-serif", fontWeight: 900, fontSize: '12px' }}>C</div>
              <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '18px' }}>CAV<span style={{ color: A }}>AI</span></span>
            </div>
            <p style={{ fontSize: '13px', color: '#3a5a7a' }}>Crear Agentes Virtuales AI — La primera plataforma en espanol.</p>
            <p style={{ fontSize: '12px', color: '#2a4a6a', marginTop: '4px' }}>cavai.lat</p>
          </div>
        </article>
      )}
    </div>
  )
}
