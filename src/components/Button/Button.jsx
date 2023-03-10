import React, {useState} from "react";
import "./button.css" // Al importar el css siempre con la extension .css

function Button (props) {
    const [colorState ] = useState() // Esta es una funcio que modifica la variable let styleButton - ("orange") El valor por defecto del estado

    // Aplicar estilos alos botones mendiate props
    let styleButton = {
        // padding: props.padding,
        backgroundColor: colorState,
    }


    return (
        <button onClick={props.onClick}   style={styleButton} className="btn-edit">{ props.children } </button>
    )
}

export default Button
// Crear carpeta para cada componente y ahi crear un archivo css del compo