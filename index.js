//importar path para hacer la pagina absoluta
const path = require('path');

//instaciar express
const express = require('express');

//instaciar serrvidor express
const app = express();

//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));


//configurar ruta inicial
app.get('/', function(req, res){
    //console.log('hola desde la consola');
    //res.send('hola en chrome')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


//abrir la shop de la pagina
app.get('/shop', function(req, res){
    console.log('hola desde shop');
    //responder con un texto
    res.send('pagina de shop');
});

//abrir la paglina de la pagina
app.get('/lina', function(req, res){
    res.send('pagina de lina');
});

//iniciar servidor en puerto 3000
app.listen(3000, function(){
    console.log('servidor iniciado en puerto 3000');
});