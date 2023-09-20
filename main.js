'use strict'

const face = document.querySelector('.js-face');
const smile = document.querySelector('.js-smile');
const blink = document.querySelector('.js-blink');

face.addEventListener('click', () => {
    smile.classList.add('hidden');
    blink.classList.remove('hidden');
});


