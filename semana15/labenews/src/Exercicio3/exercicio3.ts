//A. RESPOSTA: sim, se não for feito a declaração do type User. 

//B. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que 
//ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso


//C. Reimplemente a função, corretamente.
//EU JÁ TINHA FEITO A TIPAGEM NO EXERCICIO 1

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