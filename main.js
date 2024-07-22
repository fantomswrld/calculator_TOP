let firstValue = 0
let secondValue = 0
let storedSecondValue = 0
let storedFirstValue = 0
let operator = ''
let currentValue = 0

const output = document.querySelector('#output')

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const specialButtons = document.querySelectorAll('.special')
const equalButton = document.querySelector('.equal')
const decimalButton = document.querySelector('.decimal')

// Store the input of the first number in preparation for calculation
numberButtons.forEach(firstNumber => firstNumber.addEventListener('click', () => {
    const firstInput = firstNumber.textContent
    firstValue = parseInt(output.textContent + firstInput)
    storedFirstValue = firstValue
    currentValue = storedFirstValue
    output.textContent = storedFirstValue
    console.log(storedFirstValue)
}))

// store the operator once there has been a first number selected
operatorButtons.forEach(thisOperator => thisOperator.addEventListener('click', () => {
    if(firstValue != 0) {
        output.textContent = ''
        const currentOperator = thisOperator.textContent
        operator = currentOperator
        console.log('the operator is: ' + operator)
    } else {
        return
    }
}))

equalButton.addEventListener('click', () => {
    console.log('equal button was pressed')
    console.log(firstValue)
    console.log(secondValue)

    if(secondValue != 0) {
        console.log(storedSecondValue)
        console.log(storedFirstValue + ' ' + operator + ' ' + storedSecondValue)
        console.log(operate(storedFirstValue, operator, storedSecondValue))
    } else {
        return
    }
})

specialButtons.forEach(button => button.addEventListener('click', () => {
    if(button.textContent == 'CE') {
        clear()
    } else if(button.textContent == 'Del') {
        remove()
    } else if(button.textContent == '%') {
        output.textContent = percent(firstValue, secondValue)
    } else if(button.textContent == '-/+') {
        console.log(currentValue * -1)
        console.log(makeNegative(currentValue))
        output.textContent = makeNegative(currentValue)
    }
}))

// ensuring that we can only get a secondValue if an operator was selected to avoid errors
if(operator != '') {
    getSecondValue()
}

function getSecondValue() {
    numberButtons.forEach(secondNumber => secondNumber.addEventListener('click', () => {
        const secondInput = secondNumber.textContent
        secondValue = parseInt(output.textContent + secondInput)
        storedSecondValue = secondValue
        currentValue = storedSecondValue
        output.textContent = storedSecondValue
        console.log(storedSecondValue)
    }))
}

function clear() {
    output.textContent = ''
    firstValue = 0
    secondValue = 0
    operator = ''
}

function remove() {
    let valueLength = output.innerHTML.length
    console.log(valueLength)

    let lastValue = output.textContent.charAt(valueLength - 1)
    console.log(lastValue)

    let newValue = output.textContent.replace(lastValue, '')
    console.log(newValue)

    output.textContent = newValue
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return Math.round(a / b, 2)
}

function percent(a, b) {
    return a / b * 100
}

function makeNegative(a) {
    return a * -1
}

function operate(value1, inputOperator, value2) {
    if(inputOperator == '+') {
        console.log('adding...')
        console.log(add(value1, value2))
    } else if(inputOperator == '-') {
        console.log('subtracting...')
        console.log(subtract(value1, value2))
    } else if(inputOperator == 'x') {
        console.log('multiplying...')
        console.log(multiply(value1, value2))
    } else if(inputOperator == '/') {
        console.log('dividing...')
        console.log(divide(value1, value2))
    } else {
        return 'Invalid Operator'
    }

    clear()
}