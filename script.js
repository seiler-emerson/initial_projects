//VÁRIAVEIS GLOBAIS
let numero = '';      //Recebe os dados digitados, inicia vazio.
let resultado = '';   //Recebe o resultado calculado, inicia vazio.


//FUNÇÃO PARA INSERÇÃO DOS DIGITOS
function insert(num) {
    if(resultado === '') {                                                         //Se o resultado estiver vazio.    
        numero = document.querySelector('.calculo').innerHTML;                     //Número inicia vazio.
        numero = document.querySelector('.calculo').innerHTML = numero+num;        //Número recebe o número anterior mais o número digitado.
    } else {             //Se não
        eraseAll();      //Chama a função limpar tudo
    }     
}

//FUNÇÃO PARA REALIZAR OS CÁLCULOS
function calcular() {
    document.querySelector('.resultado').classList.remove("resultado-decimal");             //Se a class resutado-decimal estiver inserida, será removida antes do calculo.
    if(numero) {                                                                            //Se houver algo em número.
        resultado = eval(numero);                                                           //O resultado será o cálculo das expressões que estiverem em número.
        if(Number.isInteger(resultado) === true) {                                          //Se o número recebido em resultado for um número inteiro.
            document.querySelector('.resultado').innerHTML = resultado;                     //Exibir o resultado no display.
        } else {                                                                            //Se for um número decimal.
            document.querySelector('.resultado').classList.add("resultado-decimal");        //Adiciona uma class para reduzir o tamanho da fonte.
            document.querySelector('.resultado').innerHTML = resultado.toFixed(9);          //Exibir o número com no máximo nove casas decimais.
        }
    } else {                                                                                                                        //Se não houver nada inserido em número.
        document.querySelector('.resultado').innerHTML = "<div class='resultado insiraCalculo'>Insira um cálculo!</div>";           //Exibir texto informando.
    }
}

//FUNÇÃO LIMPAR TODO O DISPLAY
function eraseAll() {
    resultado = document.querySelector('.resultado').innerHTML = '';        //Resultado fica vazio.
    numero = document.querySelector('.calculo').innerHTML = '';             //Numero fica vazio.
}

//FUNÇÃO LIMPAR ULTIMO CARACTER DIGITADO
function eraseLast() {
    let numero = document.querySelector('.calculo').innerHTML;                               //Recebe o numero atualizado sempre que houver uma mudança, caso não seja declarado, apagará apenas um caracter.
    document.querySelector('.calculo').innerHTML = numero.substring(0, numero.length -1);    //Apaga o ultimo caracter, cada vez que pressionado.
}