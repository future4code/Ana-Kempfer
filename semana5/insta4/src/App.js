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
        ]
      };
  }



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
        </div>
      );
  }  
  
}      

export default App;
