export default class Negociacao {
  constructor(private readonly data: Date, private readonly quantidade: number, private readonly valor: number) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  getData(): Date {
    const getData = new Date(this.data);
    return getData;
    // para não poder modificar a data que está armazenada dentro da modelagem de negociação
  }

  getQuantidade(): number {
    return this.quantidade;
  }

  getValor(): number {
    return this.valor;
  }

  getVolume(): number {
    return this.quantidade * this.valor;
  }

  public static criarNegociacao(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const timestamp: number = Date.parse(dataString + " 00:00:00"); // corrige bug de data no JS
    const data: Date = new Date(timestamp);

    const quantidade: number = +quantidadeString;

    const valor: number = +valorString;

    return new Negociacao(data, quantidade, valor);
  }
}
