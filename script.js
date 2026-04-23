const display = document.getElementById("display");
const operadores = ["+", "-", "*", "/"];
const trocarCor = document.getElementById('trocaCor');

function anexar(input) {
  let inputText = display.value;
  let ultimo = inputText.slice(-1);

  if (operadores.includes(ultimo) && operadores.includes(input)) {
    display.value = inputText.substring(0, inputText.length - 1);
    display.value += input;
    display.scrollLeft = display.scrollWidth;
  } else if (display.value === "Erro") {
    return 0;
  } else {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
  }
}

function apagar() {
  let inputText = display.value;
  if (display.value == "Erro") {
    return 0;
  } else {
    display.value = inputText.substring(0, inputText.length - 1);
  }
}

function limpar() {
  display.value = "";
}

function calcular() {
  try {
    display.value = Function("return " + display.value)();
  } catch {
    display.value = "Erro";
    return 0;
  }
}

trocarCor.addEventListener('click', () => {
  console.log("teste");
  document.body.classList.toggle('dark-theme');
})
