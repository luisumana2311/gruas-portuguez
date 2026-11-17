# Grúas Portuguez — prototipo (fase 1)

React + Vite + Tailwind. Una sola página, pre-renderizada en el build para que Google la lea sin JavaScript.

- `npm install` y `npm run dev` para verla en local.
- `npm run build` genera `dist/` con el HTML ya renderizado, `sitemap.xml`, `robots.txt` y `_redirects` (Netlify).
- Datos editables en `src/data/sitio.js` (en fase 2 pasan a Firestore). De ahí salen también la URL canónica,
  la vista previa al compartir, el JSON-LD (negocio y preguntas frecuentes) y el sitemap (ver `vite.config.js`).
- Dominio: `sitio.dominio`, o la variable de entorno `SITE_URL` al compilar (ej. en Netlify).
- Fotos reales del cliente en `public/img/` (WebP, `-sm` para la cuadrícula y `-lg` para ampliar).
  `public/og-imagen.jpg` (1200×630) es la imagen que aparece al compartir el enlace.
- Medición de clics: `src/medicion.js` envía eventos (`llamar`, `whatsapp`, `ubicacion`) a Plausible o GA4
  si alguno está instalado; si no hay ninguno, no hace nada.

## Pendiente del cliente
- Dominio final, coordenadas de la base y enlace a la ficha de Google (`sitio.dominio`, `sitio.geo`, `sitio.perfiles`).
- Textos marcados `POR CONFIRMAR` en `src/data/sitio.js`, incluidas las preguntas frecuentes.
- Señales de confianza: años de experiencia, opiniones de clientes, tiempo promedio de llegada, formas de pago.
- Cuenta de analítica (Plausible o GA4) para medir llamadas y mensajes.

## Fase 2 (tras aprobación)
Panel `/admin` con Firebase Auth, textos/teléfono/WhatsApp en Firestore, fotos de galería.
