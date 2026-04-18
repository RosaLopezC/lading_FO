import { useState } from 'react'
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí conectar con tu backend / Formspree / etc.
    setSent(true)
  }

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,180,168,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="aos rounded-3xl bg-gradient-to-r from-[#0d2422] via-[#112f2d] to-[#0d2422] border border-[rgba(0,180,168,0.2)] p-10 md:p-14 text-center mb-16" style={{ boxShadow: '0 0 80px rgba(0,180,168,0.08)' }}>
          <div className="text-[var(--brand)] text-sm font-medium uppercase tracking-widest mb-4">¿Listo para el cambio?</div>
          <h2 className="font-display font-800 text-3xl md:text-5xl text-white mb-4">
            Digitaliza tu operación de campo{' '}
            <span className="gradient-text">en 48 horas</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-8">
            Sin contratos, sin letra pequeña. Empieza gratis y escala cuando lo necesites.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/51999999999?text=Hola,%20quiero%20una%20demo%20de%20FieldOps"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1cb85b] transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="mailto:hola@fieldops.pe"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--brand)] text-[#050e0d] font-semibold hover:bg-[#00c8bb] transition-colors glow-brand"
            >
              <Mail size={18} />
              Enviar correo
            </a>
            <a
              href="#form"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[rgba(0,180,168,0.3)] text-white font-semibold hover:bg-[rgba(0,180,168,0.08)] transition-colors"
            >
              Solicitar demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12" id="form">
          {/* Form */}
          <div className="aos">
            <h3 className="font-display font-700 text-2xl text-white mb-2">Envíanos un mensaje</h3>
            <p className="text-white/50 mb-6">Respondemos en menos de 2 horas en horario laboral.</p>

            {sent ? (
              <div className="rounded-2xl bg-[rgba(0,180,168,0.08)] border border-[rgba(0,180,168,0.2)] p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-display font-700 text-white text-xl mb-2">¡Mensaje enviado!</h4>
                <p className="text-white/50">Te contactaremos pronto. Revisa tu correo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Nombre</label>
                    <input
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.15)] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Empresa</label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      className="w-full bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.15)] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Correo</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@empresa.com"
                      className="w-full bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.15)] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Teléfono</label>
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                      className="w-full bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.15)] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Cuéntanos sobre tu operación..."
                    className="w-full bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.15)] rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--brand)] text-[#050e0d] font-semibold hover:bg-[#00c8bb] transition-colors glow-brand"
                >
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="aos space-y-6">
            <div>
              <h3 className="font-display font-700 text-2xl text-white mb-2">Información de contacto</h3>
              <p className="text-white/50">También puedes comunicarte directamente con nuestro equipo.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Phone size={18} />, label: 'Teléfono', value: '+51 999 999 999', href: 'tel:+51999999999' },
                { icon: <Mail size={18} />, label: 'Correo', value: 'hola@fieldops.pe', href: 'mailto:hola@fieldops.pe' },
                { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+51 999 999 999', href: 'https://wa.me/51999999999' },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[rgba(0,180,168,0.05)] border border-[rgba(0,180,168,0.1)] hover:border-[rgba(0,180,168,0.3)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-dim)] flex items-center justify-center text-[var(--brand)]">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{c.label}</div>
                    <div className="text-white font-medium group-hover:text-[var(--brand)] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[rgba(0,180,168,0.15)] h-40 relative">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=75&auto=format&fit=crop"
                alt="Ubicación"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#091918]/90 backdrop-blur-sm rounded-xl px-4 py-2 border border-[rgba(0,180,168,0.2)]">
                  <span className="text-sm text-white/60">Lima, Perú 🇵🇪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
