

function criarNovaTarefa(){
 
    const input = document.querySelector("input")
    const novoItemDaLista = input.value
    
    if(novaTarefa === ""|| novaTarefa === null){
            alert("Insira uma nova tarefa.")
        }else{
            const novoItem = document.getElementById("segunda")
            novoItem.innerHTML += "<li>" + novoItemDaLista + "</li>"
            input.value = ""
    }
}




// function criarNovaTarefa(){
    
//     const dias = document.getElementById("terca")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("terca")
//             novoItem.innerHTML += "<li>" + novoItemDaLista + "</li>"
//             input.value = ""
//         }        
    
// }

// function criarNovaTarefa(){
    
//     const dias = document.getElementById("quarta")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("quarta")
//             novoItem.innerHTML += "<li>" + novoItemDaLista + "</li"
//             input.value = ""
//     }
// }

// function criarNovaTarefa(){
    
//     const dias = document.getElementById("quinta")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("quinta")
//             novoItem.innerHTML += "<li id='4'>" + novoItemDaLista + "</li"
//             input.value = ""
//     }
// }

// function criarNovaTarefa(){
    
//     const dias = document.getElementById("sexta")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("sexta")
//             novoItem.innerHTML += "<li id='5'>" + novoItemDaLista + "</li"
//             input.value = ""
//     }
// }

// function criarNovaTarefa(){
    
//     const dias = document.getElementById("sabado")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("sabado")
//             novoItem.innerHTML += "<li id='6'>" + novoItemDaLista + "</li"
//             input.value = ""
//     }
// }

// function criarNovaTarefa(){
    
//     const dias = document.getElementById("domingo")
//     const input = document.querySelector("input")
//     const novoItemDaLista = input.value
    
//     if(novaTarefa === ""){
//             alert("Insira uma nova tarefa.")
//         }else{
//             const novoItem = document.getElementById("domingo")
//             novoItem.innerHTML += "<li id=''>" + novoItemDaLista + "</li"
//             input.value = ""
//     }
// }