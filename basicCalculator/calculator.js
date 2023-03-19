let firstNumber = 10;
let secondNumber = 10;

document.getElementById('num1').textContent = firstNumber;
document.getElementById('num2').textContent = secondNumber;
let summation = document.getElementById('sumNumbers');

function add(){
    let addition = firstNumber + secondNumber;
    summation.textContent = `Sum: ${addition}`;
}

function subtract(){
    let subtraction = firstNumber - secondNumber;
    summation.textContent = `Sum: ${subtraction}`;
}

function multiply(){
   let  multiply = firstNumber * secondNumber;
    summation.textContent = `Sum: ${multiply}`;
}

function divide(){
    let divide = firstNumber / secondNumber;
    summation.textContent = `Sum: ${divide}`;
}