
// EXERCICOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1. RESPOSTA: A função dada faz a conversão de um valor em Reais para Dólar, 
Ela solicita que o usuário informe o valor da cotação atual do Dolár e atravez do 
retourn permite que seja acessado o cálculo de multiplicação, do valor em reais 
pelo valor da cotação, esse resultado é chamado no escopo global atravez 
da const meu dinheiro. No console vai aparecer o valor de 100 reais multiplicado 
pelo valor da cotação indicado pelo usuário. 


2. RESPOSTA: A função dada mostra quanto que um valor rende em determinado
investimento, ela dá a variável valoAposInvestimento e usa uma estrutura de escolha, 
swich onde é dado opções de investimento e se caso for a opção escolhida 
ela usa o valor informado pelo usuário e multiplica pelo valor do rendimento 
do investimento escolhido. Caso não seja escolhido nenhuma opção de investimento 
o códido dá um Alert au usuário dizendo que o tipo de investimento informado é incorreto. 
Utiliza o retourn para poder ser usada em outros lugares do código. 
A função é acessada usando as constantes novoMontante e segundoMontante. 
O console vai imprimir: Ações 165 
                        

3. RESPOSTA: É dado um array de numeros, e se utiliza o loop "for of" 
para separar os números pares da lista. Isso é feito comparando cada numero 
do Array e vendo se ele quando divisível por 2 tem resto zero, se isso for verdadeiro ele 
esses números e da um push na const arra1 que estava vazia e recebe os números. 
Mesma coisa é feita com os números impares que são empurrados para o Arrai2
No console vai ser impresso: Quantidade total de números: 13
                             [12,64,44,84,48,14]
                             [25,55,121,11,51,73,111,283


4. RESPOSTA: É dada um Array de números, um array com valor infinity e 
um com valor 0. Uma estrutura de loop é usada para percorrer os números do array números    
e dá duas condições, primeiros de que numero for menor que nuemro1 (que está definido como infinito)
se essa condição for verdadeira o array numero1 vai receber o valor de numero.
A segunda condição é de que se numero for maior que o valor de array numero2 
(que tem valor zero atribuido), o array numero2 vai receber o valor de numero. 
No console vai ser impresso: [25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99
13,31,83,131,1,1.1,-10,25,1590]
[25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,25,1590]
*/




//EXERCICIO DE LÓGICA DE PROGRAMAÇÃO

/*
1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa
 para exemplificar.
RESPOSTA:   Estrutura "for of" = for(let array of array1){}
Estrutura "for" = (var i = 0; i < array.length; i++){}
Estrutura "forEach" =  while(i <= array){}



2. RESPOSTA: 
a) False
b) False
c) True
d) True
e) True



3. Você tem que escrever um código que, dado um número N, ele imprima
(no console) os N primeiros números pares (por exemplo, se N for 3,
você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4,
6 e 8).  Um colega seu disse que já começou esta tarefa, mas 
não conseguiu terminar. Dê uma olhada no código dele:

RESPOSTA: 
const quantidadeDeNumerosPares()
let i = 0
let resultado = 0
for(let i of quantidadeDeNumerosPares()){
    for(i=0; i<quantidadeDeNumerosPares.length; i++){
        if(i % 2 === 0){
            i.push(resultado)
        }
    }
    return resultado;
}

console.log(reultado)


4. 

RESPOSTA: 

let ladoA = 0
let ladoB = 0
let ladoC = 0

function determinarTriangulo(ladoA,ladoB,ladoC){
    if(ladoA === ladoB && ladoA === ladoC){
        console.log("É um triângulo Equilátero")
    }else if (ladoA !== ladoB && ladoA === ladoC){
        console.log("É um triângulo Isóceles")
    }else if (ladoA !== ladoB && ladoA !== ladoC){
        console.log("É um triângulo Escaleno")
    }
}

const resultado = determinarTriangulo()





5. RESPOSTA: 
const primeiroNumero = number(prompt("Digite o primeiro número"))
const segundoNumero = number(prompt("Digite o segundo número"))
let numeroMaior = 0
let divisivel = ""
let diferenca = 0 

console.log("ENTRADA: ", primeiroNumero, "e" , segundoNumero)

function avaliacaoDeDoisNumeros(){
    if(primeiroNumero > segundoNumero){
        numeroMaior.push(primeiroNumero)
    }else{
        numeroMaior.push(segundoNumero)
    }

    if(primeiroNumero%segundoNumero === 0){
        divisivel = "é divisível por"
    }else{
       divisivel = "não divisível por"
    }

    if(primeiroNumero%segundoNumero === 2){
        diferenca = primeiroNumero%segundoNumero 
    }
}

let resultado = avaliacaoDeDoisNumeros(primeiroNumero,segundoNumero)

console.log("SAÌDA:")
console.log("O maior númeor é: ", numeroMaior)
console.log(primeiroNumero, divisível, segundoNumero)
console.log("A diferença entre eles é ", diferenca)



EXERCICIOS DE FUNÇÕES 

1.  RESPOSTA: Escreva uma função que receba um array de números e
 imprima na tela o segundo maior e o segundo menor número. 
 Em seguida, invoque essa função.



 






*/

