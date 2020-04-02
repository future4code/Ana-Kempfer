import React from 'react';
import styled from 'styled-components';
import axios from "axios";

const AllUsersContainer = styled.div`

font-size: calc(10px + 2vmin);

`;

const UserItem = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottm: 1px black solid;
    padding: 10px 0;
`;
const DeleteButton = styled.span`
    color: red;
    cursos: pointer;
`;

class AllUsers extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                listUsers: []
            }
    }

    componentDidMount(){
        this.getUsers()
    }

    getUsers = () => {
        axios.get('https://us-central1-future-apis.cloudfunctions.net/api/users',{
                headers:{
                    "api-token" : "ana-hamilton"
                }
        })
            .then((response) => {
                this.setState({ 
                    listUsers: response.data.result
                });
        });
    }

    deleteUser = (id) => {
        axios.delete('https://us-central1-future-apis.cloudfunctions.net/api/users/:id', {
            headers: {
                "api-token": "ana-hamilton"
            }
        })
        .then(() => {
            this.getUsers();
        })
        .catch(() => {
            alert("Erro ao apagar usuário");
        });

    };
    
    
    render(){
        return(
            <AllUsersContainer>
                <h2>Usuários cadastrados:</h2>
                <ul>
                    {this.state.listUsers.map((user) => {
                        return (
                            <UserItem>
                                <span>{user.name}</span>
                                <DeleteButton onClick={() => this.deleteUser(user.id)}>X</DeleteButton>
                            </UserItem>
                        );
                    })}
                </ul>
            </AllUsersContainer>
        );
    }
}


export default AllUsers

