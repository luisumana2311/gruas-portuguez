import { sitio } from '../data/sitio'
import { BotonLlamar, BotonWhatsapp, BotonUbicacion } from './Botones'
import { IconoCorreo, IconoPin, IconoReloj } from './Icons'

export default function Contacto() {
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(sitio.mapaQuery)}&output=embed`
  return (
    <section id="contacto" className="seccion bg-papel">
      <div className="contenedor">
        <h2 className="titulo-seccion">¿Necesita una <span className="text-reflectivo">grúa</span>?</h2>
        <p className="mt-3 text-xl text-cabina-700">Estamos disponibles ahora mismo.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="reveal space-y-4">
            <BotonLlamar className="w-full !text-2xl !min-h-[4.25rem]" />
            <BotonWhatsapp className="w-full !text-2xl !min-h-[4.25rem]" />
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

          <div className="reveal overflow-hidden rounded-xl border border-cabina-200" style={{ '--d': '120ms' }}>
            <iframe
              title="Mapa de ubicación: Santiago de Cervantes, Cartago"
              src={mapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-full md:min-h-[22rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
