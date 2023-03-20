var previousValue = document.getElementsByClassName("previousValue");
var currentValue = document.getElementsByClassName("currentValue");
var operation = null;
var buttons = document.querySelectorAll(".buttons button");
const mathOperations = ["*", "-", "+", "/"];

function calculator(currentValue, previousValue, operation) {
  //store the current operation and transform text into numbers with the + before the attribution
  var mathOperation =
    previousValue.innerText[previousValue.innerText.length - 1];
  let previous = +previousValue.innerText.slice(0, -1);
  let current;
  let result;

  //verification if the current value is empty so the operation can be done by the previous values only
  if (currentValue.innerText == "") {
    current = +previousValue.innerText.slice(0, -1);
  } else {
    current = +currentValue.innerText;
  }

  switch (mathOperation) {
    case "+":
      result = previous + current;
      previousValue.innerText = result + operation;
      currentValue.innerText = "";
      break;

    case "-":
      result = previous - current;
      previousValue.innerText = result + operation;
      currentValue.innerText = "";
      break;

    case "*":
      result = previous * current;
      previousValue.innerText = result + operation;
      currentValue.innerText = "";
      break;

    case "/":
      if (previousValue.innerText === "0" || currentValue.innerText === "0") {
        break;
      }
      result = previous / current;
      previousValue.innerText = result + operation;
      currentValue.innerText = "";
      break;
    default:
      return;
  }
}

function displayNumber(value) {
  var currentValue = document.getElementsByClassName("currentValue")[0];
  var previousValue = document.getElementsByClassName("previousValue")[0];

  if (value >= 0) {
    //Changing the size of the font after a certain length of the string and limiting the string size to 14 numbers.
    var numberLength =
      document.getElementsByClassName("currentValue")[0].innerText.length;

    if (numberLength > 14) {
      return;
    } else if (numberLength > 10) {
      currentValue.style.fontSize = "2.8rem";
    } else if (numberLength > 8) {
      currentValue.style.fontSize = "4rem";
    }

    currentValue.innerText += value;
    return;

    //verifying if the string already has a point and if it does, blocking from adding another point
  } else if (value === ".") {
    if (
      !document
        .getElementsByClassName("currentValue")[0]
        .innerText.includes(".")
    ) {
      currentValue.innerText += `${value}`;
    }
    return;
  } else if (mathOperations.includes(value)) {
    operation = value;
    if (previousValue.innerText === "" && currentValue.innerText === "") {
      return;
    } else if (previousValue.innerText === "") {
      document.getElementsByClassName(
        "previousValue"
      )[0].innerText = `${currentValue.innerText}${operation}`;
      currentValue.innerText = "";
    } else {
      if (currentValue.innerText === "") {
        document.getElementsByClassName("previousValue")[0].innerText =
          document
            .getElementsByClassName("previousValue")[0]
            .innerText.slice(0, -1) + operation;
      } else {
        calculator(currentValue, previousValue, operation);
      }
    }
  } else if (value === "=") {
    if (currentValue.innerText === "" && previousValue.innerText === "") {
      return;
    } else if (previousValue.innerText === "") {
      return;
    } else if (currentValue.innerText != "" && previousValue.innerText != "") {
      operation = previousValue.innerText[previousValue.innerText.length - 1];
      calculator(currentValue, previousValue, operation);
    } else {
      operation = previousValue.innerText[previousValue.innerText.length - 1];
      calculator(currentValue, previousValue, operation);
    }
  } else if (value === "AC") {
    previousValue.innerText = "";
    currentValue.innerText = "";
  } else if (value === "DEL") {
    if (currentValue.innerText === "") {
      return;
    } else {
      currentValue.innerText = currentValue.innerText.slice(
        0,
        currentValue.innerText.length - 1
      );
    }
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    displayNumber(value);
  });
});

//https://github.com/matheusbattisti/js_calc/blob/main/js/scripts.js
