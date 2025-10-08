import NegociacaoController from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();
console.log(controller);

const form: HTMLFormElement = document.querySelector(".form");
form.addEventListener("submit", (evento: Event) => {
  evento.preventDefault();
  controller.adicionarNegociacao();
});
