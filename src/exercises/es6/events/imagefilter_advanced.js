/* eslint-disable */
// Image filter (advanced)

window.onload = function() {
    console.log('Ready to Work!!');
    addTheEventListeners();
};

const putClassOfSepia = () => {
    let list = document.querySelectorAll('#imagesForFilter div');
    list.forEach((div) => {
        div.classList.add('sepia');
    });

}

const addTheEventListeners = () => {
    console.log('Working!!');
    let list = document.querySelectorAll('#imagesForFilter div');
    // console.log(list);
    list.forEach((div) => {
        div.classList.add('sepia');
        div.addEventListener('click', () => {
            putClassOfSepia();
            div.classList.remove('sepia');
        });
    });
}