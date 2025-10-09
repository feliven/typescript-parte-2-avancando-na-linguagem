import View from "./view.js";
export default class NegociacoesView extends View {
    gerarElemento(model) {
        const tabela = document.createElement("table");
        tabela.classList.add("table");
        tabela.classList.add("table-hover");
        tabela.classList.add("table-bordered");
        const cabecalho = ["DATA", "QUANTIDADE", "VALOR"];
        const thead = document.createElement("thead");
        const linhaCabecalho = document.createElement("tr");
        cabecalho.map((item) => {
            const itemCabecalho = document.createElement("th");
            itemCabecalho.textContent = item;
            linhaCabecalho.appendChild(itemCabecalho);
        });
        thead.appendChild(linhaCabecalho);
        const tbody = document.createElement("tbody");
        model.listarNegociacoes().map((negociacao) => {
            const linhaNegociacao = document.createElement("tr");
            const dataNegociacao = document.createElement("td");
            const data = negociacao.getData();
            const dataFormatada = new Intl.DateTimeFormat().format(data);
            dataNegociacao.textContent = dataFormatada;
            const qtdeNegociacao = document.createElement("td");
            qtdeNegociacao.textContent = negociacao.getQuantidade().toString();
            const valorNegociacao = document.createElement("td");
            valorNegociacao.textContent = negociacao.getValor().toString();
            linhaNegociacao.appendChild(dataNegociacao);
            linhaNegociacao.appendChild(qtdeNegociacao);
            linhaNegociacao.appendChild(valorNegociacao);
            tbody.appendChild(linhaNegociacao);
        });
        tabela.appendChild(thead);
        tabela.appendChild(tbody);
        return tabela;
    }
}
