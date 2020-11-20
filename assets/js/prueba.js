const primario= "#414E89", secundario= "#4FAEE1", oscuro= "#41505B";
// las variables son las clases del archivo css porque sino no anda el cambio de tema

var estilo;

function temaOscuro(){
    let i = undefined;
    var tag = 1
    document.getElementById("tema").innerHTML = "Tema Claro";
    document.getElementById("tema").setAttribute ("onclick","temaClaro()");
    document.body.style.backgroundColor = oscuro;
    document.body.style.color = "white";
    estilo = document.getElementsByClassName("menu")[0];
    estilo.style.backgroundColor = secundario;
    estilo = document.getElementsByClassName("itemMenu active")[0];
    estilo.style.backgroundColor = primario;
    FontWhite(tag);
    articles(tag);
    footer(tag);
    small(tag);
    itemPagina(tag);
    aside(tag);
    usuario(tag);
    icon (tag);
}

function temaClaro(){
    let i = undefined;
    var tag = 0;
    document.getElementById("tema").innerHTML = "Tema Oscuro";
    document.getElementById("tema").setAttribute ("onclick","temaOscuro()");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    estilo = document.getElementsByClassName("menu")[0];
    estilo.style.backgroundColor = primario;
    estilo = document.getElementsByClassName("itemMenu active")[0];
    estilo.style.backgroundColor = secundario;
    FontWhite(tag);
    articles(tag);
    footer(tag);
    small(tag);
    itemPagina(tag);
    aside(tag);
    usuario(tag);
    icon (tag);
}

// 0= claro 1=oscuro
function articles (tag) {
    let estilo;
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("article")[i];
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.backgroundColor = "white";
            estilo.style.color = "black";
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--primario)";
            estilo.style.borderColor = primario;
        }else if (tag == 1){
            estilo.style.backgroundColor = oscuro;
            estilo.style.color = "white";
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--secundario)";
            estilo.style.borderColor = secundario;
        }
    }
}

function FontWhite(tag){
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("fontWhite")[i];
        
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.color = "white";
        }else if(tag == 1){
            estilo.style.color = "black";
        }
    }
}

function footer (tag) {
    let estilo;
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByTagName("footer")[i];
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.backgroundColor = primario;
            estilo.style.color = "white";
        }else if (tag == 1){
            estilo.style.backgroundColor = secundario;
            estilo.style.color = "black";
        }
    }
}

function small (tag) {
    let estilo;
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByTagName("small")[i];
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.color = "white";
        }else if (tag == 1){
            estilo.style.color = "black";
        }
    }
}

function aside (tag) {
    let estilo;
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByTagName("aside")[i];
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.color = "white";
            estilo.style.backgroundColor = primario;
            estilo.style.borderColor = secundario;
        }else if (tag == 1){
            estilo.style.color = "black";
            estilo.style.backgroundColor = secundario;
            estilo.style.borderColor = primario;
        }
    }
}

function itemPagina (tag) {
    let estilo;
    for (i = 0; i < 25; i++){
        estilo = document.getElementsByClassName("itemPagina")[i];
        if (estilo == null){
            break;
        }
        if (tag == 0){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--primario)";
            estilo.style.borderColor = primario;
        }else if (tag == 1){
            estilo.style.boxShadow = "0 0.2rem 0.5rem var(--secundario)";
            estilo.style.borderColor = secundario;
        }
    }
}
