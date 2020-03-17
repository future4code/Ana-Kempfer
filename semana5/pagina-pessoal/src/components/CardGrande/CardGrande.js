import React from 'react'
import './CardGrande.css'


function CardGrande(props){
    return(
        <div className="card-grande">
            <img src={props.imagem}/>
            <h3>{props.textonegrito}</h3>
            <p>{props.textoUmaLinha}</p>
        </div>
    );
}

// CardGrande.propTypes = {
//     titulo: PropTypes.
// }

export default CardGrande