export default class View<tipoGenerico> {
  protected elementoPagina: HTMLElement;

  constructor(seletor: string) {
    this.elementoPagina = document.querySelector(seletor);
  }

  gerarElemento(model: tipoGenerico): HTMLElement {
    throw new Error("Classe filha precisa implementar método gerarElemento");
  }

  atualizarNaPagina(model: tipoGenerico): void {
    const elementoAtualizado: HTMLElement = this.gerarElemento(model);
    console.log(elementoAtualizado);
    this.elementoPagina.innerHTML = "";
    this.elementoPagina.appendChild(elementoAtualizado);
  }
}
