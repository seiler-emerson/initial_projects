const users = [
    {
        userName: "Emerson Seiler",
        linkedin: "https://www.linkedin.com/in/seileremerson/",
        githubUser: "seiler-emerson",
        email: "seiler.emerson@gmail.com",
        BusinessInterests: ["philips","capgemini","ambevtech"]
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
]

// SECTION - DIV CONTAINER  -- DIV PROFILE  - DIV PROFILEBOX 

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

DOMProfile.addProfile(users[0]);

// ========================================================================================== //
// ==============================    EXECUÇÃO DAS APLICAÇÃO    ============================== //
// ========================================================================================== //

const App = {
    init() {
       users.forEach(function(index) {
        DOMProfile.addProfile(index);               //Exibe os anuncios na pagina de anuncios 
        })
    }
}

App.init()