const arr: number[] = [22,47,50,1,4,500];

// const isOdd: any (element: number, index: number, array: number){
//     return (element % !== 0)
// }
//Não está aceitando a comparação !==, o código diz que espera um operador TS

// const arrayOfOdds = [arr].filter(isOdd);
// console.log("Números Impares: ", arrayOfOdds);


const total: number = arr.reduce((total, arr) => total + arr, 0);
console.log("A soma dos números do Array é: ", total);

console.log("Quantidade de elementos no Array: ", arr.length);


