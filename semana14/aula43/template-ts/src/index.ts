
// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);

//EXERCICIO1

const equation: string = process.argv[2];
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);

function choiseEquation (equation:string, number1: number, number2: number){
  switch(equation){
    case "add":
      console.log(number1+number2)
      break;
    case "sub":
      console.log(number1-number2)
      break;
    case "mult":
      console.log(number1*number2)
      break;
    case "div":
      console.log(number1/number2)
      break;
    default:
      console.log("Digite uma equação válida")
      break;
  }
}








