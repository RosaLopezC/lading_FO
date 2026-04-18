import { MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = {
  Producto: ['Funcionalidades', 'Planes', 'Roadmap', 'Changelog'],
  Empresa: ['Sobre nosotros', 'Blog', 'Prensa', 'Empleo'],
  Soporte: ['Documentación', 'API Docs', 'Centro de ayuda', 'Status'],
  Legal: ['Privacidad', 'Términos de uso', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(245,126,29,0.1)] bg-[#050812]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FieldOps" className="w-18 h-20 rounded-lg" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              Plataforma de supervisión de campo con GPS y evidencia fotográfica para empresas de telecomunicaciones.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/30">
              <MapPin size={12} className="text-[var(--brand)]" />
              Lima, Perú
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="font-display font-600 text-white text-sm mb-4">{cat}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO keywords strip */}
        <div className="border-t border-white/5 pt-8 mb-6">
          <p className="text-white/20 text-xs text-center">
            Supervisión de campo · Software para telecomunicaciones · GPS tracking · Gestión de campo · Reportes geolocalizados · Field service management · Control de personal · Evidencia fotográfica · Trazabilidad de trabajos
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/30">
          <span>© {new Date().getFullYear()} FieldOps. Todos los derechos reservados.</span>
          <span>Hecho con ❤ en Lima, Perú</span>
        </div>
      </div>
    </footer>
  )
}
