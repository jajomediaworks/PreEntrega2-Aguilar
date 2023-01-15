import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../services/mockService"

function ItemDetailContainer() {
    const [ productBarber, setProductBarber] = useState([]);
    let params = useParams(); // Siempre se tiene que ejecutar y ubicarse en el cuerpo del componente
  
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