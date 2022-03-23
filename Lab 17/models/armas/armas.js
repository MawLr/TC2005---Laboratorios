const fs = require('fs');

var armas = [];

//Para leer las películas
fs.readFile('./maquinas-guerra/armas.json', (err, data) => {
    if (err) throw err;
    armas = JSON.parse(data);
    console.log(armas)
});

module.exports = class Armas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        armas.push(this);
        let arm = JSON.stringify(armas);
        fs.writeFileSync('./maquinas-guerra/armas.json', arm, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllArmas() {
        return armas;
    }
}