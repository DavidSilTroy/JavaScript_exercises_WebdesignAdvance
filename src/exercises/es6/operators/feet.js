/* eslint-disable */
// Centimeters to Feet

let x;
let y;

const centimeters = 60;
const factor = 0.0328084;


window.onload = function() {
    console.log('Ready to work!!');
    if (getElementsToChange()) {
        const feets = calculateFeetFromCentimeters(centimeters);
        showValuesInPage(feets);
    } else {
        console.log('Not elements found');
    }
};

const getElementsToChange = () => {
    x = document.querySelector('span#centimeters');
    y = document.querySelector('span#feet');
    const ready = x && y != null ? true : false;
    return ready;
};

const calculateFeetFromCentimeters = (cm) => {
    const feets = factor * cm;
    return feets;
};
const showValuesInPage = (ft) => {
    x.innerHTML = centimeters;
    y.innerHTML = ft.toFixed(2);
};