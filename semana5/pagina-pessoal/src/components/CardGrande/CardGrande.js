import React from 'react'
import './CardGrande.css'


function CardGrande(props){
    return(
        <div className="card-grande">
            <div className="container-da-imagem">
                <img src={props.imagem}/>
            </div>
            <div className="container-do-texto">
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
        </div>
    );
}

// CardGrande.propTypes = {
//     titulo: PropTypes.
// }

export default CardGrande