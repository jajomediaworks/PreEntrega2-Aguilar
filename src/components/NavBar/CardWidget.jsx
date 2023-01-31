import React, {  useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./navbar.css";

function CardWidget(){
    const contexto = useContext(cartContext);

    return(
        <>
        <img width={20} src="/img/cart.svg" alt="Carrito" />
        <span className="cart-icon">{ contexto.getTotalItemsInCart() }</span>
        {/* // Utilizar codicional ternario */}
        </>
    )
}

export default CardWidget;