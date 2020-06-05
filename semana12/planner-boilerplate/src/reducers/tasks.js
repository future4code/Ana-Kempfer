const initialState = {
    allTasks: []
  };
  
  const tasks = (state = initialState, action) => {
    switch (action.type) {

      case "CREATE_TASK":
        const newTask = {
          id: Date.now(),
          text: action.payload.text,
        };
        return { allTasks: [...state.allTasks, newTask] };
  
   
       
    default:
        return state;
    }
  };
  
  export default tasks;