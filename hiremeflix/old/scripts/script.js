// ====================================================================================== //
// ==============================    LISTA DE PROFILES    =============================== //
// ====================================================================================== //

const users = [
    {
        userName: "Emerson Seiler",
        linkedin: "https://www.linkedin.com/in/seileremerson/",
        githubUser: "seiler-emerson",
        email: "seiler.emerson@gmail.com",
        BusinessInterests: ["capgemini","ambevtech","warren"]
    },
    {
        userName: "Filipe Albuquerque",
        linkedin: "https://www.linkedin.com/in/filipe-albuquerque-9689891a5/",
        githubUser: "Lipe-Albuquerque",
        email: "filipe.intel@gmail.com",
        BusinessInterests: ["ambevtech","capgemini","warren"]
    },
    {
        userName: "Ariana Moreira",
        linkedin: "https://www.linkedin.com/in/ariana-moreira-691a86217/",
        githubUser: "ariana-ssilva",
        email: "arianamoreira5021@gmail.com",
        BusinessInterests: ["ambevtech","capgemini","philips"]
    },
    {
        userName: "Welliton Borges",
        linkedin: "https://www.linkedin.com/in/welliton-borges-904331190/",
        githubUser: "Wellitonborges",
        email: "arianamoreira5021@gmail.com",
        BusinessInterests: ["ambevtech","capgemini","philips"]
    },
    {
        userName: "Stephanie Vieira",
        linkedin: "https://www.linkedin.com/in/ste-vieira/",
        githubUser: "Ste-Vieira",
        email: "tefiholzschuk@gmail.com",
        BusinessInterests: ["ambevtech","philips","warren"]
    },
    {
        userName: "Ciro Ugalde",
        linkedin: "https://www.linkedin.com/in/ciro-damasco-ugalde-151756220/",
        githubUser: "Ciro-Ugalde",
        email: "ciro.daniel.ugalde@gmail.com",
        BusinessInterests: ["ambevtech","philips","capgemini"]
    },
    {
        userName: "Joe Vieira",
        linkedin: "https://www.linkedin.com/in/joevieirajr/",
        githubUser: "ProfJoeVieira",
        email: "profjoevieirajr@gmail.com",
        BusinessInterests: ["philips","capgemini","havanLabs"]
    },
    {
        userName: "Thabata Santos",
        linkedin: "https://www.linkedin.com/in/thabatasantos/",
        githubUser: "ThataSantos",
        email: "thata_santoss@hotmail.com",
        BusinessInterests: ["capgemini","ambevtech","warren"]
    },
    {
        userName: "Geovani S. Brustolin",
        linkedin: "https://www.linkedin.com/in/geovani-da-silva-brustolin-278600235/",
        githubUser: "Geo-Silva",
        email: "rumblycactus3@gmail.com",
        BusinessInterests: ["philips","capgemini","ambevtech"]
    },
    {
        userName: "Thiago Souza",
        linkedin: "https://www.linkedin.com/in/thiago-souza-53b03979/",
        githubUser: "wzthiago",
        email: "wzthiago@gmail.com",
        BusinessInterests: ["ambevtech","philips","capgemini"]
    },
    {
        userName: "Bruno Roberto",
        linkedin: "https://www.linkedin.com/in/bruno-roberto-49941a186/",
        githubUser: "bruno-roberto",
        email: "brunorobertopds@gmail.com",
        BusinessInterests: ["ambevtech","philips","capgemini"]
    },
    {
        userName: "Kalil Fakhouri",
        linkedin: "https://www.linkedin.com/in/kalil-j-fakhouri-1744b321a/",
        githubUser: "kaka-jaques",
        email: "kjfakhouri@gmail.com",
        BusinessInterests: ["ambevtech","ailos","warren"]
    },
    {
        userName: "Cristian Schauffert",
        linkedin: "https://www.linkedin.com/in/",
        githubUser: "Cristian-Baade",
        email: "Schauffertcristian@gmail.com",
        BusinessInterests: ["philips","capgemini","ambevtech"]
    },
    {
        userName: "Erick Gabriel Carvalho",
        linkedin: "https://www.linkedin.com/in/erick-gabriel-carvalho-da-silva-441277238/",
        githubUser: "ERICK-GABRIEL",
        email: "erick3000msn9@gmail.com",
        BusinessInterests: ["philips","ambevtech","capgemini"]
    },
    {
        userName: "Bárbara Ribeiro",
        linkedin: "https://www.linkedin.com/in/B%C3%A1rbaraRibeiro050392/",
        githubUser: "Ba-Ribeiro",
        email: "babi_rib@hotmail.com",
        BusinessInterests: ["ailos","warren","ambevtech"]
    },
    {
        userName: "Alexsandro Correa",
        linkedin: "https://www.linkedin.com/in/alexsandro-correa-088572238/",
        githubUser: "Alexsandro-Correa",
        email: "alexsandro19031@hotmail.com",
        BusinessInterests: ["philips","unifique","warren"]
    },
    {
        userName: "Mateus Felipe Goettems",
        linkedin: "https://www.linkedin.com/in/mateusgoettems/",
        githubUser: "mat-felipe",
        email: "mateusgoettems@gmail.com",
        BusinessInterests: ["senior","capgemini","ambevtech"]
    },
    {
        userName: "Rafael Macedo",
        linkedin: "https://www.linkedin.com/in/rafael-macedo-49801011a/",
        githubUser: "rmcedo",
        email: "mateusgoettems@gmail.com",
        BusinessInterests: ["ambevtech","philips","tSystems"]
    },
    {
        userName: "Arthur Estevan Vargas",
        linkedin: "https://www.linkedin.com/in/arthurestevanvargas/",
        githubUser: "ArthurEstevan",
        email: "arthur.estevan01@gmail.com",
        BusinessInterests: ["capgemini","datainfo","havanLabs"]
    },
]

