import Negociacao from "./models/negociacao.js";
import NegociacaoController from "./controllers/negociacao-controller.js";

//
const negociacao: Negociacao = new Negociacao(new Date(), 12, 234);
console.log(negociacao);

const controller: NegociacaoController = new NegociacaoController();
console.log(controller);

const form: HTMLFormElement = document.querySelector(".form");
form.addEventListener("submit", (evento: Event) => {
  evento.preventDefault();
  controller.adicionarNegociacao();
});
