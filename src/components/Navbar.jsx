import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Planes', href: '#planes' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050e0d]/95 backdrop-blur-md border-b border-[rgba(0,180,168,0.15)] py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img src={logo} alt="FieldOps" className="w-18 h-20 rounded-lg" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Iniciar sesión
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 rounded-lg bg-[var(--brand)] text-[#050e0d] text-sm font-semibold hover:bg-[#00c8bb] transition-colors glow-brand"
          >
            Solicitar demo →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#091918] border-t border-[rgba(0,180,168,0.15)] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 px-4 py-2 rounded-lg bg-[var(--brand)] text-[#050e0d] font-semibold text-center"
            onClick={() => setOpen(false)}
          >
            Solicitar demo
          </a>
        </div>
      )}
    </nav>
  )
}
