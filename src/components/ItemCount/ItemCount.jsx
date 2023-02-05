import { useState } from "react";
import Button from "../Button/Button";


function ItemCount({ onAddToCart }) {
   const [ count, setCount] = useState(0);
//    let stock = 5;

    function handleAdd() {
        setCount( count +1 )
    }
    function handleSubs() {
        setCount( count -1 )
    }
    return(
        <>
            <div className="d-flex justify-content-center align-items-center my-4">
                <Button disabled={ count === 0 } onClick={ handleSubs }  className="btn btn-warning">-</Button>
                    <p className="mx-4">{count}</p>
                <Button  onClick={ handleAdd } className="btn-count">+</Button>
            </div>
            <div className="item-count-cart mb-4">
                <Button onClick={()=> onAddToCart(count)} >Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount;

