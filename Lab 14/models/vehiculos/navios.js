const fs = require('fs');

var navios = [];

//Para leer las películas
fs.readFile('./maquinas-guerra/navios.json', (err, data) => {
    if (err) throw err;
    navios = JSON.parse(data);
    console.log(navios)
});

module.exports = class Navios{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        navios.push(this);
        let nav = JSON.stringify(navios);
        fs.writeFileSync('./maquinas-guerra/navios.json', nav, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllNavios() {
        return navios;
    }
}