import CardWidget from "./CardWidget"
import "./navbar.css"


function navBar(props) {

    return( 
            <header>
                <nav className="navbar">
                    <div className="logo"><img width={140} src="https://jajomedia.com/desafios/Proyecto_Final_Coder/img/Logo_Barber.svg" alt="" /></div>
                    <ul className="nav-item">
                        <li><a className="nav-link" href="/">Home</a></li> 
                        <li><a className="nav-link" href="/">Afeitado</a></li> 
                        <li><a className="nav-link" href="/">Barba</a></li> 
                        <li><a className="nav-link" href="/">Cabello</a></li> 
                        <li><a className="nav-link" href="/">Cuerpo</a></li> 
                        <li><a className="nav-link" href="/"><CardWidget /></a></li> 
                    </ul>
                </nav>
            </header>
     )
}

export default navBar