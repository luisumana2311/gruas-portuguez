import { preguntas } from '../data/sitio'
import { BotonLlamar } from './Botones'

// Preguntas frecuentes. Las mismas preguntas se publican como JSON-LD (FAQPage) desde vite.config.js.
export default function Preguntas() {
  return (
    <section id="preguntas" className="seccion border-t border-cabina-200 bg-white">
      <div className="contenedor grid gap-10 md:grid-cols-5 md:gap-14">
        <div className="reveal md:col-span-2">
          <h2 className="titulo-seccion">Preguntas <span className="text-reflectivo">frecuentes</span></h2>
          <p className="mt-4 text-xl text-cabina-700">¿Tiene otra duda? Llámenos, le contestamos a cualquier hora.</p>
          <div className="mt-6 sm:max-w-xs">
            <BotonLlamar origen="preguntas" className="w-full" />
          </div>
        </div>

        <div className="md:col-span-3 divide-y divide-cabina-200 border-y border-cabina-200">
          {preguntas.map(({ p, r }, i) => (
            <details key={p} className="reveal group py-1" style={{ '--d': `${i * 60}ms` }}>
              <summary className="flex min-h-[3.75rem] cursor-pointer list-none items-center justify-between gap-4 py-3 text-xl font-semibold text-cabina-900 [&::-webkit-details-marker]:hidden">
                {p}
                <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-papel text-2xl leading-none text-reflectivo transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pr-12 text-lg text-cabina-700">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
