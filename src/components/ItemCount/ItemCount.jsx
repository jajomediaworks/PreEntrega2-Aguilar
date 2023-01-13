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
    }
    return(
        <>
            <div style={styleCount}>
                <button  disabled={ count === props.stock } onClick={ handleAdd } className="btn">+</button>
                    <p>{count}</p>
                <button disabled={ count === 0 } onClick={ handleSubs }  className="btn">-</button>
            </div>
        </>
    )
}

export default ItemCount;

