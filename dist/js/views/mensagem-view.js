import View from "./view.js";
export default class MensagemView extends View {
    gerarElemento(model) {
        const paragrafoMensagem = document.createElement("p");
        paragrafoMensagem.classList.add("alert");
        paragrafoMensagem.classList.add("alert-info");
        paragrafoMensagem.innerHTML = model;
        // document.createElement(elem);
        return paragrafoMensagem;
    }
}
