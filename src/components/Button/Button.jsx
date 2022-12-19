import "./button.css" // Al importar el css siempre con la extension .css

function Button (props) {
    // Aplicar estilos alos botones mendiate props
    const styleButton = {
        padding: props.padding,
        backgroundColor: props.color,
    }

    return (<button style={styleButton} className="btn">{ props.text }</button>)
}

export default Button
// Crear carpeta para cada componente y ahi crear un archivo css del compo