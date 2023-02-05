
import CardWidget from "./CardWidget"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import "./navbar.css"
// import Button from "../Button/Button";

// Video o1:28
function navBar(props) {



    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let user = event.target.elements[0].value;
    //     props.onLogin(user)
    // }
    return( 
            <header>
                <nav className="navbar">
                    <NavItem><Link to="/"><img width={140} src="https://jajomedia.com/desafios/Proyecto_Final_Coder/img/Logo_Barber.svg" alt="" /></Link> </NavItem>
                    <ul className="nav-item">
                        {/* <Link to="/detalle" className="nav-link">Detalle</Link> */}
                        <Link to="/category/Cuerpo" className="nav-link">Cuerpo</Link>
                        <Link to="/category/Barba" className="nav-link" >Barba</Link>
                        <Link to="/category/Afeitado" className="nav-link">Afeitado</Link>
                        <Link to="/category/Cabeza" className="nav-link">Cabeza</Link>
                        <Link to="/cart" className="nav-item"><CardWidget /></Link>

                        {/* <Button onClick={props.onLogout}>Log Out</Button> 
                        <form onSubmit={handleSubmit} action="">
                            Iniciar sesión
                            <input name="user" type="text" />
                        </form> */}
                    </ul>
                </nav>
            </header>
     )
}

export default navBar