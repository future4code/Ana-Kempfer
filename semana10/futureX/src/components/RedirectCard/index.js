import React from 'react';
import styled from "styled-components";


const ContainerCard = styled.div`
    position: absolute;
    width: 300px;
    height: 280px;
    top: 35vh;
    right: 50vw;
    :nth-of-type(2) {
        top: 35vh;
        left: 50vw;
    }
    text-align: bottom;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid #1de8b5;
    border-radius: 100px;
    cursor: pointer;
    :hover {
        box-shadow: 0 0 70px #1de8b5;
    }
    :active {
        box-shadow: 0 0px 70px #1de8b5;
    }
`  

const BackgroundImg = styled.img`
    opacity: 0.6;
    width: 70%;
    height: 70%;
    border-radius: 0px;
`

const Title = styled.h3`
    color: white;
    position: absolute;
    bottom: 0;
    font-size: 40pt;
    z-index: 9;
`

function RedirectCard(props) {
    return (
        <ContainerCard onClick={props.onClick}>
            <Title>{props.title}</Title>
            <BackgroundImg src={props.img}/>
        </ContainerCard>
    );
}


export default RedirectCard;