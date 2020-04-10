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

    //objeto contexto
    var context = {
        tittle: 'El titulo cambiado',
    }
    //res.send('Página de tienda');
    res.render('store', context);
});

//Abrir la página de product de la página.
app.get('/product/:name', function(req, res){
    console.log('hola en product');
    
    //objeto contexto product
    var context = {};

    //lista de productos (20)
    //Aquí se coloca todo lo de cada producto
    if(req.params.name == 'sombra'){
        context = {
            tittle: 'titulo desde product',
            img: '/img/honey.jpg',
            description: 'descripcion desde product',
            //filtros (options y variation)
            options: ['grande', 'mediano', 'pequeño'],
            variations: [
                {
                    name: 'con kit de brocas + brillo labial',
                    price: 250 ,
                },
                {
                    name: 'con kit de brocas,',
                    price: 200 , 
                },
                {
                    name: 'solo sombra',
                    price: 100 , 
                }
            ],
            price: 125,
            freeShiping: true,
        }
    }

    if(req.params.name == 'fresa'){
        context = {
            tittle: 'titulo desde fresa',
            img: '/img/strawberry.jpg',
            description: 'descripcion desde fresa',
            options:[],
            price: 50,
            freeShiping: false,
        }
    }
    
    console.log(req.params.name);
    //res.send('Página de product');
    res.render('product', context);
});

//Abrir la página de checkout de la página.
app.get('/checkout', function(req, res){
    console.log('hola en checkout');
    //res.send('Página de checkout');

    //objeto contexto checkout
    var context = {
        
    }
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