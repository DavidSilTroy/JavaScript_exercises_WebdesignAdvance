/* eslint-disable */
//  Sales

const itemsShop = {
    Trousers: 85,
    Sweater: 62,
    Coat: 120,
    Shirt: 25,
    Shoes: 105,
};
const webShop = {
    discount: 70,
    bill: 0,
    valueElementID: 'span#bill',
    totalValueElement: null,
};

const checkValueElement = () => (
    webShop.totalValueElement != null ||
    webShop.totalValueElement != undefined
);

const getValueElement = (_callback) => {
    webShop.totalValueElement = document.querySelector(webShop.valueElementID);
    _callback(setTotalAmountToPay);
};
const calculateTotalAmountToPay = (_callback) => {
    let valueToPay = 0;
    let discount = 0;
    Object.keys(itemsShop).forEach((key) => {
        valueToPay += itemsShop[key];
    });
    console.log('total:', valueToPay);
    discount = (valueToPay * webShop.discount / 100);
    console.log('discount:', discount);
    webShop.bill = Math.round(valueToPay - discount); // -> round to the nearest int
    console.log('total with discount:', webShop.bill);
    _callback();
};
const setTotalAmountToPay = () => {
    webShop.totalValueElement.innerHTML = webShop.bill;
    console.log('Done!!');
};

window.onload = function() {
    console.log('Ready to work!!');
    if (checkValueElement()) {
        calculateTotalAmountToPay(setTotalAmountToPay);
    } else {
        getValueElement(calculateTotalAmountToPay);
    }
};