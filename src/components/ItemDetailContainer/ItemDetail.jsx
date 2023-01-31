import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./detail.css"

function ItemDetail({ id, detail, imgurl, title, amount, category, price, onAddToCart, isInCart }) {
    // const [ countInCart, setCountInCart ] = useState();



    return(
        <> 
        <div className="content-product">
            <div className="product-img">
                <img width={600}   src={imgurl} alt={title} />
            </div>
            <div className="product-detail">
            <p>{ title }</p>
                <h3>$ { price }</h3>
                <h4>Cantidad disponible { amount }</h4>
                <small> SKU { id }</small>
                <small>Categoria: { category }</small>
                <p>{ detail }</p>
                <hr />
                {/* De forma condicional ocultar el itemcard 1:52 */}
                { isInCart ? (
                <Link to="/cart">
                    <Button>Ir al carrito</Button>
                </Link>
                ) : (<ItemCount onAddToCart={onAddToCart} />) }
                
            </div>
        </div>
    </>
    )
}

export default ItemDetail;