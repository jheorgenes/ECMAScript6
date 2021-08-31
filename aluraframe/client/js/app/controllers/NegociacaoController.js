class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

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
        let data = new Date(
            //Trabalhando com spread operator e arrow functions
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) //Usando moderador de resto para encontrar o segundo item do array e modificá-lo
        );
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

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
    }
}