let numero = document.querySelectorAll(".numero");
let op = document.querySelectorAll(".operador");
let display = document.querySelector(".display");
let igual = document.querySelector(".igual");
let limpar = document.querySelector(".limpar");
let ponto = document.querySelector(".ponto");


let resultado = false;
let valorAnterior = "";
let operador = "";


numero.forEach((botao) => {
  botao.addEventListener("click", () => {
    let valor = botao.getAttribute("data-num");

    if (resultado) {
      display.innerText = valor;
      resultado = false;
    } else {
      display.innerText += valor;
    }
  });
});


op.forEach((botao) => {
  botao.addEventListener("click", () => {
    valorAnterior = display.innerText;
    operador = botao.getAttribute("data-op");
    display.innerText += operador;
  });
});

igual.addEventListener("click", () => {
  try {
    display.innerText = eval(display.innerText);
    resultado = true;
  } catch (e) {
    display.innerText = "Erro";
    resultado = true;
  }
});


ponto.addEventListener("click", () => {
  let valorAtual = display.innerText;
  let partes = valorAtual.split(/[\+\-\*\/]/);
  let ultimaParte = partes[partes.length - 1];

  if (!ultimaParte.includes(".")) {
    display.innerText += ".";
  }
});


limpar.addEventListener("click", () => {
  display.innerText = "";
  valorAnterior = "";
  operador = "";
  resultado = false;
});
