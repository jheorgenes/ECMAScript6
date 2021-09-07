class MensagemView extends View { //Herdando de View

    constructor(elemento) {
        
        super(elemento); //Enviando dados obtidos desse construtor para a classe PAI que terá acesso a esses dados.
    }

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'; //Ternário para a mensagem ir preenchida ou vazia
    }

}