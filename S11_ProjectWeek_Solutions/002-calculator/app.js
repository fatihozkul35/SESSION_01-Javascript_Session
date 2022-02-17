//? Selectors
//! We can use getElementsByClassName selector to select multiple html elements. But, if we want to iterate these elements, we should use Array.from() method or spread/rest (...) operator.
// const numberButtons = document.getElementsByClassName("num");
// Array.from(numberButtons).forEach((element) => {
//   console.log(element);
// });
// [...numberButtons].forEach((element) => {
//   console.log(element);
// });
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const acButton = document.querySelector(".ac");
const pmButton = document.querySelector(".pm");
const percentButton = document.querySelector(".percent");
const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

//? Operator variables
let previousOperand = "";
let currentOperand = "";
let operation = "";

//?numbers and decimal buttons event
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.textContent);
    updateDisplay();
  });
});

//?Operator button event
operationButtons.forEach((op) => {
  op.addEventListener("click", () => {
    chooseOperator(op.textContent);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});

//? All Clear(AC) button event
acButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

//? plus-minus(+-) button event
pmButton.addEventListener("click", () => {
  plusMinus();
  updateDisplay();
});

//? percent (%) button event
percentButton.addEventListener("click", () => {
  percent();
  updateDisplay();
});

//? When number and decimal buttons are clicked, this function appends the numbers textContent
const appendNumber = (num) => {
  if (currentOperand.includes(".") && num === ".")
    //? if our number includes . and user reenters ., it returns
    return;
  //? if user enters more than 10 digit,it returns
  if (currentOperand.length > 10) return;

  //? if user enters 0 and reenter 0 , it returns
  if (currentOperand === "0" && num === "0") return;

  //? if user enters 0  then dont enter 0 and . , it display this entered value.
  if (currentOperand === "0" && num !== "0" && num !== ".") {
    currentOperand = num;
    return;
  }

  //? otherwise,it concatinates all numbers to display them
  currentOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currentOperand;
  prevDisp.textContent = `${previousOperand} ${operation}`;
};
const chooseOperator = (op) => {
  //? if user dont enter any number and press first any operator button, it returns
  if (currentOperand === "") return;

  //? if user enter any number, it computes
  if (previousOperand) {
    compute();
  }

  //? variable swapping
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
};

const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  //? if equal button is clicked, we should reset operation and previousOperand for next usage
  operation = "";
  previousOperand = "";
};

const clear = () => {
  operation = "";
  previousOperand = "";
  currentOperand = "";
};

const plusMinus = () => {
  currentOperand = currentOperand * -1;
};

const percent = () => {
  if (!currentOperand) return;
  currentOperand = currentOperand / 100;
};
