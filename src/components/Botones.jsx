import { useState } from 'react'
import { sitio } from '../data/sitio'
import { IconoLlamar, IconoWhats, IconoUbicacion } from './Icons'

export const urlWhatsapp = (mensaje = sitio.whatsappMensaje) =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`

export function BotonLlamar({ className = '', texto, pulso = false }) {
  return (
    <a href={`tel:${sitio.telefonoLink}`} className={`btn btn-llamar ${pulso ? 'btn-pulso' : ''} ${className}`}>
      <IconoLlamar />
      {texto || `Llamar ${sitio.telefono}`}
    </a>
  )
}

export function BotonWhatsapp({ className = '', texto = 'Escribir por WhatsApp', mensaje }) {
  return (
    <a href={urlWhatsapp(mensaje)} target="_blank" rel="noopener noreferrer" className={`btn btn-whats ${className}`}>
      <IconoWhats />
      {texto}
    </a>
  )
}

// Abre WhatsApp con la ubicación actual del cliente (solo si él lo pide y acepta el permiso).
// variante: 'boton' (contorno) o 'enlace' (texto subrayado).
export function BotonUbicacion({ className = '', variante = 'boton', texto = 'Enviar mi ubicación por WhatsApp' }) {
  const [estado, setEstado] = useState('listo') // listo | buscando | error

  const abrir = (mensaje) => {
    const url = urlWhatsapp(mensaje)
    const w = window.open(url, '_blank', 'noopener')
    if (!w) window.location.href = url
  }

  const enviar = () => {
    if (!navigator.geolocation) {
      setEstado('error')
      abrir(sitio.whatsappMensaje)
      return
    }
    setEstado('buscando')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setEstado('listo')
        abrir(`Hola, necesito una grúa. Mi ubicación: https://www.google.com/maps?q=${coords.latitude.toFixed(6)},${coords.longitude.toFixed(6)}`)
      },
      () => {
        setEstado('error')
        abrir(sitio.whatsappMensaje)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    )
  }

  const clase = variante === 'enlace' ? 'enlace-accion' : 'btn btn-contorno'
  return (
    <div className={className}>
      <button type="button" onClick={enviar} disabled={estado === 'buscando'} className={`${clase} ${variante === 'boton' ? 'w-full' : ''}`}>
        <IconoUbicacion width={22} height={22} />
        {estado === 'buscando' ? 'Buscando su ubicación…' : texto}
      </button>
      <p role="status" aria-live="polite" className="mt-2 min-h-[1.25rem] text-base text-cabina-700">
        {estado === 'error' && 'No pudimos obtener su ubicación. Escríbanos en el chat dónde está y vamos para allá.'}
      </p>
    </div>
  )
}
