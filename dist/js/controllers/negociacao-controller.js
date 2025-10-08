import Negociacao from "../models/negociacao.js";
import listaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";
import MensagemView from "../views/mensagem-view.js";
import DiasDaSemana from "../enums/dias-da-semana.js";
export default class NegociacaoController {
    inputData;
    inputQuantidade;
    inputValor;
    listaNegociacoes = new listaNegociacoes();
    negociacoesView = new NegociacoesView("#negociacoesView");
    // pega elemento HTML da página que vai receber tabela de transações
    mensagemView = new MensagemView("#mensagemView");
    constructor() {
        this.inputData = document.getElementById("data");
        this.inputQuantidade = document.getElementById("quantidade");
        this.inputValor = document.getElementById("valor");
        this.negociacoesView.atualizarNaPagina(this.listaNegociacoes);
    }
    getListaNegociacoes() {
        return this.listaNegociacoes;
    }
    adicionarNegociacao() {
        const negociacao = Negociacao.criarNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
        if (this.checarSeEDiaUtil(negociacao.getData())) {
            this.listaNegociacoes.adicionarNaListaNegociacoes(negociacao);
            console.log(this.listaNegociacoes);
            this.negociacoesView.atualizarNaPagina(this.listaNegociacoes);
            this.mensagemView.atualizarNaPagina("Negociação adicionada com sucesso!");
            this.limparFormulario();
        }
        else {
            this.mensagemView.atualizarNaPagina("Só aceitamos transações em dias de semana.");
        }
    }
    checarSeEDiaUtil(data) {
        return data.getDay() !== DiasDaSemana.SABADO && data.getDay() !== DiasDaSemana.DOMINGO;
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
