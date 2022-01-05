//POMODORO
let secondPomodoro = 60;                                                                                    //Valor de 60 segundos referente a cada minuto. 
let minuteSPomodoro = 1500;                                                                                 //Valor dos minutos referente ao total de minutos em segundos.
let minutePomodoro = minuteSPomodoro/60;                                                                    //Valor dos minutosS convertido para minutos

function Pomodoro() {

    document.querySelector('#minute').innerHTML = fixZero(Math.floor(minutePomodoro));                      //Exibição do minuto atual na tela com arredondamento para baixo, para quando chegar no 59 ser reduzido 1 minuto
    setTimeout(()=>{                                                                                        //Timer de 1 segundo
        document.querySelector('#second').innerHTML = fixZero(secondPomodoro-1);                            //Exibição do segundo atual na tela -1 segundo, para exibir de 0 a 59 segundos
        secondPomodoro--;                                                                                   //Decremento dos segundos
        minuteSPomodoro--;                                                                                  //Decremento dos segundos da variavel minuteS
        minutePomodoro = minuteSPomodoro/60;                                                                //Conversão da variável minuteS para minutos
        if(secondPomodoro < 60 && secondPomodoro > 0 && minuteSPomodoro < 1500 && minuteSPomodoro > 0) {    //Se os segundos forem menor que 60 e maior que 0 | E os minutos menores que 120 e maiores que 0
            Pomodoro();                                                                                     //Rodar a função timer novamente
        } else if(secondPomodoro <= 0 && minuteSPomodoro < 1500 && minuteSPomodoro > 0){                    //Se os segundos forem menor ou igual a 0 | E os minutos menores que 120 e maiores que 0                                 
            secondPomodoro = 60;                                                                            //Reiniciar os segundos em 60
            Pomodoro()                                                                                      //E rodar a função timer novamente
        } else if (secondPomodoro <= 0 && minuteSPomodoro <= 0) {                                           //Se os segundos forem menor ou igual a 0 | E o minuto menor ou igual a 0 
            selectShortBreak()                                                                              //Finaliza o timer e chama a função para descanso curto
        }
    }, 1000);
}

//Short Break
let secondShortBreak = 60;                                                                                  //Valor de 60 segundos referente a cada minuto. 
let minuteSShortBreak = 300;                                                                                //Valor dos minutos referente ao total de minutos em segundos.
let minuteShortBreak = minuteSShortBreak/60;                                                                //Valor dos minutosS convertido para minutos

function shortbreak() {

    document.querySelector('#minute').innerHTML = fixZero(Math.floor(minuteShortBreak));                           //Exibição do minuto atual na tela com arredondamento para baixo, para quando chegar no 59 ser reduzido 1 minuto
    setTimeout(()=>{                                                                                               //Timer de 1 segundo
        document.querySelector('#second').innerHTML = fixZero(secondShortBreak-1);                                 //Exibição do segundo atual na tela -1 segundo, para exibir de 0 a 59 segundos
        secondShortBreak--;                                                                                        //Decremento dos segundos
        minuteSShortBreak--;                                                                                       //Decremento dos segundos da variavel minuteS
        minuteShortBreak = minuteSShortBreak/60;                                                                   //Conversão da variável minuteS para minutos
        if(secondShortBreak < 60 && secondShortBreak > 0 && minuteSShortBreak < 1500 && minuteSShortBreak > 0) {   //Se os segundos forem menor que 60 e maior que 0 | E os minutos menores que 120 e maiores que 0
            shortbreak();                                                                                          //Rodar a função timer novamente
        } else if(secondShortBreak <= 0 && minuteSShortBreak < 1500 && minuteSShortBreak > 0){                     //Se os segundos forem menor ou igual a 0 | E os minutos menores que 120 e maiores que 0                                 
            secondShortBreak = 60;                                                                                 //Reiniciar os segundos em 60
            shortbreak()                                                                                           //E rodar a função timer novamente
        } else if (secondShortBreak <= 0 && minuteSShortBreak <= 0) {                                              //Se os segundos forem menor ou igual a 0 | E o minuto menor ou igual a 0 
            selectPomodoro()                                                                                       //Finaliza o timer e chama a função para pomodoro
        }
    }, 1000);
}

//Long Break
let secondLongBreak = 60;                                                                                          //Valor de 60 segundos referente a cada minuto. 
let minuteSLongBreak = 900;                                                                                        //Valor dos minutos referente ao total de minutos em segundos.
let minuteLongBreak = minuteSLongBreak/60;                                                                         //Valor dos minutosS convertido para minutos

