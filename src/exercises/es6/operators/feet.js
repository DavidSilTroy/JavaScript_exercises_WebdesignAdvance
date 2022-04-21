/* eslint-disable */
// Centimeters to Feet

// Create a centimeters to feet converter

// Step 1: create a variable centimeters with value 60
// Step 2: create a variable factor with value 0.0328084 (1 cm = 0.0328084 feet)
// Step 3: calculate the corresponding length in feet and assign it to a variable feet
// Step 4: replace the content of the span tags with the value of the centimeters and feet variables
// Step 5: round the result to 2 digits after the comma

var x;
var y;

const centimeters = 60;
const factor = 0.0328084;


window.onload = function() {
    console.log('Ready to work!!');
    if (getElementsToChange()) {
        const feets = calculateFeetFromCentimeters(centimeters);
        showValuesInPage(feets);
    } else {
        console.log('Not elements found')
    }
};

const getElementsToChange = () => {
    x = document.querySelector('span#centimeters');
    y = document.querySelector('span#feet');

    const ready = x && y != null ? true : false;
    // console.log(`x = ${x} and y = ${y}`)
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