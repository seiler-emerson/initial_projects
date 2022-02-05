// // ============================================================================================= //
// // ==============================    DADOS DO FORM EM VARIÁVEIS   ============================== //
// // ============================================================================================= //

const Form = {
    adsName: document.querySelector('#ads-name'),
    adsClient: document.querySelector('#ads-client'),
    adsDateStart: document.querySelector('#ads-date-start'),
    adsDateEnd: document.querySelector('#ads-date-end'),
    adsInvestment: document.querySelector('#ads-investment'),

    //Pegar valores do formulário
    getValues() {
        return {
            adsName: Form.adsName.value,
            adsClient: Form.adsClient.value,
            adsDateStart: Form.adsDateStart.value,
            adsDateEnd: Form.adsDateEnd.value,
            adsInvestment: Form.adsInvestment.value,
        }
    }
}






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


// ======================================================================= //
// ==============================    CRUD   ============================== //
// ======================================================================= //

// =========== ACESSO/ENVIO LOCALSTORAGE =========== //
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_ads')) ?? [];   //Leia o que está no localstorage, transforma em JSON e atribui a variável db_ads, caso o localstorage esteja vazio, crie um array vazio
const setLocalStorage = (dbAds) => localStorage.setItem("db_ads", JSON.stringify(dbAds)) //Converte para string e envia o conteúdo alterado para o localstorage

// =========== CREATE =========== //
const createAds = (ads) => {                        //Função para pegar os dados do formulário e enviar para o localstorage do navegador
    const dbAds = getLocalStorage()
    dbAds.push(ads)                                 //Adiciona mais um item ao objeto, no caso os dados vindos do formulário
    setLocalStorage(dbAds)
};

// =========== READE =========== //
const readAds = () => getLocalStorage()             //Ler os dados do localstorage


// =========== UPDATE =========== //
const updateAds = (index, ads) => {                 //Recebe o index do array e o ads
    const dbAds = readAds()                         //Lê o localstorage e armazena os dados na variável dbAds
    dbAds[index] = ads                              //O array na posição X vai receber os novos dados
    setLocalStorage(dbAds)                          //O array é enviado para o localstorage
}

// =========== DELETE =========== //
const deleteAds = (index) => {
    const dbAds = readAds()                         //Lê o localstorage e armazena os dados na variável dbAds
    dbAds.splice(index,1)                           //Fatia o array na posição do index e pega apenas o primeiro item definido
    setLocalStorage(dbAds)                          //O array é enviado para o localstorage
}


// ================================================================================================= //
// ==============================    CONVERSÃO DOS DADOS DE ENTRADA   ============================== //
// ================================================================================================= //

const Utils = {

    //Formatar número recebido do valor de investimento diario
    formatIvestment(value) {

        if(value.includes(',') || value.includes('.')) {
            value = String(value).replace(/\D/g, "")  //Procure tudo que não for número e substitua por nada | Ficará apenas números
        } else {
            value = Number(value) * 100 //Transformar o valore recebido em um numero e multiplicar ele por 100
        }
        return value
        
    },

    formatDate(date) {
        const splittedDate = date.split("-")

        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        

    },

    moneyConvert(value) {
        
        //value = String(value).replace(/\D/g, "")  //Procure tudo que não for número e substitua por nada | Ficará apenas números
        value = Number(value) / 100

        value = value.toLocaleString("pr-BR", {
            style: "currency",
            currency: "BRL"
        })
        return value
    }
}


// ========================================================================================== //
// ==============================    FORMULÁRIO DE ANUNCIOS   ============================== //
// ========================================================================================= //


const clearFields = () => {   //Limpar os campos do formulário de cadastro de anuncio
    document.querySelector('#ads-name').value = ""
    document.querySelector('#ads-client').value = ""
    document.querySelector('#ads-date-start').value = ""
    document.querySelector('#ads-date-end').value = ""
    document.querySelector('#ads-investment').value = ""
    
};

const formatValues = (value) => {  //Formatar os valores antes de cadastrar no localstorage
    let { adsName, adsClient, adsDateStart, adsDateEnd, adsInvestment } = Form.getValues()

    adsInvestment = Utils.formatIvestment(adsInvestment)
    adsDateStart = Utils.formatDate(adsDateStart)
    adsDateEnd = Utils.formatDate(adsDateEnd)

    return {
        adsName,
        adsClient,
        adsDateStart,
        adsDateEnd,
        adsInvestment,
    }

}

