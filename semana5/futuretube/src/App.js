import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="corpo-do-site">
      <header>
        <h1>FutureTube</h1>
        <input type="text" id="busca" placeholder="Busca"></input>
      </header>
      <main>
          <nav>
            <input type="checkbox" id="check"></input>
            <label for="check"></label>
            <ul>
                <li><a href="index.html">INÍCIO</a></li>
                <li><a href="">EM ALTA</a></li>
                <li><a href="">INCRIÇÕES</a></li>
                <li><a href="">ORIGINAIS</a></li>
            </ul>
          </nav>  
          <article>
            <a href="">
                <img src={require("../src/video1.png")} alt="imagem de cruz celta em fundo ecuro"></img>Bela Irlanda</a>
            <a href="">
                <img src={require("../src/video2.png")} alt="imagem de plaquetas sanguínias"></img>Plaquetas sanguínias</a>
            <a href="">
                <img src={require("../src/video3.png")} alt="imagem de pintura abstrata colorida"></img>Pintura abstrata</a>
            <a href="">
                <img src={require("../src/video4.png")} alt="imagem do mar e areia da praia vistos de cima"></img>Mar e areia</a>
            <a href="">
                <img src={require("../src/video5.png")} alt="imagem de um campo, com arvores ao fundo e neblina"></img>Campo no outono</a>
            <a href="">
                <img src={require("../src/video6.png")} alt="imagem de lebre marron em campo verde"></img>Lebre européia</a>
            <a href="">
                <img src={require("../src/video7.png")} alt="imagem do universo, uma estrela nebulosa em tons de roxo"></img>O universo</a>
            <a href="">
                <img src={require("../src/video8.png")} alt="imagem de foguete pronto para ser lançado ao espaço"></img>Foguete lançado ao espaço</a>
          </article>
        </main>
        <footer>Desenvolvido por SKempfer</footer>
    </div>
  );
}

export default App;
