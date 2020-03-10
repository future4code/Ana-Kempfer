
function criarNovaTarefa(){
    
    const input = document.querySelector("input")
    const novoItemDaLista = input.value
    const semana = document.querySelector("#diaDaSemana")
    const diaDaSemana = semana.value
   
    if(novoItemDaLista === "" || novoItemDaLista === null){

        alert ("Insira uma nova tarefa.")

    }else{

        switch (diaDaSemana){
            case "Segunda-feira":{
                const listaTarefas = document.getElementById("segunda")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }
            break;
            case "Terça-feira":{
                const listaTarefas = document.getElementById("2")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
            case "Quarta-feira":{
                const listaTarefas = document.getElementById("3")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
            case "Quinta-feira":{
                const listaTarefas = document.getElementById("4")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
            case "Sexta-feira":{
                const listaTarefas = document.getElementById("5")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
            case "Sábado":{
                const listaTarefas = document.getElementById("6")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
            case "Domingo":{
                const listaTarefas = document.getElementById("7")
                listaTarefas.innerHTML += "<li>" + novoItemDaLista + "</li>"
                input.value = ""
            }break;
        }
    }
}

// if(novaTarefa === ""|| novaTarefa === null){
    //         alert("Insira uma nova tarefa.")
    //     }else{
    //         const novoItem = document.getElementById("segunda")
    //         novoItem.innerHTML += "<li>" + novoItemDaLista + "</li>"
    //         input.value = ""
    // }



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