import ItemCount from "../ItemCount/ItemCount";
import "./detail.css"

function ItemDetail({ id, detail, imgurl, title, amount, category, price }) {

    function handleAddToCart(count) {
        console.log(`Agregaste al carrito ${count} unidades del producto ${title}`);
    }

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
                <ItemCount onAddToCart={handleAddToCart} />
            </div>
        </div>
    </>
    )
}

export default ItemDetail;