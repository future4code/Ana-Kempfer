
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
export const completeTodo = (id) => {
    return{
        type: "COMPLETE_TODO",
        payload:{
            id: id,
        }  
    }
}
export const completeAllTodos = () => {
    return{
        type: "COMPLETE_ALL_TODOS"
    } 
}
export const clearCompleted = () => {
    return{
        type: "CLEAR_COMPLETED" 
    }
}
export const setFilter = (filter) => {
    return{
        type: "SET_FILTER",
        payload:{
            filter: filter
        } 
    }
}
