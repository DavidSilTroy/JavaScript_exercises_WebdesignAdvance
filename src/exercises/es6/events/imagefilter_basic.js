/* eslint-disable */
// Image filter (basic)
//Vamos a empezar esto de una vez por todas xxdddd
//est0y en una programando en una cafertía wuuu en Greciaaaa!! JAJAJA
//Siempre quise hacer esto, oh por Deos!

window.onload = function() {
    console.log('Ready to Work!!');
    addEventListeners();
};

const setFilterClass = (element) => {
    element.classList.add('grayscale');
    console.log('Image with grayscale!');
}
const unsetFilterClass = (element) => {
    element.classList.remove('grayscale');
    console.log('Image without grayscale!');
}

const addEventListeners = () => {
    console.log('Working!!');
    let list = document.querySelectorAll('#imagesForFilter div');
    console.log(list);
    list.forEach((div) => {
        console.log(div);
        div.addEventListener('mouseover', div.classList.add('grayscale'));
        div.addEventListener('mouseout', div.classList.remove('grayscale'));
        // itemsList[1].addEventListener('mouseover', setBackgroundToTitle);
        // itemsList[1].addEventListener('mouseout', unsetBackgroundToTitle);
    });


}



// // select all buttons inside #buttongroup
// const buttons = document.querySelectorAll('#buttongroup button');
// console.log('buttons', buttons);

// // loop over the buttons inside the NodeList
// buttons.forEach(function (button, index) {
//     // log information about every button
//     console.log('button', index, button);
// });