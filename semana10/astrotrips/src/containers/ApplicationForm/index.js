import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { CountryDropdown} from 'react-country-region-selector';


const ApplicationFormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const options = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno"
  // RECEBE O ID DAS TRIPS CADASTRADAS NA API E RETORNA O NOME DELAS. 
];


class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
      trip:""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  selectCountry (val) {
    this.setState({ country: val });
  }

  render() {
    const { name, age, applicationText, profession, country, trip } = this.state;
    

    return (
      
      <ApplicationFormWrapper>
        <h2>Formulário de incrição para uma viagem:</h2>
        <TextField
          onChange={this.handleFieldChange}
          name="name"
          type="text"
          label="name"
          value={name}
          required
          inputProps={{ pattern: "[A-Za-z áÁ_e]{3,}"}}          
        />
        
        <TextField
          onChange={this.handleFieldChange}
          name="age"
          type="number"
          value={age}
          placeholder="Idade"
          required
          inputProps={{ min:"18"}}          
        />
        <TextField
          onChange={this.handleFieldChange}
          name="applicationText"
          type="text"
          label="applicationText"
          value={applicationText}
          required
          inputProps={{ pattern: "[A-Za-z \dáÁ_e]{30,}"}}         
        />
        <TextField
          onChange={this.handleFieldChange}
          name="profession"
          type="text"
          label="profession"
          value={profession}
          required
          inputProps={{ pattern: "[A-Za-z áÁ]{10,}" }}          
        />

        <Dropdown 
          options={options} 
          onChange={this.handleFieldChange} 
          value={trip} 
          label="Viagens disponíveis"
        />

        <CountryDropdown
          value={{country} || ""}
          onChange={(val) => this.selectCountry(val)} 
        />
        <Button>Aplicar</Button>
      </ApplicationFormWrapper>
    );
  }
}

export default ApplicationForm;
