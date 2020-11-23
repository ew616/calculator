function validParentheses(parens) {
  let replaced = replaceParen(parens);

  function replaceParen(str) {
    if (str.replace(/(\(\))/g, "") === undefined) {
      return "(";
    } else {
      for (i = 0; i < str.length; i++) {
        if (str[i] + str[i + 1] === "()") {
          return str.replace(/(\(\))/g, "");
        }
      }
    }
  }

  if (replaced == undefined || replaced === "") {
    return true;
  } else if (
    replaced.length === 1 ||
    replaced.length % 2 > 0 ||
    replaced.charAt([0]) === ")" ||
    replaced.charAt([replaced.length - 1]) === "("
  ) {
    return false;
  } else {
    validParentheses(replaced);
  }

  return true;
}

const screen = document.getElementById("screen");
const operatorButtons = document.querySelectorAll(".operatorButtons");
const numberButtons = document.querySelectorAll(".numberButtons");
const equals = document.querySelector("#equals");

//function which overwrites screen
function updateScreen(num) {
  if (screen.innerHTML === "0") {
    screen.innerHTML = num;
  } else {
    screen.innerHTML += num;
  }
}

function clearScreen(num) {
  screen.innerHTML = 0;
}

//Storing value of buttons and updating screen when they are clicked
let number1 = "";
let number2 = "";
let operator = "";

function storeVar(a) {
  let number1 = a.value;
  updateScreen(number1);
}

//Func to tell if operators are active, once an operator is clicked JS saves first number to variable
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    number1 = screen.innerHTML;
    operator = button.innerHTML;

    clearScreen();
  });
});

//Saving second number as var
equals.addEventListener("click", () => {
  number2 = screen.innerHTML;
  let result = operate(number1, number2);
  screen.innerHTML = result;
});

//Clear Button
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  document.getElementById("screen").innerHTML = 0;
});

//Operator Functions
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
  if (b === 0) {
    alert("Nice try bozo, why dont you give it another shot");
  } else {
    return a / b;
  }
}

function operate(a, b) {
  a = Number(number1);
  b = Number(number2);

  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
