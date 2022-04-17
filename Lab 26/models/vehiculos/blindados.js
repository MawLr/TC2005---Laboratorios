const db = require('../../util/database');

module.exports = class Blindados{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre,nueva_descBlindado,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descBlindado = nueva_descBlindado;
        this.imagen = nueva_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO blindados (nombre, descBlindado ,imagen) VALUES (?, ?,?)',
        [this.nombre, this.descBlindado,this.imagen]
    );
    }

    getBlindado(){
        return db.execute('Select *  FROM blindados WHERE idBlindado = (?)',[this.id]
        );
    }

    static fetchOneBlindado(idBlindado) {
        return db.execute('SELECT * FROM blindado WHERE idBlindado=?', [idBlindado]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllBlindados() {
       console.log(db.execute('SELECT * FROM blindados'));
        return db.execute('SELECT * FROM blindados');
    }

    static fetch(valor) {
        return db.execute('SELECT * FROM blindados  WHERE (nombre LIKE ? OR descBlindado LIKE ?)', ['%'+valor+'%', '%'+valor+'%']);
    }

}