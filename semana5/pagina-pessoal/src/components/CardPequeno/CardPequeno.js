import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="card-pequeno">
            <img src={props.imagem}/>
            <h4>{props.textoEmNegrito}</h4>
        </div>
    );

}



export default CardPequeno