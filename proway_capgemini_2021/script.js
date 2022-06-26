// =================================================================================== //
// ==============================    MENU SELECIONADO   ============================== //
// =================================================================================== //

const SelectMenu = {
    dashboard() {
        document.querySelector('.dashboard-menu').setAttribute('id', 'active-menu');
        document.querySelector('.ads-menu').removeAttribute('id');
        document.querySelector('.report-menu').removeAttribute('id');
        document.querySelector('.contact-menu').removeAttribute('id');
    },
    ads() {
        document.querySelector('.ads-menu').setAttribute('id', 'active-menu');
        document.querySelector('.dashboard-menu').removeAttribute('id');
        document.querySelector('.report-menu').removeAttribute('id');
        document.querySelector('.contact-menu').removeAttribute('id');
    },
    report() {
        document.querySelector('.report-menu').setAttribute('id', 'active-menu');
        document.querySelector('.dashboard-menu').removeAttribute('id');
        document.querySelector('.ads-menu').removeAttribute('id');
        document.querySelector('.contact-menu').removeAttribute('id');
    },
    contact(){ 
        document.querySelector('.contact-menu').setAttribute('id', 'active-menu');
        document.querySelector('.dashboard-menu').removeAttribute('id');
        document.querySelector('.report-menu').removeAttribute('id');
        document.querySelector('.dashboard-menu').removeAttribute('id');
    }

}

// ===================================================================================== //
// ==============================    TRANSIÇÕES DE TELA   ============================== //
// ===================================================================================== //


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



// ================================================================================= //
// ==============================    BANCO DE DADOS   ============================== //
// ================================================================================= //

const Storage = {
    //Pegar informações
    get() {  //Retorna um array em forma de string do localstorage e converte novamente para array OU caso não tenha nada no localstorage cria um array vazio
        return JSON.parse(localStorage.getItem("system_ads")) || [];
    },

    //Guardar informações
    set(ads) {   //Envia para o localstorage um array em forma de string com a chave system_ads
        localStorage.setItem("system_ads", JSON.stringify(ads));
    }
};

//teste
// ===================================================================================== //
// ==============================    ARRAY COM OS DADOS   ============================== //
// ===================================================================================== //


