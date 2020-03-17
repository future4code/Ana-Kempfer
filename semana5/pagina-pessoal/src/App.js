import React from 'react';
import './App.css';
import TituloSeco from './components/TituloSeco/TituloSeco';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import BotaoComImagem from './components/BotaoComImagem/BotaoComImagem';

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
