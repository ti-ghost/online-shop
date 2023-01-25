// добавляем прослушку на странице
window.addEventListener("click", function (event) {
  let counter;
  // проверяем строго по кнопкам плюс или минус
  if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
    const counterWraper = event.target.closest(".counter-wrapper");
    counter = counterWraper.querySelector("[data-counter]");
  }

  // находим кнопку плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  // находим кнопку минус
  if (event.target.dataset.action === "minus") {
    // проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){

      event.target.closest(".cart-item").remove();
      
       // отображение статуса корзины
       toggleCartStatus();

      //  пересчет общей стоимости товаров
       culcPrice();

    }

  }


  // проверяем на + или - внутри корзины
  if (event.target.hasAttribute('data-action')&& event.target.closest('.cart-wrapper')){
    //  пересчет общей стоимости товаров
    culcPrice();  
  }
});
