const fs = require('fs');

var aviones = [];

//Para leer las películas
fs.readFile('./maquinas-guerra/aviones.json', (err, data) => {
    if (err) throw err;
    aviones = JSON.parse(data);
    console.log(aviones)
});

module.exports = class Aviones{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        aviones.push(this);
        let avi = JSON.stringify(aviones);
        fs.writeFileSync('./maquinas-guerra/aviones.json', avi, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllAviones() {
        return aviones;
    }
}