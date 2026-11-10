import { servicios } from '../data/sitio'
import { BotonWhatsapp } from './Botones'

export default function Servicios() {
  return (
    <section id="servicios" className="seccion bg-white">
      <div className="contenedor grid gap-10 md:grid-cols-5 md:gap-14">
        <div className="reveal md:col-span-2">
          <h2 className="titulo-seccion">Qué <span className="text-reflectivo">transportamos</span></h2>
          <p className="mt-4 text-xl text-cabina-700">
            Si tiene algo que mover, cuéntenos qué es y a dónde va. Le decimos cómo lo hacemos.
          </p>
          <div className="mt-6 sm:max-w-xs">
            <BotonWhatsapp
              className="w-full"
              texto="Consultar mi traslado"
              mensaje="Hola, quiero consultar por un traslado. Necesito mover: "
            />
          </div>
        </div>

        <ol className="md:col-span-3 divide-y divide-cabina-200 border-y border-cabina-200">
          {servicios.map((s, i) => (
            <li key={s.id} className="reveal flex gap-4 py-5" style={{ '--d': `${i * 70}ms` }}>
              <span className="w-10 shrink-0 font-titulo text-3xl font-extrabold text-reflectivo">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-2xl font-bold text-cabina-900">{s.titulo}</h3>
                <p className="mt-1 text-lg text-cabina-700">{s.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
