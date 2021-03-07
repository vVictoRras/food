import gallery from "./gallery-items.js";
let refGallery= document.querySelector(".fotorama");
//console.log(refGallery);

let images = [];

// Generate the gallery
gallery.forEach((img) => {
  let li = ` <img src="${img.original}">`;
  images.push(img.original);
refGallery.insertAdjacentHTML("beforeend", li);
});
