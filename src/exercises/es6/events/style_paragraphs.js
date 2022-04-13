/* eslint-disable */
// Style the paragraphs
let stylevars = {
    theParagraphs: null,
    theParagraphs: null,
    optionElement: null,
    smallText: null,
    boldText: null,
    italicText: null,
    btnTheme: null,
    darkThemeActive: false
}

window.onload = function() {
    console.log('Ready to Work broo!!');
    stylevars.theParagraphs = document.querySelector('#paragraphs');
    stylevars.optionElement = document.querySelector('#font');
    stylevars.smallText = document.querySelector('fieldset');
    stylevars.boldText = document.querySelector('#bold');
    stylevars.italicText = document.querySelector('#italic');
    stylevars.btnTheme = document.querySelector('div.item button');
    addTheEventListeners();
};

const sizeSelected = () => {
    let largeText = document.querySelector('fieldset p input#large');
    let smallText = document.querySelector('fieldset p input#small');
    let mediumText = document.querySelector('fieldset p input#medium');

    switch (true) {
        case largeText.checked:
            return `font-size: 24px;`;
        case mediumText.checked:
            return `font-size: 16px;`;
        case smallText.checked:
            return `font-size: 12px;`;
    }
}

const fontSelected = () => {
    return `font-family: ${stylevars.optionElement.value};`;
}

const boldSelected = () => {
    if (stylevars.boldText.checked) {
        return 'font-weight: bold;';
    } else {
        return '';
    }
}
const italicSelected = () => {
    if (stylevars.italicText.checked) {
        return 'font-style: italic;';
    } else {
        return '';
    }
}

const darkThemeSelected = () => {
    if (stylevars.darkThemeActive) {
        stylevars.btnTheme.innerHTML = 'Light theme';
        return 'background-color: #111; color: #f8f8f8;';
    } else {
        stylevars.btnTheme.innerHTML = 'Dark theme';
        return '';
    }
}

const checkSelected = () => {
    stylevars.theParagraphs.setAttribute('style',
        `${fontSelected()}
        ${sizeSelected()}  
        ${boldSelected()} 
        ${italicSelected()} 
        ${darkThemeSelected()}`
    );
}

const addTheEventListeners = () => {
    document.querySelector('body').addEventListener('click', checkSelected);
    stylevars.btnTheme.addEventListener('click', () => {
        if (stylevars.darkThemeActive) {
            stylevars.darkThemeActive = false;
        } else {
            stylevars.darkThemeActive = true;
        }
    });
}