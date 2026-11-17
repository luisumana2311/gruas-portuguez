import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sitio, zonas, preguntas } from './src/data/sitio.js'

// Genera desde src/data/sitio.js todo lo que Google y las redes leen en el <head>:
// URL canónica, vista previa al compartir (Open Graph), JSON-LD, sitemap.xml y robots.txt.
// Así los datos viven en un solo lugar y no se desincronizan.
function seoLocal() {
  const dominio = (process.env.SITE_URL || sitio.dominio).replace(/\/+$/, '')
  const url = `${dominio}/`
  const imagen = `${dominio}/og-imagen.jpg`

  const negocio = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    '@id': `${url}#negocio`,
    name: sitio.nombre,
    url,
    image: imagen,
    logo: `${dominio}/logo/logo-insignia.svg`,
    telephone: `+506-${sitio.telefono}`,
    email: sitio.correo,
    description: 'Servicio de grúa de plataforma 24/7 en Santiago de Cervantes, Cartago. Vehículos, maquinaria, contenedores y cargas.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santiago de Cervantes',
      addressRegion: 'Cartago',
      addressCountry: 'CR',
    },
    ...(sitio.geo && { geo: { '@type': 'GeoCoordinates', latitude: sitio.geo.lat, longitude: sitio.geo.lng } }),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sitio.mapaQuery)}`,
    areaServed: zonas.map((z) => z.replace(' y alrededores', '')),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    }],
    ...(sitio.perfiles.length && { sameAs: sitio.perfiles }),
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas.map(({ p, r }) => ({
      '@type': 'Question',
      name: p,
      acceptedAnswer: { '@type': 'Answer', text: r },
    })),
  }

  const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c')

  return {
    name: 'seo-local',
    transformIndexHtml() {
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: imagen }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Camión de Grúas Portuguez transportando un tanque de agua' }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: json(negocio), injectTo: 'head' },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: json(faq), injectTo: 'head' },
      ]
    },
    generateBundle() {
      const hoy = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}</loc><lastmod>${hoy}</lastmod></url>\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${dominio}/sitemap.xml\n`,
      })
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), !isSsrBuild && seoLocal()],
}))
