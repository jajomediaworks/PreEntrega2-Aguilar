import "./card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom"
// import ItemCount from "./ItemCount";

function Item (props) {

    const { id, imgurl, title, amount, price, category } = props.product

    return ( // Buena practica el return con parentisis - no se puede retornar 2 elementos, solo puedo tener un padre
    // <> Fragmento o etiqueta vacia para agrupar elementos para que ebn el html no haya div innecesarios
        <> 
            <div className="card-product">
                <p>{ title }</p>
                <img width={300}   src={imgurl} alt={title} />
                <h3>$ { price }</h3>
                <h4>Cantidad disponible { amount }</h4>
                <small> SKU { id }</small>
                <span>Categoria: { category }</span>
                <hr />`
                <Link to={`/detalle/${id}`}><Button padding=".75rem">Ver más</Button></Link> 
            </div>
        </>
    );
}

export default Item; // Todo componente debe importarse y exportarse