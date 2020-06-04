//A. RESPOSTA: no caso de função nomeada o Async é escrito no começo da função, logo antes da palavra function.
//Já no caso da arrow function o Async é escrito logo após o sinal de igual (=) e antes dos parenteses.

//b. Implemente a função solicitada, usando arrow function
//EU JÀ TINHA ESCRITO A FUNÇÂO DO EXERCÌCIO 1 COMO ARROW FUNCTION

import axios from "axios"

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";


type User = {
    id: string,
    name: string,
    email: string
}

async function getSubscribers(): Promise<User[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((user: any) =>{
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
};


const main = async () => {
   const subscribers = await getSubscribers();
   console.log(subscribers);
}

main()