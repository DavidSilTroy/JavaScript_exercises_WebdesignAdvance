/* eslint-disable */
//  Calculator

const mathButtons = document.querySelectorAll('div#buttons button'),
    resultContainer = document.querySelector('p#result');

let number1 = document.querySelector('input#number1'),
    number2 = document.querySelector('input#number2');

const addListenerToButton = (btn, value) => {
    switch (value) {
        case 'Add':
            btn.addEventListener('click', () => {
                let result = parseInt(number1.value) + parseInt(number2.value);
                resultContainer.innerHTML = `${result}`;
            });
            break;
        case 'Subtract':
            btn.addEventListener('click', () => {
                let result = parseInt(number1.value) - parseInt(number2.value);
                resultContainer.innerHTML = `${result}`;
            });
            break;
        case 'Multiply':
            btn.addEventListener('click', () => {
                let result = parseInt(number1.value) * parseInt(number2.value);
                resultContainer.innerHTML = `${result}`;
            });
            break;
        case 'Divide':
            btn.addEventListener('click', () => {
                let result = parseInt(number1.value) / parseInt(number2.value);
                resultContainer.innerHTML = `${result}`;
            });
            break;
        default:
            break;
    }
};

mathButtons.forEach((key) => {
    console.log(key.firstChild.data);
    addListenerToButton(key, key.firstChild.data);
});