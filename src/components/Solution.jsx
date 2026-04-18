import { Smartphone, Globe, Cloud, Shield } from 'lucide-react'

const PILLARS = [
  { icon: <Smartphone size={22} />, title: 'App móvil', desc: 'Los técnicos capturan fotos, GPS y datos directamente desde su celular, sin papel.' },
  { icon: <Globe size={22} />, title: 'Web dashboard', desc: 'Supervisores y admins ven todo en tiempo real desde cualquier navegador.' },
  { icon: <Cloud size={22} />, title: 'Nube segura', desc: 'Toda la información se sincroniza automáticamente, encriptada y disponible 24/7.' },
  { icon: <Shield size={22} />, title: 'Validación GPS', desc: 'El sistema verifica automáticamente que el técnico estuvo en el lugar correcto.' },
]

export default function Solution() {
  return (
    <section id="solucion" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050e0d] via-[#0d2422]/30 to-[#050e0d] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            La solución
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Una plataforma inteligente{' '}
            <span className="gradient-text">de supervisión de campo</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Centraliza, valida y automatiza todas las operaciones en campo.
            Un ecosistema completo: móvil + web + nube.
          </p>
        </div>

        {/* Big visual */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mb-16">
          {/* Architecture visual */}
          <div className="lg:col-span-3 aos">
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(0,180,168,0.2)]" style={{ boxShadow: '0 30px 70px rgba(0,0,0,0.5), 0 0 40px rgba(0,180,168,0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop"
                alt="Plataforma de supervisión"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e0d] via-[#050e0d]/30 to-transparent" />

              {/* Live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#091918]/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[rgba(0,180,168,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[var(--brand)] pulse-dot" />
                <span className="text-xs text-white/70">En vivo</span>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 grid grid-cols-3 gap-3">
                {[
                  { label: 'Técnicos activos', val: '64', unit: '' },
                  { label: 'Fotos hoy', val: '1,247', unit: '' },
                  { label: 'Precisión GPS', val: '99.2', unit: '%' },
                ].map(s => (
                  <div key={s.label} className="bg-[#091918]/80 backdrop-blur-sm rounded-xl p-3 border border-[rgba(0,180,168,0.15)] text-center">
                    <div className="text-lg font-display font-700 text-[var(--brand)]">{s.val}<span className="text-sm">{s.unit}</span></div>
                    <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-2 space-y-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="aos card-hover flex items-start gap-4 p-4 rounded-xl bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.12)]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-dim)] flex items-center justify-center text-[var(--brand)] shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-600 text-white mb-1">{p.title}</h3>
                  <p className="text-sm text-white/50">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "Cómo funciona" shimmer divider */}
        <div className="h-px shimmer rounded-full opacity-60" />
      </div>
    </section>
  )
}
