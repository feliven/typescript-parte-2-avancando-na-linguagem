import Negociacao from "./negociacao.js";

export default class listaNegociacoes {
  private listaNegociacoes: Negociacao[] = [];

  adicionarNaListaNegociacoes(negociacao: Negociacao): void {
    this.listaNegociacoes.push(negociacao);
  }

  listarNegociacoes(): readonly Negociacao[] {
    return this.listaNegociacoes;
    // "..." é o Spread Operator: ele pega cada item desse array individualmente e coloca em uma nova lista
  }
}
