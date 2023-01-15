import React, {useState} from "react";
import "./button.css" // Al importar el css siempre con la extension .css

function Button (props) {
    const [colorState, setColorState ] = useState("black") // Esta es una funcio que modifica la variable let styleButton - ("orange") El valor por defecto del estado

    // Aplicar estilos alos botones mendiate props
    let styleButton = {
        // padding: props.padding,
        backgroundColor: colorState,
    }

    function handleClick(event) {
        console.log("evento click");
        setColorState("red"); // Para ejecutar el estado del evento necesitamos el hook State

    }

    return (
        <button onClick={ handleClick } 
        style={styleButton} className="btn">{ props.children }
        </button>
    )
}

export default Button
// Crear carpeta para cada componente y ahi crear un archivo css del compo