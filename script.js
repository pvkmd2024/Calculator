function calculate() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b !== 0) {
        result = a / b;
      } else {
        result = "cannot divide by zero";
      }
      break;
    default:
      result = "Invalid Operator";
  }

  document.getElementById("result").innerText = "Result: " + result;
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "";
}
