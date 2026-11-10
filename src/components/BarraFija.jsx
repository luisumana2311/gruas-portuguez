import { sitio } from '../data/sitio'
import { urlWhatsapp } from './Botones'
import { IconoLlamar, IconoWhats } from './Icons'

// Barra fija inferior: visible en todas las secciones, solo en celular.
export default function BarraFija() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-cabina-200 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,.12)] md:hidden">
      <a href={`tel:${sitio.telefonoLink}`} className="btn btn-llamar !px-3 !text-xl">
        <IconoLlamar /> Llamar
      </a>
      <a href={urlWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn btn-whats !px-3 !text-xl">
        <IconoWhats /> WhatsApp
      </a>
    </div>
  )
}
