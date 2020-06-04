const arr: number[] = [22,47,50,1,4,500];

const oddsArray = arr.filter(num => num % 2 !== 0).length;
console.log("Números impares: ", oddsArray);

const total: number = arr.reduce((total, arr) => total + arr, 0);
console.log("A soma dos números do Array é: ", total);

console.log("Quantidade de elementos no Array: ", arr.length);


