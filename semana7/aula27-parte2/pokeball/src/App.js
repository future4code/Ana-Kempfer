import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
//import logo from './components/Pokemon-logo.jpg';



const AppContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: black;
`;
const ContainerInfoPokemon = styled.div`
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
  margin: 50px;
`;

const ContainerHeader = styled.div`
  border-bottom: 1px black solid;
  height: 4em;
`;

function App() {
  return (
    <AppContainer>
      <ContainerHeader>
        header
      </ContainerHeader>
      <div>
        <ContainerInfoPokemon>
          Container de informação dos pokemons
        </ContainerInfoPokemon>
      </div>
      
    </AppContainer>
  );
}

export default App;
