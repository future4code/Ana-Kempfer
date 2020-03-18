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
      <CardGrande className="container-identificacao" imagem={require("./img/astrodev.png")} titulo={"Ana Kempfer"} descricao={"Oi, eu sou a Ana! Sou estudante de desenvolvimento web. Programo a pouco tempo, mas trago comigo toda as minhas experiências anteriores e no dia-a-dia aprendo muito com minha equipe."}/>
      <CardPequeno imagem={require("./img/envelope.png")} textoEmNegrito={"Email: s.kempfer88@gmail.com"}/>
      <CardPequeno imagem={require("./img/casa.png")} textoEmNegrito={"Endereço: São Paulo, SP"}/>
      <BotaoComImagem imagem={require("./img/seta-para-baixo.png")} texto={"Ver mais"}/>
      <TituloSeco texto={"Experiências profissionais"}/>
      <CardGrande imagem={require("./img/f4.png")} titulo={"Future4"} descricao={"Formando desenvolvedores para o futuro"}/>
      <CardGrande imagem={require("./img/amazon.png")} titulo={"Amazon"} descricao={" Work Hard, Have Fun, Make History."}/>
      <TituloSeco texto={"Minhas redes sociais"}/>
      <BotaoComImagem imagem={require("./img/facebook.png")} texto={"Facebook"} />     
    </div>
  );
}

export default App;
