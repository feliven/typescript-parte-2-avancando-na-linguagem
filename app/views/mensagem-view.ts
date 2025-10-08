import View from "./view.js";

export default class MensagemView extends View<string> {
  protected gerarElemento(model: string): HTMLElement {
    const paragrafoMensagem: HTMLParagraphElement = document.createElement("p");
    paragrafoMensagem.classList.add("alert");
    paragrafoMensagem.classList.add("alert-info");

    paragrafoMensagem.innerHTML = model;

    return paragrafoMensagem;
  }
}
