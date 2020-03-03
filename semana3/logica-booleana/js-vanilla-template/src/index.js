



//exercicio de interpretação de código

/*
1. Leia o código abaixo. 
Indique todas as mensagens impressas no console.

a. false
b. true
c. true
d. false
e. object
*/


/*
2. Leia o código abaixo.

I. undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 1
VII. 1
*/



/*
a. O que é `array` e como se declara em `JS`?
- O array no JS é uma variável em que é possível guardar mais de uma informaçõa dentro dela. 
O array se declara utilizando [ ] colchetes. 


b. Qual o index inicial de um `array`?
-declaramos se a variável é const ou let, depois nomeamos a array e utilizamos "[]" para armazenar os itens do array.


c. Como se determinar o tamanho do `array`?
- O tamanho do array pode ser determinado usando a declaração:
console.log(nomeDoArray.length)


d. Indique todas as mensagens impressas no console.
console.log(nomeDoArray) NÃO ENTENDI DIREITO. 
*/





//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. Conversão de medidas:

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32


//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
const grausFahrenheit = 77
grausKelvin = (grausFahrenheit - 32) *5/9 + 273.15
console.log("Graus Kelvin: " + grausKelvin)

//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
const grausCelcius = 80
grausFahrenheit = (grausCelcius) *9/5 + 32
console.log("Graus Fahrenheit: " + grausFahrenheit )


//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
const grausC = 30
grausK = grausC + 273
console.log("Graus Kelvin: " + grausk)

grausF = grausC *9/5 + 32
console.log("Graus Fahrenheit: " + grausF)


//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
const grausC = prompt ("Qual é a temperatura em graus Celcius?")
grausF = grausC *9/5 + 32
console.log("Graus Fahrenheit: " + grausF)


//2. PROGRAMA COM PERGUNTAS E RESPOSTAS. 


const nome = prompt("Qual é o seu nome?")
console.log("1. Qual o seu nome?")
console.log("Resposta: " + nome)

const idade = prompt("Qual é a sua idade?")
console.log("2. Qual é a sua idade?")
console.log("Resposta: " + idade)

const endereco = prompt("Qual é o seu endereço?")
console.log("3. Qual é o seu endereço?")
console.log("Resposta: " + endereco)

const nomeDaMae = prompt("Qual o nome da sua mãe?")
console.log("4. Qual o nome da sua mãe?")
Console.log("Resposta: " + nomeDaMae)

const nomeDoPai = prompt("Qual o nome do seu pai?")
console.log("5. Qual o nome do seu pai?")
console.log("Resposta: " + nomeDoPai)



//3. EXERCÍCIO DE CALCÚLO DE QUILOWATT-HORA
/*
Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar 
o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia 
custa R$0.05. Faça um programa que receba o valor do salário mínimo e a quantidade
de quilowatts consumida por uma residência.
*/
 
const custoKwh = 0.05
const salario = 1.039
const consumo = 280

//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

consumoDia = consumo *24
consumoMes = consumoDia *31
valorTotal = consumoMes * custoKwh
console.log("Valor total a pagar: R$" + valorTotal)


/*b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.*/

const desconto = 15/100
valorTotalComDesconto = valorTotal - desconto 
console.log("Valor total a pagar com desconto: R$" + valorTotalComDesconto)


//DESAFIOS


/*a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa
 que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
20lb equivalem a X kg
*/
const libras = 20
quilogramas = libras / 2.2046
console.log("20lb equivalem a " + quilogramas + "kg")


/*
b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa 
que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
10.5oz equivalem a X kg
*/
const onça = 10.5
quilogramas = onça / 35.274
console.log("10.5oz equivalem a " + quilogramas + "kg")


/*
c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que
 converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
100mi equivalem a X m
*/
const milhas = 100
metros = milhas / 0.00062137
console.log("100mi equivalem a " + metros + "m")


/*
d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que 
converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
50ft equivalem a X m
*/
const pes = 50
metros = pes / 3.2808
console.log("50ft equivalem a " + metros + "m")



/*
e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa 
que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l`
*/
const galao = 103.56
litros = galao / 0.26417
console.log("103.56gal equivalem a " + litros + "l")



/*
f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que 
converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
450 xic equivalem a X l
*/
const xicaras = 450
litros = (xicaras *6)/25
console.log("450 xic equivalem a " + litros + "l")



/*
g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele 
peça ao usuário o valor da unidade original antes de converter. 
*/
const xicaras = prompt("Quantas xícaras você vai usar?")
litros = (xicaras *6)/25
console.log(xicaras + "xic equivalem a " + litros + "l")





