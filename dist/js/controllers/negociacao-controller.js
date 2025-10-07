import Negociacao from "../models/negociacao.js";
import listaNegociacoes from "../models/lista-negociacoes.js";
export default class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    listaNegociacoes = new listaNegociacoes();
    constructor() {
        this.inputData = document.getElementById("data");
        this.inputQuantidade = document.getElementById("quantidade");
        this.inputValor = document.getElementById("valor");
    }
    criarNegociacao() {
        const dataString = this.inputData.value;
        const timestamp = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
        const data = new Date(timestamp);
        const quantidadeString = this.inputQuantidade.value;
        const quantidade = +quantidadeString;
        const valorString = this.inputValor.value;
        const valor = +valorString;
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    adicionarNegociacao() {
        const negociacao = this.criarNegociacao();
        negociacao.getData().setDate(12);
        console.log(negociacao);
        this.listaNegociacoes.adicionarNaListaNegociacoes(negociacao);
        // this.listaNegociacoes.listarNegociacoes().pop();
        console.log(this.listaNegociacoes);
        this.limparFormulario();
    }
}
