import React from 'react';
import styled from "styled-components";


const ContainerFormCard = styled.div`
    position: absolute;
    background-color: #5F4B8B;
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