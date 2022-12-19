import "./ItemListContainer.css"

function ItemListContainer(props) {
    return(
        <>
            <div className="box-content">
                    <h1>{ props.title}</h1>
            </div>
        </>
    )
}

export default ItemListContainer;