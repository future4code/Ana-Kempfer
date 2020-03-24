import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Dormir cedo',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Tomar remédio',
          completa: true
        }
      ],
      inputValue: '',
      filter: ''
    }
  }

  componentDidUpdate() {
    try{
      localStorage.setItem("tarefas",JSON.stringify(this.state.tarefas));
    } catch (e){}
  };

  componentDidMount() {
    try{
      const stringTarefas = localStorage.getItem("tarefas");

      if(stringTarefas){
        const tarefas = JSON.parse(stringTarefas);
        this.setState({tarefas});
      }
    }catch (e) {}
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.targuet.value});
  };

  criaTarefa = () => {
    if(this.state.inputValue){
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      };
      
      this.setState({
        tarefas: [...this.state.tarefas, novaTarefa],
        inputValue: ""
      });
    }
  };

 
  selectTarefa = (id) => {
    const novastarefas = this.state.tarefas.map(tarefas => {
      if (tarefas.id === id){
        return {
          ...tarefas,
          completa: !tarefas.completa
        };
      }
      return tarefas;
    })
    this.setState({tarefas: novastarefas});
  };

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  };

  render() {
    return (
      <Container className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar tarefa</button>
        </InputsContainer>
        <br/>
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {this.state.tarefas.filter(tarefa => {
              switch (this.state.filter) {
                case 'pendentes':
                  return !tarefa.completa;
                case 'completas':
                  return tarefa.completa;
                default:
                  return true;
            }
          })
          .map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
            })}
        </TarefaList>
      </Container>
    )
  }
}

export default App
