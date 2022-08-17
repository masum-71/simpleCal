function getInputValue(input) {
  const inputValue = parseFloat(document.getElementById(input).value);
  return inputValue;
}

//Addition
document.getElementById("add").addEventListener("click", () => {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");
  const result = document.getElementById("result");
  result.innerText = num1 + num2;
});
//Subtraction

document.getElementById("sub").addEventListener("click", () => {
  const num1 = getInputValue("num1");
  const num2 = getInputValue("num2");
  const result = document.getElementById("result");
  result.innerText = num1 - num2;
});

//Multiply

document.getElementById("multi").addEventListener("click", () => {
    const num1 = getInputValue("num1");
    const num2 = getInputValue("num2");
    const result = document.getElementById("result");
    result.innerText = num1 * num2;
});

//Division

document.getElementById("division").addEventListener("click", () => {
    const num1 = getInputValue("num1");
    const num2 = getInputValue("num2");
    const result = document.getElementById("result");
    result.innerText = num1 / num2;
});
