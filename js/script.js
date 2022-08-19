let inputWeight = document.querySelector('#input-weight');
let inputHeight = document.querySelector('#input-height');
const buttonCalculateImc = document.querySelector('#button-calculate-imc');
let imcResult = document.querySelector('#imc-result');
let imcRange = document.querySelector('#imc-range');
let resultDiv = document.querySelector('#result');

function start() {
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  var imc = weight / (height * height);
  return imc;
}

function checkRange(imc) {
  if (imc >= 16 && imc <= 16.99) {
    imcRange.textContent = 'muito abaixo do peso.';
  } else if (imc >= 17 && imc <= 18.49) {
    imcRange.textContent = 'abaixo do peso.';
  } else if (imc >= 18.5 && imc <= 24.99) {
    imcRange.textContent = 'peso normal.';
  } else if (imc >= 25 && imc <= 29.99) {
    imcRange.textContent = 'acima do peso.';
  } else if (imc >= 30 && imc <= 34.99) {
    imcRange.textContent = 'obesidade grau I.';
  } else if (imc >= 35 && imc <= 40.99) {
    imcRange.textContent = 'obesidade grau II.';
  } else if (imc >= 40) {
    imcRange.textContent = 'obesidade grau III.';
  } else if (imc < 16) {
    imcRange.textContent = 'Valor inválido.';
  }
  return;
}

function handleButtonClick() {
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  checkRange(imc);

  resultDiv.style.display = 'block';
}
start();
