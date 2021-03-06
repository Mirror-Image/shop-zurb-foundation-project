let cartCounterDisplay = document.querySelector('#cart-counter');
let cartCalloutDisplay = document.querySelector('#cart-callout');
let buttonsContainer = document.querySelector('.content__bestsellers');

let amount = +getGlobalVar('amount');
let quantity = +getGlobalVar('quantity');
let callout = getGlobalVar('callout');


let cartCounter = quantity;
let cartPrice = amount;

cartCounterDisplay.innerHTML = `&nbsp;${cartCounter} item(s) - ${cartPrice} $`;

callout == null ? cartCalloutDisplay.innerHTML = "Your shopping cart is empty!" : cartCalloutDisplay.innerHTML = "Your cart isn't empty! Check it out!";

function saveGlobalVar(name, value) {
  sessionStorage.setItem(name, value); // сохраняем в localStorage значение
}
function getGlobalVar(name) {
  return sessionStorage.getItem(name); // получаем значение свойства localStorage
}

let text = document.getElementsByTagName("input")[2];

let inputQ;
function a_value(o) {
  inputQ = +o.value;

  inputQ <= 0 ? inputQ = 0 : inputQ;

  return inputQ;
}

buttonsContainer.onclick = function(event) {
  let button = event.target.closest('.item-action-cart');
  if(!button) return;
  if(!buttonsContainer.contains(button)) return;

  btnClickHandler(button);
};

let btnClickHandler = (e) => {
  const currentPrice = (e.parentElement.previousElementSibling
  .querySelector('.current-price') ||
  e.parentElement.parentElement.previousElementSibling
  .querySelector('.current-price')).textContent.replace(/\D/g, '');
  // console.log(currentPrice);

  cartCalloutDisplay.innerHTML = "Your cart isn't empty! Check it out!";
  saveGlobalVar('callout', cartCalloutDisplay.innerHTML);

  cartCounterDisplay.innerHTML = (() => {

    console.log(inputQ);

    if (inputQ !== undefined) {
      cartPrice = cartPrice + +currentPrice * inputQ;
      cartCounter = cartCounter + inputQ;
    } else {
      cartPrice = cartPrice + +currentPrice;
      cartCounter = ++cartCounter;
    }

    saveGlobalVar('amount', cartPrice);
    saveGlobalVar('quantity', cartCounter);
    saveGlobalVar('callout', cartCounter);

    return ` ${cartCounter} item(s) - ${cartPrice} $`;
  })();

  // console.log(amount);
  // console.log(quantity);
  // console.log(callout);

  // const restoreHTML = target.innerHTML;
  //
  // setTimeout(() => {
  //   target.innerHTML = restoreHTML;
  //   // buttonsContainer.addEventListener('click', btnClickHandler);
  // }, 1000);
};




$('#zoom_01').elevateZoom({
  easing : true,
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 500,
  lensFadeIn: 500,
  lensFadeOut: 500
});
$('#zoom_02').elevateZoom({
  easing : true,
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 500,
  lensFadeIn: 500,
  lensFadeOut: 500
});
$('#zoom_03').elevateZoom({
  easing : true,
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 500,
  lensFadeIn: 500,
  lensFadeOut: 500
});
$('#zoom_04').elevateZoom({
  easing : true,
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowFadeIn: 500,
  zoomWindowFadeOut: 500,
  lensFadeIn: 500,
  lensFadeOut: 500
});