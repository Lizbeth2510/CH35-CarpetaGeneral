import './Navbar.css' //Importación css

//crear función que contiene el marcado para que viva nuestro código

const Navbar = () => {
    return(
        <> {/* Fragmento (por cierto el comentario debe de ser multilinea y estar encerrado entre llaves) */}
      <div className='navbar--container' > {/* > clasName es lo mismo que class en html  */}
            <div className='navbar--title'>
                <h1>GenMex-35</h1>
            </div>
            <div className='navbar--links'>
                <div className="navbar--link">
                    <a href='#'>Home</a>
                </div>
                <div className="navbar--link">
                    <a href="#">About</a>
                </div>
                <div className="navbar--link">
                    <a href="#">Astros API</a>
                </div>

            </div>
        </div>
        </>
    )
}

export default Navbar; //tiene que exportar esta función 



