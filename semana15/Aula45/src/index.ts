import * as moment from "moment";
import * as fs from "fs";

// moment.locale("pt-br")
// const today = moment()
// today.utcOffset("-0500").format("DD MM YYYY")
// console.log(today.format("DD MM YYYY"))

type event = {
    name: string, 
    description: string, 
    date: string,
    hour: string
}

const newEvent: event = {
    name : 'Evento importante',
    description : 'comprar leite e pagar o aluguel',
    date : '15/06/2020',
    hour : '10:20',
}

function createEvent(): any {
    const eventFile: string = 'eventFile.json'
    const data: any = newEvent

    try{
        fs.appendFileSync(eventFile, data,'utf8');
        console.log('Evento criado com sucesso!')
    }catch (err){
        console.log("Erro ao criar o evento")
    }
}




function getEvents(): any {

    const eventFile: string = 'eventFile.json';
      
    try {            
        const readFile: Buffer = fs.readFileSync(eventFile)
        const treatedData: string = readFile.toString()
        const eventFileToObject: any = JSON.parse(treatedData)
        console.log("Lista de tarefas: ",eventFileToObject)
    
    } catch (err) {
        console.log("Erro ao ler arquivo de tarefas")
    }
    
}









