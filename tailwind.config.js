/** @type {import('tailwindcss').Config} */
// Paleta tomada del camión y del flyer del cliente:
//  cabina  = azul grisáceo de la cabina
//  reflectivo = rojo de la cinta reflectiva
//  aviso   = amarillo del círculo "SERVICIO 24/7" (solo para ese distintivo)
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cabina: { 950: '#1c262c', 900: '#2b3a42', 800: '#364852', 700: '#4a5d68', 500: '#7b8b94', 200: '#d5dbde' },
        papel: '#f3f4f5',
        reflectivo: { DEFAULT: '#c62828', dark: '#a61f1f' },
        aviso: '#ffc107',
        whats: '#25d366',
      },
      fontFamily: {
        titulo: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        cuerpo: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
