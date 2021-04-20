let apiKey = "ggemu0OTM7hZFqmAr8VVFOhwI4ode6Qg";

// Funcionalidades Estilo

function cambioStyleDay2(){
    document.getElementById("estilosUpload").href= "StyleUpload.css";
    document.getElementById("T2").src = "assets/gifOF_logo.png";
}

function cambioStyleNigth2(){
    document.getElementById("estilosUpload").href= "StyleUploadNigth.css";
    document.getElementById("T2").src = "assets/gifOF_logo_dark.png";
}


function consultaEstilo2(){
    let consultaEst2 = localStorage.getItem("style");
    if(consultaEst2 == 'Nigth'){
        cambioStyleNigth2();
    }else{
        cambioStyleDay2();
    }
};

consultaEstilo2();


// Funcionalidades Upload

function getStreamAndRecord () {
    return navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
                height: { max: 480 }
                }
        })
    }

function postGif(archivo) {
    fetch('https://upload.giphy.com/v1/gifs?'+'api_key=' + apiKey +'&file=' + archivo, 
        {mode:'cors',
        method: 'POST',
        body: archivo
        })
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
        sacarId = data.data.id;
        return data;
    })
    .catch((error) => {
        return error
    })
}

let videoVivoJS = document.getElementById("videoVivo");
let videoGrabadoJS = document.getElementById("videoGrabado");
let videoGrabadoJS2 = document.getElementById("videoGrabado2");
let videoGrabadoJS3 = document.getElementById("guifoSubido");
let sacarId;

// botones Upload


let funcionComenzar = document.getElementById('comenzar');
funcionComenzar.addEventListener("click", () =>{
    document.getElementById("crearGuifos").style = "display: none";
    document.getElementById("chequeoAntes").style = "display: block";
    getStreamAndRecord().then (stream => {
        videoVivoJS.srcObject = stream;
        videoVivoJS.play();
    });
});

// FUNCION PARA APAGAR LA CAMARA
// function stopStreamedVideo() {
//     getStreamAndRecord().then (stream => {
//         stream.getTracks().forEach(track => {track.stop()});
//         videoVivoJS.srcObject = null;
//     });
// };

function botonCerrarVentana() {
    document.getElementById("crearGuifos").style = "display: none";
    document.getElementById('chequeoAntes').style = "display: none";
    document.getElementById('capturaGuifo').style = "display: none";
    document.getElementById('vistaPrevia').style = "display: none";
    document.getElementById('subiedoGuifo').style = "display: none";
    document.getElementById('subidoExito').style = "display: none";
}

let funcionCapturar = document.getElementById('capturar');
funcionCapturar.addEventListener("click", () => {
    console.log("Haz realizado click en el botón Capturar.");
    getStreamAndRecord().then(async function (stream){
        let recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function() {
            console.log('started')
            }
    });     
        recorder.startRecording();

        const sleep = m => new Promise(r => setTimeout(r, m));
        await sleep(3000);

        recorder.stopRecording(function(){
            var blob = recorder.getBlob();
            console.log(blob)
            videoGrabadoJS.src = URL.createObjectURL(blob);
            videoGrabadoJS2.src = URL.createObjectURL(blob);
            videoGrabadoJS3.src = URL.createObjectURL(blob);

            let form = new FormData();
            form.append('file', blob, 'myGif.gif');
            console.log(form.get('file'));
            postGif(form);
        });
    });
    window.setTimeout("document.getElementById('chequeoAntes').style = 'display: none'", 4000);
    window.setTimeout("document.getElementById('capturaGuifo').style = 'display: block'", 4500);
});

var nVariable;

let j = 1;
for (j;typeof(localStorage.getItem(j)) !== 'object'; j++){
    nVariable = j
}

function agregarAlLocal(nValor){
    if ((nVariable) !== undefined) {
        nVariable = nVariable + 1;
        localStorage.setItem(nVariable.toString(),nValor);
        let mostrar = localStorage.getItem(nVariable.toString());
        console.log(mostrar);
      } 
      else {
        nVariable = 1;
        localStorage.setItem(nVariable.toString(),nValor);
        let mostrar = localStorage.getItem(nVariable.toString());
        console.log(mostrar);
      }
    // return nVariable;
}    

document.getElementById('listo').onclick = function botonListo(){
    document.getElementById('capturaGuifo').style = "display: none";
    document.getElementById('vistaPrevia').style = "display: block";
    //stopStreamedVideo();
}

var concatenarURL;
document.getElementById('subirGuifo').onclick = function botonsubirGuifo(){
    document.getElementById('vistaPrevia').style = "display: none";
    concatenarURL = "https://media.giphy.com/media/" + sacarId + "/giphy.gif";
    agregarAlLocal (concatenarURL);
    document.getElementById('subiedoGuifo').style = "display: block";
    window.setTimeout("document.getElementById('subiedoGuifo').style = 'display: none'", 4000);
    window.setTimeout("document.getElementById('subidoExito').style = 'display: block'", 4000);
}

function copiarPortapapeles(){
    document.getElementById("portapapeles").innerHTML = concatenarURL;
    var codigoACopiar = document.getElementById("portapapeles");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    document.getElementById("portapapeles").innerHTML = "";
}

function downloadPortapapeles(){
    var enlace = document.createElement('a');
    enlace.href = concatenarURL;
    enlace.target = "_blank";
    document.body.appendChild(enlace);
    enlace.click();
    enlace.parentNode.removeChild(enlace);
}

document.getElementById('listoFinal').onclick = function botonListoFinal(){
    document.getElementById('subidoExito').style = "display: none";
    hayAlgoEnElLocal();
}

function agregarCosas(a){
    var nuevosImgGuifo = document.createElement("img");
    nuevosImgGuifo.src = a;
    var claseImg = document.createAttribute("class");
    claseImg.value = "imagenSugerencia";
    nuevosImgGuifo.setAttributeNode(claseImg);

    var nuevosDivGuifo = document.createElement("div");
    var claseDiv = document.createAttribute("class");
    claseDiv.value = "cajita";
    nuevosDivGuifo.setAttributeNode(claseDiv);

    document.getElementById("cajasMisGuifos").appendChild(nuevosDivGuifo).appendChild(nuevosImgGuifo);
}

let i = 1;
function hayAlgoEnElLocal(){
    if(typeof(localStorage.getItem("1")) !== 'object'){
        for (i;typeof(localStorage.getItem(i)) !== 'object'; i++){
            agregarCosas(localStorage.getItem(i));
        }
    }
}
hayAlgoEnElLocal();