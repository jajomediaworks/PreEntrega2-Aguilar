import React from "react"
import "./loader.css"
import { Pulsar } from '@uiball/loaders'


function Loader() {
    // https://uiball.com/loaders/
    return <Pulsar 
    size={40}
    speed={1.75} 
    color="black" 
   />
    
}

export default Loader

