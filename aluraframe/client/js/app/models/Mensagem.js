class Mensagem {

    constructor(texto='') { //Recebendo dado vazio ou com o valor que foi obtido via parâmetro

        this._texto = texto;
    }

    get texto() {
        
        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}

