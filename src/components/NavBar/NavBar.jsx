
import CardWidget from "./CardWidget"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

// Video o1:28
function navBar(props) {

    return( 
        <>
<div className="container-fluid p-0 bg-nav-img-product mb-5 ">
      <div className="overlay">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
                <NavItem className="navbar-brand"><Link to="/"><img width={140} src="https://jajomedia.com/desafios/Proyecto_Final_Coder/img/Logo_Barber.svg" alt="" /></Link> </NavItem>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><span className="material-icons-outlined">menu</span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/category/Cuerpo" className="nav-link">Cuerpo</Link>
                        <Link to="/category/Barba" className="nav-link" >Barba</Link>
                        <Link to="/category/Afeitado" className="nav-link">Afeitado</Link>
                        <Link to="/category/Cabeza" className="nav-link">Cabeza</Link>
                        <Link to="/cart" classNameName="nav-item"><CardWidget /></Link>
              </ul>
            </div>
          </div>
        </nav>

  </div>
</div>

            </>
     )
}

export default navBar