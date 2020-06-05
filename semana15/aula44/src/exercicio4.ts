
//A. RESPOSTA: promise<void> por que ela não retorna nada. 

//B. Implemente a função solicitada

import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function createNews(title: string, content: string, date: number): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title: "Continuo desesperada com o curso",
      content: "A vontade de chorar e desistir é constante, mas falta pouco agora.",
      date: 1590522289000,
    });
}

const main = async () => {
    const news = await createNews
    console.log(news)
}

main()









