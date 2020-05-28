//A. RESPOSTA: Ela até executa a tarefa, mas de uma forma indesejada e sem seguir uma organizaçao.

//B. Implemente a função solicitada

import axios from "axios";

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

type Message = {
    subscriberId: string,
	message: string
}

async function sendNotification(): Promise<Message[]> {
    const notification = await axios.post(`${baseUrl}/notifications/send`,   )
}




const main = async () => {
   const subscribers = await getSubscribers();
   console.log(subscribers);
}
main()









