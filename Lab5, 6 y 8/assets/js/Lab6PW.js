// (!) El archivo HTML se está haciendo en el framework Bootstrap Studio y será publicado al estar listo. (!) //

// Variables universales:

let btnVerify = document.getElementById("btnVerify");
let pwInput = document.getElementById("pwInput");
let pwVerify = document.getElementById("pwVerify");
let bannerSc = document.getElementById("bannerSuccess");
let bannerEr = document.getElementById("bannerError");

// Función para verificar:

function verifyPw(){
    let pw = pwInput.value;
    let pwVer = pwVerify.value;
    
    if (pw == pwVer){
        bannerSc.className += ' visible';
        bannerSc.classList.remove("invisible");
        
        bannerEr.className += ' invisible';
        bannerEr.classList.remove("visible")
    } else {
        bannerEr.className += ' visible';
        bannerEr.classList.remove("invisible")
        
        bannerSc.className += ' invisible';
        bannerSc.classList.remove("visible");
    }
}

btnVerify.onclick = verifyPw;