const STEPS = [
  {
    n: '01',
    title: 'Registro en campo',
    desc: 'El técnico abre la app, captura fotos del trabajo y su ubicación GPS se registra automáticamente.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=75&auto=format&fit=crop',
    imgAlt: 'Técnico en campo telecomunicaciones',
    color: 'var(--brand)',
  },
  {
    n: '02',
    title: 'Validación automática',
    desc: 'El sistema verifica coordenadas GPS y compara la foto con el registro esperado. Sin intervención manual.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=75&auto=format&fit=crop',
    imgAlt: 'Validación automática en dashboard',
    color: '#a78bfa',
  },
  {
    n: '03',
    title: 'Sincronización en tiempo real',
    desc: 'Los datos viajan a la nube al instante. El supervisor ve el estado actualizado sin esperar.',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=75&auto=format&fit=crop',
    imgAlt: 'Sincronización cloud',
    color: 'var(--gold)',
  },
  {
    n: '04',
    title: 'Supervisión y reporte',
    desc: 'El supervisor revisa, aprueba y genera reportes PDF/XLS con un solo clic. Cero papeles.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=75&auto=format&fit=crop',
    imgAlt: 'Dashboard reportes ejecutivos',
    color: '#34d399',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            Proceso
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Cómo funciona en{' '}
            <span className="gradient-text">4 pasos simples</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Desde la captura en campo hasta el reporte ejecutivo, todo fluye automáticamente.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`aos grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <div
                  className="inline-flex items-center gap-3 mb-4"
                >
                  <span
                    className="font-display font-800 text-5xl leading-none"
                    style={{ color: s.color, opacity: 0.25 }}
                  >
                    {s.n}
                  </span>
                  <div className="h-px flex-1" style={{ background: s.color, opacity: 0.2 }} />
                </div>
                <h3 className="font-display font-700 text-2xl text-white mb-3">{s.title}</h3>
                <p className="text-white/55 text-lg leading-relaxed">{s.desc}</p>
              </div>

              {/* Image side */}
              <div className={`aos ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: `${s.color}25`, boxShadow: `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${s.color}10` }}
                >
                  <img
                    src={s.img}
                    alt={s.imgAlt}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
