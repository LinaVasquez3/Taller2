//ORDENAMIENTOS
//seleccionamos el elemento select
//se crea var url, desde el pathname
var url = location.pathname;
var select = document.querySelector('select');
//se agrega el listener del cambio
select.addEventListener('change', function(ev){
    //se agrega filtros de los productos segun el precio
    url = url + '?price_lt=' + select.value;
    //se navega con la nueva url
    location.href = url;
    console.log(url);
});

//Buscar en la busqueda principal 
var button = document.querySelector('.mainheader__search');
console.log(button);
button.addEventListener('click', function() {
    var input = document.querySelector('.mainheader__input');
    console.log(input);
    var search = input.value;
    url = url + '?search=' + search;
    location.href = url;
});