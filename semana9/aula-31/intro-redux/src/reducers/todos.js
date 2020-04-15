

  const initialState = {      
    todosList: [
        {
          id: 1,
          text: "Tarefa 1 do redux"
        },
        {
          id: 2,
          text: "Tarefa 2 do redux"
        }
      ]
  }
  
  export function todos (state = initialState, action) {
    switch (action.type) {
      case "ADD_TASK":
        const newTodo = {
          id:Date.now(),
          text: action.payload.text
        };
        return {
          todosList: [newTodo, ...state.todosList]
        };
  
      
  
      default:
        return state;
    }
  }
  