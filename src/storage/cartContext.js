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
    function getTotalPriceCant(items) {
            // let totalPriceCantCart = cart.reduce((acc, product) => acc + product.count * product.price, 0);
            // return totalPriceCantCart;
    }
    function getTotalItemsInCart() {
        // reduce 👌
        

        let total = 5;
        // por Cada producto(for, forEach) -> total += producto.count
        cart.forEach(element => {
            
        });
        return cart.length;
    } 

    function getTotalPriceInCart() {
        let totalItemCart = cart.reduce((acc, prod) => acc + prod.count * prod.price, 0)
        return totalItemCart;
    }

     function removeItem(itemid) {

        let index = cart.findIndex((idItem) => idItem.id === itemid);
        cart.splice(index, -1)
        return console.log(index, "-----preuba")
        // splice + findIndex
/*         let removed = cart.find( (prod) => prod.id === itemid)
        let removeItemCard = cart.indexOf(removed);
        cart.splice(removeItemCard, 0)
        return console.log(removeItemCard, "-------");  */
      } 
 
    
    return(
        <cartContext.Provider value={ { cart, test, addToCart, getTotalItemsInCart, getTotalPriceInCart,  removeItem, getTotalPriceCant} }>
            {props.children}
        </cartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(cartContext);
  }