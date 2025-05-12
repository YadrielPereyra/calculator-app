let currentInput = '';
let currentOperator = '';
let firstNumber = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(operator) {
  if (currentInput === '') return;
  firstNumber = currentInput;
  currentOperator = operator;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || firstNumber === '' || currentOperator === '') return;
  const result = eval(`${firstNumber}${currentOperator}${currentInput}`);
  currentInput = result;
  firstNumber = '';
  currentOperator = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  firstNumber = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
