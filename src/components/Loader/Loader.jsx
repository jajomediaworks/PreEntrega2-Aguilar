import React from "react"
import "./loader.css"
import { Pulsar } from '@uiball/loaders'


function Loader() {
    // https://uiball.com/loaders/
    return <Pulsar 
    size={90}
    speed={1.75} 
    color="orange" 
   />
    
}

export default Loader

