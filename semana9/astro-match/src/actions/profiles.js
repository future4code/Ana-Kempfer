import axios from 'axios'

// FUNÇÕES SINCRONAS

const setProfileToSwipe = (profile) => ({
	type: 'SET_PROFILE_TO_SWIPE',
	payload: {
		profile,
	}
})





//FUNÇÕES ASSINCRONAS

export const clearSwipes = () => async (dispatch) => {
	const reponse = await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/clear')
}

export const getProfileToChoose = () => async (dispatch, getState) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ana/person");
	console.log(response)
	dispatch(setProfileToSwipe())
}