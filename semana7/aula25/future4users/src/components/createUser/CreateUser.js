import React from 'react';
import styled from 'styled-components';
import axios from "axios";


const ContainerCreateUser = styled.div`
    border: 1px black solid;
    padding: 30px;
    display: grid;
    gap: 15px;
    justify-items: center;
`;

const FormButton = styled.button`
    background-color: darkblue;
    border: none;
    color: white;
    padding: 10px;
`;

class CreateUser extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                inputNameValue: '',
                inputEmailValue: ''
            }
        
    }

    onChangeInputNameValue = (event) => {
        this.setState({inputNameValue: event.target.value});
    };

    onChangeInputEmailValue = (event) => {
        this.setState({inputEmailValue: event.target.value});
    };

    OnClickAddUser = () => {
        const body = {
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue,
        }

        axios.post('https://us-central1-future-apis.cloudfunctions.net/api/users', body, {
            headers: {
                'api-token': 'ana-hamilton'
            }
        }).then(() => {
            alert("Usuário criado com sucesso!")
        }).catch(() => {
            alert("Ocorreu um erro ao criar o usuário.")
        })
    };

    render(){
        return(
            <ContainerCreateUser>
                <div>
                <label htmlFor={"name"}>Nome: </label>
                <input name={"name"}
                    value={this.state.inputNameValue}
                    onChange={this.onChangeInputNameValue}
                ></input>
                </div>
                <div>
                <label htmlFor={"email"}>E-mail: </label>
                <input name={"email"}
                    value={this.state.inputEmailValue}
                    onChage={this.onChangeInputEmailValue}
                ></input>
                </div>
                <FormButton onClick={this.onClickAddUser}>Salvar</FormButton>
            </ContainerCreateUser>
        )
    }
}

export default CreateUser
