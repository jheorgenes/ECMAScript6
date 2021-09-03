class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document); //Utilizando dollar para simular o seletor do jquery, porém utilizando js
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(); //Instanciando lista de negociações
        this._negociacoesView = new NegociacoesView($('#negociacoesView')); //Instanciando tabela de negociações para exibir na view (consulta no dom o id negociacoesView e passa como argumento)
        this._negociacoesView.update(this._listaNegociacoes); //Passando como parâmetro todos os dados de negociações
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao()); //Chamando método privado _criaNegociacao
        this._negociacoesView.update(this._listaNegociacoes); //adicionando dados na tabela após inclusão de novo dado.
        this._limpaFormulario();
    }

    /* métodos privados (convenção) */
    _criaNegociacao(){
        //Método retorna uma instancia da classe Negociação e recebe a data, quantidade e valor do input como argumento
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), //Chamando métodos staticos da classe DataHelper
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus(); //Garantindo que o foco permanecerá na data quando limpar o formulário
    }

}

/******************* Exemplos que foram substituídos **************/
        //Formas de trabalhar com data
        //let data = new Date(this._inputData.value.split('-')); //Utilizando o split para separar a string em um array, quebrando-o pelo '-'
        //let data = new Date(this._inputData.value.replace(/-/g, ',')); //Utilizando regex na string para substituir '-' por ','

        /*let data = new Date(
            //Trabalhando com spread operator que são os três pontinhos antes do this
            ...this._inputData.value
                .split('-')
                .map(function (item, indice){ //Varrendo o array com o valor de cada item e de percorrendo pelo índice
                    return item - indice % 2; //Usando moderador de resto para encontrar o segundo item do array e modificá-lo
                })
        );*/

        //Treinando varredura de array utilizando map
        //Como fiz
        /*let numeros = [3,2,11,20,8,7];
        let novalista = numeros.map(item => {
            if(item % 2 == 1){
                return item * 2;
            }
            return item;
        })
        console.log(novalista); */

        //Como poderia ter ficado
        /*let numeros = [3,2,11,20,8,7];
        let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
        console.log(novosNumeros);*/

        //Uma outra maneira também inteligente
        /*let numeros = [3,2,11,20,8,7];
        let novosNumeros = numeros.map((item)=> (item%2 +1 ) * item);
        console.log(novosNumeros);*/