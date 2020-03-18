import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/133'}
        />
         <Post
          nomeUsuario={'Ana Kempfer'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/152'}
        />
         <Post
          nomeUsuario={'Daniel'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/149'}
        />
      </div>
    );
  }
}

export default App;
