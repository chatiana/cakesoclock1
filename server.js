const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
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


app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');