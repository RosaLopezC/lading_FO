import { useEffect, useRef } from 'react'
import { MapPin, Camera, BarChart2, ArrowRight, MessageCircle } from 'lucide-react'

// Map dots animation data
const MAP_DOTS = [
  { x: '22%', y: '35%', delay: '0s' },
  { x: '48%', y: '52%', delay: '0.4s' },
  { x: '65%', y: '28%', delay: '0.8s' },
  { x: '75%', y: '60%', delay: '1.2s' },
  { x: '35%', y: '68%', delay: '0.6s' },
  { x: '55%', y: '75%', delay: '1.0s' },
]

function MapDot({ x, y, delay, active }) {
  return (
    <div
      className="absolute"
      style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full bg-[var(--brand)]"
        style={{
          animation: `pulseDot 2s ease-in-out ${delay} infinite`,
          boxShadow: '0 0 10px rgba(0,180,168,0.6)',
        }}
      />
    </div>
  )
}

export default function Hero() {
  const badgesRef = useRef(null)

  useEffect(() => {
    const els = document.querySelectorAll('.hero-anim')
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`
      el.classList.add('fade-up')
    })
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 grid-pattern"
      id="inicio"
    >
      {/* Radial glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,180,168,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Copy */}
          <div>
            {/* Badge */}
            <div className="hero-anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,180,168,0.3)] bg-[rgba(0,180,168,0.08)] text-[var(--brand)] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--brand)] pulse-dot" />
              Supervisión en tiempo real · Telecomunicaciones
            </div>

            {/* H1 */}
            <h1 className="hero-anim font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-5">
              Supervisión de Campo{' '}
              <span className="gradient-text">con GPS</span> y Evidencia{' '}
              <span className="gradient-text">Fotográfica</span>
            </h1>

            <p className="hero-anim text-lg text-white/55 leading-relaxed mb-8 max-w-xl">
              Optimiza la gestión de trabajos en telecomunicaciones con una
              plataforma que registra ubicación, fotos y reportes automáticamente —
              en tiempo real, desde cualquier dispositivo.
            </p>

            {/* Quick bullets */}
            <div className="hero-anim flex flex-wrap gap-3 mb-10">
              {[
                { icon: <MapPin size={14} />, label: 'Geolocalización precisa' },
                { icon: <Camera size={14} />, label: 'Evidencia validada' },
                { icon: <BarChart2 size={14} />, label: 'Reportes automáticos' },
              ].map(b => (
                <span
                  key={b.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(0,180,168,0.1)] border border-[rgba(0,180,168,0.2)] text-sm text-white/70"
                >
                  <span className="text-[var(--brand)]">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-anim flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand)] text-[#050e0d] font-semibold text-base hover:bg-[#00c8bb] transition-all duration-200 glow-brand"
              >
                Solicitar demo
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(0,180,168,0.3)] text-white font-semibold text-base hover:bg-[rgba(0,180,168,0.08)] transition-all duration-200"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="hero-anim mt-10 pt-8 border-t border-white/8 flex flex-wrap gap-6 text-sm text-white/40">
              <span>✓ Sin contrato inicial</span>
              <span>✓ Implementación en 48h</span>
              <span>✓ Soporte 24/7</span>
            </div>
          </div>

          {/* RIGHT — Visual mockup */}
          <div className="relative hidden lg:block">
            {/* Main mockup image */}
            <div className="floating relative">
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,180,168,0.2)] shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,180,168,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop"
                  alt="Dashboard de supervisión de campo"
                  className="w-full h-72 object-cover"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e0d]/80 via-transparent to-transparent" />
                {/* Stat chip on image */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="flex-1 bg-[#091918]/90 backdrop-blur-sm rounded-xl p-3 border border-[rgba(0,180,168,0.2)]">
                    <div className="text-xs text-white/50 mb-1">Trabajos hoy</div>
                    <div className="text-xl font-display font-700 text-[var(--brand)]">247</div>
                  </div>
                  <div className="flex-1 bg-[#091918]/90 backdrop-blur-sm rounded-xl p-3 border border-[rgba(0,180,168,0.2)]">
                    <div className="text-xs text-white/50 mb-1">Validados</div>
                    <div className="text-xl font-display font-700 text-white">98.4<span className="text-sm text-white/50">%</span></div>
                  </div>
                  <div className="flex-1 bg-[#091918]/90 backdrop-blur-sm rounded-xl p-3 border border-[rgba(0,180,168,0.2)]">
                    <div className="text-xs text-white/50 mb-1">Técnicos</div>
                    <div className="text-xl font-display font-700 text-[var(--gold)]">64</div>
                  </div>
                </div>
              </div>

              {/* Floating GPS card */}
              <div className="absolute -top-6 -right-6 bg-[#091918] border border-[rgba(0,180,168,0.3)] rounded-xl p-3 shadow-xl w-44">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-[var(--brand)]" />
                  <span className="text-xs text-white/60 font-medium">GPS Verificado</span>
                </div>
                <div className="relative rounded-lg overflow-hidden h-20">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&q=70&auto=format&fit=crop"
                    alt="Mapa GPS"
                    className="w-full h-full object-cover opacity-60"
                  />
                  {MAP_DOTS.slice(0, 3).map((d, i) => (
                    <MapDot key={i} {...d} />
                  ))}
                </div>
              </div>

              {/* Floating photo card */}
              <div className="absolute -bottom-6 -left-6 bg-[#091918] border border-[rgba(0,180,168,0.3)] rounded-xl p-3 shadow-xl w-40">
                <div className="flex items-center gap-2 mb-2">
                  <Camera size={14} className="text-[var(--brand)]" />
                  <span className="text-xs text-white/60 font-medium">Foto capturada</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&q=70&auto=format&fit=crop"
                  alt="Técnico en campo"
                  className="rounded-lg h-20 w-full object-cover"
                />
                <div className="mt-1.5 text-xs text-[var(--brand)]">✓ Coordenadas validadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050e0d] to-transparent pointer-events-none" />
    </section>
  )
}
