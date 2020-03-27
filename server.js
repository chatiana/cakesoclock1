const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

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

app.listen(3000);