import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { getProduct } from "../../services/mockService"
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [ productBarber, setProductBarber] = useState([]);
    let params = useParams(); // Siempre se tiene que ejecutar y ubicarse en el cuerpo del componente
    console.log(params);
  
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
            detail={productBarber.detail}
             / >
            <ItemCount stock={7}  />
            </>
        );
   
}

export default ItemDetailContainer;