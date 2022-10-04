import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryEl = document.querySelector(".gallery");

const galleryImgMarkup = createGaleryItem(galleryItems);

galeryEl.insertAdjacentHTML("beforeend", galleryImgMarkup);

galeryEl.addEventListener("click", onGaleryImgClick);

function createGaleryItem(galeryItem) {
  return galeryItem
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
    .join("");
}

let basicLightboxImg = "";

function onGaleryImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  basicLightboxImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  basicLightboxImg.show();

  document.addEventListener("keydown", onEscCloseModal);
}

function onEscCloseModal(event) {
  if (event.code === "Escape") {
    console.log("modal close");
    basicLightboxImg.close();
    document.removeEventListener("keydown", onEscCloseModal);
  }
}
