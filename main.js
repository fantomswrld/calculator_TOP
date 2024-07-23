let currentValue = ''
let currentValueAsNumber = 0
let previousValue = ''
let previousValueAsNumber = 0
let operator = ''

const buttonForZero = document.getElementById('zero')
const buttonForOne = document.getElementById('one')
const buttonForTwo = document.getElementById('two')
const buttonForThree = document.getElementById('three')
const buttonForFour = document.getElementById('four')
const buttonForFive = document.getElementById('five')
const buttonForSix = document.getElementById('six')
const buttonForSeven = document.getElementById('seven')
const buttonForEight = document.getElementById('eight')
const buttonForNine = document.getElementById('nine')

const addButton = document.getElementById('add')
const minusButton = document.getElementById('subtract')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')

const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('clear')
const percentButton = document.getElementById('clear')
const negativeButton = document.getElementById('clear')

const equalButton = document.getElementById('equal')

const output = document.querySelector('#output')
console.log(output)

buttonForZero.addEventListener('click', () => {
    appendNumberToCurrentValue(0)
})

buttonForOne.addEventListener('click', () => {
    appendNumberToCurrentValue(1)
})

buttonForTwo.addEventListener('click', () => {
    appendNumberToCurrentValue(2)
})

buttonForThree.addEventListener('click', () => {
    appendNumberToCurrentValue(3)
})

buttonForFour.addEventListener('click', () => {
    appendNumberToCurrentValue(4)
})

buttonForFive.addEventListener('click', () => {
    appendNumberToCurrentValue(5)
})

buttonForSix.addEventListener('click', () => {
    appendNumberToCurrentValue(6)
})

buttonForSeven.addEventListener('click', () => {
    appendNumberToCurrentValue(7)
})

buttonForEight.addEventListener('click', () => {
    appendNumberToCurrentValue(8)
})

buttonForNine.addEventListener('click', () => {
    appendNumberToCurrentValue(9)
})

addButton.addEventListener('click', () => {
    setOperator('+')
})

minusButton.addEventListener('click', () => {
    setOperator('-')
})

multiplyButton.addEventListener('click', () => {
    setOperator('*')
})

divideButton.addEventListener('click', () => {
    setOperator('/')
})

equalButton.addEventListener('click', () => {
    console.log('The previous value was: ' + previousValueAsNumber)
    console.log('The current value is: ' + currentValueAsNumber)
    console.log(operate(previousValueAsNumber, operator, currentValueAsNumber))
    output.textContent = operate(previousValueAsNumber, operator, currentValueAsNumber)
})

function appendNumberToCurrentValue(value) {
    currentValue += value
    currentValueAsNumber = parseInt(currentValue)
    output.textContent = currentValueAsNumber
    console.log(currentValueAsNumber)
}

function setOperator(value) {
    previousValue = currentValue
    previousValueAsNumber = parseInt(previousValue)
    operator = value
    console.log(operator)
    currentValue = ''
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
        return add(value1, value2)
    } else if(inputOperator == '-') {
        return subtract(value1, value2)
    } else if(inputOperator == '*') {
        return multiply(value1, value2)
    } else if(inputOperator == '/') {
        return divide(value1, value2)
    } else {
        return 'Invalid Operator'
    }
}