const db = require('../../util/database');

module.exports = class Armas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre,nueva_descArma,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descArma = nueva_descArma;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO armas (idArma, nombre, descArma, imagen) VALUES (?, ?, ?, ?)',
        [this.nombre, this.descArma, this.imagen]
    );
    }

    getArma(){
        return db.execute('SELECT *  FROM armas WHERE idArma = (?)',[this.id]
        );
    }

    static fetchOneArma(idArma) {
        return db.execute('SELECT * FROM armas WHERE idArma=?', [idArma]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllArmas() {
       console.log(db.execute('SELECT * FROM armas'));
        return db.execute('SELECT * FROM armas');
    }

}