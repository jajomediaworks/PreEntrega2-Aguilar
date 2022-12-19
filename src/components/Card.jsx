import Button from "./Button/Button";

function Card (props) {

    return ( // Buena practica el return con parentisis - no se puede retornar 2 elementos, solo puedo tener un padre
    // <> Fragmento o etiqueta vacia para agrupar elementos para que ebn el html no haya div innecesarios
        <> 
            <div className="flex-column">
                <h3>{ props.title }</h3>
                <br/>
                <img width="220px" src={props.img} alt={props.title} />
                <h3>$ { props.price }</h3>
                <small>{ props.detail }</small>
                <Button padding=".75rem" text="Hola desde props" />
            </div>
        </>
    );
}

export default Card; // Todo componente debe importarse y exportarse