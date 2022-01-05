document.body.addEventListener('keyup', (event)=>{  //Adiciona um evento para observar quais teclas são pressionadas na página
    playSound(event.code.toLowerCase());            //Envia para a função playSound a tecla pressionada | event.code identifica a tecla pressionada | toLowerCase() transforma o texto em               
});

document.querySelector('.composer button').addEventListener('click', ()=>{     //Adiciona um evento de click no botão tocar, responsável por tocar os digitos escritos no campo
    let song = document.querySelector('#input').value;                         //A variável recebe e le os valores escritos no campo
    
    if(song !== '') {                                                     //Se song for diferente de vazio
        let songArray = song.split('');                                   //Divida em um arry separando nos espaços vazios
        playComposition(songArray);                                       //Executa uma função para tocar a composição
    }  
});

function playSound(sound) {                                               //Executa o som da tecla pressionada
    let audioElement = document.querySelector(`#s_${sound}`);             //A variável recebe a tecla pressionada
    console.log(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);  //A variável recebe o datakey do html da tecla pressionada
    console.log(`div[data-key="${sound}"]`)
    
    if(audioElement) {                                                    //Se a tecla pressionada existir no html
        audioElement.currentTime = 0;                                     //Volta qualquer audio que tenha sido executado para a posição 0 da linha do tempo
        audioElement.play();                                              //O som será executado
    }

    if(keyElement) {                                                      //Se a tecla pressionada existir no html
        keyElement.classList.add('press');                               //Adiciona a class para mudar a cor na vizualização
    
        setTimeout(()=>{
            keyElement.classList.remove('press');                        //Após 3ms remove a cor da tecla pressionada
        }, 300);
    }
}

function playComposition(songArray) {                                    //Função para executar a composição
    let wait = 0                                                         //Wait inicia em 0


    for(let songItem of songArray) {                                     //Recebe o array de teclas da composição
        setTimeout(()=>{                                                 //Settimeout para dar um intervalo entre as teclas com o tempo definido por wait
            if(songItem === '-') {                                       //Caso o item digitado seja o sinal de menos deve ser feita a conversão para o nome da key code, no caso minus.
                playSound(`minus`);                                      //Toca o som de minus
            } else if (songItem === '=') {                               //Caso o item digitado seja o sinal de igual deve ser feita a conversão para o nome da key code, no caso equal.
                playSound(`equal`);                                      //Toca o som de equal
            } else {                                                     //Caso não seja nenhuma das situações acima
                playSound(`digit${songItem}`);                           //Toca o som das teclas dentro do template string geral das teclas numéricas de cima -> digit${}
            }          
        }, wait);       
        wait +=250;                                                      //O intervalo de wait passa para mais 250ms a cada execução  
    }
}



//CRÉDITOS ARQUIVOS DE AUDIO
// Os arquivos de audio foram retirados de https://freesound.org/people/jobro/packs/2489/?page=2#sound