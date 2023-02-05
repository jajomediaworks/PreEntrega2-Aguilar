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
    }, [categoryid]); 
    

    if (isLoading) {
        return <div className="d-flex justify-content-center"><Loader color="orange" /></div> 
    } else{
      return(
        <>
        { alertText && <div className={`alert alert-${alertText.type}`}>{alertText.text}</div> }
        <div className="container mb-big">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center mb-big">
                  <h1>PRODUCTOS</h1>
                </div>
                <div className="row">
                        { barber.map( (itemIterado)=> {
                            return <Item key={itemIterado.id} product={itemIterado} />
                        })}
                </div>
              </div>
            </div>
        </div>
      </> 
      )
    }
}

export default ItemListContainer;  