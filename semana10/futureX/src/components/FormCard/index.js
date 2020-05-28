import React from 'react';
import styled from "styled-components";


const ContainerFormCard = styled.div`
    position: absolute;
    background-color: rgba(29,232,181);
    width: 30vw;
    height: 80vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: initial;
    border-radius: 20px;
    color: #FEE123;
    top: 20%;
    left: 38%;
     
`  


function FormCard(props) {
    return (
        <ContainerFormCard>
            {props.children}
        </ContainerFormCard>
    );
}


export default FormCard;