let currentValue = ''
let currentValueAsNumber = 0
let previousValue = ''
let previousValueAsNumber = 0
let operator = ''
let previousAnswer = 0

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
const deleteButton = document.getElementById('delete')
const percentButton = document.getElementById('percent')
const negativeButton = document.getElementById('negative')

const decimalButton = document.getElementById('decimal')

const equalButton = document.getElementById('equal')

const output = document.querySelector('#output')
const previousValueInOutput = document.querySelector('#previousValue')

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

decimalButton.addEventListener('click', () => {
    if(currentValue.indexOf('.') == -1) {
        appendNumberToCurrentValue('.')
    } else {
        return
    }
})

clearButton.addEventListener('click', () => {
    output.textContent = ''
    currentValue = ''
    currentValueAsNumber = 0
    previousValue = ''
    previousValueAsNumber = 0
    operator = ''
})

deleteButton.addEventListener('click', () => {
    const currentValueLength = currentValue.length
    const lastValueOfCurrentValue = currentValue.charAt(currentValueLength - 1)
    const newCurrentValue = currentValue.replace(lastValueOfCurrentValue, '')
    output.textContent = newCurrentValue
    currentValueAsNumber = parseFloat(newCurrentValue)

    console.log(newCurrentValue)
})

percentButton.addEventListener('click', () => {
    if(currentValue.indexOf('%') == -1) {
        currentValue += '%'
        output.textContent = currentValue
        currentValueAsNumber = parseInt(currentValue) / 100
    } else {
        return
    }
})

negativeButton.addEventListener('click', () => {
    currentValue = makeNegative(currentValue)
    output.textContent = currentValue
    currentValueAsNumber = currentValue
})

equalButton.addEventListener('click', () => {
    currentValue = output.textContent
    currentValueAsNumber = parseFloat(currentValue)
    
    output.textContent = operate(previousValueAsNumber, operator, currentValueAsNumber)
    previousValueInOutput.textContent = `${previousValue} ${operator} ${currentValue} =`
})

function appendNumberToCurrentValue(value) {
    currentValue += value
    currentValueAsNumber = parseFloat(currentValue)
    output.textContent = currentValue
}

function setOperator(value) {
    previousValue = currentValue
    previousValueAsNumber = parseFloat(previousValue)
    operator = value
    previousValueInOutput.textContent = previousValue + ' ' + operator
    currentValue = ''
    output.textContent = ''
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
    return (a / b) * 100
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