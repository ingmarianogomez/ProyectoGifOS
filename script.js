let apiKey = "ggemu0OTM7hZFqmAr8VVFOhwI4ode6Qg";

// Funcionalidades Estilo

document.getElementById('desplegable').style.display = "none";
function botonDesplegable(){
    if (document.getElementById('desplegable').style.display === "none"){
            document.getElementById('desplegable').style = "display: flex";
            } 
            else{
            document.getElementById('desplegable').style = "display: none";
            }
};

function cambioStyleDay(){
    document.getElementById("estilos").href= "Style.css";
}

function cambioStyleNigth(){
    document.getElementById("estilos").href= "StyleNigth.css";
}

function botonDay(){
    document.getElementById("T1").src = "assets/gifOF_logo.png";
    localStorage.setItem("style","Day");
    cambioStyleDay();
}

function botonNigth(){
    document.getElementById("T1").src = "assets/gifOF_logo_dark.png";
    localStorage.setItem("style","Nigth");
    cambioStyleNigth();
}

function consultaEstilo(){
    let consultaEst = localStorage.getItem("style");
    if(consultaEst == "Nigth"){
        botonNigth();
    } else{
        botonDay();
    }
};

consultaEstilo();

// Funcionalidades Index

function getSearchResults(search) {
    const found =
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search +
    '&api_key=' + apiKey + "&limit=8")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch((error) => {
        return error
    })    
    return found
};

function ponerBusquedas(resultadoBusqueda){
    let b;
    for (b=0; b < 8; b++) {
        let sacarIdbusquedas = resultadoBusqueda.data[b].id;
        let concatenarURLBusqueda = "https://media.giphy.com/media/" + sacarIdbusquedas + "/giphy.gif";
        let idbusquedas = b + "busqueda";
        document.getElementById(idbusquedas).src = (concatenarURLBusqueda);
    };
    document.getElementById('resutadoBusqueda').style = "display: block";
};

function getTags(tag) {
    const foundTag =
    fetch('http://api.giphy.com/v1/gifs/search/tags?q=' + tag +
    '&api_key=' + apiKey + "&limit=3")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch((error) => {
        return error
    })    
    return foundTag;
};

var valoresBotonera;
let cajaCompletar = document.querySelector("input");
cajaCompletar.addEventListener("input", () => {
    document.getElementById('busquedaDesplegable').style = "display: flex";
    document.getElementById("lupa").src="assets/lupa.svg";
    let consultaEst2 = localStorage.getItem("style");
        if(consultaEst2 == 'Nigth'){
            document.getElementById('botonBuscar').style = "color: #FFFFFF;";
            document.getElementById('botonBuscar').style.backgroundColor = "#EE3EFE";
            }else{
                document.getElementById('botonBuscar').style = "color: #110038;";
                document.getElementById('botonBuscar').style.backgroundColor = "#F7C9F3";
            };
    let valorCaja = document.querySelector("input").value;
    getTags(valorCaja).then(response => {
        valoresBotonera = response;
        document.getElementById("botonSug1").innerHTML = (response.data[0].name);
        document.getElementById("botonSug2").innerHTML = (response.data[1].name);
        document.getElementById("botonSug3").innerHTML = (response.data[2].name);
    // window.setTimeout("document.getElementById('busquedaDesplegable').style = 'display: none'", 10000);
    });
});

let botonBuscarGral = document.getElementById("botonBuscar");
botonBuscarGral.addEventListener("click", () =>{
    let valorCaja2 = document.querySelector("input").value;
    getSearchResults(valorCaja2).then(response => {
        // console.log(response);
        ponerBusquedas(response);
        document.getElementById('busquedaDesplegable').style = "display: none";
        agregarboton(valorCaja2);
     });
});

let botonSug1let = document.getElementById("botonSug1");
botonSug1let.addEventListener("click", () =>{
    let valorbotonSug1let = valoresBotonera.data[0].name;
    getSearchResults(valorbotonSug1let).then(response => {
        // console.log(response);
        ponerBusquedas(response);
        document.getElementById('busquedaDesplegable').style = "display: none";
        agregarboton(valorbotonSug1let);
     });
});

