import { createContext } from 'react';

//1 Crear context
export const userContext = createContext( { user: "Anonimo" } );

// 2. Incializar el provider

function UserProvider(props) {

    const user = "Santiago";
    const logedin = true;
    
    function test() {
        console.log("test"); // Ejecutaremos esta funtion desde el NavBar
    }

    return (

        //3. eL PROVIDER DEL COTEXT CON value personalizado
        // Basicamente con {props.children} es el componente padre y los children es todo aquello que este dentro de <UserProvider> en App.js
        <userContext.Provider value={ { user, logedin, test } }>
            {/* 4. Renderizamos los children */}
            {props.children} 

        </userContext.Provider>
    )
}

export { UserProvider }