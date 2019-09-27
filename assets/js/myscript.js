let cartCounterDisplay = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.content__bestsellers');
// let currentPrice = document.querySelector('.current-price');

let cartCounter = 0;
let cartPrice = 0;

let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classList.contains('item-action-cart')) {
    // cartCounterDisplay.innerHTML += cartCounter;

    buttonsContainer.removeEventListener('click', btnClickHandler);

    const currentPrice = target.parentElement.previousElementSibling
      .querySelector('.current-price').textContent.replace(/\D/g, '');

    // console.log(+currentPrice);

    cartCounterDisplay.innerHTML = (() => {
      cartPrice += +currentPrice;
      cartCounter = ++cartCounter;
      return `&nbsp;${cartCounter} item(s) -&nbsp; ${cartPrice} $`;
      // console.log(currentPrice);
      // console.log(typeof cartPrice);
    })();

    const restoreHTML = target.innerHTML;

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 1000);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);

// $('#zoom_01').elevateZoom({
//   easing : true,
//   zoomWindowWidth:800,
//   zoomWindowHeight:800, zoomWindowFadeIn: 500,
//   zoomWindowFadeOut: 500,
//   lensFadeIn: 500,
//   lensFadeOut: 500
// });
// $('#zoom_02').elevateZoom({
//   easing : true,
//   zoomWindowWidth:800,
//   zoomWindowHeight:800, zoomWindowFadeIn: 500,
//   zoomWindowFadeOut: 500,
//   lensFadeIn: 500,
//   lensFadeOut: 500
// });
// $('#zoom_03').elevateZoom({
//   easing : true,
//   zoomWindowWidth:800,
//   zoomWindowHeight:800, zoomWindowFadeIn: 500,
//   zoomWindowFadeOut: 500,
//   lensFadeIn: 500,
//   lensFadeOut: 500
// });
// $('#zoom_04').elevateZoom({
//   easing : true,
//   zoomWindowWidth:800,
//   zoomWindowHeight:800, zoomWindowFadeIn: 500,
//   zoomWindowFadeOut: 500,
//   lensFadeIn: 500,
//   lensFadeOut: 500
// });