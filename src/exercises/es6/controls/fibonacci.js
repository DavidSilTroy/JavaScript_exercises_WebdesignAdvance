/* eslint-disable */
// Fibonacci

// program to generate fibonacci series up to n terms

// take input from the user

const primeContainer = document.querySelector('div.border-green ul');

let number1 = 0,
    number2 = 1,
    dataToInner = '',
    nextTerm;

for (let i = 0; i <= 50; i++) {
    //console.log(number1);
    dataToInner += `<li> ${number1} </li>`;
    nextTerm = number1 + number2;
    number1 = number2;
    number2 = nextTerm;
}
primeContainer.innerHTML = dataToInner;