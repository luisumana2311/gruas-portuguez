const base = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const IconoLlamar = (p) => (
  <svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>
)
export const IconoWhats = (p) => (
  <svg {...base} {...p}><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.9.7a4 4 0 0 1-1.8-1.8l.7-.9-1-2z" fill="currentColor" stroke="none" /></svg>
)
export const IconoCorreo = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
export const IconoPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
)
export const IconoReloj = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const IconoCheck = (p) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
)
export const IconoCerrar = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const IconoMenu = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)

export const IconoFlecha = (p) => (
  <svg {...base} {...p}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
)
export const IconoIzq = (p) => (
  <svg {...base} {...p}><path d="m15 5-7 7 7 7" /></svg>
)
export const IconoDer = (p) => (
  <svg {...base} {...p}><path d="m9 5 7 7-7 7" /></svg>
)
export const IconoUbicacion = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
)

const servicioPaths = {
  grua: <><path d="M3 17h13l2-4h3v4" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M5 13 10 5l3 1.5M10 5v6" /></>,
  llanta: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 4v5M12 15v5M4 12h5M15 12h5" /></>,
  rescate: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M4 20h16" /></>,
  moto: <><circle cx="6" cy="16" r="3" /><circle cx="18" cy="16" r="3" /><path d="M6 16l4-7h4l4 7M10 9 9 6H7" /></>,
  ruta: <><path d="M5 20 9 4M19 20 15 4M12 6v2M12 11v2M12 16v2" /></>,
  noche: <><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></>,
}
export const IconoServicio = ({ nombre, ...p }) => (
  <svg {...base} {...p}>{servicioPaths[nombre] || servicioPaths.grua}</svg>
)
