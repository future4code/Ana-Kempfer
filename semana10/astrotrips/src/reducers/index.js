import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history)


    // Outros reducers aqui
  });

  const initialState = {
    allTrips: []
}

const trips = (state = initialState, action) => {

    switch(action.type){
        case 'SET_TRIP': {
            return {...state, allTrips: action.payload.allTrips }
        }

        

        default:
            return state;
    }
}

export default trips;
