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
            <input type="checkbox" id="check">
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
                <img src={require("../src/video1.png")} alt="imagem de cruz celta em fundo ecuro">Bela Irlanda</a></img>
            <a href="">
                <img src={require("../src/video2.png")} alt="imagem de plaquetas sanguínias">Plaquetas sanguínias</a></img>
            <a href="">
                <img src={require("../src/video3.png")} alt="imagem de pintura abstrata colorida">Pintura abstrata</a></img>
            <a href="">
                <img src={require("../src/video4.png")} alt="imagem do mar e areia da praia vistos de cima">Mar e areia</a></img>
            <a href="">
                <img src={require("../src/video5.png")} alt="imagem de um campo, com arvores ao fundo e neblina">Campo no outono</a></img>
            <a href="">
                <img src={require("../src/video6.png")} alt="imagem de lebre marron em campo verde">Lebre européia</a></img>
            <a href="">
                <img src={require("../src/video7.png")} alt="imagem do universo, uma estrela nebulosa em tons de roxo">O universo</a></img>
            <a href="">
                <img src={require("../src/video8.png")} alt="imagem de foguete pronto para ser lançado ao espaço">Foguete lançado ao espaço</a></img>
          </article>
        </main>
        <footer>Desenvolvido por SKempfer</footer>
    </div>
  );
}

export default App;
