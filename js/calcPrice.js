function culcPrice(){

    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');


   
    let totalPrice = 0;


    cartItems.forEach(function(item){

        const amountEl = item.querySelector('[data-counter]');
        const pricetEl = item.querySelector('.price__currency');

        const curretnPrice = parseInt(amountEl.innerText) * parseInt(pricetEl.innerText);

        totalPrice +=curretnPrice;

    })

    // отображаем цену на страницу
    totalPriceEl.innerText = totalPrice;

    // скрываем или показываем блок со стоимостью товаров
    if (totalPrice > 0){

        cartDeliveryEl.classList.remove('none');
    } else{
        cartDeliveryEl.classList.add('none');
    }

    // указываем стоимость доставки
    if (totalPrice >= 600){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';

    } else{

        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '200 ⃀';
    }
}