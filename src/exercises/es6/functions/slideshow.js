/* eslint-disable */
// Slideshow
const imagesContainer = document.querySelector('ul#album');
let timer = setInterval(() => {
    // execute this code every 3 seconds
    imagesContainer.appendChild(imagesContainer.children[0]);
    console.log(imagetoMove);
}, 3000);