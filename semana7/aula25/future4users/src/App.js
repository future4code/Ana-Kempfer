import React from 'react';
import styled from 'styled-components';
import CreateUser from './components/createUser/CreateUser';
import AllUsers from './components/allUsers/AllUsers';


const AppContainer = styled.div`
margin: 60px;
display: grid;
justify-items: center;
gap: 20px;
font-size: calc(10px + 2vmin);

`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SelectedPage: "CreatUser"
    };
  }

  onClickButton = () => {
    let newPage
      switch (this.state.selectedPage) {
        case "CreatUser":
          newPage = "AllUsers";
          break;
        case "AllUsers":
          newPage = "CreatUser";
          break;
        default:
          newPage = "CreatUser";
      };

    this.setState({ selectedPage : newPage });
  }

  getPageToRender = () => {
    switch (this.state.selectedPage){
      case "CreatUser":
        return <CreateUser/>
      case "AllUsers":
        return <AllUsers/>
      default: 
        return <CreateUser/>
    }
  }
  

  render() {

    const currentPage = this.getPageToRender();

    return (
      <AppContainer>
        <button onClick={this.onClickButton}>Trocar de página</button>
        {currentPage}
      </AppContainer>
    );
  }
}

export default App;

