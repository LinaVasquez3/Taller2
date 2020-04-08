var mainheader__nav = document.querySelector('.mainheader__nav');
var hambtn = document.querySelector('.hamburguerbtn');

var handleHamClick = function (event) {
    /*var hasMobile = mainnav.classList.contains('mainnav--mobile');
    if(hasMobile){
        mainnav.classList.remove('mainnav--mobile');
    } else {
        mainnav.classList.add('mainnav--mobile');
    }*/
    mainheader__nav.classList.toggle('mainheader__nav--mobile');
}
hambtn.addEventListener('click', handleHamClick);

function handleWindowResize (event) {
    if(window.innerWidth > 400){
        mainheader__nav.classList.remove('mainheader__nav--mobile');
    }
}
window.addEventListener('resize', handleWindowResize);
