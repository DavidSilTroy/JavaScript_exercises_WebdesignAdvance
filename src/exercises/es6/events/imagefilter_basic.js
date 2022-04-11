/* eslint-disable */
// Image filter (basic)

window.onload = function() {
    console.log('Ready to Work!!');
    addTheEventListeners();
};

const addTheEventListeners = () => {
    console.log('Working!!');
    let list = document.querySelectorAll('#imagesForFilter div');
    // console.log(list);
    list.forEach((div) => {
        // console.log(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('grayscale');
        });
        div.addEventListener('mouseout', () => {
            div.classList.remove('grayscale');
        });

    });
}