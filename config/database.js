const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "praktyka",
});
db.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection established');
});
module.exports = db;