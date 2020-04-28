const assert = require('assert');

function configureRoutes(app, db) {

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

        //Filtros
        var filters = {
            $and:[]
        }
        
        //Buscar productos filtrados por precio-menor
        if (req.query.price_lt) {
            filters.$and.push({
                //crear  arreglo filtrado
                price: {
                    $lte: parseInt(req.query.price_lt)
                } 
            })
        }

        //Buscar productos filtrados por precio-mayor
        if (req.query.price_gt) {
            filters.$and.push({
                //crear  arreglo filtrado
                price: {
                    $gte: parseInt(req.query.price_gt)
                } 
            })
        }
        
        //FREESHIPING
        //correr productos para agregar freeShipping (si el precio es mayor o menor a un valor, el envio es gratis)
        products.forEach(function (elem) {
            if (elem.price_lt >= 16) {
                elem.freeShipping = true;
            } else {
                elem.freeShipping = false;
            }
        });

        //BUSCAR productos filtrados por palabra
        if (req.query.search) {
            filters.$and.push({
                //crear  arreglo filtrado
                name: {
                    $regex: new RegExp(req.query.search,'i'),
                } 
            })
        }

        //Ordenamientos
        var sortings={};
        //descendiente
          if(req.query.sort == 'price_desc'){
              sortings.price = -1;
          }
        //ascendiente
          if(req.query.sort == 'price_asc'){
            sortings.price = 1;
        }

        // Get the products collection
        const collection = db.collection('products');
        // Find some products
        collection.find({filters}).sort(sortings).toArray(function (err, docs) {
            assert.equal(err, null);
            //objeto contexto
            var context = {
                //para que se vea la imagen y el precio de cada producto en la tienda
                products: products,
                products: docs,
            }
            //res.send('Página de tienda');
            res.render('store', context);
        });
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

}

module.exports = configureRoutes;
