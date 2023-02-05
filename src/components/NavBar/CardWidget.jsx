import React, {  useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CardWidget(){
    const context = useContext(cartContext);

    return(
        <>
        <img width={20} src="/img/cart.svg" alt="Carrito" />
        { context.getTotalItemsInCart()  > 0 ? <span className="cart-icon">{ context.getTotalItemsInCart() }</span> : null }
        {/* // Utilizar codicional ternario */}
        </>
    )
}

export default CardWidget;