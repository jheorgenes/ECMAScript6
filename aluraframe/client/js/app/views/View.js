class View {
    //Esta classe será herdada, por isso é uma classe abstrata no js
    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado'); //Lança uma exception quando não implementa este método
    }

    update(model) {

        this._elemento.innerHTML = this.template(model); //Inserindo dados no html que foram obtidos do método template
    }
}