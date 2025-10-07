export default class listaNegociacoes {
    listaNegociacoes = [];
    adicionarNaListaNegociacoes(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    listarNegociacoes() {
        return this.listaNegociacoes;
        // "..." é o Spread Operator: ele pega cada item desse array individualmente e coloca em uma nova lista
    }
}
