import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import Item from "./Item";
import { getProductByCategory } from "../../services/firebase";
import { getProducts } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./alert.css"

function ItemListContainer(props) {
    const [ barber, setBarber] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const [ alertText, setAlertText] = useState()
    let { categoryid } = useParams() // Destructuring

//
    useEffect(()=> {
      if (!categoryid) {
        getProducts()
          .then((respuesta) => {
            setBarber(respuesta);
          })
          .catch((error) => {
            setAlertText({ 
              text: "No cargaron los productos", 
              type: "success"} 
              ) // hacer un context para mensajes de error, notificaciones
          } )
          .finally( () => setLoading(false))
      } else{
          getProductByCategory(categoryid)
          .then((respuesta) => {
            setBarber(respuesta);
          })
          .catch((error) => alert(error))
          .finally( () => setLoading(false))

      }
        //return ( ()=> console.log("Desmontamos el Item") )  Desmonto el componente
    }, [categoryid]); // Ya que el componenete se renderiza una sola vez necesitamos pegarlo a la variable para que pueda renderizarse cada vez que accedo a la categoria
    
    // 2. return con if ternario / early return
    if (isLoading) {
        return <Loader color="orange" />
    } else{
      return(
        <>
        { alertText && <div className={`alert alert-${alertText.type}`}>{alertText.text}</div> }
        <div className="card-products">
            { barber.map( (itemIterado)=> {
                    return <Item key={itemIterado.id} product={itemIterado} />
            } ) }
        </div>
      </> 
      )
    }
    // 1. Operador ternario
/*     return(
        <>
            { isLoading ? (
                <h3>Cargando...</h3>
            ):(
              <div className="card-products">
                  { barber.map( (itemIterado)=> {
                          return <Item key={itemIterado.id} product={itemIterado} />
                  } ) }
              </div>
            )
          } 
                
        </>
    ) */
}

export default ItemListContainer;  