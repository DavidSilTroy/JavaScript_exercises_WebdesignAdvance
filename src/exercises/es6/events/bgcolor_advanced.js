/* eslint-disable */
// Change background color (advanced)


window.onload = function() {
    console.log('Ready to Work!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {
    let classname1 = "border-gray";
    console.log('Working!!');
    let listBtns = document.querySelectorAll('div button');
    let theBody = document.querySelector('body');
    let theContainer = document.querySelector('div.border-gray');



    // console.log(listBtns);
    // console.log(theBody);
    // console.log(theContainer);

    listBtns.forEach((btn) => {
        if (btn.textContent == "reset") {
            btn.addEventListener('click', () => {
                console.log("toca reiniciar xdd");
                theBody.setAttribute('style', '');
                theContainer.setAttribute('style', '');
                theContainer.classList.add(classname1);
            });
        } else {
            btn.addEventListener('click', () => {
                console.log(btn.textContent);
                theBody.setAttribute('style', `background-color: ${btn.textContent}`);
                theContainer.classList.remove(classname1);
                theContainer.setAttribute('style', `background-color: ${btn.textContent}`);
            });
        }

    });
}