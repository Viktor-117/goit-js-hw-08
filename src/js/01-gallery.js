import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryTemplate = ({
  preview,
  original,
  description,
}) => `<div class="gallery__item"><a class='gallery__link' href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`;

const refs = {
  container: document.querySelector('.gallery'),
  item: document.querySelector('.gallery__item'),
  image: document.querySelector('.gallery__image'),
};

refs.container.insertAdjacentHTML(
  'beforeend',
  galleryItems.map(galleryTemplate).join('')
);

refs.container.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  //   if (evt.target.nodeName !== "IMG") {
  //     return;
  //   }
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
