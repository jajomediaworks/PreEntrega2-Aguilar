import React, { useState } from "react";
import { useCartContext } from "../../storage/cartContext";
// import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import Button from "../Button/Button";
import FormCheckout from "../FormCheckout/FormCheckout";
import "./cart-container.css"


function CartContainer() {
    const [orderId, setOrderId] = useState();

    const {cart, removeItem, getTotalPriceInCart } = useCartContext();   
    // const navigate = useNavigate();

    function handleCheckout(event, userData) {
        event.preventDefault(); 
        // const items = cart.map( item => ( { id: item.id, price: item.price, count: item.count, title: item.title} ) )  // ( { retornar un objeto del carrito} )
       // ejemplo destructuring 
        const items = cart.map( ({id, price, title, count}) => ( { id, price, title, count} ) ) 
        const order = { // Datos del usuario
            buyer: userData,
            items: items,
            total: getTotalPriceInCart(),
            date: new Date()
        };
        console.table(order);
        
        // createOrder(order).then((id) =>
        //     alert(`Compraste x item, tu id es: ${id}`)
        // );

        // createOrder(order).then((id) => {
        //     Swal.fire({
        //         title: 'Gracias por tu compra',
        //         text: `estye es tu ticket id: ${id}`,
        //         icon: 'success',
        //         confirmButtonText: 'Cool'

        //     })
        // });

        // opcion Redirecionar
        // createOrder(order).then( id => {
        //     navigate(`/thank-you/${id}`)
        // } )
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


    return(
            <>
                <div className="cart-container">
                    <div>
                            <h1>Carrito de compra</h1>
                            <table cellPadding={0} cellSpacing={0} className="cart-table">
                            <thead>
                                <tr>
                                    <th width={120}>Producto</th>
                                    <th>Titulo</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Remover</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((itemInCart) => (
                                <tr>
                                    <td><img width={100} src={itemInCart.imgurl} alt={itemInCart.title} /></td>
                                    <td>{itemInCart.title}</td>
                                    <td>{itemInCart.price}</td>
                                    <td>{itemInCart.count}</td>
                                    <td><Button onClick={ () => removeItem(itemInCart)} color="red">x</Button></td>
                                    <td> $ --</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>  
                                <p>El total de tu compra es de: ${getTotalPriceInCart()}</p>
                                <Button>Vaciar Carrito</Button>
                                <FormCheckout onCheckout={handleCheckout} />
                </div>
                
                </div>        

            </>
    );
}

export default CartContainer;