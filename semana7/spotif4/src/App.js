import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Appcontainer = styled.div`
  text-align: center;
  background-color: #121212;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  border: 20px;
  display: flex;
  flex-direction: column;
  alig-itens: center;
  justify-content: center;
`;

const ContainerInfos = styled.div`
  background-color: 	#212121;
  width: 80%;
  height: 80%;
  border: 1px #535353 solid;
  margin-left: 8%;  
  text-align: center;
  display: flex;
  flex-direction: column;
  alig-itens: center;
  justify-content: center;
  padding: 30px;
`;

const ContainerButtons = styled.div`
  display: flex;
  widht: 100%;
  alig-itens: center;
  justify-content: center;
`;

const ShowPlaylistsButton = styled.button`
  background-color: #1db954;
  margin: 20px;
  border-radius: 10px;
  border: none;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 200px;
  padding: 10px; 
  cursor: pointer; 
`;

const CreatePlaylistButton = styled.button`
  background-color: #1db954;
  margin: 20px;
  border-radius: 10px;
  border: none;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 200px;
  padding: 10px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  background-color: #b3b3b3;
  border: 1px #535353 solid;
  font-size: calc(10px + 2vmin);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 80%;
`;

const ContainerPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  alig-itens: center;
  justify-content: center;
  
`;

const PlaylistLi =styled.li`
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
`;



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        inputValue: "",
        playlists: [],
        errorMessage: undefined,
        playlistSelected: "",
         
    };
  };

  componentDidMount() {
   
  }

  foundPlaylists = () => {
    axios
      .get(
        "https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",
        {
          headers: {
            auth: "ana-hamilton"
          }
        }
      )
      .then((resposta) => {
        const playlistsDaApi = resposta.data.result.list;

        this.setState({ playlists: playlistsDaApi });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Erro ao localizar playlists na API" });
      });
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
    console.log("Valor do input: ", event.target.value);
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputValue
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
        console.log("Playlist criada")
        alert("Playlist criada com sucesso");
        
      })
      .catch((error) => {
        console.log("Erro ao criar playlist")
        this.setState({ errorMessage: "Erro ao criar Playlist" });
      });
  };

  onChangePlaylistSelected = (event) => {
    // this.setState({playlistSelected: event.target.value });
    // console.log("Playlist event change:", event.target.value)
  } 

  detailsPlaylist = () => {
    const playlistInfos = {
      id: this.state.playlists.map((playlist,index) => 
      playlist.id
      )


    };
    console.log("name", playlistInfos);
    
  }
  
   
  
  render() {
    


    return (
      <Appcontainer>
        <ContainerInfos>
          <h1>Spotif4</h1>
          <h3>Insira o nome da sua nova Playlist</h3>
          <StyledInput 
          onChange={this.onChangeInput} 
          value={this.state.inputValue}          
          />
          <p style={{ color: "red" }}>{this.state.errorMessage}</p>
          <ContainerButtons>
            <CreatePlaylistButton onClick={this.createPlaylist}>
              <strong>Criar Playlist</strong>
            </CreatePlaylistButton>
            <ShowPlaylistsButton onClick={this.foundPlaylists}>
              <strong>Ver minhas playlists</strong>
            </ShowPlaylistsButton>
          </ContainerButtons>
          <ContainerPlaylists>
            {this.state.playlists.map((playlist) => {
              return <PlaylistLi onClick={this.detailsPlaylist} 
                onChange={this.onChangePlaylistSelected}
                value={this.state.playlistSelected}>
                {playlist.name} 
              </PlaylistLi>;
            })}
          </ContainerPlaylists>
        </ContainerInfos>
      </Appcontainer>
    );
  };
}

export default App;
