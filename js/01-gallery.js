import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector('div.gallery'),
};
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
refs.galleryContainer.addEventListener('click', showOriginalImg);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join('');
};

function getUrlOfOriginalImg(e) { 
  e.preventDefault();

  return e.target.dataset.source;
};

function showOriginalImg(e) {
  const isGalleryImg = e.target.classList.contains('gallery__image');

  if (!isGalleryImg) {
    return;
  }

  const urlImg = getUrlOfOriginalImg(e);
  const instance = basicLightbox.create(`
    <img src="${urlImg}" width="800" height="600">
    `, {
    onShow: (instance) => {
      document.addEventListener('keydown', function(e){
	      if(e.key === "Escape"){
          // console.log('this is ESCAPE')
          instance.close();
	      }
        });
      }
    });

  instance.show(); 
};