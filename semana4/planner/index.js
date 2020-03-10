
function criarNovaTarefa(){
    
    const input = document.getElementById("input");
    const novoItemDaLista = input.value;

    const semana = document.getElementById("select");
    const diaDaSemana = semana.value;
   
    if(novoItemDaLista === ""){

        alert ("Insira uma nova tarefa.")

    }else{

        switch (diaDaSemana){
            case "Segunda-feira":{
                const listaTarefas = document.getElementById("segunda");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            
            case "Terça-feira":{
                const listaTarefas = document.getElementById("terca");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            case "Quarta-feira":{
                const listaTarefas = document.getElementById("quarta");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            case "Quinta-feira":{
                const listaTarefas = document.getElementById("quinta");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            case "Sexta-feira":{
                const listaTarefas = document.getElementById("sexta");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            case "Sábado":{
                const listaTarefas = document.getElementById("sabado");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
            case "Domingo":{
                const listaTarefas = document.getElementById("domingo");
                listaTarefas.innerHTML += "<li onclick='riscarTarefa'>" + novoItemDaLista + "</li>"
                input.value = "";
                break;
            }
        }
    }
}

