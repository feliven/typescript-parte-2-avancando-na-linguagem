export default class MensagemView {
  private elementoPagina: HTMLElement;

  constructor(seletor: string) {
    this.elementoPagina = document.querySelector(seletor);
  }

  gerarMensagem(model: string): HTMLElement {
    const paragrafoMensagem: HTMLParagraphElement = document.createElement("p");
    paragrafoMensagem.classList.add("alert");
    paragrafoMensagem.classList.add("alert-info");

    paragrafoMensagem.innerHTML = model;

    // document.createElement(elem);
    return paragrafoMensagem;
  }

  atualizarMensagem(model: string): void {
    const mensagemAtualizada: HTMLElement = this.gerarMensagem(model);
    this.elementoPagina.innerHTML = "";
    this.elementoPagina.appendChild(mensagemAtualizada);
  }
}
