    let investmentDay = 110;                       //Valor investido por dia pego do localStorage
    let totalAdsDay = 25.3;                        //Total de dias de veiculação do anuncio
    let viewByOneInvestmentDay = 30;               //Visualizações por um real diario 
    

    //CALCULO INICIAL
    let totalInvestment = investmentDay * totalAdsDay;                  //Investimento total do anuncio
    let initialView = totalInvestment * viewByOneInvestmentDay;         //Visualização maxima | 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
    let initialClick = (initialView * 12) / 100;                        //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let initalShareSocialMedia = (initialClick * 3) / 20;               //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
    // O mesmo anúncio é compartilhado no máximo 4 vezes em sequência
    // (1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)
    
    // PRIMEIRO CALCULO COMPARTILHAMENTO
    let firstShareView = initalShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let firstShareClick = (firstShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let firstShareSocialMedia = (firstShareClick * 3) / 20;             //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
    // SEGUNDO CALCULO COMPARTILHAMENTO
    let secondShareView = firstShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let secondShareClick = (secondShareView * 12) / 100;                //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let secondShareSocialMedia = (secondShareClick * 3) / 20;           //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
    // TERCEIRO CALCULO COMPARTILHAMENTO
    let thirdShareView = secondShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let thirdShareClick = (thirdShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let thirdShareSocialMedia = (thirdShareClick * 3) / 20;             //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
    
    // QUARTO CALCULO COMPARTILHAMENTO
    let fourthShareView = thirdShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let fourthdShareClick = (fourthShareView * 12) / 100;               //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let fourthShareSocialMedia = (fourthdShareClick * 3) / 20;          //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
    // PROJEÇÕES TOTAIS
    let totalViewProjection = initialView + firstShareView + secondShareView + thirdShareView + fourthShareView;
    let totalClicksProjection = initialClick + firstShareClick  + secondShareClick + thirdShareClick + fourthdShareClick;
    let totalShareProjection = initalShareSocialMedia + firstShareSocialMedia  + secondShareSocialMedia + thirdShareSocialMedia + fourthShareSocialMedia;


    console.log("Valor investido diariamente: "+investmentDay);
    console.log("Valor do investimento total: "+totalInvestment);
    console.log("Visualizações: "+totalViewProjection);
    console.log("Clicks: "+totalClicksProjection);
    console.log("Compartilhamentos: "+totalShareProjection);