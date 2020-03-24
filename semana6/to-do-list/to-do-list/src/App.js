import React from 'react';
import './App.css';
import PropTytes from 'prop-types';





class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      selacaoFiltro: "Nenhum",
    }
  }

  onclickBotao = () => {
    this.setState({});
  };

  onChangeInput = event => {
    this.setState({ inputValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <br/>
        <input onChange={this.onChangeInput} placeholder="Nova tarefa"></input>
        <br/>
        <button onClick={this.onclickBotao}>Adicionar</button>
        <br/>
        <p>Filtro</p>
        <select>
          <option>Nenhum</option>
          <option>Completas</option>
          <option>Pendentes</option>
        </select>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  };
}

export default App;
