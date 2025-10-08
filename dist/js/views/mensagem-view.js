export default class MensagemView {
    elementoPagina;
    constructor(seletor) {
        this.elementoPagina = document.querySelector(seletor);
    }
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
