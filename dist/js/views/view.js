export default class View {
    elementoPagina;
    constructor(seletor) {
        this.elementoPagina = document.querySelector(seletor);
    }
    gerarElemento(model) {
        throw new Error("Classe filha precisa implementar método gerarElemento");
    }
    atualizarNaPagina(model) {
        const elementoAtualizado = this.gerarElemento(model);
        console.log(elementoAtualizado);
        this.elementoPagina.innerHTML = "";
        this.elementoPagina.appendChild(elementoAtualizado);
    }
}
