// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'nozomi.proxy.rlwy.net',
  port: 55081,
  user: 'root',
  password: 'bKPlyDgMKLBybmMvtasOCupiVTEvpHPl',
  database: 'railway'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err.stack);
    return;
  }
  console.log('✅ Connected to MySQL as ID ' + connection.threadId);
});

module.exports = connection;
