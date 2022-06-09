/* eslint-disable */
// Random image

const imageContainer = document.querySelector('main.container div.border-green');

const randomMinMax10 = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) * 100;
};

let timer = setInterval(() => {
    document.querySelector('main.container div.border-green figure').remove();
    let imgSrc = `https://picsum.photos/${randomMinMax10(1,8)}/${randomMinMax10(1,4)}`;
    imageContainer.innerHTML = `<figure>
    <figcaption>
        <h3>${imgSrc}</h3>
    </figcaption>
    <img src="${imgSrc}" alt="Random image">
</figure>`;
}, 5000);