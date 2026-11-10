import { useScrollPasado, reducirMovimiento } from '../hooks'
import { IconoFlecha } from './Icons'

export default function BotonArriba() {
  const visible = useScrollPasado(900)
  return (
    <button
      type="button"
      aria-label="Volver arriba"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: reducirMovimiento() ? 'auto' : 'smooth' })}
      className={`fixed bottom-[5.25rem] right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-cabina-900 text-white shadow-lg transition duration-300 md:bottom-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <IconoFlecha />
    </button>
  )
}
