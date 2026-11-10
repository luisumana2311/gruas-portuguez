import Encabezado from './components/Encabezado'
import Portada from './components/Portada'
import Servicios from './components/Servicios'
import Cobertura from './components/Cobertura'
import Galeria from './components/Galeria'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Pie from './components/Pie'
import BarraFija from './components/BarraFija'
import BotonArriba from './components/BotonArriba'
import { useReveal } from './hooks'

export default function App() {
  useReveal()
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-cabina-900">
        Saltar al contenido
      </a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <Servicios />
        <Cobertura />
        <Galeria />
        <Nosotros />
        <Contacto />
      </main>
      <Pie />
      <BotonArriba />
      <BarraFija />
    </>
  )
}
