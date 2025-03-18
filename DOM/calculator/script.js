
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('[id="add"], [id="subtract"], [id="multiply"], [id="divide"]');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            firstNumber += button.textContent;
            display.value = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.value = secondNumber;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber !== '' && secondNumber === '') {
            operator = button.textContent;
            display.value = operator;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            if (num2 === 0) {
                display.value = "Error";
                firstNumber = '';
                secondNumber = '';
                operator = '';
                return;
            }
            result = num1 / num2;
        }

        display.value = result;
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
    }
});

clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = 0;
    display.value = '0';
});