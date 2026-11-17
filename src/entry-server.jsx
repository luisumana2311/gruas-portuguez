import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Usado solo en el build (scripts/prerender.js) para generar el HTML de la página.
export const render = () => renderToString(<App />)
