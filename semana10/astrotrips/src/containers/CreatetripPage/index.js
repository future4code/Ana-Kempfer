import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const CreateWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      planet: "",
      date: "",
      description: "",
      duration: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, planet, date, description, duration } = this.state;

    return (
      <CreateWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="name"
          type="text"
          label="name"
          value={this.state.name || ""}
          required
          inputProps={{ pattern: "[A-Za-z]{5,}"}}          
        />
        <TextField
          onChange={this.handleFieldChange}
          name="planet"
          type="dropdown"
          label="planet"
          value={this.state.planet || ""}
          required
          inputProps={{ pattern: "[A-Za-z]{5}"}}          
        />
        <TextField
          onChange={this.handleFieldChange}
          name="date"
          type="date"
          value={this.state.date || ""}
          required
          inputProps={{ pattern: "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d{2}"}}          
        />
        <TextField
          onChange={this.handleFieldChange}
          name="description"
          type="text"
          label="description"
          value={this.state.description || ""}
          required
          inputProps={{ pattern: "[A-Za-z]{30,}"}}         
        />
        <TextField
          onChange={this.handleFieldChange}
          name="duration"
          type="number"
          label="duration"
          value={this.state.duration || ""}
          required
          inputProps={{ pattern: ""}}          
        />
        <Button>Criar viagem</Button>
      </CreateWrapper>
    );
  }
}

export default CreateTrip;
