import { useCallback, useEffect, useRef, useState } from 'react'
import { galeria } from '../data/sitio'
import { IconoCerrar, IconoIzq, IconoDer } from './Icons'

const sm = (n) => `/img/${n}-sm.webp`
const lg = (n) => `/img/${n}-lg.webp`

export default function Galeria() {
  const [idx, setIdx] = useState(null)
  const ultimoBoton = useRef(null)
  const cerrarRef = useRef(null)
  const toqueX = useRef(null)
  const abierta = idx !== null

  const ir = useCallback((d) => setIdx((i) => (i === null ? i : (i + d + galeria.length) % galeria.length)), [])
  const cerrar = useCallback(() => {
    setIdx(null)
    ultimoBoton.current?.focus()
  }, [])

  useEffect(() => {
    if (!abierta) return
    const alTeclear = (e) => {
      if (e.key === 'Escape') cerrar()
      else if (e.key === 'ArrowLeft') ir(-1)
      else if (e.key === 'ArrowRight') ir(1)
    }
    window.addEventListener('keydown', alTeclear)
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    cerrarRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', alTeclear)
      document.body.style.overflow = previo
    }
  }, [abierta, cerrar, ir])

  // Precarga las fotos vecinas para que el cambio sea instantáneo
  useEffect(() => {
    if (!abierta) return
    ;[-1, 1].forEach((d) => {
      const i = (idx + d + galeria.length) % galeria.length
      new Image().src = lg(galeria[i].nombre)
    })
  }, [idx, abierta])

  const f = abierta ? galeria[idx] : null

  return (
    <section id="galeria" className="seccion bg-papel">
      <div className="contenedor">
        <h2 className="titulo-seccion reveal">Trabajos <span className="text-reflectivo">reales</span></h2>
        <p className="reveal mt-3 text-xl text-cabina-700">Fotos de nuestro camión en servicio. Toque una para verla completa.</p>
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {galeria.map((g, i) => (
            <li key={g.id} className={`reveal ${i === 0 ? 'col-span-2 lg:col-span-1' : ''}`} style={{ '--d': `${(i % 3) * 80}ms` }}>
              <button
                onClick={(e) => { ultimoBoton.current = e.currentTarget; setIdx(i) }}
                className="group relative block w-full overflow-hidden rounded-lg"
                aria-label={`Ampliar: ${g.titulo}`}
              >
                <img
                  src={sm(g.nombre)} alt={g.alt} width="640" height="400" loading="lazy" decoding="async"
                  className={`${i === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'} w-full object-cover transition duration-500 group-hover:scale-105 lg:aspect-[4/3]`}
                  style={{ objectPosition: g.pos }}
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-8 text-left text-base font-semibold text-white sm:text-lg">
                  {g.titulo}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {f && (
        <div
          className="aparecer fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-3"
          role="dialog" aria-modal="true" aria-label={`Foto ${idx + 1} de ${galeria.length}: ${f.titulo}`}
          onClick={cerrar}
          onTouchStart={(e) => { toqueX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (toqueX.current === null) return
            const dx = e.changedTouches[0].clientX - toqueX.current
            toqueX.current = null
            if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1)
          }}
        >
          <button ref={cerrarRef} className="absolute right-3 top-3 z-10 grid h-14 w-14 place-items-center rounded-full bg-white text-black" aria-label="Cerrar" onClick={(e) => { e.stopPropagation(); cerrar() }}>
            <IconoCerrar />
          </button>
          <button className="absolute left-2 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black" aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); ir(-1) }}>
            <IconoIzq />
          </button>
          <button className="absolute right-2 top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black" aria-label="Foto siguiente" onClick={(e) => { e.stopPropagation(); ir(1) }}>
            <IconoDer />
          </button>
          <figure className="max-h-[90vh] max-w-full" onClick={(e) => e.stopPropagation()}>
            <img key={f.id} src={lg(f.nombre)} alt={f.alt} className="aparecer max-h-[78vh] w-auto max-w-full rounded-lg" />
            <figcaption className="mt-3 text-center text-lg text-white">
              {f.titulo} <span className="text-white/60">· {idx + 1} / {galeria.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
