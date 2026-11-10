import { zonas } from '../data/sitio'
import { IconoPin } from './Icons'
import { BotonLlamar } from './Botones'

export default function Cobertura() {
  return (
    <section id="cobertura" className="seccion bg-cabina-900 text-white">
      <div className="contenedor">
        <h2 className="reveal text-4xl font-extrabold leading-none text-white sm:text-5xl">Zonas de cobertura</h2>
        <p className="mt-3 max-w-2xl text-xl text-cabina-200">Estas son las zonas donde trabajamos todos los días, a cualquier hora.</p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zonas.map((z, i) => (
            <li key={z} style={{ '--d': `${i * 60}ms` }} className="reveal flex items-center gap-3 rounded-lg border border-white/20 bg-cabina-800 px-5 py-4 text-xl font-semibold">
              <IconoPin className="shrink-0 text-white" /> {z}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg text-cabina-200">¿Otra zona? También hacemos traslados a cualquier parte del país. Consúltenos.</p>
        <div className="mt-6 sm:max-w-sm">
          <BotonLlamar className="w-full" />
        </div>
      </div>
    </section>
  )
}
