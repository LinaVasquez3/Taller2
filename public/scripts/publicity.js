/*Interacción publicidad*/


var btnRight = document.querySelector('.publicity__button2');
var btnLeft = document.querySelector('.publicity__button1');
var strip = document.querySelector('.publicity__img');
var slider = document.querySelector('.publicity');
var posX = 0;
var width = slider.offsetWidth;
function handleBtnNextClick () {
    console.log("holis");
    // translate
    var quantity = strip.children.length;
    if(posX > -width * (quantity - 1)){
        posX -= width;
    } else {
        posX = 0;
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnRight.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick () {
    // translate
    var quantity = strip.children.length;
    if(posX < 0){
        posX += width;
    } else {
        posX = -width * (quantity - 1);
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnLeft.addEventListener('click', handleBtnPrevClick);
