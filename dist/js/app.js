import NegociacaoController from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
console.log(controller);
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        controller.adicionarNegociacao();
    });
}
else {
    throw new Error("Não foi possível iniciar a aplicação.");
}
