import React from 'react';
import styled from 'styled-components';

const ContainerApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const ContainerInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 8px;
  border: 2px grey solid;
`;
const ContainerButton = styled.button`
  height: 40px;
  width: 300px;
  border-radius: 4px;
  margin: 6px;
`;
const ContainerTarefas = styled.div`
  width: 300px;
  height: 200px;
  border: 2px grey solid;
  border-radius: 4px;
  margin: 20px;
`;

function App() {
  return (
    <ContainerApp>
      <ContainerInput 
      placeholder="Digite uma nova tarefa."
      />
      <ContainerButton>Adicionar tarefa</ContainerButton>
      <ContainerTarefas>

      </ContainerTarefas>
      <ContainerButton>Marcar todas como completas</ContainerButton>
      <ContainerButton>Todas</ContainerButton>
      <ContainerButton>Pendentes</ContainerButton>
      <ContainerButton>Completas</ContainerButton>
      <ContainerButton>Excluir todas</ContainerButton>
      
    </ContainerApp>
  );
}

export default App;
