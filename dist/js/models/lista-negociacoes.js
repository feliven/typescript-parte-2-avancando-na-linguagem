export default class listaNegociacoes {
    listaNegociacoes = [];
    adicionarNaListaNegociacoes(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listarNegociacoes() {
        return this.listaNegociacoes;
    }
}
