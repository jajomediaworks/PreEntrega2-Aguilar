import "./card.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom"
// import ItemCount from "./ItemCount";

function Item (props) {

    const { id, imgurl, title, stock, price, category, discount, } = props.product

    return ( // Buena practica el return con parentisis - no se puede retornar 2 elementos, solo puedo tener un padre
    // <> Fragmento o etiqueta vacia para agrupar elementos para que ebn el html no haya div innecesarios
        <> 
            <div className="card-product">
                <p>{ title }</p>
                <img width={300}   src={imgurl} alt={title} />
                <h3>$ { price }</h3>
                {
                    discount ? <span>{discount} %OFF</span> : ""
                }
                <div>Cantidad disponible { stock }</div>
                {/* Rendering condicional con operador AND && */}
                { stock <=2 && <small>Últimos disponibles</small> } <br />
                <small> SKU { id }</small>
                <span>Categoria: { category }</span>
                <Link to={`/detalle/${id}`}><Button padding=".75rem">Ver más</Button></Link> 
            </div>
        </>
    );
}

export default Item; // Todo componente debe importarse y exportarse