import { useEffect, useState } from 'react'

export const reducirMovimiento = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Hace aparecer suavemente los elementos con clase .reveal al entrar en pantalla.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('visible')
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

// Devuelve el id de la sección que está en el centro de la pantalla.
export function useSeccionActiva(ids) {
  const [activa, setActiva] = useState('')
  const clave = ids.join(',')
  useEffect(() => {
    const secs = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActiva(en.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    secs.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [clave])
  return activa
}

export function useScrollPasado(umbral) {
  const [pasado, setPasado] = useState(false)
  useEffect(() => {
    const f = () => setPasado(window.scrollY > umbral)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [umbral])
  return pasado
}
