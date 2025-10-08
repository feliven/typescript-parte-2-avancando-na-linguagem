export default abstract class View<tipoGenerico> {
  protected elementoPagina: HTMLElement;

  constructor(seletor: string) {
    this.elementoPagina = document.querySelector(seletor);
  }

  abstract gerarElemento(model: tipoGenerico): HTMLElement;

  atualizarNaPagina(model: tipoGenerico): void {
    const elementoAtualizado: HTMLElement = this.gerarElemento(model);
    console.log(elementoAtualizado);
    this.elementoPagina.innerHTML = "";
    this.elementoPagina.appendChild(elementoAtualizado);
  }
}
