//UTILIZARLO PARA QUE VAYA A OTRA PÁGINA. importar

const express = require('express');

//cree un nuevo servidor y guardelo en esta constante app, 
const app = express();

//RUTAS, cada vez que el usuario entra
// '/' es la iniciail y la ruta 
app.get('/', function(req, response){
    console.log('hola desde la consola');
    response.send('hola en chrome')
});

//abrir la shop de la pagina
app.get('/shop', function(req, res){
    console.log('hola desde shop');
    res.send('pagina de shop');
});

//puerto en donde aparece la pagina
//cuando empiece a escuchar es 80
app.listen(3000, function(){
    console.log('servidor iniciado en puerto 3000');
});