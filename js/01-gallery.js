import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const makeGallery = galleryItems.map(image =>
    `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </li>`).join('');

gallery.innerHTML = makeGallery;

const instance = basicLightbox.create(
        `<img class="modal-img">`,
        {
            onShow: () => window.addEventListener('keydown', onEscButtonPress),
            onClose: () => window.addEventListener('keydown', onEscButtonPress),
        }
    );

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    
    instance.element().querySelector('.modal-img').src = e.target.dataset.source;
    instance.show();
});

function onEscButtonPress(e) {
    if (e.key === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscButtonPress);
    }
}