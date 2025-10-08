export default abstract class View<tipoGenerico> {
  protected elementoPagina: HTMLElement;
  private escapar: boolean = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elementoPagina = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract gerarElemento(model: tipoGenerico): HTMLElement;

  atualizarNaPagina(model: tipoGenerico): void {
    let elementoPagina: HTMLElement = this.gerarElemento(model);

    // protege contra ataque que usa <script> em campos do formulário
    if (this.escapar) {
      elementoPagina.innerHTML = elementoPagina.innerHTML.replace(
        /<script\b[^<]*(?:(?!\/script>)<[^<]*)*<\/script>/gi,
        ""
      );
    }

    const elementoAtualizado: HTMLElement = this.gerarElemento(model);
    console.log(elementoAtualizado);
    this.elementoPagina.innerHTML = "";
    this.elementoPagina.appendChild(elementoAtualizado);
  }
}
