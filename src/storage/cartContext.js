import { createContext, useState } from "react";

export const cartContext = createContext( {cart: []});


function CartProvider(props) {
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
    // Operador spread ...
    //Array.map

/*      Opcion A.
    let newCart = [...cart]
    newCart.push(item);
    setCart(newCart)

     Opcion B
    setCart([...cart, item]); */
/*     function clear() {
        //
      }
    
      function getTotalItemsInCart() {
        // reduce 👌
    
        let total = 5;
        // por Cada producto(for, forEach) -> total += producto.count
        return cart.length;
      }

      function getTotalPriceInCart() {
        return 1000;
      }

    function removeItem(itemid) {
        // splice + findIndex
        let removed = cart.find( (prod) => prod.id === itemid)
        let removeItemCard = cart.indexOf(removed);
        cart.splice(removeItemCard, 1)
      } */
    

    

}    

    return(
        <cartContext.Provider value={ { cart, test, addToCart } }>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }