// Registra un clic importante (llamar, whatsapp, ubicacion) en la analítica que esté instalada.
// Funciona con Plausible (window.plausible) o Google Analytics 4 (window.gtag). Si no hay ninguna, no hace nada.
export function registrar(evento, datos = {}) {
  if (typeof window === 'undefined') return
  try {
    window.plausible?.(evento, { props: datos })
    window.gtag?.('event', evento, datos)
  } catch {
    // la medición nunca debe romper un botón
  }
}
