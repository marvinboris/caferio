// close of loader
const loader  = document.querySelector('.loader');
window.addEventListener('load', () => loader.classList.add('hidden'));

const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => nav.classList.add('right-0'));
close.addEventListener('click', () => nav.classList.remove('right-0'));

// lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxBody = document.querySelector('.lightbox-body');
const images = document.querySelectorAll('#gallery');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('scale-100');
        lightboxBody.innerHTML = '<img src="'+image.src+'" class="w-full h-full object-cover" />';
    })
});

lightbox.addEventListener('click', e => {
    if (e.target.id === 'lightbox') lightbox.classList.remove('scale-100')
});

// get current year
const year = document.querySelector('span.year');
year.innerHTML = (new Date()).getFullYear();