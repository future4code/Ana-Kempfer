import React from 'react';
import styled from "styled-components";

const ContainerApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <ContainerApp>
     Planner 2020
    </ContainerApp>
  );
}

export default App;
