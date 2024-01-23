import {Link } from "react-router-dom"

const contacto = () => {
    return(
        <>
            <div>
                <h1>Esta es la página de Contacto</h1>
                <Link to="/">
                    Presiona aquí para regresar a la pagina de inicio 
                </Link>
                <br />
                <Link to="/about-us">
                    Presiona aquí para ir a la pagina Sobre Nosotros
                </Link>
            </div>
        </>
    )
}



export default contacto;