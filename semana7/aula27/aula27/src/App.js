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

const Container = styled.div`
  border: 2px white solid;
  border-radius: 20px;
  padding: 60px;
  background-color: #2F4F4F;

`;

const StiledSelect = styled.select`
  height: 30px;
  width: 90px;
  font-size: 15px;
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
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: lightblue;
  color: black;
`;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numberOfPeople: "",
      sortedActivity: undefined
    };
  };

  componentDidMount(){
    this.getActivityUsingNumberOfPeople();
  };

  changeNumberOfPeople = (event) => {
    if(event.target.value !== ""){
    this.setState({numberOfPeople: event.target.value});
    console.log("mudou o numberOfPeople: ", event.target.value)
    }else{
      this.setState({numberOfPeople: ""});
    }
  };
  
  

  getActivityUsingNumberOfPeople = () => {
    if(this.state.numberOfPeople !== ""){
      axios.get(`http://www.boredapi.com/api/activity?participants=${this.state.numberOfPeople}`)
      .then((response) => {
        console.log("atividade sorteada com o número de participantes: ", response.data);
        this.setState({ sortedActivity: response.data});
      })
    }else{ a
      console.log("Não definido o número de participantes.");
      return alert("Escolha o número de participantes. ");
    }
  };

  
  render(){
    return (
      <AppContainer>
        <Container>
          <h1>Atividades para a quarentena</h1>
          <h3>Escolha o número de participantes:</h3>
          <p>*Devido as restrições ao contato social limitamos as atividades
            até o máximo de dois participantes.</p>
          <StiledSelect onChange={this.changeNumberOfPeople}>
            <option value="">Nenhum</option>
            <option value="1">1</option>
            <option value="2">2</option>
            
          </StiledSelect>
          <h3>Clique no botão e sorteie uma atividade!</h3>
          <ButtonSorted onClick={this.getActivityUsingNumberOfPeople}>Sortear</ButtonSorted>
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
        </Container>
      </AppContainer>
    );
  }
}

export default App;
