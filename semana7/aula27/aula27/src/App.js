import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1vmin);
  color: white;
`;

const StiledSelect = styled.select`
  height: 30px;
  width: 90px;
`;

const ButtonSorted = styled.button`
  height: 30px;
  width: 80px;
  font-size: 20px;
  border: none;
  background-color: lightgreen;
`;

const ActivityContainer = styled.div`
  border: 2px white solid;
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
  background-color: lightblue;
  color: black;
`;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numberOfPeople: "Nenhum" ,
      sortedActivity: undefined
    };
  }

  componentDidMount(){
    this.getActivity();
  }

  getActivity = () =>{
    axios.get('http://www.boredapi.com/api/activity/')
    .then((response) => {
      console.log(response.data);
      this.setState({ sortedActivity: response.data});
    });
    
  };



  render(){
    return (
      <AppContainer>
        <h1>Atividades para a quarentena</h1>
        <h3>Escolha o número de participantes:</h3>
        <p>*Devido as restrições ao contato social, limitamos as atividades
          ao máximo de dois participantes.</p>
        <StiledSelect>
          <option>Nenhum</option>
          <option>1</option>
          <option>2</option>
          
        </StiledSelect>
        <h3>Clique no botão e sorteie uma atividade!</h3>
        <ButtonSorted onClick={this.getActivity}>Sortear</ButtonSorted>
        {this.state.sortedActivity && (
          <ActivityContainer>
            <p>
              <strong>Nome: </strong>
              {this.state.sortedActivity.activity}
            </p>
            <p>
              <strong>Acessibilidade: </strong>
              {this.state.sortedActivity.accessibility}
            </p>
            <p>
              <strong>Tipo: </strong>
              {this.state.sortedActivity.type}
            </p>
            <p>
              <strong>Participantes: </strong>
              {this.state.sortedActivity.participants}
            </p>
            <p>
              <strong>Preço: </strong>
              {this.state.sortedActivity.price}
            </p>
          </ActivityContainer>
        )}
      </AppContainer>
    );
  }
}

export default App;
