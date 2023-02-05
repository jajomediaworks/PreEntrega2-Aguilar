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


        <userContext.Provider value={ { user, logedin, test } }>
            {props.children} 
        </userContext.Provider>
    )
}

export { UserProvider }