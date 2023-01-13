import CardWidget from "./CardWidget"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import "./navbar.css"


function navBar(props) {
    // const links = [ 
    //    { category: "home", url: "/home"}, 
    //    { category: "Afeitado", url: "/afeitado"}, 
    //    { category: "Barba", url: "/barba"}, 
    //    { category: "Cabello", url: "/cabello"}, 
    //    { category: "Cuerpo", url: "/cuerpo"}, 
    // ]
    // 051 minuto
    return( 
            <header>
                <nav className="navbar">
                    <NavItem><Link to="/"><img width={140} src="https://jajomedia.com/desafios/Proyecto_Final_Coder/img/Logo_Barber.svg" alt="" /></Link> </NavItem>
                    <ul className="nav-item">
                        <Link to="/detalle" className="nav-link">Detalle</Link>
                        <Link className="nav-item"><CardWidget /></Link> 
                    </ul>
                </nav>
            </header>
     )
}

export default navBar