/* eslint-disable */
// String functions
const word = 'ihznduq hmpibnughpimhg yfawozhbduqzg dlwbubkbauk';

const blockContainer = document.querySelectorAll('div.border-green div.block');

const doSomething = (option) => {
    switch (option) {
        case 0:
            return word.charAt(word.indexOf('w') + 1).toUpperCase();
            break;
        case 1:
            return word.lastIndexOf('w');
            break;
        case 2:
            if (word.indexOf('x') == -1) return false;
            return true;
            break;
        case 3:
            return word.length;
            break;
        case 4:
            return word.replaceAll(' ', '').length;
            break;

        default:
            return 'nothing to do';
            break;
    }
};

let optionNumb = 0;

blockContainer.forEach((key) => {
    key.innerHTML = `${doSomething(optionNumb)}`;
    optionNumb++;
});