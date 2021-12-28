//VÁRIAVEIS GLOBAIS
let numero = '';
let resultado = '';


function insert(num) {
    if(resultado === '') {
        numero = document.querySelector('.calculo').innerHTML;
        numero = document.querySelector('.calculo').innerHTML = numero+num;
    } else {
        eraseAll();
    }     
}

function calcular() {
    if(numero) {
        resultado = document.querySelector('.resultado').innerHTML = eval(numero);
    } else {
        document.querySelector('.resultado').innerHTML = "<div class='resultado insiraCalculo'>Insira um cálculo!</div>";
    }
    //document.querySelector('.resultado').innerHTML = resultado;
}


function eraseAll() {
    resultado = document.querySelector('.resultado').innerHTML = '';
    numero = document.querySelector('.calculo').innerHTML = '';
}
function eraseLast() {
    let numero = document.querySelector('.calculo').innerHTML;
    document.querySelector('.calculo').innerHTML = numero.substring(0, numero.length -1);
}

