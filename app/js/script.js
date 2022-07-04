const btn = document.getElementById('btnBurger');
const lineTop = document.querySelector('.line1');
const lineBottom = document.querySelector('.line3');
// const bookmarkImg = document.getElementById('bookmarkImg');
const header = document.querySelector('.header')
// const logoOverlay = document.getElementById('bookmarkImg').src = 'images/logo-bookmark_mobile_overlay.svg'
const logoNormal = document.getElementById('bookmarkImg');

btn.addEventListener('click', function () {
   header.classList.toggle('open');
   if (header.classList.contains('open')) {
      logoNormal.src = 'images/logo-bookmark_mobile_overlay.svg'
   } else {
      logoNormal.src = 'images/logo-bookmark.svg'
   }
   lineTop.classList.toggle('spanWhite');
   lineBottom.classList.toggle('spanWhite');
})