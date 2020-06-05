
//FUNÇÕES SINCRONAS

export const createTask = (id,text) => ({
    type: "CREATE_TASK",
    payload: {
        id,
        text
    }
});



//FUNÇÕES ASSINCRONAS 


