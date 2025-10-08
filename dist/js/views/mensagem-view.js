import View from "./view.js";
export default class MensagemView extends View {
    gerarMensagem(model) {
        const paragrafoMensagem = document.createElement("p");
        paragrafoMensagem.classList.add("alert");
        paragrafoMensagem.classList.add("alert-info");
        paragrafoMensagem.innerHTML = model;
        // document.createElement(elem);
        return paragrafoMensagem;
    }
    atualizarMensagem(model) {
        const mensagemAtualizada = this.gerarMensagem(model);
        this.elementoPagina.innerHTML = "";
        this.elementoPagina.appendChild(mensagemAtualizada);
    }
}
