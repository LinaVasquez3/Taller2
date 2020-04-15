//seleccionamos el elemento select
var select = document.querySelector('select');
//se agrega el listener del cambio
select.addEventListener('change', function(ev){
    //se crea var url, desde el pathname
    var url = location.pathname;
    //se agrega filtros de los productos segun el precio
    url = url + '?price_lt=' + select.value;
    //se navega con la nueva url
    location.href = url;
    console.log(url);
});

