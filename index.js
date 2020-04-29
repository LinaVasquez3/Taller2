//MONGO
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//importar path para hacer la pagina absoluta
const path = require('path');

//importar express-handlebars
const exphbs = require('express-handlebars');

const configureRoutes = require('./routes');
//instaciar express
const express = require('express');

//instaciar serrvidor express
const app = express();

//Enviar informacióndel checkout al servidor
app.use(express.urlencoded({extended: true}));

//Registar estar de render para handlebars
app.engine('handlebars', exphbs());
//Use el motor de render handlebars
app.set('view engine', 'handlebars');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    configureRoutes(app, db);

});


//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));

//iniciar servidor en puerto 3000
app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});