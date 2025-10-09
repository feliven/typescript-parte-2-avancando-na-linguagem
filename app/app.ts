import NegociacaoController from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();
console.log(controller);

const form: HTMLFormElement | null = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (evento: Event) => {
    evento.preventDefault();
    controller.adicionarNegociacao();
  });
} else {
  throw new Error("Não foi possível iniciar a aplicação.");
}