const Ads = {
    allAds: Storage.get(),

    //Adicionar um elemento no array 
    add(info) {
        Ads.allAds.push(info);

        // console.log(Ads.allAds)

        App.reload();
    },

    //Remover um elemento do array
    remove(index) {
        Ads.allAds.splice(index, 1);
        App.reload();
    },

    //Editar um elemento do array
    edit(index) {
        //Abrir a tela do formulario
        Display.displayAdsRegister();

        //Ler o array do cliente que foi selecionado
        const adsForEdit = Ads.allAds[index];

        //Preencher campos
        document.querySelector('#ads-name').value = Ads.allAds[index].adsName;
        document.querySelector('#ads-client').value = Ads.allAds[index].adsClient;
        document.querySelector('#ads-date-start').value = Ads.allAds[index].adsDateStart;
        document.querySelector('#ads-date-end').value = Ads.allAds[index].adsDateEnd;
        document.querySelector('#ads-investment-day').value = Ads.allAds[index].adsInvestmentDay / 100;
        document.querySelector('#ads-name').dataset.index = index;
    
        // console.log("adsName")
        // console.log("editando"+ index)
        // console.log(document.querySelector("#edit").dataset.action)
        console.log(adsForEdit);
    },

    // ========================================== REGRA DE NEGÓCIO ========================================== //
    calcTotal(ads) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let dateStart = new Date(ads.adsDateStart);
        let dateEnd = new Date(ads.adsDateEnd);

        let days = Math.floor((dateEnd.getTime() - dateStart.getTime()) / day);

        let investmentDay = ads.adsInvestmentDay  / 100;                    //Valor investido por dia pego do localStorage
        let totalAdsDay = days;                                             //Total de dias de veiculação do anuncio
        let viewByOneInvestmentDay = 30;                                    //Visualizações por um real diario 
            
        let totalInvestment = investmentDay * totalAdsDay;
        let initialView = totalInvestment * viewByOneInvestmentDay;         //Visualização maxima | 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
        let initialClick = (initialView * 12) / 100;                        //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let initalShareSocialMedia = (initialClick * 3) / 20;               //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
        
        let firstShareView = initalShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let firstShareClick = (firstShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let firstShareSocialMedia = (firstShareClick * 3) / 20;             //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
        
        let secondShareView = firstShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let secondShareClick = (secondShareView * 12) / 100;                //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let secondShareSocialMedia = (secondShareClick * 3) / 20;           //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
        
        let thirdShareView = secondShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let thirdShareClick = (thirdShareView * 12) / 100;                  //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let thirdShareSocialMedia = (thirdShareClick * 3) / 20;             //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
        
        let fourthShareView = thirdShareSocialMedia * 40;                   //Cada compartilhamento nas redes sociais gera 40 novas visualizações.
        let fourthdShareClick = (fourthShareView * 12) / 100;               //Clicks maximos | a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
        let fourthShareSocialMedia = (fourthdShareClick * 3) / 20;          //Compartilhamento máximo | a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
        
        // ========================================== CALCULO TOTAIS PARA EXIBIÇÃO ========================================== //
        //Investimento total do anuncio
                            
        //Calcular o alcance total de visualizações do anuncio
        let totalViews = initialView + firstShareView + secondShareView + thirdShareView + fourthShareView;

        //Calcular o alcance total de clicks do anuncio
        let totalClicks = initialClick + firstShareClick + secondShareClick + thirdShareClick + fourthdShareClick;

        //Calcular o alcance total de compartilhamento do anuncio
        let totalShareSocialMedia = initalShareSocialMedia + firstShareSocialMedia + secondShareSocialMedia + thirdShareSocialMedia + fourthShareSocialMedia;
        
        // console.log(totalViews)

        //ENVIA PARA O ARRAY OS VALORES CALCULADOS DE PROJEÇÃO
        ads.adsViewProjection = totalViews;
        ads.adsClicksProjection = totalClicks;
        ads.adsShareProjection = totalShareSocialMedia;
        ads.adsTotalInvestment = totalInvestment * 100;   //Devido como o valor de dinheiro é formatado, é necessário multiplicar por 100

        console.log("Dias de veiculação: " +days);
    },
    
    //Conta quantos anuncios estão cadastrados
    totalAds() {
        totalAds = Ads.allAds.length;
        return totalAds
    },

    //Faz a soma de todos os valores investidos em anuncio de todos os clientes
    totalInvesments() { 
        let totalInvesments = 0;

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsInvestmentDay > 0) {
            totalInvesments = totalInvesments + ads.adsTotalInvestment;
        }
        })
         //retornar a variavel
        return totalInvesments
    },

    //Faz a soma de todas os visualizações de todos os clientes
    totalViews() {
        let totalViews = 0;

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsViewProjection > 0) {
            totalViews = totalViews + ads.adsViewProjection;
        }
        })
         //retornar a variavel
        return totalViews
    },

    //Faz a soma de todos os clicks de todos os clientes
    totalClicks() {
        let totalClicks = 0;

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsClicksProjection > 0) {
            totalClicks = totalClicks + ads.adsClicksProjection;
        }
        })
         //retornar a variavel
        return totalClicks
    },

    //Faz a soma de todas os compartilhamentos de todos os clientes
    totalShares() { 
        let totalShares = 0;

        //Pegar todas os anuncios
        //Para cada anuncio
        Ads.allAds.forEach(ads => {
        //Somar a uma variavel
        if(ads.adsShareProjection > 0) {
            totalShares = totalShares + ads.adsShareProjection;
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

    //Formatar o numero de investimento diario recebido do formulario
    formatInvestment(value) {
        value = String(value);

        value = value.replace(/\,\./g, "");
        
        value = value * 100;
        
        return value

    },

    //Formata as Datas
    formatDate(date) {
        const splittedDate = date.split("-");
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

    // ================== FORMATAÇÃO DE MOEDA ================== //
    formatCurrency(value) {
        value = Number(value) / 100;
        
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return value
       
    },  
}


// =========================================================================================================================== //
// ==============================    ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DA PÁGINA ANÚNCIO   ============================== //
// =========================================================================================================================== //

const DOMAds = {
    adsContainer: document.querySelector('#data-ads tbody'),

    addAds(ads, index) {  //Responsável por adicionar o anuncio na tabela
        const tr = document.createElement('tr');
        tr.innerHTML = DOMAds.innerHTMLAds(ads, index);
        tr.dataset.index = index;
        DOMAds.adsContainer.appendChild(tr);
    },

    innerHTMLAds(ads, index) {
        const adsInvestmentDay = Utils.formatCurrency(ads.adsInvestmentDay);
        const adsDateStart = Utils.formatDate(ads.adsDateStart);
        const adsDateEnd = Utils.formatDate(ads.adsDateEnd);

        const html = `
            <td>${ads.adsName}</td>
            <td>${ads.adsClient}</td>
            <td>${adsDateStart}</td>
            <td>${adsDateEnd}</td>
            <td>${adsInvestmentDay}</td>
            <td><button onclick="Ads.remove(${index})" id="exclude" type="button" data-action="delete-${index}" class="negative"><img src="./icons/exclude.svg" alt="Exclude Icon"></button></td>
            <td><button onclick="Ads.edit(${index})" id="edit" type="button" data-action="edit-${index}" class="positive"><img src="./icons/edit.svg" alt="Edit Icon"></button></td>
        `
        return html
    },

    //Limpar tela de anuncios antes de inserir um novo anuncio
    clearAds() {
        DOMAds.adsContainer.innerHTML = "";
    }

}

// ======================================================================================================================= //
// ==============================    ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DE RELATÓRIO   ============================== //
// ====================================================================================================================== //

//Listar os anuncios na tabela de relatorio
const DOMReportAds = {
    adsReportContainer: document.querySelector('#data-report tbody'),
    addReportAds(ads, index) {  //Responsável por adicionar o anuncio na tabela
        const tr = document.createElement('tr');
        tr.innerHTML = DOMReportAds.innerHTMLReport(ads);
        
        DOMReportAds.adsReportContainer.appendChild(tr);
    },

    innerHTMLReport(ads) {

        const adsTotalInvestment = Utils.formatCurrency(ads.adsTotalInvestment);
        const adsViewProjection = Math.round(ads.adsViewProjection);
        const adsClicksProjection = Math.round(ads.adsClicksProjection);
        const adsShareProjection = Math.round(ads.adsShareProjection);
        const adsDateStart = Utils.formatDate(ads.adsDateStart);
        const adsDateEnd = Utils.formatDate(ads.adsDateEnd);

        const html = `
        <td>${ads.adsName}</td>
        <td>${ads.adsClient}</td>
        <td>${adsDateStart}</td>
        <td>${adsDateEnd}</td>
        <td>${adsTotalInvestment}</td>
        <td>${adsViewProjection}</td>
        <td>${adsClicksProjection}</td>
        <td>${adsShareProjection}</td>
        <td></td>
        `
        return html
    },
    
    //Limpar tela de anuncios antes de inserir um novo anuncio
    clearReportAds() {
        DOMReportAds.adsReportContainer.innerHTML = "";
    }

}

// ======================================================================================================================= //
// ==============================    ATUALIZAR TOTAIS NA TABELA DE RELATÓRIO E DASHBOARD   ============================== //
// ====================================================================================================================== //

const DOMTotals = {
    
    updateTotals() {
        //TOTAIS DO RELATÓRIO
        document.querySelector('#total-ads').innerHTML = Ads.totalAds();
        document.querySelector('#total-investment').innerHTML = Utils.formatCurrency(Ads.totalInvesments());
        document.querySelector('#total-view').innerHTML = Math.round(Ads.totalViews());
        document.querySelector('#total-click').innerHTML = Math.round(Ads.totalClicks());
        document.querySelector('#total-share').innerHTML = Math.round(Ads.totalShares());

        //TOTAIS DO DASHBOARD
        document.querySelector('#dashboardTotalAdsBox').innerHTML = Ads.totalAds();
        document.querySelector('#dashboardTotalInvestment').innerHTML = Utils.formatCurrency(Ads.totalInvesments());
        document.querySelector('#dashboardViewBox').innerHTML = Math.round(Ads.totalViews());
        document.querySelector('#dashboardClickBox').innerHTML = Math.round(Ads.totalClicks());
        document.querySelector('#dashboardShareBox').innerHTML = Math.round(Ads.totalShares());
    },
}

// ============================================================================== //
// ==============================    FORMULÁRIO    ============================== //
// ============================================================================== //

const Form = {
    //Pegar os inputs do formulário | Deixar a estrutura dos totais prontas
    adsName: document.querySelector('#ads-name'),
    adsClient: document.querySelector('#ads-client'),
    adsDateStart: document.querySelector('#ads-date-start'),
    adsDateEnd: document.querySelector('#ads-date-end'),
    adsInvestmentDay: document.querySelector('#ads-investment-day'),
    adsViewProjection: 0,
    adsClicksProjection: 0,
    adsShareProjection: 0,
    adsTotalInvestment: 0,

    //Pegar os valores do input
    getValues() {
        return {
            adsName: Form.adsName.value,
            adsClient: Form.adsClient.value,
            adsDateStart: Form.adsDateStart.value,
            adsDateEnd: Form.adsDateEnd.value,
            adsInvestmentDay: Form.adsInvestmentDay.value,
            adsViewProjection: Form.adsViewProjection,
            adsClicksProjection: Form.adsClicksProjection,
            adsShareProjection: Form.adsShareProjection,
            adsTotalInvestment: Form.adsTotalInvestment
        }
    },

    // Verificar se todas as informações foram preenchidas
    validateFields() {
        const { adsName, adsClient, adsDateStart, adsDateEnd, adsInvestmentDay, adsViewProjection, adsClicksProjection, adsShareProjection, adsTotalInvestment } = Form.getValues();
        
        if(adsName.trim() === "" || adsClient.trim() === "" || adsDateStart.trim() === "" || adsDateEnd.trim() === "" || adsInvestmentDay.trim() === "" ) {
            throw new Error("Por favor, preencha todos so campos!");
        } 
    },

    // Formatar os dados para salvar
    formatValues() {
        let { adsName, adsClient, adsDateStart, adsDateEnd, adsInvestmentDay, adsViewProjection, adsClicksProjection, adsShareProjection, adsTotalInvestment } = Form.getValues();
        

        // console.log("Formatar os dados")
        return {
            adsName,
            adsClient,
            adsDateStart,
            adsDateEnd,
            adsInvestmentDay: Utils.formatInvestment(adsInvestmentDay),
            adsViewProjection,
            adsClicksProjection,
            adsShareProjection,
            adsTotalInvestment
        }
    },

    // Limpar o formulário
    clearFields() {
        Form.adsName.value = "";
        Form.adsClient.value = "";
        Form.adsDateStart.value = "";
        Form.adsDateEnd.value = "";
        Form.adsInvestmentDay.value = "";
    },

    //Cancelar cadastro de anuncio
    cancelAddAds(event) {
        Form.clearFields();
        Display.ads();
    },

    //Salvar o anuncio no localstorage
    saveAds() {
        //Verificar se é um novo cliente ou uma edição
        const index = document.querySelector('#ads-name').dataset.index;   //Caso o input ads-name contenha o data-index = new quer dizer que é uma nova inclusão
        // Formatar os dados para salvar
        const adsForm = Form.formatValues();

        // console.log(index)
        if (index === "new") {
            Ads.add(adsForm); //Salvar o anuncio inserido via formulario
            console.log("Salvando novo anuncio");

        } else {
            Ads.remove(index);   //Exlui o objeto sem edição do array 
            Ads.add(adsForm); //Salvar o anuncio inserido via formulario em um novo objeto
            console.log("Editando um anuncio");
            document.querySelector('#ads-name').dataset.index = "new";
        }
    },


    submit(event) {
        event.preventDefault();

        try {
            // Verificar se todas as informações foram preenchidas
            Form.validateFields();
            
            // Formatar os dados para salvar
            // const adsForm = Form.formatValues()
            
            // Salvar
            Form.saveAds();
            
            // Limpar o formulário
            Form.clearFields();
            
            // Fechar página
            Display.ads();
            // console.log('SALVO')

        } catch (error) {
            alert(error.message);
        }
    }
}


// ========================================================================================== //
// ==============================    EXECUÇÃO DAS APLICAÇÃO    ============================== //
// ========================================================================================== //

const App = {
    init() {
        Ads.allAds.forEach(function(ads, index) {
            DOMAds.addAds(ads, index);               //Exibe os anuncios na pagina de anuncios 
            Ads.calcTotal(ads);                      //Executa os calculos de todos os anuncios
            DOMReportAds.addReportAds(ads);          //Exibe os anuncios na página de relatórios   
            // DOMDetailAds.addDetails(ads)            //Exibe o detalhe dos anuncios
        })
        DOMTotals.updateTotals();
        Storage.set(Ads.allAds);
    },
    reload() {
        DOMAds.clearAds();
        DOMReportAds.clearReportAds();
        App.init();
    }
}

App.init()