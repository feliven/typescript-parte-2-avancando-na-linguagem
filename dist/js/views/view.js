export default class View {
    elementoPagina;
    escapar = false;
    constructor(seletor, escapar) {
        this.elementoPagina = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    atualizarNaPagina(model) {
        let elementoPagina = this.gerarElemento(model);
        // protege contra ataque que usa <script> em campos do formulário
        if (this.escapar) {
            elementoPagina.innerHTML = elementoPagina.innerHTML.replace(/<script\b[^<]*(?:(?!\/script>)<[^<]*)*<\/script>/gi, "");
        }
        const elementoAtualizado = this.gerarElemento(model);
        console.log(elementoAtualizado);
        this.elementoPagina.innerHTML = "";
        this.elementoPagina.appendChild(elementoAtualizado);
    }
}
