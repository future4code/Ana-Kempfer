import axios from "axios";

// FUNÇÕES SINCRONAS

export const setTrips = allTrips => ({
    type: "SET_TRIPS",
    payload:{
        alltrips
    }
})



// FUNÇÕES ASSINCRONAS

export const getTrips = () => async (dispatch, getState) => {
    const response = await axios.get(
    'https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/trips'
    );
    dispatch(setTrips(response.data.trips));
}


