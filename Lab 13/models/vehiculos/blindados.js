const fs = require('fs');

var blindados = [];

//Para leer las películas
fs.readFile('./maquinas-guerra/blindados.json', (err, data) => {
    if (err) throw err;
    blindados = JSON.parse(data);
    console.log(blindados)
});

module.exports = class Blindados{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        blindados.push(this);
        let blind = JSON.stringify(blindados);
        fs.writeFileSync('./maquinas-guerra/blindados.json', blind, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllBlindados() {
        return blindados;
    }
}