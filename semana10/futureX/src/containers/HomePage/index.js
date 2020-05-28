import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Header, Logo, Banner, MainContainer, Footer } from "../../style/global";
import LogoTipo from "../../resources/planeta.png";
import BannerImg from "../../resources/banner2.webp";
import RedirectCard from "../../components/RedirectCard";
import Astronauta from "../../resources/astronauta.png";
import Nave from "../../resources/lancamento.png";



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainContainer>
          <Header>
            <Logo onClick={this.props.goToHomePage} src={LogoTipo}/>
            <h1><strong>FutureX</strong></h1>
          </Header>
          <Banner src={BannerImg}/>
          <RedirectCard onClick={this.props.goToLoginPage} title="Login" img={Nave}/>
          <RedirectCard onClick={this.props.goToApplicationPage} title="Candidato" img={Astronauta}/>
          <Footer/>
      </MainContainer>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  goToLoginPage: () => dispatch(push(routes.login)),
  goToApplicationPage: () => dispatch(push(routes.application))
})



export default connect(null, mapDispatchToProps)(HomePage);