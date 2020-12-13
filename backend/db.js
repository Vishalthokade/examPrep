const mysql = require('mysql2')
const pool = mysql.createPool ({
    host : '192.168.29.237',
    user : 'dac',
    password : 'dac',
    database : 'DB',
    port : 9090,
    connectionLimit : 20 
})
module.exports = pool
