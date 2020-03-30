import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import styled from "styled-components"
import {Etapa1} from './components/etapa1/Etapa1'
import {Etapa2} from './components/etapa2/Etapa2'
import {Etapa3} from './components/etapa3/Etapa3'
import {Final} from './components/fim/Fim'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1
    };
  }

  defineEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <Final/>;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.defineEtapa()}
        
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App;

