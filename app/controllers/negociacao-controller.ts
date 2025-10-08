import Negociacao from "../models/negociacao.js";
import listaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";

export default class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private listaNegociacoes: listaNegociacoes = new listaNegociacoes();

  private negociacoesView = new NegociacoesView("#negociacoesView");
  // pega elemento HTML da página que vai receber tabela de transações

  constructor() {
    this.inputData = document.getElementById("data") as HTMLInputElement;
    this.inputQuantidade = document.getElementById("quantidade") as HTMLInputElement;
    this.inputValor = document.getElementById("valor") as HTMLInputElement;
    this.negociacoesView.gerarTabelaTransacoes(this.listaNegociacoes);
    this.negociacoesView.atualizarView(this.listaNegociacoes);
  }

  getListaNegociacoes() {
    return this.listaNegociacoes;
  }

  criarNegociacao(): Negociacao {
    const dataString: string = this.inputData.value;
    const timestamp: number = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
    const data: Date = new Date(timestamp);

    const quantidadeString: string = this.inputQuantidade.value;
    const quantidade: number = +quantidadeString;

    const valorString: string = this.inputValor.value;
    const valor: number = +valorString;

    return new Negociacao(data, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  adicionarNegociacao(): void {
    const negociacao = this.criarNegociacao();
    console.log(negociacao);

    this.listaNegociacoes.adicionarNaListaNegociacoes(negociacao);
    console.log(this.listaNegociacoes);

    this.negociacoesView.atualizarView(this.listaNegociacoes);

    this.limparFormulario();
  }
}
