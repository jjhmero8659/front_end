var mysql = require("mysql")

const db = mysql.createPool({ //커넥션 풀
    host : "localhost" , // 다른 IP 연결 x
    user : "root",      // root 권한
    password : "1234",  
    database:"mysql_db_person",
    // port:3306
})

module.exports = db;