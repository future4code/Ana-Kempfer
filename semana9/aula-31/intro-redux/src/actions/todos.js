
//FUNÇÕES SINCRONAS
export const addTask = text => {
    return{
        type: "ADD_TASK",
        payload:{
            text: text
        }
    };
};
export const toggleTask = (id) => {
    return{
        type: "TOGGLE_TASK",
        payload:{
            id: id,
        } 
    };
};
export const deleteTask = (id) => {
    return{
        type: "DELETE_TASK",
        payload:{
            id: id,
        }  
    };
};
export const completeAllTasks = (id) => {
    return{
        type: "COMPLETE_ALL_TASKS",         
    };
};
export const deleteAllComplete = () => {
    return{
        type: "DELETE_ALL_COMPLETE"
    };
};

export const setFilter = (filter) => {
    return{
        type: "SET_FILTER",
        payload:{
            filter: filter
        } 
    }
}

//FUNÇÕES ASSINCRONAS

const addTask = () => (dispatch, getState) => {

}

const toggleTask = () => (dispatch, getState) => {

}

const deleteTask = () => (dispatch, getState) => {

}

const completeAllTasks = () => (dispatch, getState) => {

}

const deleteAllComplete = () => (dispatch, getState) => {
    
}