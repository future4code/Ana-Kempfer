import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import  action  from "../actions";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history)


    // Outros reducers aqui
  });

  const initialState = {
    allTrips: []
}

const tasks = (state = initialState, action) => {

    switch(action.type){
        case 'SET_TRIP': {
            return {...state, allTrips: action.payload.allTrips }
        }

        case 'MARK_ALL_TASKS_AS_COMPLETED':{
            const newallTrips = state.allTrips.map(task => {
                task.done = true;
                return task
            })

            return { ...state, allTrips: newallTrips }
        }

        case 'REMOVE_COMPLETED_TASKS':{
            const newallTrips = state.allTrips.filter((task) => {
                if(task.done === true){
                    return false;
                }
                return true;
            })

            return { ...state, allTrips: newallTrips }
        }

        default:
            return state;
    }
}

export default tasks;
