import React, { useEffect, useState, useContext,  } from "react"
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/mockService"
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer() {

    // const [ productBarber, setProductBarber] = useState([]);
    const [ productBarber, setProductBarber] = useState( { title: "loading", price: "--,--" } );

    let params = useParams(); // Siempre se tiene que ejecutar y ubicarse en el cuerpo del componente
    const { addToCart } = useContext(cartContext); // no se puede colocar un hook dentro de una funtion

    function handleAddToCart(count) {
        const barberAndCount = { ...productBarber, count: count}
        addToCart(barberAndCount);
    }

  
        useEffect( () => {
            getProduct(params.itemid)
                .then( (respuesta) => {
                    setProductBarber(respuesta);
                })
                .catch((error) => alert(error));
        }, []);

        return(
            <>
            <ItemDetail  
            onAddToCart={handleAddToCart}
            title={productBarber.title} 
            imgurl={productBarber.imgurl}
            price={productBarber.price}
            amount={productBarber.amount}
            id={productBarber.id}
            category={productBarber.category}
            detail={productBarber.detail}
             / >
            
            </>
        );
   
}

export default ItemDetailContainer;