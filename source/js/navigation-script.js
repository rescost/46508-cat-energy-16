var navigationMain = document.querySelector('.main-nav');
var navigationButton = document.querySelector('.main-nav__button');

navigationMain.classList.remove('main-nav--nojs');

document.addEventListener("DOMContentLoaded", function() {
  navigationMain.classList.add('main-nav--closed');
});

navigationButton.addEventListener('click', function() {
  if (navigationMain.classList.contains('main-nav--closed')) {
    navigationMain.classList.remove('main-nav--closed');
    navigationMain.classList.add('main-nav--opened');
    navigationButton.classList.add('main-nav__button--closed');

  } else {
    navigationMain.classList.add('main-nav--closed');
    navigationMain.classList.remove('main-nav--opened');
    navigationButton.classList.remove('main-nav__button--closed');
  }
});

