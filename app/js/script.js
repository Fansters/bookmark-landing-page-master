const btn = document.getElementById('btnBurger');
const body = document.querySelector('body');
const lineTop = document.querySelector('.line1');
const lineBottom = document.querySelector('.line3');
const header = document.querySelector('.header')
const bookmarkLogo = document.getElementById('bookmarkImg');
const fade = document.querySelectorAll('.has-fade');
const tabs = document.querySelectorAll('.tabs');
const tabsBtn = document.querySelectorAll('.features__tabBtn');
const defaultBtn = document.getElementById("defaultOpen");
const questions = document.querySelectorAll('.collapsible');
// const overlay = document.querySelector('.overlay');
// const flex = document.querySelector('.homepage__buttons');

// collapsible content
questions.forEach(function (e) {
   e.addEventListener('click', function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + "px";
      }
   })
})


// tabbed content
const btnTabs = function (evt, tabNr) {
   tabs.forEach(function (el) {
      el.style.display = 'none';
   })

   tabsBtn.forEach(function (el) {
      el.className = el.className.replace(" active", "");
   })
   document.getElementById(tabNr).style.display = "block";
   evt.currentTarget.className += " active";
}


btn.addEventListener('click', function () {
   header.classList.toggle('open');
   body.classList.toggle('no-scroll')
   if (header.classList.contains('open')) {
      fade.forEach(function (el) {
         el.classList.remove('fade-out')
         el.classList.add('fade-in')
      })
      bookmarkLogo.src = 'images/logo-bookmark_mobile_overlay.svg'
      // body.classList.add('no-scroll')
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

// on page load open first tabbed content
window.addEventListener('load', (e) => {
   defaultBtn.click();
})