// ================================================================================================= //
// ==============================    CRIAÇÃO DOS PROFILES NA TELA    =============================== //
// ================================================================================================= //

const DOMProfile = {
    profileContainer: document.querySelector(".profile"),

    addProfile(index) {  //Responsável por adicionar o perfil no container
        const profileBox = document.createElement('div');
        profileBox.classList.add('profileBox');
        profileBox.innerHTML = DOMProfile.innerHTMLProfile(index);
        profileBox.dataset.index = index;
        DOMProfile.profileContainer.appendChild(profileBox);
    },

    innerHTMLProfile(index) {

        const html = `
        <div class="profileBox">
        <div class="photo">
            <img src="https://avatars.githubusercontent.com/${index.githubUser}" alt="Photo Profile">
        </div>
        <h2>${index.userName}</h2>
    
        <div class="infos">
    
            <h2>Contacts</h2>
            <div class="contacts">
                <a href="${index.linkedin}"><img src="./assets/images/icons/contacts/linkedin.png" alt="Linkedin Icon"></a>
                <a href="https://github.com/${index.githubUser}"><img src="./assets/images/icons/contacts/github.png" alt="Github Icon"></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=${index.email}&su=VAGA+-+A+vaga+é+sua!&body=Ol%C3%A1+${index.userName},+Tudo+bem?+Você+foi+selecionado!&tf=cm"><img src="./assets/images/icons/contacts/email.png" alt="Email Icon"></a>
            </div>
            <h2>Business Interests</h2>
            <div class="business">
                <a href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[0]}.png" alt="Business Logo"></a>
                <a href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[1]}.png" alt="Business Logo"></a>
                <a href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[2]}.png" alt="Business Logo"></a>
            </div>
        </div>
        </div>
        `
        return html
    },

}

// ========================================================================================== //
// ==============================    EXECUÇÃO DAS APLICAÇÃO    ============================== //
// ========================================================================================== //

const App = {
    init() {
       users.sort(function(a,b){
           return (a.userName > b.userName) ? 1 : ((b.userName > a.userName) ? -1 : 0);
       }).forEach(function(index) {
        DOMProfile.addProfile(index);               //Exibe os alunos na pagina 
        })
    }
}

App.init()