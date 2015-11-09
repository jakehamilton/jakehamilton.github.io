;(() => {
  'use strict';

  window.addEventListener('load', () => {
    let toggles = document.querySelectorAll('.menu-icon');
    let nav = document.querySelector('.off-canvas');

    menu(nav, toggles);
  });

  function menu(nav, toggles) {
    if (toggles.length > 1) {
      Array.prototype.forEach.call(toggles, toggle => {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('open');
        });
      });
    } else {
      toggles[0].addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
  }
})();