function longbreak() {

    document.querySelector('#minute').innerHTML = fixZero(Math.floor(minuteLongBreak));                            //Exibição do minuto atual na tela com arredondamento para baixo, para quando chegar no 59 ser reduzido 1 minuto
    setTimeout(()=>{                                                                                               //Timer de 1 segundo
        document.querySelector('#second').innerHTML = fixZero(secondLongBreak-1);                                  //Exibição do segundo atual na tela -1 segundo, para exibir de 0 a 59 segundos
        secondLongBreak--;                                                                                         //Decremento dos segundos
        minuteSLongBreak--;                                                                                        //Decremento dos segundos da variavel minuteS
        minuteLongBreak = minuteSLongBreak/60;                                                                     //Conversão da variável minuteS para minutos
        if(secondLongBreak < 60 && secondLongBreak > 0 && minuteSLongBreak < 1500 && minuteSLongBreak > 0) {       //Se os segundos forem menor que 60 e maior que 0 | E os minutos menores que 120 e maiores que 0
            longbreak();                                                                                           //Rodar a função timer novamente
        } else if(secondLongBreak <= 0 && minuteSLongBreak < 1500 && minuteSLongBreak > 0){                        //Se os segundos forem menor ou igual a 0 | E os minutos menores que 120 e maiores que 0                                 
            secondLongBreak = 60;                                                                                  //Reiniciar os segundos em 60
            longbreak()                                                                                            //E rodar a função timer novamente
        } else if (secondLongBreak <= 0 && minuteSLongBreak <= 0) {                                                //Se os segundos forem menor ou igual a 0 | E o minuto menor ou igual a 0 
            selectPomodoro()                                                                                       //Finaliza o timer e chama a função para pomodoro
        }
    }, 1000);
}

//FUNÇÃO PARA CORRIGIR AUSÊNCIA DO ZERO
function fixZero(time) {
    if(time < 10){                        //Se o valor alocado em timer for menor que 10
        return '0'+time;                  //Será feita uma concatenação de zero com o numero alocado
    } else {                              //Se não
        return time;                      //Será retornado o proprio numero alocado, sem alterações
    }
}

//SELEÇÃO DO TIMER
//Ao clicar em algum dos elementos a class selected será atribuida a ele e removida dos outros | Utilizada funções para reaproveitamento de código
function selectPomodoro() {
        document.querySelector('.pomodoro').classList.add("selected");
        document.querySelector('.shortBreak').classList.remove("selected");
        document.querySelector('.longBreak').classList.remove("selected");
        document.querySelector('#minute').innerHTML = "25";
}
document.querySelector('.pomodoro').addEventListener('click', selectPomodoro);        //Evento de click nos itens do menu

function selectShortBreak() {
    document.querySelector('.pomodoro').classList.remove("selected");
    document.querySelector('.shortBreak').classList.add("selected");
    document.querySelector('.longBreak').classList.remove("selected");
    document.querySelector('#minute').innerHTML = "05";
        
}
document.querySelector('.shortBreak').addEventListener('click', selectShortBreak);    //Evento de click nos itens do menu

function selectLongBreak() {
    document.querySelector('.pomodoro').classList.remove("selected");
    document.querySelector('.shortBreak').classList.remove("selected");
    document.querySelector('.longBreak').classList.add("selected");
    document.querySelector('#minute').innerHTML = "15";
    editColor()
        
}
document.querySelector('.longBreak').addEventListener('click', selectLongBreak);      //Evento de click nos itens do menu


//VERIFICAR QUAL TIMER ESTÁ SELECIONADO
//INICIAR TIMER
document.querySelector('.start').addEventListener('click', ()=>{
    let pomodoro = document.querySelector('.pomodoro').classList.contains("selected");         //Verifica se o elemento contém uma classe "selected", caso positivo retorna true, caso contrário retorna false.
    let shortBreak = document.querySelector('.shortBreak').classList.contains("selected");     //Verifica se o elemento contém uma classe "selected", caso positivo retorna true, caso contrário retorna false.
    let longBreak = document.querySelector('.longBreak').classList.contains("selected");       //Verifica se o elemento contém uma classe "selected", caso positivo retorna true, caso contrário retorna false.

    if(pomodoro === true) {
        Pomodoro();                         //Caso o elemento pomodoro contenha a classe selected, a função pomodoro será chamada.
    } else if (shortBreak === true) {
        shortbreak();                       //Caso o elemento shortbreak contenha a classe selected, a função shortbreak será chamada.
    } else if (longBreak === true) {
        longbreak();                        //Caso o elemento longbreak contenha a classe selected, a função longbreak será chamada.
    }
});

//ALTERAR COR PARA DESCANSO
function editColorLight() {
    document.querySelector('body').style.backgroundColor = "var(--cor4)";
    document.querySelector('.container').style.backgroundColor = "var(--cor5)";
    document.querySelector('.selected').style.backgroundColor = "var(--cor6)";
    document.querySelector(".start").style.backgroundColor = "var(--cor6)";
    document.querySelector(".stop").style.backgroundColor = "var(--cor6)";
};
function editColorRed() {
    document.querySelector('body').style.backgroundColor = "var(--cor4)";
    document.querySelector('.container').style.backgroundColor = "var(--cor5)";
    document.querySelector('.selected').style.backgroundColor = "var(--cor6)";
    document.querySelector(".start").style.backgroundColor = "var(--cor6)";
    document.querySelector(".stop").style.backgroundColor = "var(--cor6)";
};

//PARAR TIMER
document.querySelector('.stop').addEventListener('click', ()=>{
    
});