let botonSug2let = document.getElementById("botonSug2");
botonSug2let.addEventListener("click", () =>{
    let valorbotonSug2let = valoresBotonera.data[1].name;
    getSearchResults(valorbotonSug2let).then(response => {
        // console.log(response);
        ponerBusquedas(response);
        document.getElementById('busquedaDesplegable').style = "display: none";
        agregarboton(valorbotonSug2let);
     });
});

let botonSug3let = document.getElementById("botonSug3");
botonSug3let.addEventListener("click", () =>{
    let valorbotonSug3let = valoresBotonera.data[2].name;
    getSearchResults(valorbotonSug3let).then(response => {
        // console.log(response);
        ponerBusquedas(response);
        document.getElementById('busquedaDesplegable').style = "display: none";
        agregarboton(valorbotonSug3let);
     });
});


function agregarboton(a){
    var nuevoBoton = document.createElement("button");
    nuevoBoton.innerHTML = a;
    var claseBoton = document.createAttribute("class");
    claseBoton.value = "agregarBoton";
    nuevoBoton.setAttributeNode(claseBoton);
    document.getElementById("nuevosBotones").appendChild(nuevoBoton);
};

let sugerencia1 = "Messi";
let sugerencia2 = "guitarra";
let sugerencia3 = "Alf";
let sugerencia4 = "Bombonera";

document.getElementById("sugerencia1").innerHTML = "#" + sugerencia1;
document.getElementById("sugerencia2").innerHTML = "#" + sugerencia2;
document.getElementById("sugerencia3").innerHTML = "#" + sugerencia3;
document.getElementById("sugerencia4").innerHTML = "#" + sugerencia4;

function getSearchSugerencias(search) {
    const sug =
    fetch('http://api.giphy.com/v1/gifs/search?q=' + search +
    '&api_key=' + apiKey + "&limit=1")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        return data;
    })
    .catch((error) => {
        return error
    })    
    return sug
};

function ponerSugerencia1(sugerencia){
    let sacarIdSug = sugerencia.data[0].id;
    let concatenarURLSugerencia = "https://media.giphy.com/media/" + sacarIdSug + "/giphy.gif";
    document.getElementById("imagenSugerencia1").src = concatenarURLSugerencia;
};

getSearchSugerencias(sugerencia1).then(response => {
    ponerSugerencia1(response);
});

function ponerSugerencia2(sugerencia){
    let sacarIdSug = sugerencia.data[0].id;
    let concatenarURLSugerencia = "https://media.giphy.com/media/" + sacarIdSug + "/giphy.gif";
    document.getElementById("imagenSugerencia2").src = concatenarURLSugerencia;
};

getSearchSugerencias(sugerencia2).then(response => {
    ponerSugerencia2(response);
});

function ponerSugerencia3(sugerencia){
    let sacarIdSug = sugerencia.data[0].id;
    let concatenarURLSugerencia = "https://media.giphy.com/media/" + sacarIdSug + "/giphy.gif";
    document.getElementById("imagenSugerencia3").src = concatenarURLSugerencia;
};

getSearchSugerencias(sugerencia3).then(response => {
    ponerSugerencia3(response);
});

function ponerSugerencia4(sugerencia){
    let sacarIdSug = sugerencia.data[0].id;
    let concatenarURLSugerencia = "https://media.giphy.com/media/" + sacarIdSug + "/giphy.gif";
    document.getElementById("imagenSugerencia4").src = concatenarURLSugerencia;
};

getSearchSugerencias(sugerencia4).then(response => {
    ponerSugerencia4(response);
});

function listOfTag(valor) {
    var listOfTagVar =
    fetch('http://api.giphy.com/v1/tags/related/{' + valor + '}?' +
    '&api_key=' + apiKey + "&limit=3")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        return data;
    })
    .catch((error) => {
        return error;
    })    
    return listOfTagVar;
};

function titulosTendencias1(numeral){
    listOfTag(numeral).then(response => {
        var concatenadoTitulosTendencias = "#" + (response.data[0].name) + " " +
         "#" + (response.data[1].name) + " " +"#" + (response.data[2].name) + " ";
         document.getElementById("tagSugerencia1").innerHTML = concatenadoTitulosTendencias;
    });
}

