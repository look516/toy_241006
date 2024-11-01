/* mysql setting */
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'root',
  database : 'toy_241006'
});

module.exports = connection;