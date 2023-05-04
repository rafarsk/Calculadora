var numero1 = "";
var numero2 = "";
var operador = "";
var resultado = "";

function limpar() {
  numero1 = "";
  numero2 = "";
  operador = "";
  resultado = "";
  document.getElementById("resultado").value = "";
}

function inserirNumero(numero) {
  if (operador === "") {
    numero1 += numero;
  } else {
    numero2 += numero;
  }
  document.getElementById("resultado").value += numero;
}

function inserirOperador(op) {
  operador = op;
  document.getElementById("resultado").value += op;
}

function calcular() {
  var num1 = parseFloat(numero1);
  var num2 = parseFloat(numero2);
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      resultado = "";
      break;
  }
  document.getElementById("resultado").value = resultado;
}