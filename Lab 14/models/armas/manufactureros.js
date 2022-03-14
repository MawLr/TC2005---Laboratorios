const fs = require('fs');

var manufactureros = [];

//Para leer las películas
fs.readFile('./maquinas-guerra/manufactureros.json', (err, data) => {
    if (err) throw err;
    manufactureros = JSON.parse(data);
    console.log(manufactureros)
});

module.exports = class Manufactureros{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        manufactureros.push(this);
        let man = JSON.stringify(manufactureros);
        fs.writeFileSync('./maquinas-guerra/manufactureros.json', man, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllManufactureros() {
        return manufactureros;
    }
}