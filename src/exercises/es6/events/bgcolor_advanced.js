/* eslint-disable */
// Change background color (advanced)


window.onload = function() {
    console.log('Ready to Work!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {
    let classname1 = "border-gray";
    let classname2 = "text-color-primary";
    console.log('Working!!');
    let listBtns = document.querySelectorAll('div button');
    let theBody = document.querySelector('body');
    let theContainer = document.querySelector('div.border-gray');

    theContainer.classList.remove(classname1);
    theContainer.classList.add(classname2);

    // console.log(listBtns);
    // console.log(theBody);
    // console.log(theContainer);

    listBtns.forEach((btn) => {
        if (btn.textContent == "reset") {
            btn.addEventListener('click', () => {
                console.log("toca reiniciar xdd");
                theBody.setAttribute('style', '');

                theContainer.classList.remove(classname2);
                theContainer.classList.add(classname1);
            });
        } else {
            btn.addEventListener('click', () => {
                console.log(btn.textContent);
                theBody.setAttribute('style', `background-color: ${btn.textContent}`);
            });
        }

    });
}