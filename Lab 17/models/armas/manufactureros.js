const db = require('../../util/database');

module.exports = class Manufactureros{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre,nueva_descMan,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descMan = nueva_descMan;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO manufactureros (nombre, descMan, imagen) VALUES (?, ?,?)',
        [this.nombre, this.descMan, this.imagen]
    );
    }

    getMan(){
        return db.execute('Select *  FROM manufactureros WHERE idMan = (?)',[this.id]
        );
    }

    static fetchOneMan(idMan) {
        return db.execute('SELECT * FROM manufactureros WHERE idMan=?', [idMan]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllMan() {
       console.log(db.execute('SELECT * FROM manufactureros'));
        return db.execute('SELECT * FROM manufactureros');
    }

}