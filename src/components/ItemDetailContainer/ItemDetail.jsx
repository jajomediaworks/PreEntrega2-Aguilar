import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./detail.css"

function ItemDetail({ id, detail, imgurl, title, stock, category, price, onAddToCart, isInCart }) {


    return(
        <> 
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="box-body">
                        <h1 className="my-4 text-white text-center">BARBER SHOP</h1>
                        <div className="d-flex justify-content-center">
                                <div class="border-h"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 col-lg-6">
                                <div className="card">
                                    <img  src={imgurl} alt={title} className="card-img-top rounded" />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="card">
                                    <div className="card-body text-start">
                                        <h2 className="card-title">{ title }</h2>
                                        <p className="my-2"><small>$ { price }</small></p>
                                        <p>Cantidad disponible <small className="text-warning">{ stock }</small></p>
                                        <small><b>SKU</b> { id }</small> <br />
                                        <small>Categoria: { category }</small>
                                        <hr />
                                        <div className="text-center my-5">
                                                        {/* De forma condicional ocultar el itemcard 1:52 */}
                                                        { isInCart ? (
                                                        <Link to="/cart">
                                                            <Button>Ir al Carrito</Button>
                                                        </Link>
                                                        ) : (<ItemCount onAddToCart={onAddToCart} />) }
                                        </div>
                                        <p>{ detail }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ItemDetail;