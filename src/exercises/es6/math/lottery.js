/* eslint-disable */
// Lottery

const ballContainer = document.querySelectorAll('div#ballcontainer div.ball'),
    buttonGetNumbers = document.querySelector('button#drawBallsButton');

buttonGetNumbers.addEventListener('click', () => {
    ballContainer.forEach((key) => {
        key.innerHTML = `${Math.round((Math.random() * 44)+1)}`;
        console.log(key.firstChild.data);
    });
});
src / exercises / es6 / math / lottery.js