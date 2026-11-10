import { sitio } from '../data/sitio'
import { IconoCheck } from './Icons'

export default function Nosotros() {
  return (
    <section id="nosotros" className="seccion bg-white">
      <div className="contenedor grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="reveal">
          <h2 className="titulo-seccion">Grúa de <span className="text-reflectivo">Cervantes</span></h2>
          <div className="mt-5 space-y-4 text-xl text-cabina-800">
            {sitio.presentacion.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ul className="mt-7 space-y-4">
            {sitio.ventajas.map((v) => (
              <li key={v.titulo} className="flex gap-3">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-reflectivo text-white"><IconoCheck width={18} height={18} /></span>
                <p className="text-lg text-cabina-800"><strong className="text-cabina-900">{v.titulo}.</strong> {v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/img/noche-suv-lg.webp"
          alt="Grúa Portuguez trabajando de noche con sus luces de señalización"
          width="1400" height="654" loading="lazy"
          className="reveal aspect-[4/3] w-full rounded-xl object-cover shadow-md"
          style={{ objectPosition: '38% 50%' }}
        />
      </div>
    </section>
  )
}
