var arr = [22, 47, 50, 1, 4, 500];
var oddsArray = arr.filter(function (num) { return num % 2 !== 0; }).length;
console.log("Números impares: ", oddsArray);
var total = arr.reduce(function (total, arr) { return total + arr; }, 0);
console.log("A soma dos números do Array é: ", total);
console.log("Quantidade de elementos no Array: ", arr.length);
