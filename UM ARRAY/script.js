// // ===================================================================================== //
// // ==============================    TRANSIÇÕES DE TELA   ============================== //
// // ===================================================================================== //


// === VÁRIAVEIS RESPONSÁVEIS PELAS TELAS ===
const GetDisplay = {
    displayDashboard: document.querySelector('#dashboard'),
    displayAds: document.querySelector('#ads'),
    displayAdsRegister: document.querySelector('#ads-register'),
    displayAdsView: document.querySelector('#ads-view'),
    displayReport: document.querySelector('#report'),
    displayContact: document.querySelector('#contact')
}

// === FUNÇÕES PARA MUDANÇA DE TELAS ===
const Display = {
    dashboard() { 
        GetDisplay.displayDashboard.style.display = "flex";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayContact.style.display = "none"
    },
    ads() { 
        GetDisplay.displayAds.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
        GetDisplay.displayContact.style.display = "none"
    },
    report() { 
        GetDisplay.displayReport.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
        GetDisplay.displayContact.style.display = "none"
    },
    displayAdsRegister() {
        GetDisplay.displayAdsRegister.style.display = "flex";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
        GetDisplay.displayContact.style.display = "none"
    },
    displayAdsView() {
        GetDisplay.displayAdsView.style.display = "flex";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayContact.style.display = "none"
    },
    contact() {
        GetDisplay.displayContact.style.display = "flex"
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
    },
    cancelCreateAds() {
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "flex";
    }
    
};


// ===================================================================================== //
// ==============================    ARRAY COM OS DADOS   ============================== //
// ===================================================================================== //

const ads = [
    {
        adsName: "Anuncio Emerson",
        adsClient: "Emerson Company",
        adsDateStart: "23/02/2021",
        adsDateEnd: "10/02/2022",
        adsInvestmentDay: 10,
        adsViewProjection: 11,
        adsClicksProjection: 12,
        adsShareProjection: 13,
    },
    {
        adsName: "Anuncio Mayara",
        adsClient: "Mayara Company",
        adsDateStart: "23/02/2021",
        adsDateEnd: "10/02/2022",
        adsInvestmentDay: 10,
        adsViewProjection: 11,
        adsClicksProjection: 12,
        adsShareProjection: 13,
    },
    {
        adsName: "Anuncio Capgemini",
        adsClient: "Capgemini Company",
        adsDateStart: "23/02/2021",
        adsDateEnd: "10/02/2022",
        adsInvestmentDay: 10,
        adsViewProjection: 11,
        adsClicksProjection: 12,
        adsShareProjection: 13,
    },
    {
        adsName: "Anuncio Capgemini",
        adsClient: "Capgemini Company",
        adsDateStart: "23/02/2021",
        adsDateEnd: "10/02/2022",
        adsInvestmentDay: 10,
        adsViewProjection: 11,
        adsClicksProjection: 12,
        adsShareProjection: 13,
    },
    
    
]

const totals = [
    {
        totalInvestment: 1500,
        totalViews: 50,
        totalClicks: 4,
        totalShareSocialMedia: 3

    }
]


const Ads = {
    allAds: ads,

    add(info) {
        Ads.allAds.push(info)

        console.log(Ads.allAds)
    },
    
    // ========================================== REGRA DE NEGÓCIO ========================================== //
    calcTotal(ads) {
        let investmentDay = ads.adsInvestmentDay                           //Valor investido por dia pego do localStorage
        let totalAdsDay = 15                                               //Total de dias de veiculação do anuncio
        let viewByOneInvestmentDay = 30                                    //Visualizações por um real diario 
        
    // ========================================== REGRA DE NEGÓCIO ========================================== //
    
        totalInvestment = investmentDay * totalAdsDay                       //Investimento total do anuncio
        let initialView = totalInvestment * viewByOneInvestmentDay          //Visualização maxima | 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
        let initialClick = (initialView * 12) / 100;                        //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let initalShareSocialMedia = (initialClick * 3) / 20                //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
        let firstShareView = initalShareSocialMedia * 40                    //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let firstShareClick = (firstShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let firstShareSocialMedia = (firstShareClick * 3) / 20              //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
        let secondShareView = firstShareSocialMedia * 40                    //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let secondShareClick = (secondShareView * 12) / 100;                //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let secondShareSocialMedia = (secondShareClick * 3) / 20            //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    
        let thirdShareView = secondShareSocialMedia * 40                    //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let thirdShareClick = (thirdShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let thirdShareSocialMedia = (thirdShareClick * 3) / 20              //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.

        let fourthShareView = thirdShareSocialMedia * 40                    //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let fourthdShareClick = (fourthShareView * 12) / 100;               //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let fourthShareSocialMedia = (fourthdShareClick * 3) / 20           //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.


    // ========================================== CALCULO TOTAIS PARA EXIBIÇÃO ========================================== //

        //Calcular o alcance total de visualizações do anuncio
        let totalViews = initialView + firstShareView + secondShareView + thirdShareView + fourthShareView

        //Calcular o alcance total de clicks do anuncio
        let totalClicks = initialClick + firstShareClick + secondShareClick + thirdShareClick + fourthdShareClick

        //Calcular o alcance total de compartilhamento do anuncio
        let totalShareSocialMedia = initalShareSocialMedia + firstShareSocialMedia + secondShareSocialMedia + thirdShareSocialMedia + fourthShareSocialMedia  
        
        console.log(totalInvestment)
        return {
            totalViews,
            totalClicks,
            totalShareSocialMedia
        }
    },
    totalAds() {
        totalAds = Ads.allAds.length
        return totalAds
    },
    totalInvesments() { 
        let totalInvesments = 0

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsInvestmentDay > 0) {
            totalInvesments = totalInvesments + ads.adsInvestmentDay
        }
        })
         //retornar a variavel
        return totalInvesments
    },
    totalViews() {
        let totalViews = 0

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsViewProjection > 0) {
            totalViews = totalViews + ads.adsViewProjection
        }
        })
         //retornar a variavel
        return totalViews
    },
    totalClicks() {
        let totalClicks = 0

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsClicksProjection > 0) {
            totalClicks = totalClicks + ads.adsClicksProjection
        }
        })
         //retornar a variavel
        return totalClicks
    },
    totalShares() { 
        let totalShares = 0

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsShareProjection > 0) {
            totalShares = totalShares + ads.adsShareProjection
        }
        })
         //retornar a variavel
        return totalShares
    }
}

