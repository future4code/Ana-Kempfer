const equation: string = process.argv[2];
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);

function choiseEquation (equation:string, number1: number, number2: number){
  switch(equation){
    case "add":
      console.log("Resposta: ",number1+number2)
      break;
    case "sub":
      console.log("Resposta: ",number1-number2)
      break;
    case "mult":
      console.log("Resposta: ",number1*number2)
      break;
    case "div":
      console.log("Resposta: ",number1/number2)
      break;
    default:
      console.log("Digite uma equação válida")
      break;
  }
}