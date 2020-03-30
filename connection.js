const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host:"cakesdb1.cvnkqaqbljxc.us-east-1.rds.amazonaws.com",
    user: "admin",
    password : "Ireland1",
    database : "cakesOclockSch", //schemaName
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log("Connection failed");
    }
})

module.exports = mysqlConnection;

