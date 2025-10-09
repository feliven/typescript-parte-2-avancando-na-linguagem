export default class View {
    elementoPagina;
    escapar = false;
    constructor(seletor, escapar) {
        const elementoSelecionado = document.querySelector(seletor);
        if (elementoSelecionado) {
            this.elementoPagina = elementoSelecionado;
        }
        else {
            throw new Error(`Não foi possível encontrar o elemento ${seletor} na página.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    atualizarNaPagina(model) {
        let elementoPagina = this.gerarElemento(model);
        if (this.escapar) {
            elementoPagina.innerHTML = elementoPagina.innerHTML.replace(/<script\b[^<]*(?:(?!\/script>)<[^<]*)*<\/script>/gi, "");
        }
        const elementoAtualizado = this.gerarElemento(model);
        console.log(elementoAtualizado);
        this.elementoPagina.innerHTML = "";
        this.elementoPagina.appendChild(elementoAtualizado);
    }
}
