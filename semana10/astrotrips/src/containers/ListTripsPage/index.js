import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const ListTripsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripsList: []
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {  } = this.state;

    return (
      <ListTripsWrapper>
          <h1>Lista de viagens disponíveis:</h1>
       
        
      </ListTripsWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    goToListTripsPage: () => dispatch(push('/')),
    goToTripDetailsPage: () => dispatch(push('/trips/details')),
  }
}

export default connect(mapDispatchToProps)(ListTripsPage);


