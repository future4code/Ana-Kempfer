//Exercícios de interpretação de código

/*
EXERCÍCIO 1
O que o código abaixo está fazendo? Qual o resultado 
impresso no console? 

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

RESPOSTA: o código dá uma variável e é utilzado o loop 
For que nos dá um começo em que diz que a variável i = 0 
e que nossa condição de continuação é o i ser menor que 15, 
e diz que toda vez que houver essa condição de continuação 
a variável vai ser encrementada em +1. O resultado impresso
no console é: 105




EXERCÍCIO 2

a.O que o comando .push faz?

RESPOSTA: O Push empurra os números que saem da verificação 
feita pelo for na const item e atribui eles a const
novaLista. 



b.Qual o valor impresso no console?

RESPOSTA: 10,15,25,30



c.Qual seria imprimido no console se a variável numero 
tivesse o valor de 3? E se tivesse o valor de 4?

RESPOSTA: valor 3 = 12,15,18,21,27,30
          valor 4 = 12




Exercícios de escrita de código

EXERCÍCIO 3

a. Escreva um programa que devolva o maior e o menor 
números contidos no array original

RESPOSTA:
const array = [80,30,130,40,60,21,70,120]
let menor = Infinity
let maior = 0

for(let i = 0; i < array.length; i++){
    const elemento = array[i]

    if (elemento > maior){
        maior = elemento
    }
    
    if (elemento < menor){
        menor = elemento
    }
}


console.log("O maior número é ", maior, "e o menor é ", menor)






b. Escreva um programa que devolva um novo array contendo
todos os valores do array original divididos por 10.

RESPOSTA:

const array = [80,30,130,40,60,21,70,120]
let novoArray = 0

for(let i = array; i < array.length; i++){
    
    novoArray = novoArray.push(array[i] / 10)
}

console.log(novoArray) //NAO PRONTO





c. Escreva um programa que devolva um novo array contendo, 
somente, os números pares do array original.

RESPOSTA:
let array = [80,30,130,40,60,21,70,120]

let arrayPares = array.filter(function(number){
    return number % 2 == 0;
});

console.log(arrayPares)



d. Escreva um programa que gere um novo array contendo 
strings, da seguinte forma: "O elemento do índex i é: numero"

RESPOSTA:*/







