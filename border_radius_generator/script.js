function press() {
    //ESQUERDA CIMA
    
    //Ler e alterar CSS
    let leftTop = document.querySelector('#left-top').value;                                            //Ler valor digitado
    let leftTopNumber = parseInt(leftTop)                                                               //Converter para number
    document.querySelector('.box-radius').style.borderTopLeftRadius = `${leftTopNumber}px`;             //Alterar CSS para border radius com valor digitado

    //ESQUERDA BAIXO
    let leftBottom = document.querySelector('#left-bottom').value;                                      //Ler valor digitado
    let leftBottomNumber = parseInt(leftBottom)                                                         //Converter para number
    document.querySelector('.box-radius').style.borderBottomLeftRadius = `${leftBottomNumber}px`;                           //Alterar CSS para border radius com valor digitado

    //DIREITA CIMA
    let rightTop = document.querySelector('#right-top').value;                                          //Ler valor digitado
    let rightTopNumber = parseInt(rightTop)                                                             //Converter para number
    document.querySelector('.box-radius').style.borderTopRightRadius = `${rightTopNumber}px`;           //Alterar CSS para border radius com valor digitado

    //DIREITA BAIXO
    let rightBottom = document.querySelector('#right-bottom').value;                                    //Ler valor digitado
    let rightBottomNumber = parseInt(rightBottom)                                                       //Converter para number
    document.querySelector(".box-radius").style.borderBottomRightRadius = `${rightBottomNumber}px`;     //Alterar CSS para border radius com valor digitado
    
    //Captura o tamanho do border-radius diretamente da tela, poderia ser usado o valor digitado também. 
    let sizeTopLeft = window.getComputedStyle(document.querySelector('.box-radius')).borderTopLeftRadius;
    let sizeBottomLeft = window.getComputedStyle(document.querySelector('.box-radius')).borderBottomLeftRadius;
    let sizeTopRight = window.getComputedStyle(document.querySelector('.box-radius')).borderTopRightRadius;
    let sizeBottomRight = window.getComputedStyle(document.querySelector('.box-radius')).borderBottomRightRadius;
    
    document.querySelector('.css-text').innerHTML = `border-top-left-radius: ${sizeTopLeft}; </br>border-bottom-left-radius: ${sizeBottomLeft};</br>border-top-right-radius: ${sizeTopRight};</br>border-bottom-right-radius: ${sizeBottomRight};`;              //Texto exibido na página.
    
};

document.querySelectorAll