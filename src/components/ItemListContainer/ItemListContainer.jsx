import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import Item from "./Item";
import obtenerProductos from "../../services/mockService";

function ItemListContainer(props) {
    const [ barber, setBarber] = useState([]);

    useEffect(()=> {
      obtenerProductos()
        .then((respuesta) => {
          setBarber(respuesta);
        })
        .catch((error) => alert(error));
        //return ( ()=> console.log("Desmontamos el Item") )  Desmonto el componente
    }, []);
    return(
        <>
                <h1>{ props.title }</h1>
                <div className="card-products">
                    { barber.map( (itemIterado)=> {
                            return <Item key={itemIterado.id} id={itemIterado.id} product={itemIterado} />
                    } ) }
                </div>
                
        </>
    )
}

export default ItemListContainer;  