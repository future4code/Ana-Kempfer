import React from 'react';
import './App.css';
import TituloSeco from './components/TituloSeco';
import CardGrande from './components/CardGrande';
import CardPequeno from './components/CardPequeno';
import BotaoComImagem from './components/BotaoComImagem';

function App() {
  return (
    <div className="App">
      <TituloSeco texto={"Dados pessoais"}/>
      <CardGrande imagem={require("./img/foto.jpg")} titulo={"Ana Kempfer"} descricao={""}/>
      <CardPequeno/>
      <BotaoComImagem/>
      <TituloSeco texto={"Experiências profissionais"}/>
      <CardGrande/>
      <CardGrande/>
      <TituloSeco texto={"Minhas redes sociais"}/>
      <BotaoComImagem/>     
    </div>
  );
}

export default App;
