;(() => {
  'use strict';

  window.addEventListener('load', () => {

    let hero_canvas = document.querySelector('.hero-canvas');
    let hero = document.querySelector('.hero');

    hero_canvas.width = hero.offsetWidth;
    hero_canvas.height = hero.offsetHeight;

    window.addEventListener('resize', () => {
      hero_canvas.width = hero.offsetWidth;
      hero_canvas.height = hero.offsetHeight;
    });

  });



})();
