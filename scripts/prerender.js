// Inserta el HTML de la página (renderizado con React en Node) dentro de dist/index.html,
// para que Google, las vistas previas y los navegadores sin JavaScript vean todo el contenido.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = fileURLToPath(new URL('..', import.meta.url))
const archivo = `${raiz}dist/index.html`
const ssr = `${raiz}dist-ssr/entry-server.js`

const { render } = await import(pathToFileURL(ssr).href)
const plantilla = await readFile(archivo, 'utf8')
if (!plantilla.includes('<!--app-->')) throw new Error('No se encontró <!--app--> en dist/index.html')

await writeFile(archivo, plantilla.replace('<!--app-->', render()))
await rm(`${raiz}dist-ssr`, { recursive: true, force: true })
console.log('✓ dist/index.html pre-renderizado')
