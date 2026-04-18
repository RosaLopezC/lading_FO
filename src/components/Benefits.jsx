import { TrendingDown, MapPin, Zap, XCircle, Eye, Clock } from 'lucide-react'

const BENEFITS = [
  { icon: <TrendingDown size={22} />, title: 'Reduce hasta 30% el tiempo de reportes', desc: 'Lo que tomaba horas ahora se hace en minutos con reportes automáticos.', metric: '−30%', metricLabel: 'tiempo de reporte' },
  { icon: <MapPin size={22} />, title: 'Precisión de ubicación garantizada', desc: 'GPS validado en cada registro. Cero disputas sobre si el técnico estuvo o no.', metric: '99.2%', metricLabel: 'precisión GPS' },
  { icon: <Zap size={22} />, title: 'Información en tiempo real', desc: 'Los supervisores ven el estado de cada trabajo al instante, sin llamadas.', metric: '<2s', metricLabel: 'latencia' },
  { icon: <XCircle size={22} />, title: 'Menos errores humanos', desc: 'La validación automática elimina los errores de transcripción y datos faltantes.', metric: '−85%', metricLabel: 'errores' },
  { icon: <Eye size={22} />, title: 'Mayor control y auditoría', desc: 'Historial completo de cada trabajo: quién, cuándo, dónde y con qué evidencia.', metric: '100%', metricLabel: 'trazabilidad' },
  { icon: <Clock size={22} />, title: 'Validaciones en minutos', desc: 'Los supervisores aprueban trabajos desde el dashboard sin revisar papeles.', metric: '3 min', metricLabel: 'validación promedio' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,180,168,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            Resultados
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Impacto real en tu{' '}
            <span className="gradient-text">operación</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Resultados medibles desde la primera semana de implementación.
          </p>
        </div>

        {/* Before vs After banner */}
        <div className="aos grid md:grid-cols-2 gap-4 mb-14 rounded-2xl overflow-hidden border border-[rgba(0,180,168,0.12)]">
          <div className="p-6 bg-red-500/5 border-r border-[rgba(255,80,80,0.1)]">
            <div className="text-red-400 text-sm font-medium uppercase tracking-wide mb-4">Antes — Proceso manual</div>
            <img
              src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&q=75&auto=format&fit=crop"
              alt="Proceso manual"
              className="w-full h-40 object-cover rounded-xl opacity-50 mb-4"
            />
            {['Reportes en papel', 'Validación manual 48h', 'Sin evidencia fotográfica', 'Errores y retrabajos'].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/40 py-1">
                <span className="text-red-500 font-bold">✗</span> {t}
              </div>
            ))}
          </div>
          <div className="p-6 bg-[rgba(0,180,168,0.05)]">
            <div className="text-[var(--brand)] text-sm font-medium uppercase tracking-wide mb-4">Después — FieldOps</div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75&auto=format&fit=crop"
              alt="Proceso digital"
              className="w-full h-40 object-cover rounded-xl opacity-80 mb-4"
            />
            {['Reportes digitales automáticos', 'Validación en minutos', 'Evidencia GPS + foto', 'Cero retrabajos'].map(t => (
              <div key={t} className="flex items-center gap-2 text-sm text-white/70 py-1">
                <span className="text-[var(--brand)] font-bold">✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="aos card-hover p-6 rounded-2xl bg-[rgba(0,180,168,0.04)] border border-[rgba(0,180,168,0.1)]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-dim)] flex items-center justify-center text-[var(--brand)]">
                  {b.icon}
                </div>
                <div className="text-right">
                  <div className="font-display font-800 text-2xl gradient-text">{b.metric}</div>
                  <div className="text-xs text-white/40">{b.metricLabel}</div>
                </div>
              </div>
              <h3 className="font-display font-600 text-white mb-2">{b.title}</h3>
              <p className="text-sm text-white/50">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
