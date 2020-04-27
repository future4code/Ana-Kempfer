import React from 'react';
import styled from "styled-components";


const ContainerTripCard = styled.div`
    background-color: rgba(29,232,181);
    width: 90%;
    height: 90%;
    gap: 20px;
    border-radius: 20px;
    color: black;
    padding: 20px;
    margin: 30px
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`  


function TripCard(props) {
    return (
        <ContainerTripCard>
            {props.children}
        </ContainerTripCard>
    );
}


export default TripCard;