function titulosTendencias2(numeral){
    listOfTag(numeral).then(response => {
        var concatenadoTitulosTendencias = "#" + (response.data[0].name) + " " +
         "#" + (response.data[1].name) + " " +"#" + (response.data[2].name) + " ";
         document.getElementById("tagSugerencia2").innerHTML = concatenadoTitulosTendencias;
    });
}

function titulosTendencias3(numeral){
    listOfTag(numeral).then(response => {
        var concatenadoTitulosTendencias = "#" + (response.data[0].name) + " " +
         "#" + (response.data[1].name) + " " +"#" + (response.data[2].name) + " ";
         document.getElementById("tagSugerencia3").innerHTML = concatenadoTitulosTendencias;
    });
}

function titulosTendencias4(numeral){
    listOfTag(numeral).then(response => {
        var concatenadoTitulosTendencias = "#" + (response.data[0].name) + " " +
         "#" + (response.data[1].name) + " " +"#" + (response.data[2].name) + " ";
         document.getElementById("tagSugerencia4").innerHTML = concatenadoTitulosTendencias;
    });
}

document.getElementById("tagSugerencia1").innerHTML = titulosTendencias1(sugerencia1);
document.getElementById("tagSugerencia2").innerHTML = titulosTendencias2(sugerencia2);
document.getElementById("tagSugerencia3").innerHTML = titulosTendencias3(sugerencia3);
document.getElementById("tagSugerencia4").innerHTML = titulosTendencias4(sugerencia4);


let botonVerMas1 = document.getElementById("verMas1");
botonVerMas1.addEventListener("click", () =>{
    getSearchResults(sugerencia1).then(response => {
        ponerBusquedas(response);
     });
});

let botonVerMas2 = document.getElementById("verMas2");
botonVerMas2.addEventListener("click", () =>{
    getSearchResults(sugerencia2).then(response => {
        ponerBusquedas(response);
     });
});

let botonVerMas3 = document.getElementById("verMas3");
botonVerMas3.addEventListener("click", () =>{
    getSearchResults(sugerencia3).then(response => {
        ponerBusquedas(response);
     });
});

let botonVerMas4 = document.getElementById("verMas4");
botonVerMas4.addEventListener("click", () =>{
    getSearchResults(sugerencia4).then(response => {
        ponerBusquedas(response);
     });
});

document.getElementById("imagenSugerencia1").addEventListener("mouseover", () =>{
    document.getElementById('tagSugerencia1').style = "display: flex";
});

document.getElementById("imagenSugerencia1").addEventListener("mouseout", () =>{
    document.getElementById('tagSugerencia1').style = "display: none";
});

document.getElementById("imagenSugerencia2").addEventListener("mouseover", () =>{
    document.getElementById('tagSugerencia2').style = "display: flex";
});

document.getElementById("imagenSugerencia2").addEventListener("mouseout", () =>{
    document.getElementById('tagSugerencia2').style = "display: none";
});

document.getElementById("imagenSugerencia3").addEventListener("mouseover", () =>{
    document.getElementById('tagSugerencia3').style = "display: flex";
});

document.getElementById("imagenSugerencia3").addEventListener("mouseout", () =>{
    document.getElementById('tagSugerencia3').style = "display: none";
});

document.getElementById("imagenSugerencia4").addEventListener("mouseover", () =>{
    document.getElementById('tagSugerencia4').style = "display: flex";
});

document.getElementById("imagenSugerencia4").addEventListener("mouseout", () =>{
    document.getElementById('tagSugerencia4').style = "display: none";
});


function traeTendencias() {
    const foundTag =
    fetch('http://api.giphy.com/v1/gifs/trending?'+
    'api_key=' + apiKey + "&limit=20")
    .then((response) => {
        return response.json()
    })
    .then(data => {
        return data
    })
    .catch((error) => {
        return error
    })    
    return foundTag;
};

traeTendencias().then(response =>{
    let t;
    // console.log(response);
    for (t=0; t < 20; t++) {
    // for (t=0; t < 4; t++) {
        let sacarIdTendencias = response.data[t].id;
        let concatenarURLTendencias = "https://media.giphy.com/media/" + sacarIdTendencias + "/giphy.gif";
        let idtendencias = t + "tendencia";
        document.getElementById(idtendencias).src = (concatenarURLTendencias);
    };
});