const ROLES = [
  {
    emoji: '👷',
    role: 'Técnico de campo',
    actions: ['Captura fotos del trabajo', 'Registra ubicación GPS', 'Marca inicio y fin de trabajo', 'Ve su historial de tareas'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75&auto=format&fit=crop',
    color: 'var(--brand)',
  },
  {
    emoji: '🧑‍💼',
    role: 'Supervisor',
    actions: ['Valida reportes en tiempo real', 'Revisa evidencia fotográfica', 'Aprueba o rechaza trabajos', 'Genera reportes del equipo'],
    img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=75&auto=format&fit=crop',
    color: '#a78bfa',
  },
  {
    emoji: '🏢',
    role: 'Administrador',
    actions: ['Gestiona usuarios y roles', 'Configura zonas y proyectos', 'Ve métricas globales', 'Administra contratos'],
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=75&auto=format&fit=crop',
    color: 'var(--gold)',
  },
  {
    emoji: '📊',
    role: 'Dirección',
    actions: ['Dashboard ejecutivo', 'KPIs de productividad', 'Reportes automáticos', 'Toma decisiones con datos'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=75&auto=format&fit=crop',
    color: '#34d399',
  },
]

export default function Users() {
  return (
    <section id="usuarios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091918]/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            Usuarios
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Diseñado para{' '}
            <span className="gradient-text">todo tu equipo</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Cada rol tiene su propia experiencia optimizada. Una sola plataforma, múltiples vistas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROLES.map((r, i) => (
            <div
              key={r.role}
              className="aos card-hover rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] bg-[rgba(0,180,168,0.03)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-36 overflow-hidden">
                <img src={r.img} alt={r.role} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2422] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-2xl">{r.emoji}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-700 text-white mb-3" style={{ color: r.color }}>{r.role}</h3>
                <ul className="space-y-2">
                  {r.actions.map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm text-white/55">
                      <span style={{ color: r.color }} className="mt-0.5 shrink-0">→</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
