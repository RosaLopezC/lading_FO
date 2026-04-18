import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Bronce',
    price: 'S/ 299',
    period: '/mes',
    desc: 'Ideal para equipos pequeños o proyectos piloto.',
    color: '#cd7f32',
    features: [
      'Hasta 10 técnicos',
      '500 registros/mes',
      'Fotos + GPS',
      'Reportes básicos PDF',
      'Soporte por email',
    ],
    cta: 'Empezar con Bronce',
    highlight: false,
  },
  {
    name: 'Plata',
    price: 'S/ 699',
    period: '/mes',
    desc: 'Para empresas medianas con múltiples supervisores.',
    color: '#a8a9ad',
    features: [
      'Hasta 50 técnicos',
      'Registros ilimitados',
      'Mapa interactivo',
      'Dashboard supervisores',
      'Exportación XLS/PDF',
      'Soporte prioritario',
      'API básica',
    ],
    cta: 'Empezar con Plata',
    highlight: true,
  },
  {
    name: 'Oro',
    price: 'Personalizado',
    period: '',
    desc: 'Para grandes operaciones y contratos enterprise.',
    color: 'var(--gold)',
    features: [
      'Técnicos ilimitados',
      'Múltiples empresas',
      'Integraciones avanzadas',
      'SLA garantizado',
      'Onboarding dedicado',
      'Gerente de cuenta',
      'Reportes personalizados',
    ],
    cta: 'Contactar ventas',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="planes" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091918]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            Planes
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Precios simples,{' '}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Elige el plan que se adapta a tu operación. Cambia de plan cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`aos card-hover relative rounded-2xl p-7 border ${
                p.highlight
                  ? 'bg-[rgba(0,180,168,0.08)] border-[rgba(0,180,168,0.4)]'
                  : 'bg-[rgba(0,180,168,0.03)] border-[rgba(255,255,255,0.08)]'
              }`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                boxShadow: p.highlight ? '0 20px 60px rgba(0,180,168,0.12)' : undefined,
              }}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--brand)] text-[#050e0d] text-xs font-bold uppercase tracking-wide">
                  Más popular
                </div>
              )}

              <div className="mb-5">
                <div className="font-display font-700 text-sm uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display font-800 text-4xl text-white">{p.price}</span>
                  <span className="text-white/40 mb-1">{p.period}</span>
                </div>
                <p className="text-sm text-white/50">{p.desc}</p>
              </div>

              <div className="h-px bg-white/8 mb-5" />

              <ul className="space-y-3 mb-7">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${p.color}20` }}>
                      <Check size={12} style={{ color: p.color }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  p.highlight
                    ? 'bg-[var(--brand)] text-[#050e0d] hover:bg-[#00c8bb] glow-brand'
                    : 'border text-white hover:bg-white/5'
                }`}
                style={!p.highlight ? { borderColor: `${p.color}40`, color: p.color } : {}}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8">
          Todos los planes incluyen 14 días de prueba gratuita. Sin tarjeta de crédito.
        </p>
      </div>
    </section>
  )
}
