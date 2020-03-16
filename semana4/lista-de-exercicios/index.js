
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



/////////////////////////////////////////////////////////////////////////////////

EXERCICIO DE LÓGICA DE PROGRAMAÇÃO


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

*/

//3. RESPOSTA: 
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


//4. RESPOSTA: 

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





//5. RESPOSTA: 
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




////////////////////////////////////////////////////////////////////////////

//EXERCICIOS DE FUNÇÕES 

//1.  RESPOSTA: 

let numeros = [9, 5, 3, 8, 10]
let segundoMaior = 0
let segundoMenor = 0 


array.sort(function(a, b) {
    return a - b
};
    segundoMenor = array[(array.length - 2)]
    console.log("O Segundo menor número é: ", segundoMenor)

    segundoMaior = array[1]
    console.log("O segundo maior número é: ", segundoMaior)





//2. RESPOSTA: 
let alert = (enviarMensagem === true) => {
   return alert("Hello Future4")
}

let enviarMensagem = alert



///////////////////////////////////////////////////////////////////////////////

//EXERCÍCIOS DE OBJETOS

1. RESPOSTA: 
Os Arrys são um tipo de estrutura que representa representa um bloco de dados 
que podem ser números, string, objetos, bolleanos, armazenados em um única variável.
São organizados de modo consecutivo. Devem ser usados quando queremos que o nome dos 
objetos armazenados sejam números. 
Os objetos são uma expécie de "super variável" que apresenta valores que recebem um nome
e que podem ser recuperados e usados em outras partes do código.devem ser usados
quando quisermos que os nomes dos elementos sejam strings.



//2.RESPOSTA:
function criaRetangulo(lado1,lado2){
       
    let informacoesDoRetangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2*(lado1 + lado2)),
        area: (lado1 * lado2),
    };
    console.log(informacoesDoRetangulo);
}

const retangulo = criaRetangulo(Number(prompt("Digite a altura do retângulo")),Number(prompt("Digite a lartura do retângulo")));





//3.RESPOSTA: 
const filme = {
    nome: "Pulp Fiction",
    diretor: "Quentin Tarantino",
    ano: 1995,
    ator1: "John Travolta",
    ator2: "Uma Thurman",
};

const mensagem = ["Venhe assistir ao filme "+ filme.nome + " de "+ filme.ano+" dirigido por "+ filme.diretor+ " e estrelado por "+ filme.ator1+ " e "+ filme.ator2]

alert(mensagem);




//4. RESPOSTA: 
const pessoa = {
    nome: "Rafaela Prestes",
    idade: 10,
    email: "rafaelaprestes@gmail.com",
    endereço: "Ibirubá - RS",
}

function anonimizarPessoa() {
    const anonimo = {
    ...pessoa,
    nome: "ANÔNIMO",
    }

    console.log(anonimo)
}

console.log(anonimizarPessoa())




//////////////////////////////////////////////////////////////////////

//EXERCÍCOOS DE FUNÇÕES DE ARRAY

//1. a e b RESPOSTA:
const pessoas = [
    {nome: "Pedro", idade: 20},
    {nome: "João", idade: 10},
    {nome: "Paula", idade: 12},
    {nome: "Artur", idade: 89},
]

let adultos = pessoas.filter((pessoas,index,array)=>{
    return pessoas.idade >= 20
})

let criancaAdolescente = pessoas.filter((pessoas,index,array)=>{
    return pessoas.idade <= 20
})

console.log(adultos);
console.log(criancaAdolescente);



//2. RESPOSTA: 

//A
const numeros = [1,2,3,4,5,6];

let numerosMultiplicadosPorDois = numeros.map((numeros,index,array)=>{
    return numeros*2;
})

console.log(numerosMultiplicadosPorDois);


//B

let numerosMultiplicadosPorTres = numeros.map((numeros,index,array)=>{
    return numeros*3;
})

console.log(numerosMultiplicadosPorTres);


//C
let verificaParidade = numeros.map((numeros,index,array)=>{
    if(numeros%2 ===0){
        
        console.log(numeros+ " é par");
    }else{
        
        console.log(numeros+ " é impar")
    }
})


//3. RESPOSTA: 

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//A
let quemPodeEntrarNoBrinquedo = pessoas.filter((pessoas,index,array)=>{
    return (pessoas.idade >14 && pessoas.idade <= 60)&& pessoas.altura >= 1.5
})

console.log(quemPodeEntrarNoBrinquedo);


//B
let quemNãoPodeEntrarNoBrinquedo = pessoas.filter((pessoas,index,array)=>{
    return (pessoas.idade > 60 && pessoas.altura <= 1.5) && pessoas.idade <= 14
})

console.log(quemNãoPodeEntrarNoBrinquedo);




//4. RESPOSTA (não consegui fazer o envio do email, somente o reconhecimento dos dois grupos)
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

let consultasNaoCanceladas = consultas.filter((consultas,index,array)=>{
    return consultas.cancelada === false
})

console.log(consultasNaoCanceladas)

let consultasCanceladas = consultas.filter((consultas,index,array)=>{
    return consultas.cancelada === true
})

console.log(consultasCanceladas)





//5. RESPOSTA: 
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


let saldoAtualizado = contas.forEach((contas,index,array)=>{
    let novoSaldo = contas.saldoTotal - contas.compras
    return novoSaldo
})

console.log(saldoAtualizado)
