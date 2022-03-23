const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'lab17',
    password: 'Crikey_Mate31'
});

module.exports = pool.promise();