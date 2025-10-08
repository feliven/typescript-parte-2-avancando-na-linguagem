import listaNegociacoes from "../models/lista-negociacoes";

export default class View {
  protected elementoPagina: HTMLElement;

  constructor(seletor: string) {
    this.elementoPagina = document.querySelector(seletor);
  }

  gerarElemento(model: string | listaNegociacoes): HTMLElement {
    throw new Error("Classe filha precisa implementar método gerarElemento");
  }

  atualizarNaPagina(model: string | listaNegociacoes): void {
    const elementoAtualizado: HTMLElement = this.gerarElemento(model);
    console.log(elementoAtualizado);
    this.elementoPagina.innerHTML = "";
    this.elementoPagina.appendChild(elementoAtualizado);
  }
}
