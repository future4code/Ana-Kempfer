import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA


const carta = comprarCarta();

console.log ("Bem vindo ao jogo de BlackJack!")

      
if(confirm("Quer iniciar uma nova rodada?")){

   let usuario = 0;
   let carta;
   let cartaTexto = 0;
      for(let i = 0; i < 2; i++){
         carta = comprarCarta();
            cartaTexto += carta.texto; 
               usuario += carta.valor;
        
      } 

   let computador = 0;
   let textoCarta = 0;
      for(let i=0; i<2; i++){
         carta = comprarCarta();
            textoCarta += carta.texto;
               computador += carta.valor;
      }
   
   if(carta === "A"){
      for(let i = 0; i < 3; i++){
         carta = comprarCarta();
            cartaTexto += carta.texto; 
               usuario += carta.valor;
      }
   }

     

   console.log("Usuário - cartas: ", cartaTexto,"- pontuação: ",usuario)
   console.log("Computador - cartas: ", textoCarta,"- pontuação: ",computador)
   
   
   if(usuario>computador){
      console.log("O usuário venceu.")
   }else if(usuario<computador){
      console.log("O computador venceu.")
   }else{
      console.log("Houve um empate.")
   }
   
   
}


if(confirm("Quer iniciar uma rodada?")){
  let cartasUsuario = [carta,carta]
  let catasComputador = [cartas,cartas]
 
  confirm("Suas cartas são ", cartasUsuario,".","A carta revelada do computador é ", cartasComputador[0]+"\n"+ "Deseja comprar mais uma carta?")

}




 

 


//  EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
 //  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
  // console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
  // console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 




