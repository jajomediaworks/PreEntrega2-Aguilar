import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import Item from "./Item";
import obtenerProductos, { getProductByCategory } from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [ barber, setBarber] = useState([]);
    let { categoryid } = useParams() // Destructuring


    useEffect(()=> {
      if (!categoryid) {
        obtenerProductos()
          .then((respuesta) => {
            setBarber(respuesta);
          })
          .catch((error) => alert(error));
      } else{
          getProductByCategory(categoryid)
          .then((respuesta) => {
            setBarber(respuesta);
          })
          .catch((error) => alert(error));
      }
        //return ( ()=> console.log("Desmontamos el Item") )  Desmonto el componente
    }, [categoryid]); // Ya que el componenete se renderiza una sola vez necesitamos pegarlo a la variable para que pueda renderizarse cada vez que accedo a la categoria
    return(
        <>
                <h1>{ props.title }</h1>
                <div className="card-products">
                    { barber.map( (itemIterado)=> {
                            return <Item key={itemIterado.id} product={itemIterado} />
                    } ) }
                </div>
                
        </>
    )
}

export default ItemListContainer;  