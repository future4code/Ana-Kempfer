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
      <CardGrande className="container-identificacao" imagem={require("./img/astrodev.png")} titulo={"Astrodev"} descricao={"Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."}/>
      <CardPequeno imagem={require("./img/envelope.png")} textoEmNegrito={"Email: future4code@gmail.com"}/>
      <cardPequeno imagem={require("./img/casa.png")} textoEmNegrito={"Endereço: Rua do futuro, 4"}/>
      <BotaoComImagem imagem={require("./img/seta-para-baixo.png")} texto={"Ver mais"}/>
      <TituloSeco texto={"Experiências profissionais"}/>
      <CardGrande imagem={require("./img/f4.png")} titulo={"Future4"} descricao={"Formando desenvolvedores para o futuro"}/>
      <CardGrande imagem={require("./img/os.png")} titulo={"Outsmart"} descricao={"Criando apps incríveis para grandes clientes."}/>
      <TituloSeco texto={"Minhas redes sociais"}/>
      <BotaoComImagem imagem={require("./img/facebook.png")} texto={"Facebook"} />     
    </div>
  );
}

export default App;
