export default class View {
  protected elementoPagina: HTMLElement;

  constructor(seletor: string) {
    this.elementoPagina = document.querySelector(seletor);
  }

  // gerarElemento(model: string): HTMLElement {}

  // atualizarNaPagina(model: string): void {}
}
