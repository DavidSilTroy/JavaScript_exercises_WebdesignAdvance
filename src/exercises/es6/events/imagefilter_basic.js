/* eslint-disable */
// Image filter (basic)
//Vamos a empezar esto de una vez por todas xxdddd
//est0y en una programando en una cafertía wuuu en Greciaaaa!! JAJAJA
//Siempre quise hacer esto, oh por Deos!

window.onload = function() {
    console.log('Ready to Work!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {
    console.log('Working!!');
    let list = document.querySelectorAll('#imagesForFilter div');
    // console.log(list);
    list.forEach((div) => {
        // console.log(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('grayscale');
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('grayscale');
        });

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