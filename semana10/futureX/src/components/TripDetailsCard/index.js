import React from 'react';
import styled from "styled-components";


const ContainerTripDetailCard = styled.div`
    background-color: rgba(29,232,181);
    width: 60%;
    height: auto;
    border-radius: 20px;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`  


function TripDetailCard(props) {
    return (
        <ContainerTripDetailCard>
            {props.children}
        </ContainerTripDetailCard>
    );
}


export default TripDetailCard;