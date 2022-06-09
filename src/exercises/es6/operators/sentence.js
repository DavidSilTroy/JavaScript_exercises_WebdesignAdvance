/* eslint-disable */
// Make a valid sentence

//yep.. I created a object instead of 8 variables..
const word = {
    a: "accidentally",
    b: "server",
    c: "He",
    d: "company's",
    e: "had",
    f: "hacked",
    g: "into",
    h: "his",
}

const elementForSentence = document.querySelector('p#p-for-sentence');
const sentence = `
${word.c} 
${word.e} 
${word.a} 
${word.f} 
${word.g} 
${word.h} 
${word.d} 
${word.b}.`;

window.onload = function() {
    console.log('Ready to work!!');
    elementForSentence.innerHTML = sentence;
};