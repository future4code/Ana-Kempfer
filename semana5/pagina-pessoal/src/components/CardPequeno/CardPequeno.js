import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="card-pequeno">
            <img src="{props.imagem}"/>
            <label><strong>{props.textoEmNegrito}</strong></label>
        </div>
    );

}



export default CardPequeno