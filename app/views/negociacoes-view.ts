import listaNegociacoes from "../models/lista-negociacoes.js";
import Negociacao from "../models/negociacao.js";
import View from "./view.js";

export default class NegociacoesView extends View<listaNegociacoes> {
  gerarElemento(model: listaNegociacoes): HTMLElement {
    const tabela: HTMLTableElement = document.createElement("table");
    tabela.classList.add("table");
    tabela.classList.add("table-hover");
    tabela.classList.add("table-bordered");

    // monta thead da tabela
    const cabecalho: string[] = ["DATA", "QUANTIDADE", "VALOR"];

    const thead: HTMLTableSectionElement = document.createElement("thead");
    const linhaCabecalho: HTMLTableRowElement = document.createElement("tr");

    cabecalho.map((item: string) => {
      const itemCabecalho: HTMLTableCellElement = document.createElement("th");
      itemCabecalho.textContent = item;
      linhaCabecalho.appendChild(itemCabecalho);
    });

    thead.appendChild(linhaCabecalho);

    // monta tbody da tabela
    const tbody: HTMLTableSectionElement = document.createElement("tbody");

    model.listarNegociacoes().map((negociacao: Negociacao) => {
      const linhaNegociacao: HTMLTableRowElement = document.createElement("tr");

      const dataNegociacao: HTMLTableCellElement = document.createElement("td");
      const data: Date = negociacao.getData();
      const dataFormatada: string = new Intl.DateTimeFormat().format(data);
      dataNegociacao.textContent = dataFormatada;

      const qtdeNegociacao: HTMLTableCellElement = document.createElement("td");
      qtdeNegociacao.textContent = negociacao.getQuantidade().toString();

      const valorNegociacao: HTMLTableCellElement = document.createElement("td");
      valorNegociacao.textContent = negociacao.getValor().toString();

      linhaNegociacao.appendChild(dataNegociacao);
      linhaNegociacao.appendChild(qtdeNegociacao);
      linhaNegociacao.appendChild(valorNegociacao);

      tbody.appendChild(linhaNegociacao);
    });

    // monta tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    return tabela;
  }
}
