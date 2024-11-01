/* mysql setting
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'root',
  password : 'root',
  database : 'toy_241006'
});

module.exports = connection;
*/






const { Sequelize } = require('sequelize');

// Sequelize 인스턴스 생성
const sequelize = new Sequelize('toy_241006', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// 데이터베이스 연결 테스트
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
