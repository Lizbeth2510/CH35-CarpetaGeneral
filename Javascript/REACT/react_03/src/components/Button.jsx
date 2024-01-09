import './Button.css'

/**
 * Props. Popiedades que se pueden asignar a los componentes para modificar el texto, la información desde la renderzación del mismo.
 * Se asignan como párametro de la función con el nombre del prop y debe ir entre llaves.
 * Se manda a llamar en el bloque de código donde se debe implementar utilizando llaves
 */

const Button = ({label}) => {
    return(
    <>
        <button>
            {label}

        </button>
    </>
    )
}

export default Button;