const saveAds = (event) => { //Pegar os dados dos inputs do formulário, valida e enviar para o localstorage
    event.preventDefault()

    ads = {
        adsName: Form.adsName.value,
        adsClient: Form.adsClient.value,
        adsDateStart: Form.adsDateStart.value,
        adsDateEnd: Form.adsDateEnd.value,
        adsInvestment: Form.adsInvestment.value,
    }

    //Se os campos não estiverem vazios pega os dados e salva
    if(ads.adsName.trim() === "" || ads.adsClient.trim() === "" || ads.adsDateStart.trim() === "" || ads.adsDateEnd.trim() === "" || ads.adsInvestment.trim() === "" ) {
        alert("Por favor, preencha todos so campos!")
    } else {
        const index = document.querySelector('#ads-name').dataset.index
        if(index == 'new') {
            const formData = formatValues()
            createAds(formData);   //Cria o JSON e envia para a tela
            clearFields();    //Limpa os campos do fomulário
            updateTableAds(); //Atualiza a tabela no display
            Display.ads();    //Fecha a tela do formulário e abre a tela dos anuncios
        } else {
            formatValues()
            updateAds(index, ads)
            updateTableAds(); //Atualiza a tabela no display
            Display.ads();    //Fecha a tela do formulário e abre a tela dos anuncios
            console.log('Editando')
        }
    }

    
}

document.querySelector('#saveAds').addEventListener('click', saveAds);   //Adicionar evento de click no botão salvar anuncio e chamar a função responsável por salvar o cadastro

const cancelAddAds = (event) => {   //Limpa os dados dos inputs e fecha a tela de cadastro
    event.preventDefault()
    clearFields();
    Display.ads()
}
document.querySelector('#cancelAddAds').addEventListener('click', cancelAddAds); //Adicionar evento de click no botão cancelar anuncio e chamar a função responsável por cancelar o cadastro


// ==================  BOTÕES EXCLUIR E EDITAR PÁGINA DE ANUNCIOS ================== //
const fillFields = (ads) => { //Preencher os campos do formulario com os dados coletados
    document.querySelector('#ads-name').value = ads.adsName
    document.querySelector('#ads-client').value = ads.adsClient
    document.querySelector('#ads-date-start').value = ads.adsDateStart
    document.querySelector('#ads-date-end').value = ads.adsDateEnd
    document.querySelector('#ads-investment').value = ads.adsInvestment
    document.querySelector('#ads-name').dataset.index = ads.index
}

const editAds = (index) => {
    const ads = readAds(index)[index]  //Le o array do localstorage na posição recebida
    ads.index = index
    fillFields(ads)
    Display.displayAdsRegister()
}

const editDelete = (event) => {
    if((event.target.type === 'button')) {  //Captura o click quando clicar em um botão
        const [action, index] = (event.target.dataset.action.split("-"))
        if(action === 'edit') {
            editAds(index)
        } else {
            const ads = readAds()[index]
            const response = confirm(`Deseja realmente excluir a campanha ${ads.adsName}`)
            if (response) {
                deleteAds(index)
                updateTableAds()
            }
        }
    }
}
document.querySelector('#data-ads>tbody').addEventListener('click', editDelete)





// =========================================================================================================================== //
// ==============================    ATUALIZAR DADOS DOS ANÚNCIOS NA TABELA DA PÁGINA ANÚNCIO   ============================== //
// =========================================================================================================================== //


const createTr = (ads, index) => {  //Criar estrutura da tabela para inserção na página
    const newRow = document.createElement('tr')  //cria uma tr e armazena na variavel newRow
    //Monta a estrutura da linha
    newRow.innerHTML = `
        <td>${ads.adsName}</td>
        <td>${ads.adsClient}</td>
        <td>${ads.adsDateStart}</td>
        <td>${ads.adsDateEnd}</td>
        <td>${Utils.moneyConvert((ads.adsInvestment))}</td>
        <td><button id="exclude" type="button" data-action="delete-${index}" class="negative">X</button></td>
        <td><button id="edit" type="button" data-action="edit-${index}" class="positive">E</button></td>
    `
    document.querySelector('#data-ads tbody').appendChild(newRow)
}

const clearTableAds = () => { //Limpar visualização da tabela de anuncios, para evitar duplicatas
    const rows = document.querySelectorAll('#data-ads>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row)) //Varre todas as linhas e remove-as
}

const updateTableAds = () => {  //Atualizar a visualização da tabela de anuncios
    const dbAds = readAds();    //Pega todos os dados do localStorage
    clearTableAds();
    dbAds.forEach(createTr);    //Roda um forEach para cada item do localStorage e envia para a função createTr
}
updateTableAds() //Atualizar a tabela de anuncios na página de anuncios



