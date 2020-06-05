import * as fs from "fs";


const fileName: string = process.argv[2];
const data: string = process.argv[3];

try {
    fs.writeFileSync(fileName, data);
    console.log("Arquivo criado com sucesso!");
} catch(err) {
    console.log(err)
}
