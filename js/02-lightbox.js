import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

const galleryImgMarkup = createGaleryItem(galleryItems);

galeryEl.insertAdjacentHTML("beforeend", galleryImgMarkup);

function createGaleryItem(galeryItem) {
  return galeryItem
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
