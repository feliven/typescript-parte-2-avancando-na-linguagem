import NegociacaoController from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
console.log(controller);
const form = document.querySelector(".form");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    controller.adicionarNegociacao();
});
