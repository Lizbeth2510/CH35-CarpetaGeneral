import {Link } from "react-router-dom"

const inicio = () => {
    return (
        <>
            <div>
                <h1>Esta es la página de Inicio</h1>
                <Link to="about-us">
                    Presiona aquí para ir a la página Sobre Nosotros
                </Link>
                <br />
                <Link to="contact">
                    Presiona aquí para ir a la página Contacto
                </Link>

            </div>
        </>
    )
}

export default inicio;