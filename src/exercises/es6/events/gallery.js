/* eslint-disable */
// Image gallery

window.onload = function() {
    console.log('Ready to Work!');
    let mainImage = document.querySelector('figure img#fullImage');
    let allImages = document.querySelectorAll('figure#thumbnails img');
    allImages.forEach(image => {
        image.addEventListener('click', () => {
            allImages.forEach(image1 => {
                image1.classList.remove('border');
            })
            console.log(image.getAttribute('data-id'));
            mainImage.src = `https://picsum.photos/id/${image.getAttribute('data-id')}/600/400`;
            image.classList.add('border');
        });
    });
};