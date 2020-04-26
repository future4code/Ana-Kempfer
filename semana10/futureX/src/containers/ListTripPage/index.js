import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index"
import { getAllTrips } from "../../actions/trips"
import { Header, Logo, Banner, MainContainer, Footer } from "../../style/global";
import LogoTipo from "../../resources/planeta.png";
import BannerImg from "../../resources/banner2.webp";
import { setSelectedTripId } from "../../actions/trips"
import { GridAllTrips } from "../../style/listTripPage"
import ContainerTripCard from "../../components/TripCard/index"

class ListTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    }

    this.props.getAllTrips()
  }

  handleOnClickTrip = (tripId) => {
    this.props.setSelectedTripId(tripId)
    this.props.goToTripDetailsPage()
  }

  render() {
    return (
      <MainContainer>
         <Header>
            <Logo src={LogoTipo}  onClick={this.props.goToHomePage}/>
            <h1>FutureX</h1>
          </Header>
        <Banner src={BannerImg}/>
        <GridAllTrips>
          {this.props.allTrips.map((trip) => (
            <ContainerTripCard onClick={() => this.handleOnClickTrip(trip.id)}>
              <div>
                <span>Nome: </span><span>{trip.name}</span>
              </div>
              <div>
                <span>Data: </span><span>{trip.date}</span>
              </div>
              <div>
                <span>Duração: </span><span>{trip.durationInDays} dias</span>
              </div>
              <div>
                <span>Planeta: </span><span>{trip.planet}</span>
              </div>
              <div>
                <span>Descrição: </span><span>{trip.description}</span>
              </div>
            </ContainerTripCard>
          ))}
      	</GridAllTrips>
        <Footer/>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  allTrips: state.trips.allTrips
});


const mapDispatchToProps = dispatch => ({
  goToHomePage: () => dispatch(push(routes.root)),
  getAllTrips: () => dispatch(getAllTrips()),
  setSelectedTripId: (trip) => dispatch(setSelectedTripId(trip)),
  goToTripDetailsPage: () => dispatch(push(routes.tripDetails))
})



export default  connect(mapStateToProps, mapDispatchToProps)(ListTripPage);