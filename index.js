//importar path para hacer la pagina absoluta
const path = require('path');

//importar express-handlebars
const exphbs = require('express-handlebars');

//PRODUCTS
//importar modulo de product, importar la otra pagina de los 20 productos (product.js)
const products = require('./product');

//Recorrer productos para agregar freeShipping (si el precio es mayor o menor a un valor, el envio es gratis)
products.forEach(function (elem) {
    if (elem.price >= 16) {
        elem.freeShipping = true;
    } else {
        elem.freeShipping = false;
    }
});

console.log(products);


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
app.get('/', function (req, res) {
    //console.log('hola desde la consola');
    //res.send('hola en chrome')
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Abrir la shop de la pagina
app.get('/shop', function (req, res) {
    console.log('hola desde shop');
    console.log(req.query);
    //responder con un texto

    //Variable filtrada
    var filtered = products;
    //Buscar productos filtrados por precio 
    if (req.query.price) {
        //crear copia del arreglo filtrado 
        filtered = products.filter(function (elem) {
            var parts = req.query.price.split('_'); // more_16
            // precio menor al que el usuario preguntó
            if (elem.price < parts[1] && parts[0] == 'less') {
                return true;
            }
            if (elem.price >= parts[1] && parts[0] == 'more') {
                return true;
            }
        });
    }

    //BUSCAR productos filtrados por palabra
    if (req.query.search) {
        filtered = products.filter(function (elem) {
            // si el nombre del producto incluye lo que el usuario buscó
            if (elem.tittle.includes(req.query.search)) {
                return true;
            }
        });
    }


    //objeto contexto
    var context = {
        //para que se vea la imagen y el precio de cada producto en la tienda
        products: products,
        products: filtered,
    }
    //res.send('Página de tienda');
    res.render('store', context);
});

//Abrir la página de product de la página.
app.get('/product/:name/:id', function (req, res) {
    console.log('hola en product');

    //objeto contexto product
    var context = {};


    //CONTEXT    
    //NO ENTIENDO PA QUE ES ESTA VAINA
    //POSIBLEMENTE ES EL ID
    var foundElement = products.find(function (elem) {
        if (elem.id == req.params.id) {
            return true;
        }
    });
    context = foundElement;

    /*Aquí se coloca todo lo de cada producto 
    if(req.params.name == 'sombra'){
        context = {};
    }

    if(req.params.name == 'fresa'){
        context = {};
    }*/

    console.log(req.params.name);
    //res.send('Página de product');
    res.render('product', context);
});

//Abrir la página de checkout de la página.
app.get('/checkout', function (req, res) {
    console.log('hola en checkout');
    //res.send('Página de checkout');

    //objeto contexto checkout
    var context = {

    }
    res.render('checkout');
});


//abrir la pagina de lina de la pagina
app.get('/lina', function (req, res) {
    res.send('pagina de lina');
});

//iniciar servidor en puerto 3000
app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});