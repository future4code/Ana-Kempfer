import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import { getTripDetail } from "./trips";


//FUNÇÕES ASSINCRONAS

export const autenticateLogin = (email, password) => async (dispatch) => {
    const body = {
        email: email,
        password: password,
    }
    try {
        const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/anakempfer/login`, body);
        
        const token = response.data.token;
        window.localStorage.setItem("token", token);
        
        dispatch(push(routes.admPanel));

    } catch(error) {
        alert("Erro ao fazer login.")
    }
}


export const applicateUser = (form) => async (dispatch) => {
    const formData = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country,
    }

    try {
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/anaKempfer/trips/${form.tripId}/apply`, formData)

        window.alert("Inscrição realizada com sucesso.")
    } catch(error) {
        window.alert("Ocorreu um erro. Tente aplicar novamente.")
    }
}


export const approveCandidate = (tripId, candidateId, response) => async (dispatch) => {
    const config = {
        headers:{
            'auth': window.localStorage.getItem("token")
        }
    }

    const data = {
        approve: response
    }
    
    try {
        await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/anakempfer/trips/${tripId}/candidates/${candidateId}/decide`, data, config)

        dispatch(getTripDetail(tripId))
    } catch(error) {
        alert("Erro ao tentar aprovar candidato.")
    }
}