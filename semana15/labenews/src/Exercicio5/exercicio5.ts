//A. RESPOSTA: Ela até executa a tarefa, mas de uma forma indesejada e sem seguir uma organizaçao.

//B. Implemente a função solicitada

import axios from "axios";
import { userInfo } from "os";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type Subscriber = {
    id: string,
    name: string,
    email: string
}

async function getSubscribers(): Promise<Subscriber[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((user: any) =>{
        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
};


const sendNotification = async (subscriber: Subscriber[], message: string): Promise<void> => {
    await axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: subscriber.id,
        message: "A vida segue uma loucura no Brasil"
    })   
    
}


const main = async () => {
   const subscribers = await getSubscribers();
   console.log(subscribers);

   const promiseArrays = [];

   for(const subscribers 
}
main()









