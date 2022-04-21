/* eslint-disable */
// Change background color (basic)
window.onload = function() {
    console.log('Ready to Work broo!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {

    console.log('Working!!');
    let listBtns = document.querySelectorAll('div button');
    let theBody = document.querySelector('body');

    listBtns.forEach((btn) => {
        if (btn.textContent == "reset") {
            btn.addEventListener('click', () => {
                console.log("toca reiniciar xdd");
                theBody.setAttribute('style', '');
            });
        } else {
            btn.addEventListener('click', () => {
                console.log(btn.textContent);
                theBody.setAttribute('style', `background-color: ${btn.textContent}`);
            });
        }

    });
}