const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', function (event) {
        buttonText = event.target.innerText;
        console.log('button text is ', buttonText);

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = '';
            display.value = screenValue;
        }

        else if (buttonText == '=') {
            display.value = eval(screenValue);
        }

        else {
            screenValue += buttonText;
            display.value = screenValue;
        }

    });
};