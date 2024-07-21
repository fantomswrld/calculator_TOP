let firstValue = 0;
let secondValue = 0;

let inputOperator = '';

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
    } else if(operator == '*') {
        multiply(value1, value2);
    } else if(operator == '/') {
        divide(value1, value2);
    } else {
        return 'Invalid Operator'
    }
}