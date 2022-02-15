// =================================================================================================== //
// =========================================    QUESTÃO 01   ========================================= //
// =================================================================================================== //

/*
    Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços.
    A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
*/

//Digite a dimensão da escada em largura e altura.
let dimension = 6;                                      

for(let i = 1; i <= dimension ; i++) {                  //Loop for com um numero de iterações iguais a dimensão definida.
    let line;                                           //Definição de uma variável.
    line = ' '.repeat(dimension-i) + '*'.repeat(i);     //A variável line recebe uma quantidade de espaços igual a dimensão menos o número de iterações
                                                        //rodados concatenado com uma quantidade de asteristicos igual ao numero de iterações.
    console.log(line);                                  //Exibe no console cada linha iterada, formando a escada
};