import './Products.css'

const Products = (props) => {

    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
        
            <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers' />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1958</h4>
            </div>
        </div> 
        
        */}
             <div className="cards">
            <div className="products--card">
                <img src={props.img} alt='sneakers' />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>
        </>
    )
}



export default Products;