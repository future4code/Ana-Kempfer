// type person = {
//   name: string
// }
// function createPerson(name: string): person {
// 	return {name: name} 
// } 
// const myPerson2 = createPerson("Robson");
// console.log(myPerson2);
//EXERCICIO1
var equation = process.argv[2];
var number1 = Number(process.argv[3]);
var number2 = Number(process.argv[4]);
function choiseEquation(equation, number1, number2) {
    switch (equation) {
        case "add":
            console.log(number1 + number2);
            break;
        case "sub":
            console.log(number1 - number2);
            break;
        case "mult":
            console.log(number1 * number2);
            break;
        case "div":
            console.log(number1 / number2);
            break;
        default:
            console.log("Digite uma equação válida");
            break;
    }
}
