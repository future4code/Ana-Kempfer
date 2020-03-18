import React from 'react'
import './BotaoComImagem.css'

function BotaoComImagem(props){
    return(
        <div className="botao-com-imagem">
            <img src={props.imagem}/>
            <p>{props.texto}</p>
        </div>
    );
}

export default BotaoComImagem