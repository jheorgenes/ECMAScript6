class ListaNegociacoes {

    constructor(){

        this._negociacoes = [];
    }

    adiciona(negociacao){ //Igual ao método set em java

        this._negociacoes.push(negociacao); //Método push é um método genérico que adiciona dados no array
    }

    get negociacoes() {
        //Blincando o método de negociações para não haver acesso indevido a lista de negociações
        return [].concat(this._negociacoes); //Utiliza um array vazio que concatena (método .concat) uma nova lista de negociações
    }
}