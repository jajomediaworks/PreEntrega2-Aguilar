import "./detail.css"

function ItemDetail({ id, detail, imgurl, title, amount, category, price }) {
    return(
        <> 
        <div className="item-product">
            <p>{ title }</p>
            <img width={300}   src={imgurl} alt={title} />
            <h3>$ { price }</h3>
            <h4>Cantidad disponible { amount }</h4>
            <small> SKU { id }</small>
            <p>{ detail }</p>
            <hr />
        </div>
    </>
    )
}

export default ItemDetail;