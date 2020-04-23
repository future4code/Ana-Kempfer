import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const TripsDetailsWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class TripsDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viagem: [{
          id: "",
          name: "",
          planet: "",
          date: "",
          description: "",
          duration: ""
      }]
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
      <TripsDetailsWrapper>
          <h1>Detalhes da viagem:</h1>
       
        
      </TripsDetailsWrapper>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    goToListTripsPage: () => dispatch(push('/')),
  }
}

export default connect(mapDispatchToProps)(TripsDetailsPage);


