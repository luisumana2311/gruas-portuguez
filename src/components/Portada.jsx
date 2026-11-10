import { sitio } from '../data/sitio'
import { BotonLlamar, BotonWhatsapp, BotonUbicacion } from './Botones'
import { IconoPin } from './Icons'

export default function Portada() {
  return (
    <section id="inicio" className="bg-papel px-4 pb-12 pt-8 sm:pt-14">
      <div className="contenedor grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="min-w-0">
          <p className="text-lg font-bold uppercase tracking-wide text-reflectivo sm:text-xl">
            {sitio.horario}
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] text-cabina-900 sm:text-7xl">
            Transportamos <br className="hidden sm:block" />de todo
          </h1>
          <p className="mt-4 max-w-xl text-xl text-cabina-700 sm:text-2xl">
            Grúa de plataforma con base en Santiago de Cervantes. Vehículos, maquinaria, contenedores y cargas, a cualquier hora.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:max-w-md">
            <BotonLlamar pulso className="!text-2xl !min-h-[4.25rem]" />
            <BotonWhatsapp className="!text-2xl !min-h-[4.25rem]" texto="WhatsApp" />
            <BotonUbicacion variante="enlace" texto="¿Varado? Envíe su ubicación por WhatsApp" className="mt-1" />
          </div>

          <p className="mt-5 flex items-center gap-2 text-lg text-cabina-700">
            <IconoPin className="shrink-0 text-reflectivo" /> Cervantes, Cartago, Paraíso, Capellades, Cachí y Urasca
          </p>
        </div>

        <div className="relative min-w-0">
          <img
            src="/img/tanque-lg.webp"
            alt="Camión de Grúas Portuguez transportando un tanque de agua"
            width="1400" height="572" fetchpriority="high"
            className="aspect-[3/2] w-full rounded-xl object-cover shadow-md"
            style={{ objectPosition: '42% 50%' }}
          />
          {/* Distintivo igual al del flyer del cliente */}
          <div className="absolute -top-4 right-2 grid h-24 w-24 place-items-center rounded-full border-[5px] border-reflectivo bg-aviso text-center font-titulo font-extrabold uppercase leading-none text-cabina-950 shadow-lg sm:-right-4 sm:h-28 sm:w-28">
            <span><span className="block text-xs sm:text-sm">Servicio</span><span className="block text-3xl sm:text-4xl">24/7</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
