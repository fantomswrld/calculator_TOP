let firstValue = 0;
let secondValue = 0;

let inputOperator = '';

const output = document.querySelector('#output');

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if(buttons[i].classList.contains('operator')) {
            let currentNumber = output.innerHTML;
            const currentValue = parseInt(currentNumber);

            firstValue = currentValue;
            console.log(firstValue);

            inputOperator = buttons[i].innerHTML;
            output.innerHTML = '';
            console.log(inputOperator);

            
        } else if(buttons[i].classList.contains('special')) {
            if(buttons[i].innerHTML == 'CE') {
                console.log('clearing')
                clear();
            } else if(buttons[i].innerHTML == 'Del') {
                console.log('removing');
                remove();
            }
        } else if(buttons[i].id == 'equal') {
            console.log(operate(firstValue, inputOperator, secondValue));
        } else {
            let currentText = buttons[i].innerHTML;
            // const currentValue = parseInt(currentText);
            output.innerHTML += currentText;

            // firstValue += currentValue;
            // console.log(firstValue);
        }
    });
}

function clear() {
    output.innerHTML = '';
    firstValue = 0;
    secondValur = 0;
    inputOperator = '';
}

function remove() {
    let valueLength = output.innerHTML.length;
    console.log(valueLength);

    let lastValue = output.innerHTML.charAt(valueLength - 1);
    console.log(lastValue);

    let newValue = output.innerHTML.replace(lastValue, '');
    console.log(newValue);

    output.innerHTML = newValue;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round(a / b, 2);
}

function operate(value1, operator, value2) {
    if(operator == '+') {
        add(value1, value2);
    } else if(operator == '-') {
        subtract(value1, value2);
    } else if(operator == 'x') {
        multiply(value1, value2);
    } else if(operator == '/') {
        divide(value1, value2);
    } else {
        return 'Invalid Operator'
    }
}