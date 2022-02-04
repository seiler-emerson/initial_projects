

// ============================== VÁRIAVEIS RESPONSÁVEIS PELAS TELAS ==============================
const GetDisplay = {
    displayDashboard: document.querySelector('#dashboard'),
    displayAds: document.querySelector('#ads'),
    displayAdsRegister: document.querySelector('#ads-register'),
    displayAdsView: document.querySelector('#ads-view'),
    displayReport: document.querySelector('#report'),
    displayContact: document.querySelector('#contact')
}

// ============================== FUNÇÕES PARA MUDANÇA DE TELAS ==============================
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


// =========== TEMPLATE FORM DATA =========== //
// =========== TEMPLATE DADOS FORMULÁRIO =========== //

const tempAds = {
    nameAds: "Campanha xyz",
    nameClient: "Mayara Company",
    dateStart: "01/02/2022",
    dateEnd: "10/02/2022",
    dayInvestment: 1500
}

// =========== ACESSO/ENVIO LOCALSTORAGE =========== //
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_ads')) ?? [];   //Leia o que está no localstorage, transforma em JSON e atribui a variável db_ads, caso o localstorage esteja vazio, crie um array vazio
const setLocalStorage = (dbAds) => localStorage.setItem("db_ads", JSON.stringify(dbAds)) //Converte para string e envia o conteúdo alterado para o localstorage

// =========== CREATE (CRUD) =========== //
const createAds = (ads) => {                        //Função para pegar os dados do formulário e enviar para o localstorage do navegador
    const dbAds = getLocalStorage()
    dbAds.push(ads)                                 //Adiciona mais um item ao objeto, no caso os dados vindos do formulário
    setLocalStorage(dbAds)
};

// =========== READE (CRUD) =========== //
const readAds = () => getLocalStorage()             //Ler os dados do localstorage


// =========== UPDATE (CRUD) =========== //
const updateAds = (index, ads) => {                 //Recebe o index do array e o ads
    const dbAds = readAds()                         //Lê o localstorage e armazena os dados na variável dbAds
    dbAds[index] = ads                              //O array na posição X vai receber os novos dados
    setLocalStorage(dbAds)                          //O array é enviado para o localstorage
}

// =========== DELETE (CRUD) =========== //
const deleteAds = (index) => {
    const dbAds = readAds()                         //Lê o localstorage e armazena os dados na variável dbAds
    dbAds.splice(index,1)                           //Fatia o array na posição do index e pega apenas o primeiro item definido
    setLocalStorage(dbAds)                          //O array é enviado para o localstorage
}



// =========== Validação dos campos do formulário =========== //

const isValidFiels = () => {
    return document.querySelector('#ads-form').reportValidity() //Só vai validar se todas os requires do form forem atendidos
}


// =========== INTERAÇÃO COM LAYOUT =========== //
const saveAds = (event) => {
    event.preventDefault()
    
    //validar campos
    if(isValidFiels()) {
        //Pegar todos os valores do campo e transformar num JSON
        const ads = {
            adsName: document.querySelector('#ads-name').value,
            adsClient: document.querySelector('#ads-client').value,
            adsDateStart: document.querySelector('#ads-date-start').value,
            adsDateEnd: document.querySelector('#ads-date-end').value,
            adsInvestment: document.querySelector('#ads-investment').value,
            
        }
        //Cria o JSON e envia para a tela
        createAds(ads)
    }
}

// =========== EVENTOS =========== //

// =========== SALVAR ANÚNCIO =========== //
document.querySelector('#saveAds').addEventListener('click', saveAds);