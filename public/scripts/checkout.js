function onLoad() {
    var typeInput = document.querySelector('[name="payment_type"]');
    var buttons = document.querySelectorAll('.btngroup__item');
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (ev) {
            typeInput.value = ev.target.innerText;
            console.log('funcionando', ev.target.innerText);
        });
    });

    

    var form = document.querySelector('.checkout__form');
    console.log(form);
    form.addEventListener('submit', function () {
        var input = document.querySelector('.checkoutform__products');
        input.value = localStorage.getItem('cartList');

        //borrar el carrito para cuando termine la compra
        handleDelete();
        
        
    });

}

function handleDelete () {
    var checkoutError = document.querySelector('.checkout__error');

    if (!document.body.contains(checkoutError)){
        localStorage.removeItem('cartList');
    }

    // localStorage.removeItem('cartList');


}

window.addEventListener('load', onLoad);