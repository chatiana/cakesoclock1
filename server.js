const mysql = require("mysql");
const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");


var routes = require('./routes');

var app = express();


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
var mysqlConnection = mysql.createConnection({
    host:"cakesdb1.cvnkqaqbljxc.us-east-1.rds.amazonaws.com",
    user: "admin",
    password : "Ireland1",
    database : "cakesOclockSch", //schemaName
    multipleStatements : true
});

// connect to database
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

// configure middleware
//app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
//app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
//app.use(fileUpload()); // configure fileupload



//load products route
var products = require('./routes/products'); 
var app = express();



// set the app to listen on the port
app.listen(process.env.port || 3306);
console.log('Running at Port 3306');