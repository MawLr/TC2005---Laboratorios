const db = require('../../util/database');

module.exports = class Navios{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre,nueva_descNavio,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descNavio = nueva_descNavio;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO navios (nombre, descNavio, imagen) VALUES (?, ?,?)',
        [this.nombre, this.descNavio, this.imagen]
    );
    }

    getNavio(){
        return db.execute('Select *  FROM navio WHERE idNavio = (?)',[this.id]
        );
    }

    static fetchOneNavio(idNavio) {
        return db.execute('SELECT * FROM navio WHERE idNavio=?', [idNavio]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllNavios() {
       console.log(db.execute('SELECT * FROM navios'));
        return db.execute('SELECT * FROM navios');
    }

}