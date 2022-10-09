import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('ul.gallery'),
};
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
};

let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:"250ms"});