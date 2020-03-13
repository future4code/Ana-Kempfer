
//ATIVIDADE 2

class novoPost{
    constructor(titulo,autor,post){
        this.titulo = titulo
        this.autor = autor
        this.post = post
    }
}


//ATIIDADE 5
function incluirPost(){


    const incluirTitulo = document.getElementById("textTitulo");
    const incluirAutor = document.getElementById("textAutor");
    const incluirPost = document.getElementById("textAreaPost");
    
    const novoTitulo = incluirTitulo.value;
    const novoAutor = incluirAutor.valeu;
    const novoPost = incluirPost.value;


    //ATIVIDADE 3
   // const classNovoPost = new novoPost (novoTitulo,novoAutor,novoPost);
    //console.log(classNovoPost());
        
   
    //AVALIA SE ALGUM CAMPO ESTÁ EM BRANCO E ALERTA AO USUÁRIO
    if(novoTitulo === ""||
    novoAutor === ""||
    novoPost === ""){
        alert("Um dos campos obrigatórios está em branco.");
    }else if(novoTitulo !== ""){
            const tituloNovo = document.getElementById("divDoTitulo");
            tituloNovo.innerHTML += "<h2>"+novoTitulo+"</h2>";
            novoTitulo = "";
    }else if(novoAutor !== ""){
        const autorNovo = document.getElementById("divDoAutor");
        autorNovo.innerHTML += "<h3>"+novoAutor+"</h3>";
        novoAutor = "";
    }else if(novoPost !== ""){
        const postNovo = document.getElementById("divDoPost");
        postNovo.innerHTML += "<p>"+novoPost+"</p>";
        novoPost = "";
    }
}


