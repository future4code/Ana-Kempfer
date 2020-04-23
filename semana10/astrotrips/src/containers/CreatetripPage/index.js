import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Input from '@material-ui/core/Input';


const CreateWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const todayDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
       if(day<10 && month<10){
              day='0'+day
              month='0'+month
              return year+'-'+month+'-'+day;
          }else if(month<10){
            month='0'+month
            return year+'-'+month+'-'+day;
          }else if(day<10){
            day='0'+day
            return year+'-'+month+'-'+day;
          }else {
          return year+'-'+month+'-'+day;
        }
}


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
        <h2>Criar uma nova viagem:</h2>
        <TextField
          onChange={this.handleFieldChange}
          name="name"
          type="text"
          label="name"
          value={{name} || ""}
          required
          inputProps={{ pattern: "[A-Za-z \dáÁ_e]{5,100}"}}          
        />
        
        <select
          value={{planet} || ""}
          onChange={this. handleFieldChange}
          input={<Input name="planet" id="planet" />}
        >
          <option value="">Planeta</option>
          <option value="mercurio">Mercúrio</option>
          <option value="venus">Vênus</option>
          <option value="terra">Terra</option>
          <option value="marte">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturno">Saturno</option>
          <option value="urano">Urano</option>
          <ption value="netuno">Neturno</ption>
        </select>

        <TextField
          onChange={this.handleFieldChange}
          name="date"
          type="date"
          value={{date} || ""}
          required
          inputProps={{ min: "todayDate()" }}          
        />
        <TextField
          onChange={this.handleFieldChange}
          name="description"
          type="text"
          label="description"
          value={{description} || ""}
          required
          inputProps={{ pattern: "[A-Za-z \dáÁ_e]{30,2000}"}}         
        />
        <TextField
          onChange={this.handleFieldChange}
          name="duration"
          type="number"
          label="duration"
          value={{duration} || ""}
          required
          inputProps={{ min: "1", max:"1000"}}          
        />
        <Button>Criar viagem</Button>
      </CreateWrapper>
    );
  }
}

export default CreateTrip;
