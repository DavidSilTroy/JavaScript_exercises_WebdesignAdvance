/* eslint-disable */
// Change background color (advanced)


window.onload = function() {
    console.log('Ready to Work broo!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {
    console.log('Working!!');
    let listBtns = document.querySelectorAll('div button');
    let theContainer = document.querySelector('div.border-gray');


    listBtns.forEach((btn) => {
        if (btn.textContent == "reset") {
            btn.addEventListener('click', () => {
                console.log("toca reiniciar xdd");
                theContainer.setAttribute('style', '');
                theContainer.setAttribute('style', '');
        
            });
        } else {
            btn.addEventListener('click', () => {
                console.log(btn.textContent);
                theContainer.setAttribute('style', `background-color: ${btn.textContent}`);
                theContainer.setAttribute('style', `background-color: ${btn.textContent}`);
            });
        }

    });
}