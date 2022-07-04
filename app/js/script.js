const btn = document.getElementById('btnBurger');
const lineTop = document.querySelector('.line1');
const lineBottom = document.querySelector('.line3');
const header = document.querySelector('.header')
const bookmarkLogo = document.getElementById('bookmarkImg');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
   header.classList.toggle('open');
   if (header.classList.contains('open')) {
      overlay.classList.remove('fade-out')
      overlay.classList.add('fade-in')
      bookmarkLogo.src = 'images/logo-bookmark_mobile_overlay.svg'
   } else {
      overlay.classList.remove('fade-in')
      overlay.classList.add('fade-out')
      bookmarkLogo.src = 'images/logo-bookmark.svg'
   }
   lineTop.classList.toggle('spanWhite');
   lineBottom.classList.toggle('spanWhite');
})