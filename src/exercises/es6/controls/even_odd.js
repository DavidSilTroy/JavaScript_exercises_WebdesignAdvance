/* eslint-disable */
// Even or odd?

const evenContainer = document.querySelector('div#numbers div.border-green ul'),
    oddContainer = document.querySelector('div#numbers div.border-red ul'),
    primeContainer = document.querySelector('div#numbers div.border-blue ul');

let evenToInner = '',
    oddToInner = '',
    primeToInner = '';

const isPrime = (num) => {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evenToInner += `<li> ${i} </li>`;
    } else {
        oddToInner += `<li> ${i} </li>`;
    }
    if (isPrime(i)) {
        primeToInner += `<li> ${i} </li>`;
    }
}

evenContainer.innerHTML = evenToInner;
oddContainer.innerHTML = oddToInner;
primeContainer.innerHTML = primeToInner;