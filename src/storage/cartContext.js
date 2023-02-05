import { createContext, useState, useContext} from "react";

export const cartContext = createContext( {cart: []});


export function CartProvider(props) {
    const [ cart, setCart ] = useState([]);
    const test = () => console.log("test");

    // Modificar el estadio y setearlo setCart
function addToCart(item) {
    let isInCart = cart.findIndex( itemIncArt => itemIncArt.id === item.id )// por cada item en el carrito itemInCart buscamos un item que tenga un id que sea === al item que estoy agregando item.id
    let newCart = cart.map((item) => item);
        // Option C */
    if (isInCart !== -1 ) {
        // Actualizar la cantidad
        alert("Ya se encuentra en el en el carrito")
    } else{
        newCart.push(item);
        setCart(newCart);
    }

}   

    // Operador spread ...
    //Array.map

/*      Opcion A.
    let newCart = [...cart]
    newCart.push(item);
    setCart(newCart)
     Opcion B
    setCart([...cart, item]); */


/*     function removeItem(itemid) {

    } */

/*     function clear() {
        //
    }
*/
    function getTotalCant(items) {
        let totalPrice = 0;
        cart.forEach(product => {
            totalPrice += ( product.count * product.price)
        })

        return totalPrice
            // let totalPriceCantCart = cart.reduce((acc, product) => acc + product.count * product.price, 0);
            // return totalPriceCantCart;
    }
    function getTotalItemsInCart() {
        // reduce 👌
        

        let total = 0;
        // por Cada producto(for, forEach) -> total += producto.count
        cart.forEach(prod => {
            total += prod.count
        });
        return total;
    } 

    function getTotalPriceInCart() {
        let totalItemCart = cart.reduce((acc, prod) => acc + prod.count * prod.price, 0)
        return totalItemCart;
    }

     function removeItem(id) {
            let cartDelete = [...cart]
            cartDelete = cartDelete.filter(product => product.id !== id)
            setCart(cartDelete)
      } 

      function clearCart() {
        let cartToDelete = [...cart]
        cartToDelete.length = 0
        setCart(cartToDelete)
      }

 
    
    return(
        <cartContext.Provider value={ { cart, test, addToCart, getTotalItemsInCart, getTotalPriceInCart,  removeItem, getTotalCant, clearCart} }>
            {props.children}
        </cartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(cartContext);
  }