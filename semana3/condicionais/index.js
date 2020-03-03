//Exercícios de interpretação de código

//EXERCÍCIO 1


/* RESPOSTA: O código solicita ao usuário um número para ser verificado, a segunda 
variável transforma a string em um número. O if faz a verificação da semelhança entre 
o resto da divisão do número informado por dois, e compara se é igual a 0,ou seja se o número é par, 
se for ele imprime no console a mensagem "Passou no teste.", mas se o número for diferente de 0, 
ou seja, número impar, ele aciona o else e imprime no console a mensagem "Não passou no teste."
*/

//EXERCÍCIO 2


/*
a. Para que serve o código acima?

RESPOSTA: O código serve para mostrar o valor de alguma fruta que seja informada pelo usuário.
Mas o código tem um erro pois os cases não estão informados corretamente. 



b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

RESPOSTA: O preço da fruta maça é R$ 



c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas 
e 1 uva. Qual seria o preço que você pagaria?

RESPSOTA: 


d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console
 se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário 
 "BREAK PARA O ITEM d.")?

 RESPOSTA:






 EXERCÍCIO 3


 Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do 
 terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo

RESPOSTA: Haverá um erro pois segundo as regras de bloco ou escopo uma variável não pode ser acessada 
fora do escopo no qual está incerida, ou seja, não pode ser usada em outra parte do escopo global se 
estiver em algum escopo.




Exercícios de escrita de código

EXERCÍCIO 4

a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem 
**decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar
comentário descrevendo o que aconteceu)

RESPOSTA:*/

const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o segundo número."))

if (numero1 > numero2){
    console.log(numero1 ,"", numero2) //SE O NUMERO1 FOR MAIOR ELE APARECERÁ NA FRENTE
} else if (numero2 > numero1){
    console.log(numero2 ,"", numero1) //SE O NUMERO2 FOR MAIOR ELE APARECERÁ NA FRENTE
} else (numero1 === numero2){
    console.log("O primeiro número é igual ao segundo")//SE OS DOIS FOREM IGUAIS APARECERÁ ESSA MENSAGEM
}




/*b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**.
O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário 
descrevendo o que aconteceu)

RESPOSTA:*/
const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o segundo número"))
const numero3 = Number(prompt("Digite o terceiro número."))
//ESSE ESCOPO DETERMINA QUAL DOS NÚMEROS É O MAIOR E A ORDEM EM  QUE DEVEM APARECER, RESPEITANDO SUA ORDEM DE TAMANHO
if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
    console.log(numero1 ,",", numero2, ",", numero3) 
} else if (numero1 >numero2 && numero1 > numero3 && numero3 > numero2){
    console.log(numero1, ",", numero3, ",", numero2)
} else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3){
    console.log(numero2 ,",", numero1, ",", numero3)
} else if (numero2 > numero1 && numero3 > numero1){
    console.log(numero2,",", numero3, ",", numero1)
} else if (numero3 > numero2 && numero3 > numero1 && numero2 > numero1){
    console.log(numero3, "", numero2, "", numero1)
} else if (numero3 > numero2 && numero3 > numero1 && numero1 > numero2){
    console.log(numero3,",", numero1,",", numero2)
} else (numero1 === numero2 && numero1 === numero3){
    console.log("Os números iguais")//SE OS NÚMEROS FOREM IGUAIS APARECERÁ ESSA MENSAGEM
}



/*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao
 usuário indicando que ele deve, ao menos, inserir um número diferente.

RESPOSTA:*/

const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o segundo número"))
const numero3 = Number(prompt("Digite o terceiro número."))

if(numero1 === numero2 && numero1 === numero3){
    console.log("Você deve digitar  ao menos número com valor diferente.")
}


//EXERCÍCIO 5

/*
Vamos criar um programa que classifique os animais dados alguns critérios. O primeiro critério de 
divisão é se eles possuem ossos formando seu esqueleto ou não. Caso possuam, são vertebrados, caso 
contrário, invertebrados. O nosso foco é realizar a classificação só do primeiro caso. Se possuir pelos, 
entende-se que ele é um mamífero; e este pode ser classificado como um ser humano ou não (mamífero não 
humano), simplesmente, pelo fato dele ser considerado racional ou não. Se não for mamífero, entende-se 
que ele é uma ave, se possuir penas. Se não possuir, devemos entender uma característica importante: se 
ele é um animal terrestre. Se não for, diz-se que é um peixe; se  for, ele pode ser um anfíbio ou um 
réptil. Ele será o primeiro (anfíbio), se passar uma parte da vida em ambiente aquático; e será o segundo
(réptil), caso contrário.

a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. (Coloque a imagem
do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário 
durante a resolução deste exercício)*/




/*b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções
 são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado.
 */

 



