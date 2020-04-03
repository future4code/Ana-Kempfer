import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CreatePlaylist from './components/createPlaylist/CreatePlaylist';
import DetailsPlaylist from './components/detailsPlaylist/DetailsPlaylist';


const Appcontainer = styled.div`
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,4,60,1) 100%, rgba(0,212,255,1) 100%);
  min-height: 100vh;
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  border: 20px;
`;

const PlaylistContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  alig-itens: center;
  justify-content: center;
  padding: 30px;
  right: 0;

`;

const ContainerInput = styled.div`
  border: 1px red solid;
  border-radius: 10px;
  padding: 20px;
  margin: 30px;
`;



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        nameOfPlaylist: "",
        listOfPlaylists: [], 
    };
  };

  componentDidMount() {
    this.foundPlaylists();
  }

  foundPlaylists = () => {
    axios.get(
        "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
        {
          headers: {
            auth: "ana-hamilton"
          }
        }
      )
      .then((resposta) => {
        const playlistsFromApi = resposta.data.result.list;
        console.log(resposta);
        this.setState({ listOfPlaylists: playlistsFromApi });
        })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Erro ao localizar as playlists na API" });
      }
    );
  };

  onChangeInput = (event) => {
    this.setState({nameOfPlaylist: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.nameOfPlaylist
    };

    axios
      .post(
        "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
        body,
        {
          headers: {
            auth: "ana-hamilton"
          }
        }
      )
      .then((resposta) => {
        console.log("Playlist criada com sucesso.");
        this.foundPlaylists();
      })
      .catch((error) => {
        this.setState({ errorMessage: "Erro ao criar a playlist." });
      }
    );
  };

  render() {
    return (
      <Appcontainer>
        <p style={{ color: "red" }}>{this.state.errorMessage}</p>
        <ContainerInput>
          <input onChange={this.onChangeInput} value={this.state.nameOfPlaylist} />
          <button onClick={this.createPlaylist}>Criar</button>
        </ContainerInput>

        <PlaylistContainer>
            <ul>
            {this.state.playlists.map((playlist) => {
                return <li>{playlist.name}</li>;
            })}
        </ul>
        </PlaylistContainer>
      </Appcontainer>
    );
  };
}

export default App;
