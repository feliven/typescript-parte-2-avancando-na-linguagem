import listaNegociacoes from "../models/lista-negociacoes.js";

export default class NegociacoesView {
  private divNegociacoes: HTMLElement;

  constructor(seletor: string) {
    this.divNegociacoes = document.querySelector(seletor);
  }

  gerarTabelaTransacoes(model: listaNegociacoes): HTMLTableElement {
    const tabela = document.createElement("table");
    tabela.classList.add("table");
    tabela.classList.add("table-hover");
    tabela.classList.add("table-bordered");

    /*     const thead: string = `
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
        </tr>
    </thead>`; */

    // monta thead da tabela
    const cabecalho = ["DATA", "QUANTIDADE", "VALOR"];

    const thead = document.createElement("thead");
    const linhaCabecalho = document.createElement("tr");

    cabecalho.map((item) => {
      const itemCabecalho = document.createElement("th");
      itemCabecalho.textContent = item;
      linhaCabecalho.appendChild(itemCabecalho);
    });

    thead.appendChild(linhaCabecalho);

    // monta tbody da tabela
    const tbody = document.createElement("tbody");

    model.listarNegociacoes().map((negociacao) => {
      const linhaNegociacao = document.createElement("tr");

      const dataNegociacao = document.createElement("td");
      dataNegociacao.textContent = negociacao.getData().toString();

      const qtdeNegociacao = document.createElement("td");
      qtdeNegociacao.textContent = negociacao.getQuantidade().toString();

      const valorNegociacao = document.createElement("td");
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

  atualizarView(model: listaNegociacoes): void {
    const tabelaGerada = this.gerarTabelaTransacoes(model);
    console.log(tabelaGerada);
    this.divNegociacoes.innerHTML = "";
    this.divNegociacoes.appendChild(tabelaGerada);
  }
}
