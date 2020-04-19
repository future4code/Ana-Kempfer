import axios from 'axios'

// FUNÇÕES SINCRONAS

export const getAllsMatches = (allsMatches) => {
	return {
		type: "GET_ALLS_MATCHES",
		payload:{
			allsMatches
		}
	}
}

export const getNewProfile = (newProfile) => {
	return{
		type: "GET_NEW_PROFILE"
	}
}


//FUNÇÕES ASSINCRONAS
export const choosePerson = (id,choice) => async (dispatch, getState) => {
	const body = {
		id, 
		choice
	}
	const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/choose-person`, body)
	dispatch(getProfileToChoose())
}


export const clearSwipes = () => async (dispatch) => {
	const reponse = await axios.delete('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/clear')
	dispatch(getProfileToChoose())
}

export const getProfileToChoose = () => async (dispatch, getState) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/person")
	
	dispatch(getNewProfile(response.data.profile))
}

export const getMatches = () => async (dispatch, getState) => {
	const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ana/matches`)
	dispatch(getAllsMatches(response.data.matches))
}