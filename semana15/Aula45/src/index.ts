import * as moment from "moment";
import * as fs from "fs";

moment.locale("pt-br")

const today = moment()
today.utcOffset("-0500").format("DD MM YYYY")
console.log(today.format("DD MM YYYY"))

type event = {
    name: string, 
    description: string, 
    date: string
}

const arrayOfEvents: any[] = []

function getEvents(): any {

    const taskFile: string = 'taskFile.json';
      
        try {
            
            const readFile = fs.readFileSync(taskFile)
            const treatedData: string = readFile.toString()
            const taskFileToObject: any = JSON.parse(treatedData)
            console.log(taskFileToObject)
    
        } catch (err) {
    
            console.log("Erro ao ler arquivo")
        }
    }







