/**
 * Galery
 */
var main = document.querySelector('.galery__main');
var thumbs = document.querySelectorAll('.galery__thumb');
function handleImageClick (elem) {
    // leer atributo src de la imagen pequeña
    var src = elem.getAttribute('src');
    // setear atributo src a la imagen grande
    main.setAttribute('src', src);
    thumbs.forEach(function(innerElem){
        innerElem.classList.remove('galery__thumb--active');
    });
    // agregar clase active
    elem.classList.add('galery__thumb--active');
}
function iterateThumbs (elem, index) {
    elem.addEventListener('click', function () {
        handleImageClick(elem);
    });
}
thumbs.forEach(iterateThumbs);
handleImageClick(thumbs[0]);

var index = 0;
setInterval(function(){
    handleImageClick(thumbs[index]);
    index++;
    if(index >= thumbs.length){
        index = 0;
    }
}, 1000);