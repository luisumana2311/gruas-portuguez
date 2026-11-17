import { useState } from 'react'
import { sitio } from '../data/sitio'
import { BotonLlamar, BotonWhatsapp, BotonUbicacion } from './Botones'
import { IconoCorreo, IconoPin, IconoReloj } from './Icons'

export default function Contacto() {
  // El mapa no se carga hasta que la persona lo pide: ahorra datos móviles y no carga Google de entrada.
  const [verMapa, setVerMapa] = useState(false)
  const q = encodeURIComponent(sitio.mapaQuery)
  const mapa = `https://www.google.com/maps?q=${q}&output=embed`
  const abrirEnMaps = `https://www.google.com/maps/search/?api=1&query=${q}`
  return (
    <section id="contacto" className="seccion bg-papel">
      <div className="contenedor">
        <h2 className="titulo-seccion">¿Necesita una <span className="text-reflectivo">grúa</span>?</h2>
        <p className="mt-3 text-xl text-cabina-700">Estamos disponibles ahora mismo.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="reveal min-w-0 space-y-4">
            <BotonLlamar origen="contacto" className="w-full !text-2xl !min-h-[4.25rem]" />
            <BotonWhatsapp origen="contacto" className="w-full !text-2xl !min-h-[4.25rem]" />
            <BotonUbicacion />

            <ul className="space-y-4 pt-4 text-xl text-cabina-800">
              <li className="flex items-center gap-3"><IconoReloj className="shrink-0 text-reflectivo" /> {sitio.horario}</li>
              <li className="flex items-center gap-3"><IconoPin className="shrink-0 text-reflectivo" /> {sitio.base}</li>
              <li className="flex items-center gap-3 break-all">
                <IconoCorreo className="shrink-0 text-reflectivo" />
                <a href={`mailto:${sitio.correo}`} className="underline decoration-reflectivo decoration-2 underline-offset-4">{sitio.correo}</a>
              </li>
            </ul>
          </div>

          <div className="reveal flex min-w-0 flex-col overflow-hidden rounded-xl border border-cabina-200 bg-white" style={{ '--d': '120ms' }}>
            {verMapa ? (
              <iframe
                title={`Mapa de ubicación: ${sitio.base}`}
                src={mapa}
                referrerPolicy="no-referrer-when-downgrade"
                className="aparecer min-h-[20rem] w-full flex-1 md:min-h-[22rem]"
              />
            ) : (
              <button
                type="button"
                onClick={() => setVerMapa(true)}
                className="group relative grid min-h-[20rem] w-full flex-1 place-items-center overflow-hidden bg-cabina-900 text-white md:min-h-[22rem]"
              >
                {/* cuadrícula de calles decorativa */}
                <span aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(#7b8b94_1px,transparent_1px),linear-gradient(90deg,#7b8b94_1px,transparent_1px)] [background-size:44px_44px]" />
                <span className="relative flex flex-col items-center gap-3 px-6 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-reflectivo shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    <IconoPin width={34} height={34} />
                  </span>
                  <span className="font-titulo text-3xl font-extrabold uppercase tracking-wide">Ver mapa</span>
                  <span className="text-lg text-cabina-200">{sitio.base}</span>
                </span>
              </button>
            )}
            <a href={abrirEnMaps} target="_blank" rel="noopener noreferrer" className="enlace-accion justify-center border-t border-cabina-200 px-4 py-2">
              <IconoPin width={22} height={22} className="text-reflectivo" /> Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
