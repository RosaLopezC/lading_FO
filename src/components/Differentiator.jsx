import { Check, X } from 'lucide-react'

const ROWS = [
  { feature: 'Registro de trabajos', traditional: false, fieldops: true },
  { feature: 'Geolocalización GPS', traditional: false, fieldops: true },
  { feature: 'Evidencia fotográfica', traditional: false, fieldops: true },
  { feature: 'Reportes en tiempo real', traditional: false, fieldops: true },
  { feature: 'Validación automática', traditional: false, fieldops: true },
  { feature: 'Modo offline', traditional: false, fieldops: true },
  { feature: 'Dashboard ejecutivo', traditional: false, fieldops: true },
  { feature: 'Exportación PDF/XLS', traditional: false, fieldops: true },
  { feature: 'Auditoría completa', traditional: false, fieldops: true },
  { feature: 'Integración API', traditional: false, fieldops: true },
]

const TESTIMONIALS = [
  {
    quote: 'Redujimos el tiempo de validación de 24 horas a menos de 10 minutos. Es un cambio total en la operación.',
    name: 'Carlos M.',
    role: 'Gerente de Operaciones · Empresa Telecom',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    quote: 'Antes teníamos disputes con clientes por falta de evidencia. Ahora tenemos foto, GPS y timestamp de cada trabajo.',
    name: 'Patricia R.',
    role: 'Supervisora de Campo · Telco Norte',
    avatar: 'https://i.pravatar.cc/80?img=45',
  },
  {
    quote: 'La dirección ahora pide el dashboard en reuniones de directorio. Los datos hablan solos.',
    name: 'Roberto V.',
    role: 'Director Técnico · InfraRed',
    avatar: 'https://i.pravatar.cc/80?img=14',
  },
]

export default function Differentiator() {
  return (
    <section id="diferenciador" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            FieldOps vs.{' '}
            <span className="text-white/40">método tradicional</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="aos overflow-x-auto rounded-2xl border border-[rgba(0,180,168,0.15)] mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgba(0,180,168,0.1)]">
                <th className="text-left p-4 text-white/40 font-medium">Capacidad</th>
                <th className="p-4 text-center text-white/40 font-medium">Método tradicional</th>
                <th className="p-4 text-center font-medium">
                  <span className="text-[var(--brand)] font-display font-700">FieldOps</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr
                  key={r.feature}
                  className={`border-b border-[rgba(255,255,255,0.04)] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}
                >
                  <td className="p-4 text-white/70">{r.feature}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {r.traditional
                        ? <Check size={18} className="text-[var(--brand)]" />
                        : <X size={18} className="text-red-500/60" />
                      }
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[var(--brand-dim)] flex items-center justify-center">
                        <Check size={14} className="text-[var(--brand)]" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="aos card-hover p-6 rounded-2xl bg-[rgba(0,180,168,0.04)] border border-[rgba(0,180,168,0.1)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-[var(--gold)] text-2xl mb-3">❝</div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-[rgba(0,180,168,0.2)]" />
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
