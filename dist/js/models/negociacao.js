export default class Negociacao {
    data;
    quantidade;
    valor;
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    getData() {
        const getData = new Date(this.data);
        return getData;
        // para não poder modificar a data que está armazenada dentro da modelagem de negociação
    }
    getQuantidade() {
        return this.quantidade;
    }
    getValor() {
        return this.valor;
    }
    getVolume() {
        return this.quantidade * this.valor;
    }
}
