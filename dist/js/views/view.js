export default class View {
    elementoPagina;
    constructor(seletor) {
        this.elementoPagina = document.querySelector(seletor);
    }
}
