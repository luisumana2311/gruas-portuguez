import { useEffect, useState } from 'react'
import { sitio } from '../data/sitio'
import { urlWhatsapp } from './Botones'
import { IconoLlamar, IconoWhats } from './Icons'
import { registrar } from '../medicion'

// Barra fija inferior, solo en celular. Aparece cuando los botones de la portada
// ya quedaron arriba, para no mostrar Llamar/WhatsApp dos veces en la misma pantalla.
export default function BarraFija() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cta = document.getElementById('cta-portada')
    if (!cta || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(([en]) => setVisible(!en.isIntersecting && en.boundingClientRect.top < 0))
    io.observe(cta)
    return () => io.disconnect()
  }, [])

  return (
    <div
      inert={visible ? undefined : ''}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-cabina-200 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(0,0,0,.12)] transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a href={`tel:${sitio.telefonoLink}`} onClick={() => registrar('llamar', { origen: 'barra' })} className="btn btn-llamar !px-3 !text-xl">
        <IconoLlamar /> Llamar
      </a>
      <a href={urlWhatsapp()} target="_blank" rel="noopener noreferrer" onClick={() => registrar('whatsapp', { origen: 'barra' })} className="btn btn-whats !px-3 !text-xl">
        <IconoWhats /> WhatsApp
      </a>
    </div>
  )
}
