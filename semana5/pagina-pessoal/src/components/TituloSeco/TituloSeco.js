import React from 'react'
import './TituloSeco.css'

function TituloSeco(props){
    return(
        <div className="titulo-seco">
            <h2>{props.texto}</h2>
        </div>
    );
}


export default TituloSeco