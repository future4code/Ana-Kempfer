import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { routes } from "../Router";
import { Header, Logo, Banner, MainContainer, Footer } from "../../style/global";
import LogoTipo from "../../resources/planeta.png";
import BannerImg from "../../resources/banner2.webp";
import LoginCard from "../../components/LoginCard"
import { LoginWrapper, Title } from "../../style/loginPage";
import { autenticateLogin } from "../../actions/user"


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sendLoginData = () => {
    const { email, password } = this.state;
    this.props.autenticateLogin(email, password)
  }

  render() {
    const { email, password } = this.state;
    return (
      <MainContainer>
         <Header>
            <Logo src={LogoTipo}  onClick={this.props.goToHomePage}/>
            <h1>FutureX</h1>
          </Header>
        <Banner src={BannerImg}/>
        <LoginCard>
          <LoginWrapper>
            <TextField
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              value={email}
            />
            <TextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Senha"
              value={password}
            />
            <Button color="secondary" size="large" onClick={this.sendLoginData}>LOGIN</Button>
          </LoginWrapper>
        </LoginCard>
        <Footer/>
      </MainContainer>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  goToListTripPage: () => dispatch(push(routes.allTrips)),
  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
})


export default connect(null, mapDispatchToProps)(LoginPage);
