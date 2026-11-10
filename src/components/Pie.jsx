import Logo from './Logo'
import { sitio } from '../data/sitio'

export default function Pie() {
  return (
    <footer className="bg-cabina-900 text-white">
      <div aria-hidden className="cinta h-1.5" />
      <div className="px-4 pb-28 pt-10 md:pb-10">
        <div className="contenedor flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo claro className="!h-16" />
            <p className="mt-2 text-cabina-200">{sitio.base}</p>
          </div>
          <div className="text-lg text-cabina-200">
            <p>Tel. / WhatsApp: <a className="font-bold text-white underline underline-offset-4" href={`tel:${sitio.telefonoLink}`}>{sitio.telefono}</a></p>
            <p>{sitio.horario}</p>
          </div>
        </div>
        <p className="contenedor mt-8 text-sm text-cabina-500">© {new Date().getFullYear()} Grúas Portuguez S.R.L. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
