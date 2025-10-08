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
    static criarNegociacao(dataString, quantidadeString, valorString) {
        const timestamp = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
        const data = new Date(timestamp);
        const quantidade = +quantidadeString;
        const valor = +valorString;
        return new Negociacao(data, quantidade, valor);
    }
}
