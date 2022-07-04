const btn = document.querySelector('.header__burger');
const lineTop = document.querySelector('.line1');
const lineBottom = document.querySelector('.line3');


btn.addEventListener('click', function () {
   btn.classList.toggle('open');
   lineTop.classList.toggle('spanWhite');
   lineBottom.classList.toggle('spanWhite');
})