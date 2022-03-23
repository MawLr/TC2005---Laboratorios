const db = require('../../util/database');

module.exports = class Aviones{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre,nueva_descAvion,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descdescAvion = nueva_descAvion;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO aviones (nombre, descAvion, imagen) VALUES (?, ?,?)',
        [this.nombre, this.descAvion, this.imagen]
    );
    }

    getAvion(){
        return db.execute('Select *  FROM aviones WHERE idAvion = (?)',[this.id]
        );
    }

    static fetchOneAvion(idAvion) {
        return db.execute('SELECT * FROM aviones WHERE idAvion=?', [idAvion]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllAviones() {
       console.log(db.execute('SELECT * FROM aviones'));
        return db.execute('SELECT * FROM aviones');
    }

}