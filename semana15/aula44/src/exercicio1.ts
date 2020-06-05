
//A. RESPOSTA: https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

//B. RESPOSTA: Promise<any>

//C. RESPOSTA:

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