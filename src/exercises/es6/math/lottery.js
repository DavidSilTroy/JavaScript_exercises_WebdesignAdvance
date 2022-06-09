/* eslint-disable */
// Lottery

const ballContainer = document.querySelectorAll('div#ballcontainer div.ball'),
    buttonGetNumbers = document.querySelector('button#drawBallsButton');

buttonGetNumbers.addEventListener('click', () => {
    ballContainer.forEach((key) => {
        key.innerHTML = `${Math.round(Math.random() * 45)}`;
        console.log(key.firstChild.data);
    });
});