import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { 
  getTrips,
  setTrips,
 } from "../../actions"

const ListTripsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ListTripsPage extends Component {
  
  componentDidMount(){
    this.state.getTrips();
  }


  render() {
    return (
      <ListTripsWrapper>
          <h1>Lista de viagens disponíveis:</h1>
          <div>
                {this.props.getTrips.map(trip => {
                    return (
                      <li key={trip.id}>
                        {trip}                            
                      </li>
                    )
                })}
          </div>
       
        
      </ListTripsWrapper>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
      allTrips: state.trips.allTrips
  }
}


function mapDispatchToProps(dispatch){
  return{
    getTrips: () => dispatch(),
    goToListTripsPage: () => dispatch(push('/')),
    goToTripDetailsPage: () => dispatch(push('/trips/details')),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ListTripsPage);


