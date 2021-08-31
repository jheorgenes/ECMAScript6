class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instânciada');
    }

    //determinado métodos staticos 
    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; //Utilizando template string
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        
        return new Date(
            ...texto.split('-') //Trabalhando com spread operator e quebrando a string em array utilizando (-) para identificação
            .map((item, indice) => item - indice % 2)); //Usando moderador de resto para encontrar o segundo item do array e modificá-lo
    }
} 