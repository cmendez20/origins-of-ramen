'use strict';

window.addEventListener('keydown' /* or keyup, see what feels better when you test it */, e => {
  switch (e.code) {
    case "ArrowRight":
      scrollUp();
      break;
    case "ArrowLeft":
      scrollDown();
      break;
    default:
      /* don't do anything */
  }
});

// window.addEventListener('wheel', e => {
//   if (e.deltaY < 0 /* or some negative number so it doesn't fire on the slightest touch*/) {
//     // scrolled up
//     scrollLeft();
//   } else if (e.deltaY > 0 /* or some positive number so it doesn't fire on the slightest touch*/) {
//     // scrolled down
//     scrollRight();
//   }
// });

// modal 
const open_sapporo = document.getElementById('sapporo-section');
const modal_container = document.getElementById('modal_sapporo');
const close = document.getElementById('close');

open_sapporo.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

const open_tokyo = document.getElementById('tokyo-section');
const modal_toyko = document.getElementById('modal_tokyo');
const close_tokyo = document.getElementById('close_tokyo');

open_tokyo.addEventListener('click', () => {
  modal_tokyo.classList.add('show-tokyo');
});

close_tokyo.addEventListener('click', () => {
  modal_tokyo.classList.remove('show-tokyo');
});

const open_kitakata = document.getElementById('kitakata-section');
const modal_kitakata = document.getElementById('modal_kitakata');
const close_kitakata = document.getElementById('close_kitakata');

open_kitakata.addEventListener('click', () => {
  modal_kitakata.classList.add('show-kitakata');
});

close_kitakata.addEventListener('click', () => {
  modal_kitakata.classList.remove('show-kitakata');
});

const open_hakata = document.getElementById('hakata-section');
const modal_hakata = document.getElementById('modal_hakata');
const close_hakata = document.getElementById('close_hakata');

open_hakata.addEventListener('click', () => {
  modal_hakata.classList.add('show-hakata');
});

close_hakata.addEventListener('click', () => {
  modal_hakata.classList.remove('show-hakata');
});