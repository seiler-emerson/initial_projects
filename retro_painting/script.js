
// COLORINDO PIXEL

function press(n) {  //Para cada pixel selecionado
    let verify = document.querySelector(`.pixel_${n}`).classList.contains(`write`);  //A variável verificacao recebe o pixel selecionado e verifica se contain a class write responsável pela cor do pixel

    if (verify === false) {                                                          //Caso a variavel não tenha a class write, ela não está pintada
        document.querySelector(`.pixel_${n}`).classList.add('write');                     //Nesse caso o pixel é pintado.
    } else {                                                                              //Caso contrário
        document.querySelector(`.pixel_${n}`).classList.remove('write');                  //Se um pixel pintado for pressionado novamente sua cor será removida
    }
};


// LIMPAR O QUADRO

var pixels = document.querySelectorAll('.pixel');      //A variável pixels recebe todos os pixels pela classe .pixel
var button = document.querySelector('.button');        //A variável button recebe o botão de limpar

button.addEventListener('click', erase)               //No botão é adicionado um evento de click com uma função de nome "limpar"
function erase() {                                    //Função limpar
  for (var i = 0; i < pixels.length; i++) {            //A função percorrerá todos os itens com a class pixel  |  (var i = 0; i < pixels.length; i++) (var i recebe inicialmente 0; para i menor que a quantidade total de elementos pixels; +1 é adicionado ao valor de i)
    pixels[i].classList.remove('write')                //Remove a class write em todos os pixels em que elá estiver presente.
  }
};


//  function editColor() {
//      corSelect = document.querySelector('.colorSelect').value;
//      document.querySelector(`.write`).style.backgroundColor = document.querySelector('.colorSelect').value;
// }