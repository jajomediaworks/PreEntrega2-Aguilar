import { useCartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./cart-container.css"


function CartContainer() {

    const {cart, removeItem, getTotalPriceInCart, clearCart } = useCartContext();   
    // const navigate = useNavigate();




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
                                    {/* <th>Total</th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((itemInCart) => (
                                <tr key={itemInCart.id}>
                                    <td><img width={100} src={itemInCart.imgurl} alt={itemInCart.title} /></td>
                                    <td>{itemInCart.title}</td>
                                    <td>{itemInCart.price}</td>
                                    <td>{itemInCart.count}</td>
                                    <td><Button onClick={ () => removeItem(itemInCart.id)} color="red">x</Button></td>
                                    {/* <td><Button onClick={removeItem} >x</Button></td> */}
                                    {/* <td>${getTotalCant()}</td> */}
                                </tr>
                            ))}
                            </tbody>
                        </table>  
                                <p>El total de tu compra es de: ${getTotalPriceInCart()}</p>
                                <Button onClick={clearCart}>Vaciar Carrito</Button>
                                <Button> <Link to="/form">Finalizar la compra</Link></Button>
                </div>
                
                </div>        

            </>
    );
}

export default CartContainer;