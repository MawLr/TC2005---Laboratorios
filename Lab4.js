let test = "Esto es una prueba";

console.log(test);
console.error(test);
console.info(test);
console.warn(test);

for(let i = 1; i <=10; i++) {
    console.log(i);
}

alert(test);

const nombre = prompt("Escribe tu nombre:");
console.log(nombre);

const respuesta = confirm("¿Estás seguro?");
console.log(respuesta);

function fPrueba () {
    console.log("Función prueba");
}

fPrueba();

// Funciones modernas
const fPrueba2 = (arg) => console.log(arg + " con prueba 2");

fPrueba2(test);

//arreglos

const array = ["alfa", "beta", "gamma"];
array.push(test);
array[3]="delta"
console.log(array);

// Laboratorio 4

document.getElementById("output").innerHTML = "Outputs del Lab 4";