import Negociacao from "./models/negociacao.js";
import NegociacaoController from "./controllers/negociacao-controller.js";
//
const negociacao = new Negociacao(new Date(), 12, 234);
console.log(negociacao);
const controller = new NegociacaoController();
console.log(controller);
const form = document.querySelector(".form");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    controller.adicionarNegociacao();
});
