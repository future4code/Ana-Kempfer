const initialState = {
  newProfile: {},
  allsMatches: []
}

const profiles = (state = initialState, action) => {
  
  switch (action.type){
    case "GET_NEW_PROFILE": {
      return {...state, newProfile: action.payload.newProfile};
    }

    case "GET_ALLS_MATCHES": {
      const getMatches = state.allsMatches.filter((matche) =>{
        if(matche.choise === true){
          return true;
        }
        return false;
      })
      return{ ...state, allsMatches: getMatches}
    }

    default:
      return state;
  }
}

export default profiles
