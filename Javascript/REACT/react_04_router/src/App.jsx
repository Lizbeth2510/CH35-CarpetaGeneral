import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from'./components/Inicio'
import Contacto from './components/Contacto'
import Nosotros from './components/SobreNosotros'


{/*
-Routes. Actua como contenedor padre de todas las rutas individuales, que se crearán en la aplicación.
- Route. Es la ruta 'hija' de cada componente. Recibe los atributos:
    1.path: especifica la ruta (URL) a seguir
    2. element: especifica el componente que se renderiza
  */}
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element = { <Inicio />} />
      <Route path="contact" element = { <Contacto />} />
      <Route path="about-us" element = {<Nosotros/>} />
    </Routes>
    </>
  )
}

export default App


       
       
        

