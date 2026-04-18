import { Camera, MapPin, BarChart2, Users, Map, FileDown, Bell, Lock } from 'lucide-react'

const FEATURES = [
  { icon: <Camera size={22} />, title: 'Registro fotográfico', desc: 'Captura múltiples fotos por trabajo con metadatos automáticos (fecha, hora, GPS).', badge: 'Core' },
  { icon: <MapPin size={22} />, title: 'Geolocalización GPS', desc: 'Verificación de presencia en sitio con tolerancia configurable por metro.', badge: 'Core' },
  { icon: <BarChart2 size={22} />, title: 'Reportes automáticos', desc: 'Generación automática de reportes diarios, semanales y mensuales.', badge: 'Auto' },
  { icon: <Users size={22} />, title: 'Gestión por roles', desc: 'Admin, Supervisor, Técnico y Dirección con permisos granulares.', badge: null },
  { icon: <Map size={22} />, title: 'Mapa interactivo', desc: 'Visualiza todos los trabajos en curso y sus estados en el mapa en tiempo real.', badge: 'Live' },
  { icon: <FileDown size={22} />, title: 'Exportación PDF/XLS', desc: 'Descarga reportes formateados para auditorías y presentaciones a clientes.', badge: null },
  { icon: <Bell size={22} />, title: 'Alertas y notificaciones', desc: 'Recibe alertas por trabajos fuera de rango, fotos faltantes o demoras.', badge: null },
  { icon: <Lock size={22} />, title: 'Seguridad y privacidad', desc: 'Datos encriptados end-to-end. Cumplimiento con normativas de privacidad.', badge: null },
]

export default function Features() {
  return (
    <section id="funciones" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#091918]/20 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 aos">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-dim)] border border-[rgba(0,180,168,0.25)] text-[var(--brand)] text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Todo lo que necesitas,{' '}
            <span className="gradient-text">nada que no</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Cada función fue diseñada específicamente para operaciones de campo
            en telecomunicaciones.
          </p>
        </div>

        {/* Feature image + grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Big feature card */}
          <div className="lg:col-span-1 aos">
            <div className="h-full rounded-2xl overflow-hidden border border-[rgba(0,180,168,0.2)] relative" style={{ minHeight: 340, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80&auto=format&fit=crop"
                alt="App móvil FieldOps"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e0d] via-[#050e0d]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[var(--brand)] text-xs font-medium uppercase tracking-wide mb-2">App Móvil</div>
                <h3 className="font-display font-700 text-xl text-white mb-1">Funciona sin internet</h3>
                <p className="text-sm text-white/50">Modo offline con sincronización automática al recuperar señal.</p>
              </div>
            </div>
          </div>

          {/* 8 feature cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="aos card-hover relative p-5 rounded-2xl bg-[rgba(0,180,168,0.04)] border border-[rgba(0,180,168,0.1)]"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[var(--brand-dim)] text-[var(--brand)] text-xs font-medium border border-[rgba(0,180,168,0.2)]">
                    {f.badge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-dim)] flex items-center justify-center text-[var(--brand)] mb-3">
                  {f.icon}
                </div>
                <h3 className="font-display font-600 text-white mb-1">{f.title}</h3>
                <p className="text-sm text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
