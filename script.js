let operator = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(num) {
    if (operator === '') {
        firstNumber += num;
        document.getElementById('result').value = firstNumber;
    }
    else {
        secondNumber += num;
        document.getElementById('result').value = secondNumber;
    }
}
function Setoperator(op) {
    operator = op;
}
function calculate() {
    let result;

    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
        case '/':
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
    }
    document.getElementById('result').value = result;
    document.getElementById('result').style.backgroundColor="lime";
    secondNumber = "";
    operator = '';
    firstNumber = '';
}
function clearresult() {
    operator = '';
    firstNumber = '';
    secondNumber = '';
    document.getElementById('result').style.backgroundColor="white";
    document.getElementById('result').value = "";
    
}