// (!) El archivo HTML se está haciendo en el framework Bootstrap Studio y será publicado al estar listo. (!) //

// Definición del Botón:

let logpanelBtn = document.getElementById("logpanelBtn");

// Definición de la función para desplegar el Form:

function displayLogIn(){
    let logDiv = document.getElementById("loginDiv");
    logDiv.classList.remove("invisible");
    logDiv.classList.add("visible");
}

// Evento a detonar la función:

logpanelBtn.onclick = displayLogIn;