// ================================================================================================= //
// ==============================    CONVERSÃO DOS DADOS DE ENTRADA   ============================== //
// ================================================================================================= //


const Utils = {

    // ================== FORMATAÇÃO DE MOEDA ================== //
    formatCurrency(value) {
        
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        // console.log(value)
        return value
       
    },

    //Formatar número recebido do valor de investimento diario
    

    formatDate(date) {
        const splittedDate = date.split("-")

        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        

    },

    
}


// =========================================================================================================================== //
// ==============================    ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DA PÁGINA ANÚNCIO   ============================== //
// =========================================================================================================================== //

const DOMAds = {
    adsContainer: document.querySelector('#data-ads tbody'),

    addAds(ads, index) {  //Responsável por adicionar o anuncio na tabela
        const tr = document.createElement('tr')
        tr.innerHTML = DOMAds.innerHTMLAds(ads)
        
        DOMAds.adsContainer.appendChild(tr)


    },

    innerHTMLAds(ads) {

        const adsInvestmentDay = Utils.formatCurrency(ads.adsInvestmentDay)

        const html = `
            <td>${ads.adsName}</td>
            <td>${ads.adsClient}</td>
            <td>${ads.adsDateStart}</td>
            <td>${ads.adsDateEnd}</td>
            <td>${adsInvestmentDay}</td>
            <td><button id="exclude" type="button" data-action="delete" class="negative">X</button></td>
            <td><button id="edit" type="button" data-action="edit-" class="positive">E</button></td>
        `
        return html
    }
}

// ======================================================================================================================= //
// ==============================    ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DE RELATÓRIO   ============================== //
// ====================================================================================================================== //

//Listar os anuncios na tabela de relatorio
const DOMReportAds = {
    adsReportContainer: document.querySelector('#data-report tbody'),
    addReportAds(ads, index) {  //Responsável por adicionar o anuncio na tabela
        const tr = document.createElement('tr')
        tr.innerHTML = DOMReportAds.innerHTMLReport(ads)
        
        DOMReportAds.adsReportContainer.appendChild(tr)
    },

    innerHTMLReport(ads) {

        const adsInvestmentDay = Utils.formatCurrency(ads.adsInvestmentDay)

        const html = `
        <td>${ads.adsName}</td>
        <td>${ads.adsClient}</td>
        <td>${ads.adsDateStart}</td>
        <td>${ads.adsDateEnd}</td>
        <td>${adsInvestmentDay}</td>
        <td>${ads.adsViewProjection}</td>
        <td>${ads.adsClicksProjection}</td>
        <td>${ads.adsShareProjection}</td>
        <td><button id="edit" class="positive">O</button></td>
        `
        return html
    }
}

// ======================================================================================================================= //
// ==============================    ATUALIZAR TOTAIS NA TABELA DE RELATÓRIO E DASHBOARD   ============================== //
// ====================================================================================================================== //

const DOMTotals = {
    
    updateTotals() {
        document.querySelector('#total-ads').innerHTML = Ads.totalAds()
        document.querySelector('#total-investment').innerHTML = Utils.formatCurrency(Ads.totalInvesments())
        document.querySelector('#total-view').innerHTML = Ads.totalViews()
        document.querySelector('#total-click').innerHTML = Ads.totalClicks()
        document.querySelector('#total-share').innerHTML = Ads.totalShares()
        document.querySelector('#dashboardTotalAdsBox').innerHTML = Ads.totalAds()
        document.querySelector('#dashboardTotalInvestment').innerHTML = Utils.formatCurrency(Ads.totalInvesments())
        document.querySelector('#dashboardViewBox').innerHTML = Ads.totalViews()
        document.querySelector('#dashboardClickBox').innerHTML = Ads.totalClicks()
        document.querySelector('#dashboardShareBox').innerHTML = Ads.totalShares()
    },
}
DOMTotals.updateTotals()
// =========================================================================== //
// ==============================    FOREACH    ============================== //
// =========================================================================== //

//Pegar os dados do array e colocar dentro da função reposnsável pela tabela de relatorios

const App = {
    init() {
        Ads.allAds.forEach(function(ads) {
            DOMAds.addAds(ads) 
            DOMReportAds.addReportAds(ads)  
            Ads.calcTotal(ads)
            
        })
    },
    reload() {

    }
}







Ads.add(
    {
        adsName: "Anuncio Capgemini",
        adsClient: "Capgemini Company",
        adsDateStart: "23/02/2021",
        adsDateEnd: "10/02/2022",
        adsInvestmentDay: 10,
        adsViewProjection: 11,
        adsClicksProjection: 12,
        adsShareProjection: 13,
    }, 
)


App.init()






