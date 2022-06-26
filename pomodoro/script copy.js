//POMODORO

let second = 60;                                                                        //Valor de 60 segundos referente a cada minuto. 
let minuteS = 120;                                                                       //Valor de dos minutos referente ao total de minutos em segundos.
let minute = minuteS/60;                                                                 // Valor dos minutos convertido para minutos



function updateSecond() {
    
    setTimeout(()=>{                                                                     //Timer de 1 segundo
        document.querySelector('#second').innerHTML = second-1;                          //Exibição do segundo atual na tela. Para não exibir o numero 60 e exibir o 00 é necessário -1
        second--;                                                                        //Decremento dos segundos
        if(second < 60 && second > 0) {                                                 //Se os segundos forem menor que 59 e maior que -1 
            updateSecond();                                                              //Rodar a função dos segundos novamente
        } else {                                                                         //Caso contrário
            second = 60;                                                                 //Reiniciar os segundos em 59
            updateSecond()                                                               //E rodar a função dos segundos novamente
        }
    }, 1000);
}


function updateMinute() {
    document.querySelector('#minute').innerHTML = Math.floor(minute);              //Exibição do minuto atual na tela com arredondamento para baixo, para quando chegar no 59 ser reduzido 1 minuto
    setTimeout(()=>{                                                                     //Timer de 1 segundo
        --minuteS;                                                                       //Decremento dos minutos
        minute = minuteS/60;                                                             //A variavel minute recebe o valor de minute atualizado e divide por 60 segundos.
        if(minuteS < 120 && minuteS > 0) {                                              //Se os minutos forem menor que o total inicial-1 e maior que -1
            updateMinute();                                                              //Rodar a função dos segundos novamente
        } 
    }, 1000);
}

document.querySelector('.control').addEventListener('click', ()=>{
    updateMinute();
    updateSecond();
    
})


