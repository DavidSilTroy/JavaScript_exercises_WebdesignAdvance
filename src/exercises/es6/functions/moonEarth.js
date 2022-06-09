/* eslint-disable */
// Moon and earth movement

const moonEarthImg = document.querySelector('img#image');

let i = 0;
let timeDelay = 24;

const showNextImage = () => {

    let number = i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    moonEarthImg.src = `../../../assets/moonEarth/IMG${number}.gif`;
    i++;
    i = i > 23 ? 0 : i;

    if (parseInt(document.querySelector('input#delay').value) != timeDelay) {
        clearInterval(timer);
        timeDelay = parseInt(document.querySelector('input#delay').value);
        timer = setInterval(showNextImage, timeDelay);
    }
};

let timer = setInterval(showNextImage, timeDelay);




//<img id="image" src="../../../assets/moonEarth/IMG00.gif" alt="moon-earth"></img>