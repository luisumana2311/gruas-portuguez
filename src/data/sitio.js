// DATOS DE EJEMPLO (prototipo).
// En la fase 2 estos valores salen de Firestore y el cliente los edita desde /admin.
// "POR CONFIRMAR" = salió del flyer/fotos del cliente y falta que él lo valide.

export const sitio = {
  nombre: 'Grúas Portuguez',
  contacto: 'Mauricio Portuguez Montoya',
  telefono: '8808-2952',
  telefonoLink: '+50688082952',
  whatsapp: '50688082952',
  whatsappMensaje: 'Hola, necesito una grúa. Mi ubicación es: ',
  correo: 'Mauportuguezmontoya@gmail.com',
  base: 'Santiago de Cervantes, Cartago, Costa Rica',
  horario: 'Atención 24/7, los 365 días del año',
  mapaQuery: 'Santiago de Cervantes, Cartago, Costa Rica',
  logoUrl: null, // Logo A por defecto (public/logo). Poner aquí la ruta si el cliente entrega el suyo.

  // POR CONFIRMAR: textos finales
  presentacion: [
    'Somos Grúas Portuguez, un servicio de grúa de plataforma con base en Santiago de Cervantes, Cartago. Trabajamos todos los días en esta zona y conocemos bien sus calles y caminos.',
    'Llevamos desde un carro hasta maquinaria, contenedores, tanques o materiales. Usted nos dice qué necesita mover y a dónde, y coordinamos el traslado de forma segura.',
  ],
  ventajas: [
    { titulo: 'Atención 24/7', texto: 'De día, de noche, feriados y fines de semana.' },
    { titulo: 'Base en Cervantes', texto: 'Estamos en la zona, no a horas de distancia.' },
    { titulo: 'Traslado seguro', texto: 'Cargas bien aseguradas con correas y conos de señalización.' },
  ],
}

// POR CONFIRMAR: basado en el flyer "Transportamos de todo" y en las fotos del cliente
export const servicios = [
  { id: 1, titulo: 'Vehículos', texto: 'Carros, pickups y 4x4, funcionando o accidentados.' },
  { id: 2, titulo: 'Maquinaria y montacargas', texto: 'Equipo pesado y de construcción.' },
  { id: 3, titulo: 'Contenedores', texto: 'Traslado de contenedores.' },
  { id: 4, titulo: 'Tanques y materiales', texto: 'Tanques de agua, paletas de materiales y otras cargas grandes.' },
  { id: 5, titulo: 'Cualquier parte del país', texto: 'Traslados confiables y seguros a donde necesite.' },
  { id: 6, titulo: 'De día o de noche', texto: 'El mismo servicio a cualquier hora, todos los días.' },
]

// Zona principal de operación (la que va en la ficha de Google)
export const zonas = ['Cervantes y alrededores', 'Cartago', 'Paraíso', 'Capellades', 'Cachí', 'Urasca']

// Fotos reales del cliente. "nombre" apunta a /img/<nombre>-sm.webp y -lg.webp
// "pos" = punto de enfoque al recortar en la cuadrícula.
export const galeria = [
  { id: 1, nombre: 'tanque', titulo: 'Tanques y cargas grandes', alt: 'Camión de Grúas Portuguez transportando un tanque de agua', pos: '45% 50%' },
  { id: 2, nombre: 'materiales', titulo: 'Materiales en paletas', alt: 'Grúa Portuguez con paletas de material de construcción aseguradas con correas', pos: '58% 50%' },
  { id: 9, nombre: 'noche-nissan', titulo: 'Pickup asegurada con correas', alt: 'Pickup roja asegurada con correas amarillas sobre la plataforma de la grúa, de noche', pos: '62% 50%' },
  { id: 3, nombre: 'noche-suv', titulo: 'Servicio nocturno', alt: 'Grúa Portuguez trasladando una SUV de noche', pos: '40% 50%' },
  { id: 4, nombre: 'maquinaria', titulo: 'Subiendo un vehículo', alt: 'Un sedán rojo subiendo a la plataforma de la grúa por las rampas', pos: '40% 50%' },
  { id: 5, nombre: 'sedan-azul', titulo: 'Traslado de carros', alt: 'Grúa Portuguez con un sedán azul en la plataforma, de noche', pos: '25% 50%' },
  { id: 6, nombre: 'sedan-rojo', titulo: 'Vehículos', alt: 'Sedán rojo sobre la plataforma de la grúa', pos: '35% 50%' },
  { id: 7, nombre: 'pickup-choque', titulo: 'Vehículos accidentados', alt: 'Pickup con daños en el frente sobre la plataforma de la grúa', pos: '50% 50%' },
  { id: 8, nombre: 'pickup-noche', titulo: 'Pickups y 4x4', alt: 'Pickup 4x4 trasladada en la plataforma de noche', pos: '50% 50%' },
]
