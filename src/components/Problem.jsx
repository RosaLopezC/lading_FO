import { useEffect } from 'react'
import { AlertTriangle, Clock, DollarSign, FileX, Eye } from 'lucide-react'

const PROBLEMS = [
  { icon: <FileX size={20} />, title: 'Reportes incompletos', desc: 'Los técnicos llenan formularios a mano con errores, datos faltantes y sin evidencia real.' },
  { icon: <Eye size={20} />, title: 'Sin trazabilidad', desc: 'Impossible saber si el técnico realmente estuvo en el lugar o cuánto tiempo trabajó.' },
  { icon: <Clock size={20} />, title: 'Validaciones lentas', desc: 'Los supervisores pierden horas revisando papeles en lugar de tomar decisiones estratégicas.' },
  { icon: <DollarSign size={20} />, title: 'Alto costo operativo', desc: 'Retrabajos, disputas con clientes y auditorías fallidas por falta de evidencia fotográfica.' },
  { icon: <AlertTriangle size={20} />, title: 'Decisiones a ciegas', desc: 'Gerencia toma decisiones con información desactualizada, incompleta o simplemente falsa.' },
]

export default function Problem() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.aos').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problema" className="relative py-24 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050e0d] via-[#091918]/40 to-[#050e0d] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
            El problema real
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            ¿Sigues gestionando reportes de campo{' '}
            <span className="text-red-400">de forma manual?</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Las empresas de telecomunicaciones pierden tiempo y dinero cada día por
            procesos sin digitalizar. Esto tiene un impacto directo en tu rentabilidad.
          </p>
        </div>

        {/* Main visual + problem list */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aos">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/15">
              <img
                src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=700&q=80&auto=format&fit=crop"
                alt="Gestión manual de reportes"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050e0d]/70 to-transparent" />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 bg-[#091918]/95 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs text-red-400 font-medium uppercase tracking-wide">Proceso tradicional</span>
                </div>
                <div className="space-y-1.5">
                  {['Formularios en papel', 'Sin GPS ni foto', 'Retrasos de 24–48h', 'Errores de validación'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-red-500">✗</span> {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Problems list */}
          <div className="space-y-4">
            {PROBLEMS.map((p, i) => (
              <div
                key={p.title}
                className="aos card-hover flex items-start gap-4 p-4 rounded-xl bg-[rgba(255,80,80,0.04)] border border-[rgba(255,80,80,0.1)]"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
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

        {/* Impact statement */}
        <div className="mt-16 aos">
          <div className="rounded-2xl bg-gradient-to-r from-red-500/8 to-transparent border border-red-500/15 p-8 text-center">
            <p className="text-xl md:text-2xl font-display font-600 text-white">
              Esto genera{' '}
              <span className="text-red-400">pérdidas económicas</span>, retrabajos y
              decisiones basadas en{' '}
              <span className="text-red-400">información poco confiable</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
