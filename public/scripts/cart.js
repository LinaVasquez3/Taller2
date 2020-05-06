var buttonin = document.querySelectorAll('.product__button');

var cartBtn = document.querySelector('.cart_btn');

var cartList = [];

if(localStorage.getItem('cartList')){
    console.log(localStorage.getItem('cartList'));
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

console.log(cartList.length);
cartBtn.innerText = cartList.length;


buttonin.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener('click', function () {
        //var name = elem.parentElement.parentElement.querySelector('.product__price').innerText
        var img = elem.getAttribute('data-img');
        var id = elem.getAttribute('data-id');
        var price = elem.getAttribute('data-price');
        var name = elem.getAttribute('data-name');
        console.log(name, img, id, price);

        cartList.push({
            img: img,
            id: id,
            price: price,
            name: name,
        });
        cartBtn.innerText = cartList.length;

        localStorage.setItem('cartList', JSON.stringify(cartList));
    });
});