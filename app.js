let firstNum = ""
let secondNum = ""
let currentOp = ""
let toggle = false
let total = ""
const numButtons = document.querySelectorAll("#num")
const opButtons = document.querySelectorAll("#op")
const equalsBtn = document.getElementById("equalsBtn")
const clearBtn = document.getElementById("clearBtn")
const pointBtn = document.getElementById("pointBtn")
const bsBtn = document.getElementById("backSpaceBtn")
const display = document.getElementById("display")

numButtons.forEach((button) => {
button.addEventListener("click", () => appendNumber(button.textContent))
});


opButtons.forEach((button) => {
    button.addEventListener("click", () => setOperator(button.textContent))
    });

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {display.textContent += number;}
    if(toggle) {
        display.textContent = number;
        toggle = false;
    }
};

equalsBtn.addEventListener('click', function() {
    if (firstNum && currentOp) {
        total = operate(currentOp, firstNum, display.textContent);
        display.textContent = total; 
    }
    firstNum = '';
});

clearBtn.addEventListener('click', function() {
    display.textContent = '0';
    firstNum = '';
    currentOp = '';
});

function setOperator(operator) {
    if (currentOp !== '' && firstNum !== '') {
         display.textContent= operate(currentOp, firstNum, display.textContent)   
    }
    firstNum = display.textContent;
    currentOp = operator;
    toggle = true;
};

pointBtn.addEventListener('click', function() {
    if (display.textContent.includes('.')) {
        return
    }
    display.textContent +='.'
})

bsBtn.addEventListener('click', function() {
    display.textContent = display.textContent.toString().slice(0,-1)
});

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if(x === 0 || y === 0) {
        return "Oops...";
    }
    return Number.isInteger(x / y) ? (x / y ) : (x / y).toFixed(3);
};

function operate(Op, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (Op === "+") {
        return add(num1, num2);
    } else if (Op === "-") {
        return subtract(num1, num2);
    } else if (Op === "*") {
        return multiply(num1, num2);
    } return divide(num1, num2);
};     

