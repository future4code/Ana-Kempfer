import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  constructor (props){
    super(props);
      this.state = {
        arrayPosts:[
          {
            fotoUsuario: 'https://picsum.photos/50/50',
            nomeUsuario: 'Paulinha',
            fotoPost: 'https://picsum.photos/200/150'
          },
          {
            fotoUsuario: 'https://picsum.photos/50/49',
            nomeUsuario: 'Ana',
            fotoPost: 'https://picsum.photos/200/151'
          },
          {
            fotoUsuario: 'https://picsum.photos/50/52',
            nomeUsuario: 'Daniel',
            fotoPost: 'https://picsum.photos/200/145'
          },
        ].

        valorInputFotoUsuário:"",
        valorInputNomeDoUsuario:"",
        valorInputFotoPost:""
      };
  }

  adicionarNovoPost = () => {
    const novoPost = {
      fotoUsuario: this.state.valorInputFotoUsuário,
      nomeUsuario: this.state.valorInputNomeDoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
  }

  const novoPost = [...this.state.Post, novoPost];

  this.setState({post: novoPost});

  onChangeInputFotoUsuario = event => {
    this.setState({
      valorInputFotoUsuário: event.target.value
    });
  };

  onChangeInputNomeUsuario = event => {
    this.setState({
      valorInputNomeDoUsuario: event.target.value
    });
  };

  onChangeInputFotoPost = event => {
    this.setState({
      valorInputFotoPost: event.target.value
    });
  };



  render(){
    const inserePost = this.state.arrayPosts.map((elemento, index, array) => {
      return(
        <Post
          nomeUsuario = {elemento.nomeUsuario}
          fotoUsuario = {elemento.fotoUsuario}
          fotoPost = {elemento.fotoPost}
          key = {index}
        />
      );
    });

      return (
        <div className={'app-container'}>
          {inserePost}
               
          <input
            value = {this.state.valorInputNomeDoUsuario}
            onChange = {this.onChangeInputNomeDoUsuário}
            placeholder = {"Nome do usuário"}
          />

          <input
            value = {this.state.valorInputFotoUsuário}
            onChange = {this.onChangeInputFotoUsuario}
            placeholder = {"Foto do usuário"}
          />

          <input
            value = {this.state.valorInputFotoPost}
            onChange = {this.onChangeInputFotoPost}
            placeholder = {"Foto do post"}
          />

          <button onclick={this.adicionarNovoPost}>Adicionar Post</button>
          
        </div>
      );
      
  }  
  
}      

export default App;
