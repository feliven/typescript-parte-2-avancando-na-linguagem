import Negociacao from "../models/negociacao.js";
import listaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";
import MensagemView from "../views/mensagem-view.js";
import DiasDaSemana from "../enums/dias-da-semana.js";

export default class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private listaNegociacoes: listaNegociacoes = new listaNegociacoes();

  private negociacoesView = new NegociacoesView("#negociacoesView");
  // pega elemento HTML da página que vai receber tabela de transações

  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.getElementById("data") as HTMLInputElement;
    this.inputQuantidade = document.getElementById("quantidade") as HTMLInputElement;
    this.inputValor = document.getElementById("valor") as HTMLInputElement;
    this.negociacoesView.atualizarNaPagina(this.listaNegociacoes);
  }

  public getListaNegociacoes(): listaNegociacoes {
    return this.listaNegociacoes;
  }

  public adicionarNegociacao(): void {
    const negociacao: Negociacao = Negociacao.criarNegociacao(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    console.log(negociacao);

    if (this.checarSeEDiaUtil(negociacao.getData())) {
      this.listaNegociacoes.adicionarNaListaNegociacoes(negociacao);
      console.log(this.listaNegociacoes);

      this.negociacoesView.atualizarNaPagina(this.listaNegociacoes);

      this.mensagemView.atualizarNaPagina("Negociação adicionada com sucesso!");
      this.limparFormulario();
    } else {
      this.mensagemView.atualizarNaPagina("Só aceitamos transações em dias de semana.");
    }
  }

  private checarSeEDiaUtil(data: Date) {
    return data.getDay() !== DiasDaSemana.SABADO && data.getDay() !== DiasDaSemana.DOMINGO;
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
