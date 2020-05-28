import React from 'react';
import styled from "styled-components";


const ContainerLoginCard = styled.div`
    position: absolute;
    background-color: rgba(29,232,181);
    width: 300px;
    height: 200px;
    box-shadow: 0 0px 50px rgba(0, 0, 0, 0.8);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: ##0d0d0c;
    top: 35%;
    left: 40.5%;    
`  


function LoginCard(props) {
    return (
        <ContainerLoginCard>
            {props.children}
        </ContainerLoginCard>
    );
}


export default LoginCard;