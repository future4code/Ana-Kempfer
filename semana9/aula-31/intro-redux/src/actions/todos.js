
import axios from 'axios';

//FUNÇÕES SINCRONAS
// export const addTask = text => {
//     return{
//         type: "ADD_TASK",
//         payload:{
//             text: text
//         }
//     };
// };
// export const toggleTask = (id) => {
//     return{
//         type: "TOGGLE_TASK",
//         payload:{
//             id: id,
//         } 
//     };
// };
// export const deleteTask = (id) => {
//     return{
//         type: "DELETE_TASK",
//         payload:{
//             id: id,
//         }  
//     };
// };
export const completeAllTasks = (id) => {
    return{
        type: "COMPLETE_ALL_TASKS",         
    };
};
// export const deleteAllComplete = () => {
//     return{
//         type: "DELETE_ALL_COMPLETE"
//     };
// };

export const setFilter = (filter) => {
    return{
        type: "SET_FILTER",
        payload:{
            filter: filter
        } 
    }
}

//FUNÇÕES ASSINCRONAS


export const addTask = (text) => async (dispatch, getState) => {
    const response = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:ana/todos',
        
        {
            text: text
        }
    
    );
    dispatch()
};

export const toggleTask = (id) => async (dispatch, getState) => {
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/${id}/toggle`
    );
    dispatch()
};

export const deleteTask = (id) => async (dispatch, getState) => {
    const response = await axios.del(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/${id}`
    );
    dispatch()
};

export const deleteAllComplete = () => async (dispatch, getState) => {
    const response = await axios.del(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/delete-done`
    );
    dispatch()
};

// POST https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:ana/todos
// Cria um novo todo e o retorna, com o id e o done criados

// PUT https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/FSe14Dr0S7ynUTUCNLH4/toggle
// Alterna a propriedade "done" de um todo

// DEL https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/delete-done
// Apaga todos os todos que possuem done === true

// DEL https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos/FSe14Dr0S7ynUTUCNLH4
// Apaga um todo específico

// GET  https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ana/todos
// Busca todos os Todos


