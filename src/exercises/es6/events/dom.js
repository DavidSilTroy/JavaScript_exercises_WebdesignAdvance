/* eslint-disable */
// Basic DOM manipulation

window.onload = function() {
    addEventListeners();
};

const rotateTitle = () => {
    let title = document.getElementById('titleForActions');
    console.log(title);
}

const addHover = () => {
    //nada xd
}

const changeTextofTitle = () => {
    let itemOne = document.querySelector('#listOfActions').firstElementChild;
    let title = document.getElementById('titleForActions');
    title.innerHTML = itemOne.textContent;
    console.log('Text of Title changed!');
}
const setBackgroundToTitle = () => {
    let title = document.getElementById('titleForActions');
    title.classList.add('orange');
    console.log('Title with orange background!');
}
const unsetBackgroundToTitle = () => {
    let title = document.getElementById('titleForActions');
    // title.className.replace("orange", '')
    title.classList.remove('orange');
    console.log('Title without background!');
}
const setColorTextToTitle = () => {
    let title = document.getElementById('titleForActions');
    title.classList.add('green');
    console.log('Title with green color in Text!');
}
const rotateTextTitle = () => {
    let title = document.getElementById('titleForActions');
    title.style.transform = 'rotate(90deg)';;
    console.log('Title with rotate 90 degrees!');
}
const unRotateTextTitle = () => {
    let title = document.getElementById('titleForActions');
    title.classList.add('green');
    console.log('Title with rotate 0 degrees!');
}

const addEventListeners = () => {


    let list = document.getElementById('listOfActions');
    console.log(list);
    let itemsList = list.children;
    console.log(itemsList);

    itemsList[0].addEventListener('click', changeTextofTitle);
    itemsList[1].addEventListener('mouseover', setBackgroundToTitle);
    itemsList[1].addEventListener('mouseout', unsetBackgroundToTitle);
    itemsList[2].addEventListener('dblclick', setColorTextToTitle);
    itemsList[3].addEventListener('click', changeTextofTitle);
    itemsList[3].addEventListener('dblclick', setColorTextToTitle);
}

/*

const li1 = document.querySelector('main li:first-child');
const li2 = document.querySelector('main li:nth-child(2)');
const li3 = document.querySelector('main li:last-child');

*/