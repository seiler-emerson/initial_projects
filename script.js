

// ============================== VÁRIAVEIS RESPONSÁVEIS PELAS TELAS ==============================
const GetDisplay = {
    displayDashboard: document.querySelector('#dashboard'),
    displayAds: document.querySelector('#ads'),
    displayAdsRegister: document.querySelector('#ads-register'),
    displayAdsView: document.querySelector('#ads-view'),
    displayReport: document.querySelector('#report')
}

// ============================== FUNÇÕES PARA MUDANÇA DE TELAS ==============================
const Display = {
    dashboard() { 
        GetDisplay.displayDashboard.style.display = "flex";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
    },
    ads() { 
        GetDisplay.displayAds.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    report() { 
        GetDisplay.displayReport.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    displayAdsRegister() {
        GetDisplay.displayAdsRegister.style.display = "flex";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
        GetDisplay.displayAdsView.style.display = "none";
    },
    displayAdsView() {
        GetDisplay.displayAdsView.style.display = "flex";
        GetDisplay.displayAdsRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAds.style.display = "none";
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





// ============================== FUNÇÕES RESPONSÁVEIS PELAS CAMPANHAS e Clientes ==============================

const Campaigns = {
    // ============================== LISTA DE ANÚNCIOS CADASTRADOS ==============================
    allAds: [  //Array onde será armazenado os dados do input de cadastro de anuncios
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
        
    ],
    
// ============================== FUNÇÕES RESPONSÁVEIS POR ADICIONAR CAMPANHAS E CLIENTES AO ARRAY ==============================

    addAds(ads) { //Adicionar novas campanhas no array
        Campaigns.allAds.push(ads)
        App.reload();
    },


// ============================== FUNÇÕES RESPONSÁVEIS POR REMOVER CAMPANHAS E CLIENTES AO ARRAY ==============================

    removeAds(index) {
        Campaigns.allAds.splice(index,1)
        App.reload()
    },


    

// ============================== SOMA DOS TOTAIS DOS VALORES DAS CAMPANHAS ==============================
    // somar os totais de investimento
    totalInvestment() {
        let tInvestment = 0;

        //Pegar todas os investimentos
        //Para cada transação
        Campaigns.allAds.forEach(total => {
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
        Campaigns.allAds.forEach(total => {
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
        Campaigns.allAds.forEach(total => {
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
        Campaigns.allAds.forEach(total => {
            // se ela for maior que zero
    if (total.adsShare > 0 )
            //Somar a uma variável e retornar a variável
            tShare = tShare + total.adsShare;
        })
        
        //Retorna a soma de todos os investimentos cadastrados
        return tShare;
    },
}

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
                <td>EX</td>
                <td>ED</td>
            </tr>
        `
        return htmlAds
    },
    clearAds() {
        dataAds.dataAdsContainer.innerHTML = ""; //Limpa os itens da tabela de anúncios
    }
    
};

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
            </tr>
        `
        return htmlAds
    },

    //EXIBIR TOTAIS NO DASHBOARD
    updateTotalDashboard() {
        document.querySelector('#dashboardTotalBox').innerHTML = Utils.formatCurrency(Campaigns.totalInvestment());;   //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardViewBox').innerHTML = Campaigns.totalView();          //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardClickBox').innerHTML = Campaigns.totalClick();        //Pega o total somado em Total e exibe no box do dashboard
        document.querySelector('#dashboardShareBox').innerHTML = Campaigns.totalShare();        //Pega o total somado em Total e exibe no box do dashboard
    },

    clearAdsDashboard() {
        dataAdsDashboard.dataAdsContainer.innerHTML = ""; //Limpa os itens da tabela do dashboard
    }
    
};

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
                <td>${ads.adsDateStart}</td>
                <td>${ads.adsDateEnd}</td>
                <td>${ads.adsTotalInvestiment}</td>
                <td>${ads.adsView}</td>
                <td>${ads.adsClicks}</td>
                <td>${ads.adsShare}</td>
            </tr>
        `
        return htmlAds
    },

    clearReport() {
        dataAdsReport.dataAdsContainer.innerHTML = ""; //Limpa os itens da tabela de anúncios
    }
};


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
        },
        formatInvestment(value) {
            value = Number(value)   //Converte o input recebido em um número
        },
        formatDate(date) {  //Pegar a data no formato ISO
            const splittedDate = date.split("-") //Separar onde houver traços e criar um array com 03 posições
            return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}` //montar a data no padrão br
        }
    }



// ============================== PEGANDO OS DADOS DO FORMULÁRIO CADASTRO DE ANÚNCIOS ==============================

const FormAds = {
    //Pegar os campos do formulário
    adsName: document.querySelector('input#ads-name'),
    adsClient: document.querySelector('input#client-ads'),
    adsDateStart: document.querySelector('input#date-start'),
    adsDateEnd: document.querySelector('input#date-end'),
    adsInvestment: document.querySelector('input#ads-investment'),

    //Pegar os valores dos campos e guardar dentro de um objeto
    getValues() {
        return {
            adsName: FormAds.adsName.value,
            adsClient: FormAds.adsClient.value,
            adsDateStart: FormAds.adsDateStart.value,
            adsDateEnd: FormAds.adsDateEnd.value,
            adsInvestment: FormAds.adsInvestment.value,
        }
    },

    // verificar se todas as informações foram preenchidas
    validateFields() {
        const { adsName, adsClient, adsDateStart, adsDateEnd, adsInvestment } = FormAds.getValues() //Retirar os valores dos inputs para dentro das variáveis por desestruturação
        
        //Verificar se os campos estão vazios
        if(
            adsName.trim() === "" ||
            adsClient.trim() === "" ||
            adsDateStart.trim() === "" ||
            adsDateEnd.trim() === "" ||
            adsInvestment.trim() === "" ) {
                throw new Error("Por favor, preencha todos os campos!")  //Se ouver alguns dos campos acima vazio, será retornado um objeto com erro
        }
    },

    //formatar os dados para salvar
    formatValues() {
        let { adsName, adsClient, adsDateStart, adsDateEnd, adsInvestment } = FormAds.getValues()
        
        adsInvestment = Utils.formatInvestment(adsInvestment);
        console.log(adsInvestment)

        adsDateStart = Utils.formatDate(adsDateStart);
        console.log(adsDateStart)
        adsDateEnd = Utils.formatDate(adsDateEnd);
        console.log(adsDateEnd)

        //RETORNAR OS DADOS FORMATADOS DENTRO DAS VÁRIAVEIS
        return {
            adsName,
            adsClient,
            adsDateStart,
            adsDateEnd,
            adsInvestment
        }
    },

    clearFields() {
        FormAds.adsName.value = ""
        FormAds.adsClient.value = ""
        FormAds.adsDateStart.value = ""
        FormAds.adsDateEnd.value = ""
        FormAds.adsInvestment.value = ""
    },

    //Prevenir o comportamento padrão de envio do formulário
    submit(event) {
        event.preventDefault()

        //Estrutura para capturar e tratar os dados dos inputs
        //E se houver algum input vazio capturar o erro para exibir na tela
        try {
            // verificar se todas as informações foram preenchidas
            FormAds.validateFields()
            
            //formatar os dados para salvar
            const ads = FormAds.formatValues()

            //salvar
            Campaigns.addAds(ads)

            //apagar os dados do formulario
            FormAds.clearFields()

            //fechar página e abrir a pagina de anuncios
            Display.ads()

            //Atualizar a aplicação


        } catch (error) {
            alert(error.message)
            //console.log(error)
        }

        
    }
}


//INCIALIZAÇÃO E REINICIALIZAÇÃO DOS DADOS DA TABELA QUANDO UM DADO É ADICIONADO

const App = {
    init() {

        // ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
        Campaigns.allAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
        dataAds.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
        });

        // ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
        Campaigns.allAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
        dataAdsDashboard.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
        });

        // ============================== EXIBINDO OS ANUNCIOS EXISTENTES DENTRO DO ARRAY DE ANUNCIOS FormAds ==============================
        Campaigns.allAds.forEach(function(FormAds) {  //Para cada item dentro de FormAds
        dataAdsReport.addAds(FormAds)  //Pegar os dados dos clientes em FormAds e monta dentro da estrutura de tabela de dataAds
        });

        //EXIBIR OS TOTAIS NO DASHBOARD
        dataAdsDashboard.updateTotalDashboard();


    },
    reload() {
        dataAds.clearAds() //Limpa os itens da tabela de anúncios
        dataAdsDashboard.clearAdsDashboard()  //Limpa os itens da tabela do dashboard
        dataAdsReport.clearReport() //Limpa os itens da tabela de relatorios
        App.init();
    },
}


App.init()   //Inicia o App






// ==============================  ==============================








// ============================== TESTES ==============================

// Campaigns.addAds(
//     {
//         adsName: "TESTE",
//         adsClient: "TESTE Company",
//         adsTotalInvestiment: 99999,
//         adsView: 12999,
//         adsClicks: 123456,
//         adsShare: 12346
//     },  
// )
// Campaigns.addAds(
//     {
//         adsName: "TESTE",
//         adsClient: "TESTE Company",
//         adsTotalInvestiment: 99999,
//         adsView: 12999,
//         adsClicks: 123456,
//         adsShare: 12346
//     },  
// )
// Campaigns.addAds(
//     {
//         adsName: "TESTE3",
//         adsClient: "TESTE Company",
//         adsTotalInvestiment: 99999,
//         adsView: 12999,
//         adsClicks: 123456,
//         adsShare: 12346
//     },  
// )
// Campaigns.addClient(
//     {
//         clientName: "Emerson",
//         clientPhone: 5547999799017,
//         clientEmail: "seiler.emerson@gmail.com",
//         clientCountry: "Brasil"
//     },
// )
// Campaigns.addClient(
//     {
//         clientName: "Emerson",
//         clientPhone: 5547999799017,
//         clientEmail: "seiler.emerson@gmail.com",
//         clientCountry: "Brasil"
//     },
// )
// Campaigns.addClient(
//     {
//         clientName: "Emerson Seiler",
//         clientPhone: 5547999799017,
//         clientEmail: "seiler.emerson@gmail.com",
//         clientCountry: "Brasil"
//     },
// )
