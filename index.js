//importar path para hacer la pagina absoluta
const path = require('path');

//importar express-handlebars
const exphbs =require('express-handlebars');

//instaciar express
const express = require('express');

//instaciar serrvidor express
const app = express();

//Registar estar de render para handlebars
app.engine('handlebars', exphbs());
//Use el motor de render handlebars
app.set('view engine', 'handlebars');

//hacer publica la carpeta para que se muestre el style
app.use(express.static('public'));


//Configurar ruta inicial - se agregó taller1
app.get('/', function(req, res){
    //console.log('hola desde la consola');
    //res.send('hola en chrome')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Abrir la shop de la pagina
app.get('/tienda', function(req, res){
    console.log('hola desde shop');
    //responder con un texto
    //res.send('Página de tienda');
    res.render('store');
});

//Abrir la página de product de la página.
app.get('/product', function(req, res){
    console.log('hola en product');
    //res.send('Página de product');
    res.render('product');
});

//Abrir la página de checkout de la página.
app.get('/checkout', function(req, res){
    console.log('hola en checkout');
    //res.send('Página de checkout');
    res.render('checkout');
});


//abrir la pagina de lina de la pagina
app.get('/lina', function(req, res){
    res.send('pagina de lina');
});

//iniciar servidor en puerto 3000
app.listen(3000, function(){
    console.log('servidor iniciado en puerto 3000');
});