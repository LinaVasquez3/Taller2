const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

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
            $and: []
        }

        //name
        if (req.query.name) {
            filters.$and.push({
                //crear  arreglo filtrado
                name: {
                    $eq: req.query.name
                }
            });
        }

        //rating1
        //Buscar productos filtrados por rating mayor
        if (req.query.rating_1) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $eq: parseInt(req.query.rating_1)
                }

            });
        }

        //rating2
        //Buscar productos filtrados por rating mayor
        if (req.query.rating_2) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $eq: parseInt(req.query.rating_2)
                }

            });
        }

        //rating3
        //Buscar productos filtrados por rating mayor
        if (req.query.rating_3) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $eq: parseInt(req.query.rating_3)
                }

            });
        }

        //rating4
        //Buscar productos filtrados por rating mayor
        if (req.query.rating_4) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $eq: parseInt(req.query.rating_4)
                }

            });
        }

        //rating5
        //Buscar productos filtrados por rating mayor
        if (req.query.rating_5) {
            filters.$and.push({
                //crear  arreglo filtrado
                rating: {
                    $eq: parseInt(req.query.rating_5)
                }

            });
        }


        //freeShipping
        //Buscar productos filtrados por FreeShippingApproved
        if (req.query.priceFreeShipping) {
            //crear  arreglo filtrado
            filters.price = {
                $gte: parseInt(req.query.priceFreeShipping)
            }
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

        //BUSCAR productos filtrados por palabra
        if (req.query.search) {
            filters.$and.push({
                //crear  arreglo filtrado
                name: {
                    $regex: new RegExp(req.query.search, 'i'),
                }
            })
        }

        //elimina filtros apenas entre a la pagina de shop
        if (filters.$and.length == 0) {
            delete filters.$and;
        };

        //Ordenamientos
        var sortings = {};
        //descendiente
        if (req.query.sort == 'price_desc') {
            sortings.price = -1;
        }
        //ascendiente
        if (req.query.sort == 'price_asc') {
            sortings.price = 1;
        }

        // Get the products collection
        const collection = db.collection('products');
        // Find some products
        collection.find(filters).sort(sortings).toArray(function (err, docs) {
            assert.equal(err, null);

            //objeto contexto
            var context = {
                //para que se vea la imagen y el precio de cada producto en la tienda
                products: docs,
            }
            console.log(context);

            //res.send('Página de tienda');
            res.render('store', context);
        });
    });

    //Abrir la página de product de la página.
    app.get('/product/:name/:id', function (req, res) {

        //error 404
        if (req.params.id.length != 24) {
            res.redirect('/404');
            return;
        }

        const filter = {
            _id: {
                $eq: new ObjectId(req.params.id)
            }
        }

        const collection = db.collection('products');
        // Find some products
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);

            //FREESHIPING
            docs.forEach(function (elem) {
                if (elem.price >= 16) {
                    elem.freeShipping = true;
                } else {
                    elem.freeShipping = false;
                }
            });


            //REDIRECCIONAR AL USUARIO A PAGINA 404
            if (docs.length == 0) {
                res.redirect('/404');
                return;
            }

            //objeto contexto
            var context = docs[0];
            console.log(docs);

            //res.send('Página de tienda');
            res.render('product', context);
        });


    });

    //CHECKOUT
    //mostrar informacion la página de checkout al usario.
    app.get('/checkout', function (req, res) {
        //solo se define si hay un errror
        console.log(req.query.error);
        //contexto- si la ruta viene con error
        var context = {
            showError: req.query.error,
        }
        //res.send('Página de checkout');
        res.render('checkout', context);
    });

    //recibir informacion la página de checkout.
    app.post('/checkout', function (req, res) {
        console.log(req.body);

        var { adressemail, firstname, lastname, adress, homeadress, city, country, age, phone, products } = req.body;

        req.body.creation_date = new Date();

        if (!adressemail || !firstname || !lastname || !adress || !homeadress || !city || !country || !age || !phone || !products) {
            //cuando hay un error 
            res.redirect('/checkout?error=true');
            return;
        }

        req.body.products = JSON.parse(req.body.products);

        const collection = db.collection('orders');
        collection.insertOne(req.body);
        res.redirect('/confirmation');
    });

    /*Pagina de confirmación.
    app.get('/confirmation', function (req, res) {
        res.send('Gracias por tu compra');
    });*/

    //Abrir la página de  confirmation de la página.
    app.get('/confirmation', function (req, res) {
        console.log('hola en confirmation');

        res.render('confirmation');
    });

    //Abrir la página de error cart de la página.
    app.get('/cart', function (req, res) {
        console.log('hola en  cart');
        //res.send('Página de cart');

        //objeto contexto cart
        var context = {

        }
        res.render('cart');
    });
    //Abrir la página de error 404 de la página.
    app.get('/404', function (req, res) {
        console.log('hola en error 404');
        //res.send('Página de 404');

        //objeto contexto 404
        var context = {

        }
        res.render('404');
    });




}

module.exports = configureRoutes;
