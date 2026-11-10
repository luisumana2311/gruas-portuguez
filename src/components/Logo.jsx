import { sitio } from '../data/sitio'

// Logo A (insignia + nombre). `claro` = versión para fondos oscuros.
// Si el cliente entrega su propio logo, basta con poner su ruta en sitio.logoUrl.
export default function Logo({ claro = false, className = '' }) {
  const src = sitio.logoUrl || (claro ? '/logo/logo-principal-oscuro.svg' : '/logo/logo-principal.svg')
  return <img src={src} alt={sitio.nombre} width="520" height="140" className={`h-11 w-auto ${className}`} />
}
