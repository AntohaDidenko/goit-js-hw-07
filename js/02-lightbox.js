import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems.map(image =>
    `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>`).join('');

gallery.innerHTML = makeGallery;

new SimpleLightbox('.gallery a', {
    fadeSpeed: 250,
    overlayOpacity: 0.7,
    captionsData: 'alt',
})
