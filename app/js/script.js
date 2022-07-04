const btn = document.getElementById('btnBurger');
const lineTop = document.querySelector('.line1');
const lineBottom = document.querySelector('.line3');
const header = document.querySelector('.header')
const bookmarkLogo = document.getElementById('bookmarkImg');
const overlay = document.querySelector('.overlay');
const fade = document.querySelectorAll('.has-fade');

btn.addEventListener('click', function () {
   header.classList.toggle('open');
   if (header.classList.contains('open')) {
      fade.forEach(function (el) {
         el.classList.remove('fade-out')
         el.classList.add('fade-in')
      })

      bookmarkLogo.src = 'images/logo-bookmark_mobile_overlay.svg'
   } else {
         fade.forEach(function (el) {
            el.classList.add('fade-out')
            el.classList.remove('fade-in')
         })
      // overlay.classList.remove('fade-in')
      // overlay.classList.add('fade-out')
      bookmarkLogo.src = 'images/logo-bookmark.svg'
   }
   lineTop.classList.toggle('spanWhite');
   lineBottom.classList.toggle('spanWhite');
})