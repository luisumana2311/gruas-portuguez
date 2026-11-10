import { useEffect, useState } from 'react'
import Logo from './Logo'
import { sitio } from '../data/sitio'
import { IconoMenu, IconoCerrar, IconoLlamar } from './Icons'
import { useScrollPasado, useSeccionActiva } from '../hooks'

const enlaces = [
  ['Servicios', '#servicios'],
  ['Cobertura', '#cobertura'],
  ['Galería', '#galeria'],
  ['Nosotros', '#nosotros'],
  ['Contacto', '#contacto'],
]
const ids = ['inicio', ...enlaces.map(([, h]) => h.slice(1))]

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false)
  const activa = useSeccionActiva(ids)
  const bajado = useScrollPasado(8)

  useEffect(() => {
    if (!abierto) return
    const alTeclear = (e) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', alTeclear)
    return () => window.removeEventListener('keydown', alTeclear)
  }, [abierto])

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${bajado ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="contenedor flex h-16 items-center justify-between px-4">
        <a href="#inicio" aria-label="Ir al inicio"><Logo /></a>

        <nav className="hidden items-center gap-7 text-lg font-semibold md:flex" aria-label="Principal">
          {enlaces.map(([t, h]) => {
            const activo = activa === h.slice(1)
            return (
              <a
                key={h}
                href={h}
                aria-current={activo ? 'true' : undefined}
                className={`relative py-1 transition-colors hover:text-reflectivo after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-reflectivo after:transition-transform after:duration-300 ${
                  activo ? 'text-reflectivo after:scale-x-100' : 'text-cabina-800 after:scale-x-0'
                }`}
              >
                {t}
              </a>
            )
          })}
          <a href={`tel:${sitio.telefonoLink}`} className="btn btn-llamar !min-h-0 !px-4 !py-2 !text-lg">
            <IconoLlamar width={20} height={20} /> {sitio.telefono}
          </a>
        </nav>

        <button
          className="grid h-12 w-12 place-items-center rounded-lg bg-papel text-cabina-900 md:hidden"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {abierto ? <IconoCerrar /> : <IconoMenu />}
        </button>
      </div>
      <div aria-hidden className="cinta h-1.5" />

      {abierto && (
        <nav id="menu-movil" className="aparecer border-t border-cabina-200 bg-white px-4 pb-4 shadow-lg md:hidden" aria-label="Principal móvil">
          {enlaces.map(([t, h]) => (
            <a
              key={h}
              href={h}
              onClick={() => setAbierto(false)}
              aria-current={activa === h.slice(1) ? 'true' : undefined}
              className={`block border-b border-cabina-200 py-4 text-xl font-semibold ${activa === h.slice(1) ? 'text-reflectivo' : 'text-cabina-900'}`}
            >
              {t}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
