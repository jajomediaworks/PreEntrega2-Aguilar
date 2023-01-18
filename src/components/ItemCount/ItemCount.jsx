import { useState } from "react";
import Button from "../Button/Button";


function ItemCount(props) {
   const [ count, setCount] = useState(1);
//    let stock = 5;

    function handleAdd(params) {
        setCount( count +1 )
    }
    function handleSubs(params) {
        setCount( count -1 )
    }

    const styleCount = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 auto",
        padding: "6px",
        width: "40%",
        border: "1px solid #000",
    }
    return(
        <>
            <div style={styleCount}>
                <Button disabled={ count === 0 } onClick={ handleSubs }  className="btn-count">-</Button>
                    <p>{count}</p>
                <Button  disabled={ count === props.stock } onClick={ handleAdd } className="btn-count">+</Button>
            </div>
            <div className="item-count-cart">
                <Button className="btn">Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount;

