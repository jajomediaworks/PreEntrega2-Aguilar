
import React, { useState } from "react";
import { useCartContext } from "../../storage/cartContext";

import { createOrder } from "../../services/firebase";
import FormCheckout from "../FormCheckout/FormCheckout";



function Form() {
    const [orderId, setOrderId] = useState();

    const {cart, getTotalPriceInCart, clearCart} = useCartContext();   


    function handleCheckout(event, userData) {
        event.preventDefault(); 
        // const items = cart.map( item => ( { id: item.id, price: item.price, count: item.count, title: item.title} ) )  // ( { retornar un objeto del carrito} )
       // ejemplo destructuring 
        const items = cart.map( ({id, price, title, count}) => ( { id, price, title, count} ) ) 
        const order = { // Datos del usuario
            buyer: userData,
            items: items,
            total: getTotalPriceInCart(),
            date: new Date(),
           
        };
        console.table(order);
        clearCart();
        async function sendOrder() {
            let id = await createOrder(order);
            setOrderId(id);
            
          }
          sendOrder();
        }
      
        if (orderId)
          return (
            <div>
              <h1>Gracias por tu compra</h1>
              <p>El id de tu compra {orderId}</p>
            </div>
          );


    return (
        <FormCheckout  onCheckout={handleCheckout}  />

    )
}

export default Form