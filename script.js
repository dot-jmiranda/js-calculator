let displayValue = "";
let operation = {
  first: "",
  op: "",
  second: ""
};

const displayScreen = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");
const opButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");

function display() {
  displayScreen.textContent = displayValue;
}

function addDigit() {
  let digit = null;

  keyboardInput === null ? (digit = this.textContent) : (digit = keyboardInput);

  if (operation.op === "") {
    operation.first += digit;
  } else {
    operation.second += digit;
  }

  displayValue += digit;
  display();

  keyboardInput = null;

  console.log(operation);
}

function addOperation() {
  let op = null;

  keyboardInput === null ? (op = this.textContent) : (op = keyboardInput);

  if (operation.op === "") {
    operation.op = op;
    displayValue += " " + op + " ";
  } else if (operation.second !== "") {
    operate(operation.op, Number(operation.first), Number(operation.second));
    operation.op = op;
    operation.second = "";
    displayValue = operation.first + " " + op + " ";
  }

  display();

  keyboardInput = null;

  console.log(operation);
}

digitButtons.forEach(button => {
  button.addEventListener("click", addDigit);
});

opButtons.forEach(button => {
  button.addEventListener("click", addOperation);
});

equalButton.addEventListener("click", () => {
  if (operation.first === "") {
    return;
  } else if (operation.op === "") {
    operate("+", Number(operation.first), 0);
  } else if (operation.second === "") {
    return;
  } else {
    operate(operation.op, operation.first, operation.second);
  }

  displayValue = operation.first;
  display();
});

function operate(op, a, b) {
  let result;
  console.log(op + " " + a + " " + b);

  switch (op) {
    case "+":
      result = sum(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "×":
      result = multiply(a, b);
      break;
    case "÷":
      result = divide(a, b);
      break;
  }

  operation.first = result;
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// KEYBOARD SUPPORT
let keyboardInput = null;

addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 49:
      keyboardInput = 1;
      addDigit();
      break;
    case 50:
      keyboardInput = 2;
      addDigit();
      break;
    case 51:
      keyboardInput = 3;
      addDigit();
      break;
    case 52:
      keyboardInput = 4;
      addDigit();
      break;
    case 53:
      keyboardInput = 5;
      addDigit();
      break;
    case 54:
      keyboardInput = 6;
      addDigit();
      break;
    case 55:
      keyboardInput = 7;
      addDigit();
      break;
    case 56:
      keyboardInput = 8;
      addDigit();
      break;
    case 57:
      keyboardInput = 9;
      addDigit();
      break;
    case 48:
      keyboardInput = 0;
      addDigit();
      break;
    default:
      keyboardInput = null;
      break;
  }
});
