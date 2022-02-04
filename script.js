// ============================== Utilidades ==============================

const Utils = {
// === Manipulando a estrutura dos números ===
    formatCurrency(value) {
        
        const signal = Number(value) < 0 ? "-" : "" ; //Se o número for menor que 0 signal retorna um valor negativo
        
        value = String(value).replace(/\D/g,"") //Pegar todos os valores que não são números e remova, mantendo apenas números
        
        value = Number(value) / 100
        
        // === Formatar Moeda ===
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        return signal + value
    }
}

// ============================== VÁRIAVEIS RESPONSÁVEIS PELAS TELAS ==============================
const GetDisplay = {
    displayDashboard: document.querySelector('#dashboard'),
    displayClient: document.querySelector('#client'),
    displayClientRegister: document.querySelector('#client-register'),
    displayAds: document.querySelector('#ads'),
    displayAdsRegister: document.querySelector('#ads-register'),
    displayAdsView: document.querySelector('#ads-view'),
    displayReport: document.querySelector('#report')
}

// ============================== FUNÇÕES PARA MUDANÇA DE TELAS ==============================
const Display = {
    dashboard() { 
        GetDisplay.displayDashboard.style.display = "flex";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
    },
    client() { 
        GetDisplay.displayClient.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    ads() { 
        GetDisplay.displayAds.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    report() { 
        GetDisplay.displayReport.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    clientRegister() {
        GetDisplay.displayClientRegister.style.display = "flex";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    displayAdsRegister() {
        GetDisplay.displayAdsRegister.style.display = "flex";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    displayAdsView() {
        GetDisplay.displayAdsView.style.display = "flex";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
    },
    cancelCreateClient() {
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayClient.style.display = "flex";
    },
    cancelCreateAds() {
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "flex";
    }
    
};


// ============================== FUNÇÕES PARA SELEÇÃO DE MENUS ==============================

// const SelectedMenu = {
//     dashboard() {
//         if(document.querySelector('.dashboard-menu')) {
//             console.log("Deu certo")
//         document.querySelector('.dashboard-menu').setAttribute('id','active-menu');
//         document.querySelector('.client-menu').removeAttribute('id');
//         document.querySelector('.ads-menu').removeAttribute('id');
//         document.querySelector('.report-menu').removeAttribute('id');
//         } else {
//             console.log("Deu errado")
//         }
//     },
//     client() {
//         document.querySelector('.client-menu').setAttribute('id','active-menu');
//         document.querySelector('.dashboard-menu').removeAttribute('id');
//         document.querySelector('.ads-menu').removeAttribute('id');
//         document.querySelector('.report-menu').removeAttribute('id');
//     },
//     ads() {
//         document.querySelector('.ads-menu').setAttribute('id','active-menu');
//         document.querySelector('.client-menu').removeAttribute('id');
//         document.querySelector('.dashboard-menu').removeAttribute('id');
//         document.querySelector('.report-menu').removeAttribute('id');
//     },
//     report() {
//         document.querySelector('.report-menu').setAttribute('id','active-menu');
//         document.querySelector('.client-menu').removeAttribute('id');
//         document.querySelector('.dashboard-menu').removeAttribute('id');
//         document.querySelector('.ads-menu').removeAttribute('id');
//     }
// };



// ============================== LISTA DE CLIENTES CADASTRADOS ==============================
const FormClient = [  //Array onde será armazenado os dados do input de cadastro de clientes
    {
        clientName: "Emerson",
        clientPhone: 5547999799017,
        clientEmail: "seiler.emerson@gmail.com",
        clientCountry: "Brasil"
    },
    {
        clientName: "Mayara",
        clientPhone: 5547996528676,
        clientEmail: "mayara@gmail.com",
        clientCountry: "Estados Unidos"
    },
    {
        clientName: "Evina",
        clientPhone: 5541996528784,
        clientEmail: "evina@gmail.com",
        clientCountry: "Portugal"
    },
    {
        clientName: "Evina",
        clientPhone: 5541996528784,
        clientEmail: "evina@gmail.com",
        clientCountry: "Portugal"
    },
    {
        clientName: "Evina",
        clientPhone: 5541996528784,
        clientEmail: "evina@gmail.com",
        clientCountry: "Portugal"
    },
];


// ============================== LISTA DE ANÚNCIOS CADASTRADOS ==============================
const FormAds = [  //Array onde será armazenado os dados do input de cadastro de anuncios
    {
        adsName: "Campanha do Emerson",
        adsClient: "Emerson Company",
        adsTotalInvestiment: 12345678,
        adsView: 123456,
        adsClicks: 123456,
        adsShare: 123456
    },
    {
        adsName: "Campanha da Mayara",
        adsClient: "Mayara Company",
        adsTotalInvestiment: 12345678,
        adsView: 123456,
        adsClicks: 123456,
        adsShare: 123456
    },
    {
        adsName: "Campanha da Evina",
        adsClient: "Evina Company",
        adsTotalInvestiment: 12345678,
        adsView: 123456,
        adsClicks: 23456,
        adsShare: 123456
    },
    {
        adsName: "Campanha do Sheldon",
        adsClient: "Sheldon Company",
        adsTotalInvestiment: 12345678,
        adsView: 123456,
        adsClicks: 123456,
        adsShare: 12346
    },
    
];

// ============================== FUNÇÕES PARA SOMAR OS TOTAIS ==============================

const Total = {
    // somar os totais de investimento
    totalInvestment() {
        let tInvestment = 0;

        //Pegar todas os investimentos
        //Para cada transação
        FormAds.forEach(total => {
            // se ela for maior que zero
    if (total.adsTotalInvestiment > 0 )
            //Somar a uma variável e retornar a variável
            tInvestment = tInvestment + total.adsTotalInvestiment;
        })
        
        //Retorna a soma de todos os investimentos cadastrados
        return tInvestment;
    },
    totalView() {
        let tView = 0;

        //Pegar todas os investimentos
        //Para cada transação
        FormAds.forEach(total => {
            // se ela for maior que zero
    if (total.adsView > 0 )
            //Somar a uma variável e retornar a variável
            tView = tView + total.adsView;
        })
        
        //Retorna a soma de todos os investimentos cadastrados
        return tView;
    },
    totalClick() {
        let tClick = 0;

        //Pegar todas os investimentos
        //Para cada transação
        FormAds.forEach(total => {
            // se ela for maior que zero
    if (total.adsClicks > 0 )
            //Somar a uma variável e retornar a variável
            tClick = tClick + total.adsClicks;
        })
        
        //Retorna a soma de todos os investimentos cadastrados
        return tClick;
    },
    totalShare() {
        let tShare = 0;

        //Pegar todas os investimentos
        //Para cada transação
        FormAds.forEach(total => {
            // se ela for maior que zero
    if (total.adsShare > 0 )
            //Somar a uma variável e retornar a variável
            tShare = tShare + total.adsShare;
        })
        
        //Retorna a soma de todos os investimentos cadastrados
        return tShare;
    },
}



// ============================== PEGAR OS DADOS DO MEU FORMULÁRIO DE CLIENTES E COLOCAR NO HTML ==============================
const dataClient = {
    dataClientContainer : document.querySelector('#data-client tbody'), //Pega o elemento tbody de dentro do item com id data-client

    addClient(client, index) {  //Responsável por adicionar os dados no htmlClient
        const trClient = document.createElement('tr');  //Cria um elemento tr na DOM
        trClient.innerHTML = dataClient.innerHTMLClientTrasaction(client);  //Recebe os dados que vão dentro do td vindos do innerHTMLClientTrasaction
    
        dataClient.dataClientContainer.appendChild(trClient)  //Acessa o conteúdo de dataClientContainer e o appendChild lista o elemento trClient criado
    },
    innerHTMLClientTrasaction(client) {         //Funcionalidade para fazer a substituição dos itens das linhas do form de clientes pelos clientes existentes no array FormClient
        //Template dos dados que vão aparecer na tabela
        const htmlClient = `
                <td>${client.clientName}</td>
                <td>${client.clientPhone}</td>
                <td>${client.clientEmail}</td>
                <td>${client.clientCountry}</td>
                <td><h2>x</h2></td>
        `
        return htmlClient
    }
};

// ============================== EXIBINDO OS CLIENTES EXISTENTES DENTRO DO ARRAY DE CLIENTES FormClient ==============================
FormClient.forEach(function(FormClient) {  //Para cada item dentro de FormAds
    dataClient.addClient(FormClient)    //Pegar os dados dos clientes em FormClient e monta dentro da estrutura de tabela de dataClient
});

// ============================== PEGAR OS DADOS DO MEU FORMULÁRIO DE ANUNCIOS E COLOCAR NA PÁGINA DE ANÚNCIOS ==============================

const dataAds = {
    dataAdsContainer: document.querySelector('#data-ads tbody'), //Pega o elemento tbody de dentro do item com id data-ads
    
    

    addAds(ads, index) {  //Responsável por adicionar os dados no htmlAdd
        const trAds = document.createElement('tr');  //Cria um elemento tr na DOM
        trAds.innerHTML = dataAds.innerHTMLAdsTrasaction(ads);  //Recebe os dados que vão dentro do td vindos do innerHTMLAddTrasaction
    
        dataAds.dataAdsContainer.appendChild(trAds)  //Acessa o conteúdo de dataAdsContainer e o appendChild lista o elemento trClient criado
        
        
    },

        innerHTMLAdsTrasaction(ads) {         //Funcionalidade para fazer a substituição dos itens das linhas do form de clientes pelos clientes existentes no array FormClient

        //Template dos dados que vão aparecer na tabela
        const htmlAds = `
            <tr>
                <td>${ads.adsName}</td>
                <td>${ads.adsClient}</td>
                <td>${ads.adsTotalInvestiment}</td>
                <td>${ads.adsView}</td>
                <td>${ads.adsClicks}</td>
                <td>${ads.adsShare}</td>
                <td><h2 onclick="Display.displayAdsView()">x</h2></td>
            </tr>
        `
        return htmlAds
    }
};

// ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
FormAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
    dataAds.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
});


// ============================== PEGAR OS DADOS DO MEU FORMULÁRIO DE ANUNCIOS E COLOCAR NA PÁGINA DE DASHBOARD ==============================
const dataAdsDashboard = {
    dataAdsContainer: document.querySelector('#data-dashboard tbody'), //Pega o elemento tbody de dentro do item com id data-ads
    
    addAds(ads, index) {  //Responsável por adicionar os dados no htmlAdd
        const trAds = document.createElement('tr');  //Cria um elemento tr na DOM
        trAds.innerHTML = dataAdsDashboard.innerHTMLAdsTrasaction(ads);  //Recebe os dados que vão dentro do td vindos do innerHTMLAddTrasaction
    
        dataAdsDashboard.dataAdsContainer.appendChild(trAds)  //Acessa o conteúdo de dataAdsContainer e o appendChild lista o elemento trClient criado
        
    },

        innerHTMLAdsTrasaction(ads) {         //Funcionalidade para fazer a substituição dos itens das linhas do form de clientes pelos clientes existentes no array FormClient

        //Template dos dados que vão aparecer na tabela
        const htmlAds = `
            <tr>
                <td>${ads.adsName}</td>
                <td>${ads.adsClient}</td>
                <td>${ads.adsTotalInvestiment}</td>
                <td>${ads.adsView}</td>
                <td>${ads.adsClicks}</td>
                <td>${ads.adsShare}</td>
                <td><h2 onclick="Display.displayAdsView()">x</h2></td>
            </tr>
        `
        return htmlAds
    },

    //EXIBIR TOTAIS NO DASHBOARD
    updateTotalDashboard() {
        document.querySelector('#dashboardTotalBox').innerHTML = Utils.formatCurrency(Total.totalInvestment());;   //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardViewBox').innerHTML = Total.totalView();          //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardClickBox').innerHTML = Total.totalClick();        //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardShareBox').innerHTML = Total.totalShare();        //Pega o total somado em Total e exibe no box do dashboard
    }

};

// ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
FormAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
    dataAdsDashboard.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
});

//EXIBIR OS TOTAIS NO DASHBOARD
dataAdsDashboard.updateTotalDashboard()
// ============================== PEGAR OS DADOS DO MEU FORMULÁRIO DE ANUNCIOS E COLOCAR NA PÁGINA DE RELATÓRIOS ==============================
const dataAdsReport = {
    dataAdsContainer: document.querySelector('#data-report tbody'), //Pega o elemento tbody de dentro do item com id data-ads
    
    addAds(ads, index) {  //Responsável por adicionar os dados no htmlAdd
        const trAds = document.createElement('tr');  //Cria um elemento tr na DOM
        trAds.innerHTML = dataAdsReport.innerHTMLAdsTrasaction(ads);  //Recebe os dados que vão dentro do td vindos do innerHTMLAddTrasaction
    
        dataAdsReport.dataAdsContainer.appendChild(trAds)  //Acessa o conteúdo de dataAdsReport e o appendChild lista o elemento trClient criado
    },

        innerHTMLAdsTrasaction(ads) {         //Funcionalidade para fazer a substituição dos itens das linhas do form de clientes pelos clientes existentes no array FormClient

        //Template dos dados que vão aparecer na tabela
        const htmlAds = `
            <tr>
                <td>${ads.adsName}</td>
                <td>${ads.adsClient}</td>
                <td>${ads.adsTotalInvestiment}</td>
                <td>${ads.adsView}</td>
                <td>${ads.adsClicks}</td>
                <td>${ads.adsShare}</td>
                <td><h2 onclick="Display.displayAds()">x</h2></td>
            </tr>
        `
        return htmlAds
    }
};

// ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
FormAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
    dataAdsReport.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
});





// ==============================   ==============================



