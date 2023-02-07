// display screen elements
let prevOperand = document.querySelector('[data-prev-operand]')
let currOperand = document.querySelector('[data-current-operand]')

// button elements
let numberButtons = document.querySelectorAll('[data-number]')

let operationButtons = document.querySelectorAll('[data-set-operation]')

let clearButton = document.querySelector('[data-clear-screen]')

let calculateButton = document.querySelector('[data-calculate]')

let deleteButton = document.querySelector('[data-delete-one]')


function appendNumber(number) {
    if (currOperand.innerText.toString().includes('.') && number.toString() === '.') return
    currOperand.innerText = currOperand.innerText.toString() + number.toString()
    console.log(1)
}

function operation(operator) {
    if (currOperand.innerText == '' ) return
    if (currOperand.innerText.toString().includes('+')) return
    if (currOperand.innerText.toString().includes('-')) return
    if (currOperand.innerText.toString().includes('*')) return
    if (currOperand.innerText.toString().includes('%')) return
    
    if(prevOperand.innerText == ''){
        prevOperand.innerText = currOperand.innerText.toString() + operator.toString()
        
    } else {
        let result = calculate(false)
        prevOperand.innerText = `${result} ${operator.toString()}`
    }
    currOperand.innerText = ''
}

function calculate(show=true) {
    if(currOperand.innerText == '') return
    let calcString = prevOperand.innerText + currOperand.innerText.toString()
    let calc = eval(calcString)
    if (show) {
        prevOperand.innerText = ''
        currOperand.innerText = calc
    }
    return calc
}

function deleteOne() {
    if (currOperand.innerText == '') return
    currOperand.innerText = currOperand.innerText.toString().slice(0, -1)
}

function clearScreen() {
    currOperand.innerText = ''
    prevOperand.innerText = ''
}

numberButtons.forEach((button) => {
    let number = button.innerText;
    button.addEventListener('click', () => {
        appendNumber(number)
})
})

operationButtons.forEach((button) => {
    let operator = button.innerText.toString()
    button.addEventListener('click' , () => {
        operation(operator)
    })
})

calculateButton.addEventListener('click' , () => {
    calculate()
})

deleteButton.addEventListener('click', () => {
    deleteOne()
})

clearButton.addEventListener('click' , () => {
    clearScreen()
})
