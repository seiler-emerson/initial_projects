

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

// =========== LIMPAR CAMPOS DO FORMULÁRIO =========== //
const clearFields = () => {   //Limpar os campos do formulário de cadastro de anuncio
    document.querySelector('#ads-name').value = ""
    document.querySelector('#ads-client').value = ""
    document.querySelector('#ads-date-start').value = ""
    document.querySelector('#ads-date-end').value = ""
    document.querySelector('#ads-investment').value = ""
};

// =========== ADICIONAR INFORMAÇÕES DO FORMULÁRIO AO LOCALSTORAGE =========== //
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
        
        createAds(ads);   //Cria o JSON e envia para a tela
        clearFields();    //Limpa os campos do fomulário
        updateTableAds(); //Atualiza a tabela no display
        Display.ads();    //Fecha a tela do formulário e abre a tela dos anuncios
    }
}

// =========== BOTÃO SALVAR FORMULÁRIO ANÚNCIO =========== //
document.querySelector('#saveAds').addEventListener('click', saveAds);

// =========== BOTÃO CANCELAR FORMULÁRIO ANÚNCIO =========== //
const cancelAddAds = () => {
    clearFields();
    Display.ads()
}
document.querySelector('#cancelAddAds').addEventListener('click', cancelAddAds);



// =========== ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DA PÁGINA ANÚNCIO =========== //

const createTr = (ads, index) => {
    const newRow = document.createElement('tr')  //cria uma tr e armazena na variavel newRow
    //Monta a estrutura da linha
    newRow.innerHTML = `
        <td>${ads.adsName}</td>
        <td>${ads.adsClient}</td>
        <td>${ads.adsDateStart}</td>
        <td>${ads.adsDateEnd}</td>
        <td>R$ ${ads.adsInvestment}</td>
        <td><button id="exclude" type="button" data-action="delete-${index}" class="negative">X</button></td>
        <td><button id="edit" type="button" data-action="edit-${index}" class="positive">E</button></td>
    `
    document.querySelector('#data-ads tbody').appendChild(newRow)
}

// =========== LIMPAR VISUALIZAÇÃO DA TABELA DE ANUNCIOS, PARA EVITAR DUPLICATAS =========== //
const clearTableAds = () => {
    const rows = document.querySelectorAll('#data-ads>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row)) //Varre todas as linhas e remove-as
}

// =========== ATUALIZAR A VISUALIZAÇÃO DA TABELA DE ANUNCIOS =========== //
const updateTableAds = () => {
    const dbAds = readAds();    //Pega todos os dados do localStorage
    clearTableAds();
    dbAds.forEach(createTr);    //Roda um forEach para cada item do localStorage e envia para a função createTr
}
updateTableAds() //Atualizar a tabela de anuncios na página de anuncios




// ===========  BOTÕES EXCLUIR E EDITAR PÁGINA DE ANUNCIOS =========== //
const fillFields = (ads) => { //Preencher os campos do formulario com os dados coletados
    document.querySelector('#ads-name').value = ads.adsName
    document.querySelector('#ads-client').value = ads.adsClient
    document.querySelector('#ads-date-start').value = ads.adsDateStart
    document.querySelector('#ads-date-end').value = ads.adsDateEnd
    document.querySelector('#ads-investment').value = ads.adsInvestment


}

const editAds = (index) => {
    const ads = readAds(index)[index]  //Le o array do localstorage na posição recebida
    fillFields(ads)
    Display.displayAdsRegister()
}

const editDelete = (event) => {
    if((event.target.type === 'button')) {  //Captura o click quando clicar em um botão
        const [action, index] = (event.target.dataset.action.split("-"))
        if(action === 'edit') {
            editAds(index)
        } else {
            console.log("Excluindo anuncio")
        }
    }
}
document.querySelector('#data-ads>tbody').addEventListener('click', editDelete)