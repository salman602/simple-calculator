/* // Get the Element

const display = document.getElementById('display');
const btnClear = document.getElementById('btn-clear');
const btnDivide = document.getElementById('btn-divide');
const btnInto = document.getElementById('btn-into');
const btnMinus = document.getElementById('btn-minus');
const btnSeven = document.getElementById('btn-seven');
const btnEight = document.getElementById('btn-eight');
const btnNine = document.getElementById('btn-nine');
const btnPlus = document.getElementById('btn-plus');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnEqual = document.getElementById('btn-equal');
const btnZero = document.getElementById('btn-zero');
const btnDot = document.getElementById('btn-dot');

function oneBtn(x) {
    display.value = display.value + parseInt(btnOne.innerText);
}

function twoBtn(x) {
    display.value = display.value + parseInt(btnTwo.innerText);
}

function threeBtn(x) {
    display.value = display.value + parseInt(btnThree.innerText);
};

function plusBtn(x) {
    display.value = display.value + btnPlus.innerText;
};

function equalBtn(x) {
    eval(btnEqual.innerText);
};

// Add event listener
btnOne.addEventListener('click', function () {
    const valueOne = parseInt(btnOne.innerText);
    oneBtn(valueOne);

});

btnTwo.addEventListener('click', function () {
    const valueTwo = parseInt(btnTwo.innerText);
    twoBtn(valueTwo);

});

btnThree.addEventListener('click', function () {
    const valueThree = parseInt(btnThree.innerText);
    threeBtn(valueThree);

});

btnPlus.addEventListener('click', function () {
    const valuePlus = btnPlus.innerText;
    plusBtn(valuePlus);

});

btnEqual.addEventListener('click', function () {
    const valueEqual = btnEqual.innerText;
    equalBtn(valueEqual);

}); */