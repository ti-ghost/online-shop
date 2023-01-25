function toggleCartStatus(){


    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector("[data-cart-empty]");
    const orderForm = document.querySelector('#order-form');

    if(cartWrapper.children.length > 0 ){
        orderForm.classList.remove('none')


        cartEmpty.classList.add('none');
    } else{
        orderForm.classList.add('none')

        cartEmpty.classList.remove('none');
    }


}

