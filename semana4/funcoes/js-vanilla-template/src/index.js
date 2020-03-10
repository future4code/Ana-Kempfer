// Exercícios de interpretação de código
// EXERCÍCIO 1
/*
a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
RESPOSTA:  [] 


b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
RESPOSTA: 
(6) [0, 1, 0, 1, 2, 3]



c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
RESPOSTA:
(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]




EXERCÍCIO 2

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

a. Explicite quais são as saídas impressas no console.
RESPOSTA:



b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`) 
e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
RESPOSTA:
0 -> Mostra a posição do termo "Darvas" no arrayDeNomes
2 -> Mostra a posição do termo "João" no arrayDeNomes
undefined -> Mostra undefined por que o termo "Paula" não existe no array.






EXERCÍCIO 3

O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente 
o que ela faz e sugira um nome melhor para ela!

function resultadoFinal(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}
Essa função reatribui 



EXERCÍCIO 4

Escreva as funções explicadas abaixo:

a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a 
"idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro

- Exemplo

b.  Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
(`string`), a idade (`number`), o endereço (`string`) e um `boolean` que representa se é estudante ou não. 
Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o 
template:

    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

- Exemplo

Para a entrada:  `"Goli"`, `23`, `"Rua Guarapari 190"` e `true`, deve retornar:

`"Eu sou Goli, tenho 23 anos, moro em Rua Guarapari 190 e sou estudante."`





*/

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));


