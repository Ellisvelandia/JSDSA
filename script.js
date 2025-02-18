//which of these variables might be better named using a more descriptive name?
//which of these variables could be declared as constants?

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorSelectInput = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");

function calculate() {
  let firstNumber = parseFloat(firstNumberInput.value);
  let secondNumber = parseFloat(secondNumberInput.value);
  let operator = operatorSelectInput.value;

  let result;

  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = "Invalid operator";
  }

  resultParagraph.textContent = "Result: " + result;
}

calculate();
calculateButton.addEventListener("click", calculate);

//Functios types
// perform a specific task
// return a value

//What are functions?
//Reusable code that can be called multiple times
//organize our code
//mini programs
// buit-in functions // custom functions

//Exercise: Swap variables

// let a = 4;
// let b = 5;
// let res = a + b;

// console.log(res);

// //Allowed & Best practice
// let user;
// let firstName = "Ellis";
// let address;

//Not allowed
// var user;
// let firstname
// let a;
