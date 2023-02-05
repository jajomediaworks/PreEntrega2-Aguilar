import Button from "../Button/Button";
import { Link } from "react-router-dom"

function Item (props) {

    const { id, imgurl, title, stock, price, category, discount, } = props.product

    return ( 
        <> 
            <div className="col-md-4">
                <div className="box-body">
                        <div className="card mb-3">
                                <img className="card-img-top" width={300}   src={imgurl} alt={title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{ title }</h5>
                                    <p className="my-3">$ { price }
                                        {
                                            discount ? <span>{discount} <small className="text-warning">%OFF</small> </span> : ""
                                        }
                                    </p>
                                    <div className="d-flex mb-3">
                                       <small className="me-2">Cantidad disponible { stock }</small>  <div> { stock <=2 && <small className="badge text-bg-dark">Últimos disponibles</small> } </div>
                                    </div>
                                     {/* Rendering condicional con operador AND && */}
                                    
                                    <small> SKU { id }</small> 
                                    <small>Categoria: <b>{ category }</b></small> 
                                    <hr />
                                    <Link to={`/detalle/${id}`}><Button className="btn-edit boton-agregar ">Ver Producto</Button></Link> 
                                </div>
                        </div>
                </div> 
            </div>
        </>
    );
}

export default Item; 