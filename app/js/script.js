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
const input = document.querySelector('.input');
const footerBtn = document.getElementById('footerBtn');
const form = document.querySelector('.form');

// collapsible content
questions.forEach((e) => {
   e.addEventListener('click', () => {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + "px";
      }
   })
})

// tabbed content
const btnTabs = (evt, tabNr) => {
   tabs.forEach((el) => {
      el.style.display = 'none';
   })

   tabsBtn.forEach((el) => {
      el.className = el.className.replace(" active", "");
   })
   document.getElementById(tabNr).style.display = "flex";
   evt.currentTarget.className += " active";
}

//  burger menu
btn.addEventListener('click', () => {
   header.classList.toggle('open');
   body.classList.toggle('no-scroll')
   if (header.classList.contains('open')) {
      fade.forEach((el) => {
         el.classList.remove('fade-out')
         el.classList.add('fade-in')
      })
      bookmarkLogo.src = 'images/logo-bookmark_mobile_overlay.svg'
   } else {
      fade.forEach((el) => {
         el.classList.add('fade-out')
         el.classList.remove('fade-in')
      })
      bookmarkLogo.src = 'images/logo-bookmark.svg'
   }
   lineTop.classList.toggle('spanWhite');
   lineBottom.classList.toggle('spanWhite');
})

// on page load open first tabbed content
window.addEventListener('load', (e) => {
   defaultBtn.click();
})

// email verification
const validateEmail = (inputText) => {
   inputText = document.form1.test;
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   console.log(inputText.value);
   if (inputText.value.match(mailformat)) {
      input.classList.remove('activeInput');
      form.classList.remove('notEmail');
      form.classList.remove('empty');
      input.style.borderRadius = '5px';
      document.form1.test.focus();
      return true;
   } if (!inputText.value) {
      input.classList.add('activeInput');
      form.classList.remove('notEmail');
      form.classList.add('empty');
   } else {
      input.classList.add('activeInput');
      form.classList.add('notEmail');
      form.classList.remove('empty');
      input.style.borderRadius = '5px 5px 0 0';
      document.form1.test.focus();
   }
}

footerBtn.addEventListener('click', validateEmail);