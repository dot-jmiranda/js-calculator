let displayValue = "";
let operation = {
  first: "",
  op: "",
  second: ""
};
let afterOp = false;

const displayScreen = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");
const dotButton = document.querySelector(".dot");
const opButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

function display() {
  displayScreen.textContent = displayValue;
}

function addDigit() {
  let digit = null;

  keyboardInput === null ? (digit = this.textContent) : (digit = keyboardInput);

  if (
    operation.first === "0" &&
    operation.op === "÷" &&
    (digit === "0" || digit === 0)
  ) {
    alert("You can't divide 0 by 0!");
    return;
  }

  if (afterOp === true) {
    operation.first = "";
    displayValue = "";
    display();
    afterOp = false;
  }

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

function addDot() {
  if (afterOp === true) {
    operation.first = "";
    displayValue = "";
    display();
    afterOp = false;
  }

  if (operation.op === "") {
    if (operation.first.includes(".")) return;
    operation.first += ".";
  } else {
    if (operation.second.includes(".")) return;
    operation.second += ".";
  }

  displayValue += ".";
  display();

  keyboardInput = null;

  console.log(operation);
}

function addOperation() {
  let op = null;

  keyboardInput === null ? (op = this.textContent) : (op = keyboardInput);

  if (afterOp == true) {
    operation.op = "";
    operation.second = "";
    afterOp = false;
  }

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

function addEqual() {
  if (operation.first === "") {
    return;
  } else if (operation.second === "") {
    return;
  } else {
    operate(operation.op, Number(operation.first), Number(operation.second));
  }

  displayValue = operation.first;
  afterOp = true;
  display();

  console.log(operation);
}

function deleteDigit() {
  if (operation.op === "") {
    operation.first = operation.first.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
  } else if (operation.second === "") {
    operation.op = "";
    displayValue = displayValue.slice(0, -3);
  } else {
    operation.second = operation.second.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
  }

  display();
}

digitButtons.forEach(button => {
  button.addEventListener("click", addDigit);
});

dotButton.addEventListener("click", addDot);

opButtons.forEach(button => {
  button.addEventListener("click", addOperation);
});

equalButton.addEventListener("click", addEqual);

clearButton.addEventListener("click", () => {
  operation.first = "";
  operation.second = "";
  operation.op = "";
  displayValue = "";

  display();
});

deleteButton.addEventListener("click", deleteDigit);

function operate(op, a, b) {
  let result;

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

  result = Math.round(result * 10000 + Number.EPSILON) / 10000;
  console.log("result --> " + result);

  operation.first = result.toString();
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
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 48:
      keyboardInput = 0;
      addDigit();
      break;
    case 96:
      keyboardInput = 0;
      addDigit();
      break;
    case 49:
      keyboardInput = 1;
      addDigit();
      break;
    case 97:
      keyboardInput = 1;
      addDigit();
      break;
    case 50:
      keyboardInput = 2;
      addDigit();
      break;
    case 98:
      keyboardInput = 2;
      addDigit();
      break;
    case 51:
      keyboardInput = 3;
      addDigit();
      break;
    case 99:
      keyboardInput = 3;
      addDigit();
      break;
    case 52:
      keyboardInput = 4;
      addDigit();
      break;
    case 100:
      keyboardInput = 4;
      addDigit();
      break;
    case 53:
      keyboardInput = 5;
      addDigit();
      break;
    case 101:
      keyboardInput = 5;
      addDigit();
      break;
    case 54:
      keyboardInput = 6;
      addDigit();
      break;
    case 102:
      keyboardInput = 6;
      addDigit();
      break;
    case 55:
      keyboardInput = 7;
      addDigit();
      break;
    case 103:
      keyboardInput = 7;
      addDigit();
      break;
    case 56:
      keyboardInput = 8;
      addDigit();
      break;
    case 104:
      keyboardInput = 8;
      addDigit();
      break;
    case 57:
      keyboardInput = 9;
      addDigit();
      break;
    case 105:
      keyboardInput = 9;
      addDigit();
      break;
    case 106:
      keyboardInput = "×";
      addOperation();
      break;
    case 107:
      keyboardInput = "+";
      addOperation();
      break;
    case 109:
      keyboardInput = "-";
      addOperation();
      break;
    case 111:
      keyboardInput = "÷";
      addOperation();
      break;
    case 190:
      addDot();
      break;
    case 110:
      addDot();
      break;
      23;
    case 13:
      addEqual();
      break;
    case 8:
      deleteDigit();
      break;
    default:
      keyboardInput = null;
      break;
  }
});
