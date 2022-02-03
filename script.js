//VÁRIAVEIS RESPONSÁVEIS PELAS TELAS
const GetDisplay = {
    displayDashboard: document.querySelector('#dashboard'),
    displayClient: document.querySelector('#client'),
    displayClientRegister: document.querySelector('#client-register'),
    displayAnnouncement: document.querySelector('#announcement'),
    displayAnnouncementRegister: document.querySelector('#announcement-register'),
    displayAnnouncementView: document.querySelector('#announcement-view'),
    displayReport: document.querySelector('#report')
}

// MUDANÇA DE TELAS
const Display = {
    dashboard() { 
        GetDisplay.displayDashboard.style.display = "flex";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    client() { 
        GetDisplay.displayClient.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    announcement() { 
        GetDisplay.displayAnnouncement.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    report() { 
        GetDisplay.displayReport.style.display = "flex";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    clientRegister() {
        GetDisplay.displayClientRegister.style.display = "flex";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    displayAnnouncementRegister() {
        GetDisplay.displayAnnouncementRegister.style.display = "flex";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
        GetDisplay.displayAnnouncementView.style.display = "none";
    },
    displayAnnouncementView() {
        GetDisplay.displayAnnouncementView.style.display = "flex";
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayReport.style.display = "none";
        GetDisplay.displayDashboard.style.display = "none";
        GetDisplay.displayClient.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "none";
    },
    cancelCreateClient() {
        GetDisplay.displayClientRegister.style.display = "none";
        GetDisplay.displayClient.style.display = "flex";
    },
    cancelCreateAnnouncement() {
        GetDisplay.displayAnnouncementRegister.style.display = "none";
        GetDisplay.displayAnnouncement.style.display = "flex";
    }
    
}

//FORMULÁRIO CADASTRO CLIENTES

const FormClient = {

    //Pegar os elementos do HTML
    clientName: document.querySelector('input#client-name'),             //Nome do cliente
    clientPhone: document.querySelector('input#client-phone'),           //Telefone do cliente
    clientEmail: document.querySelector('input#client-email'),           //E-mail do cliente
    clientCountry: document.querySelector('input#client-country'),       //País do cliente

    //Pegar os valores
    getValues() {
        return {
            clientName: FormClient.clientName.value,               //Nome do cliente
            clientPhone: FormClient.clientPhone.value,             //Telefone do cliente
            clientEmail: FormClient.clientEmail.value,             //E-mail do cliente
            clientCountry: FormClient.clientCountry.value,         //País do cliente
        }
    },

    //Validar campos
    validateFields() {
        const { clientName, clientPhone, clientEmail, clientCountry} = FormClient.getValues();   //Vai pegar os valores dos campos e separa-los.

        if( clientName.trim() === "" || clientPhone.trim() === "" || clientEmail.trim() === "" || clientCountry.trim() === "") {//Verificando se há espaços vazios
            throw new Error("Por favor, preencha todos os campos")
        }
    }
}
