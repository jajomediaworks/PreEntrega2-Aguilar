import { useState } from "react";


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
                <button disabled={ count === 0 } onClick={ handleSubs }  className="btn-count">-</button>
                    <p>{count}</p>
                <button  disabled={ count === props.stock } onClick={ handleAdd } className="btn-count">+</button>

            </div>
        </>
    )
}

export default ItemCount;

