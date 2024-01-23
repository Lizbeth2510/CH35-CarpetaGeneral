import {Link } from "react-router-dom"


const nosotros = () => {

    return (
        <>
            <div>
                <h1>Esta es la página Sobre Nosotros </h1>
                <Link to="/">
                    Presiona aquí para regresar a la pagina de inicio 
                </Link>
                <br />
                <Link to="/contact">
                    Presiona aquí para ir a la pagina de contacto
                </Link>
            </div>
        </>
    )
}

export default nosotros;