import React, {  useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CardWidget(){
    const context = useContext(cartContext);

    return(
        <>
        <img width={20} src="/img/cart.svg" alt="Carrito" />
        <div className="countCart">{ context.getTotalItemsInCart()  > 0 ? <span><b>{ context.getTotalItemsInCart() }</b></span> : null }</div> 
        {/* // Utilizar codicional ternario */}
        </>
    )
}

export default CardWidget;