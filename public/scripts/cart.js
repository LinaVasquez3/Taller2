function onload() {

    var buttonin = document.querySelectorAll('.thumb__vibuButton');

    var cartBtn = document.querySelector('.cart_btn');

    //nuevo boton
    var shopCart = document.querySelector('.search__cart');


    var cartList = [];


    //cuando se inicia la pagina, se actualiza el numero de carrito
    if (localStorage.getItem('cartList')) {
        console.log(localStorage.getItem('cartList'));
        cartList = JSON.parse(localStorage.getItem('cartList'));
    }
    cartBtn.innerText = cartList.length;


    function renderCart() {
        var total = 0;

        var cartContainer = document.querySelector('.cart__list');
        //borra el cart container - borra las copias
        cartContainer.innerHTML = '';
        cartList.forEach(function (obj, index) {
            var newItem = document.createElement('div');
            newItem.classList.add('cart__item');
            newItem.innerHTML = `
            <img class="body__img" src="${obj.img}" />
            <h1 class="body__name">` + obj.name + `</h1>
            <small class="body__price">${ obj.price}</small>
            <button class="body__remove">Eliminar</button>
        `;
            //borrar productos
            var btn = newItem.querySelector('button');
            btn.addEventListener('click', function () {
                //newItem.remove(); // elimina el elemento en patalla
                cartList.splice(index, 1); // elimina el elemento en la lista (en memoria)
                cartBtn.innerText = cartList.length; // actualiza el numero del carrito
                localStorage.setItem('cartList', JSON.stringify(cartList)); // actualiza la lista en el local storage en HD
                renderCart(); //volver a renderizar la lista 
            });
            cartContainer.appendChild(newItem);
            total += parseInt(obj.price);
        });

        var totalElem = document.querySelector('.cart__total');
        totalElem.innerText = total;

    }
    cartBtn.addEventListener('click', renderCart);
    //renderCart();


    // agregar event listener para poner nuevos productos en el carrito
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
                price: parseInt(price),
                name: name,
            });
            cartBtn.innerText = cartList.length;

            localStorage.setItem('cartList', JSON.stringify(cartList));

            renderCart();
        });
    });

    shopCart.onClick = renderCart();
}

window.addEventListener('load', onload);