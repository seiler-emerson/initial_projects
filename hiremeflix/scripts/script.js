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
        userName: "Mateus F. Goettems",
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
        profileBox.classList.add('col-12');
        profileBox.classList.add('col-xl-6');
        profileBox.classList.add('mb-5');
        profileBox.innerHTML = DOMProfile.innerHTMLProfile(index);
        profileBox.dataset.index = index;
        DOMProfile.profileContainer.appendChild(profileBox);
    },

    innerHTMLProfile(index) {

        const html = `
        
        <div class="student-box rounded-5 bg-dark p-0 mx-auto d-sm-flex">
        <a class="" href="https://${index.githubUser}.github.io/" alt="" target="_blank">
            <img class="student-profile" src="https://avatars.githubusercontent.com/${index.githubUser}"
                alt="Profile Photo">
        </a>
        <div class="student-info pt-3 ps-0 ps-sm-4 m-0 text-center text-sm-start">
            <h2 class="">${index.userName}</h2>
            <h5 class="">Contacts</h5>
            <div class="student-contact pb-3 d-flex justify-content-center justify-content-sm-start">
                <a class="me-2" href="${index.linkedin}" target="_blank">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 0C8.95431 0 0 8.95431 0 20V180C0 191.046 8.95431 200 20 200H180C191.046 200 200 191.046 200 180V20C200 8.95431 191.046 0 180 0H20ZM42.3901 60.1625C31.3534 54.9307 31.1609 38.156 42.076 32.7599C46.8086 30.4193 50.8063 30.4141 55.616 32.7398C65.3306 37.4376 66.7253 51.9023 58.0974 58.4756C53.9203 61.6579 47.0921 62.3912 42.3901 60.1625ZM35.7562 169V120.93V72.8599H48.8805H62.0049V120.93V169H48.8805H35.7562ZM79.5041 169V120.93V72.8599H92.6285H105.753V80.1133V87.3666L110.845 82.4198C117.867 75.5991 123.585 73.421 134.627 73.3607C141.823 73.3214 143.598 73.6229 147.856 75.6087C157.379 80.0521 163.057 87.2853 165.652 98.282C166.706 102.752 166.976 110.482 166.987 136.443L167 169H153.876H140.751V142.482C140.751 114.285 140.34 110.758 136.407 105.242C133.814 101.603 128.602 99.08 123.681 99.08C117.144 99.08 111.547 102.684 108.074 109.131C106.275 112.47 106.178 113.893 105.927 140.813L105.663 169H92.5839H79.5041Z" />
                    </svg>
                </a>
                <a class="me-2" href="https://github.com/${index.githubUser}" target="_blank">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 0C8.95435 0 0 8.9541 0 20V180C0 191.046 8.95435 200 20 200H180C191.046 200 200 191.046 200 180V20C200 8.9541 191.046 0 180 0H20ZM64.2783 19.4268C74.0879 15.2021 83.8816 12.8643 94.6184 12.1851C100.487 11.813 105.479 11.9932 111.867 12.8057C130.955 15.2344 148.967 23.9932 162.958 37.6499C177.814 52.1504 186.841 70.3687 189.533 91.2822C190.157 96.1338 190.155 108.097 189.529 112.781C188.568 119.977 186.835 127.087 184.564 133.154C175.386 157.675 156.094 177.032 131.745 186.149C128.698 187.29 128.085 187.441 126.961 187.325C124.709 187.092 122.968 185.776 121.679 183.33L120.991 182.025L120.833 164.651C120.747 155.096 120.596 146.94 120.5 146.528C120.141 145.002 119.32 142.654 119.097 142.516C118.796 142.33 118.795 142.143 119.06 141.991C119.217 141.901 119.467 141.824 119.804 141.768C122.138 141.374 128.085 139.809 130.779 138.88C147.893 132.979 158.284 122.189 161.549 106.932C162.182 103.976 162.223 103.395 162.214 97.5317C162.205 91.8101 162.148 90.9976 161.541 87.9077C159.977 79.9399 156.874 73.2407 152.253 67.8579L150.912 66.2954L151.354 65.415C152.812 62.5083 153.451 58.6021 153.297 53.5352C153.13 48.0591 152.146 44.4683 149.817 40.8384L149.039 39.626L147.139 39.7832C138.357 40.5107 130.731 43.8457 124.116 49.8516L122.241 51.5537L119.866 50.8623C112.963 48.8525 102.274 47.9644 93.4673 48.6685C88.1934 49.0903 81.1165 50.4536 78.4971 51.5522C77.7617 51.8608 77.7144 51.832 75.6223 49.8257C69.5791 44.0293 61.8513 40.604 52.9639 39.7817L51.1814 39.6167L50.543 40.4536C49.5784 41.7183 48.137 44.9106 47.605 46.9604C47.3447 47.9644 46.9983 49.9966 46.8357 51.4761C46.3381 56.0015 47.2515 61.8174 48.9692 65.063L49.7781 66.5913L48.1887 68.4375C41.167 76.5957 37.77 86.3154 37.802 98.1567C37.8171 103.656 38.3503 107.163 39.856 111.667C43.8369 123.573 52.8601 132.442 66.4956 137.851C70.2258 139.331 76.6665 141.143 80.3989 141.763L81.3037 141.914L80.6843 143.596C79.9097 145.699 79.3735 149.114 79.3713 151.958L79.3696 154.138L77.9321 154.538C77.1416 154.757 76.3374 154.988 76.1448 155.051C74.9109 155.454 70.6304 155.645 68.2471 155.402C60.5566 154.62 55.2881 151.438 51.3958 145.222C49.3506 141.957 44.6372 138.507 40.8726 137.521C37.5098 136.641 34.0942 137.204 33.9236 138.667C33.8237 139.527 34.5354 140.373 36.8337 142.126C37.8865 142.929 39.28 144.156 39.9307 144.854C41.9724 147.042 44.3442 150.969 45.9919 154.888C46.9541 157.177 48.4121 159.238 50.6001 161.405C54.6853 165.45 59.666 167.825 65.8152 168.659C69.2373 169.124 75.083 168.833 78.8218 168.011L79.3992 167.884L79.3218 174.705C79.2454 181.452 79.2375 181.54 78.5945 182.912C77.3191 185.631 75.0166 187.392 72.7305 187.397C71.1584 187.401 65.6921 185.296 60.1025 182.534C51.0569 178.065 43.7234 172.777 36.3604 165.414C26.5122 155.565 19.6921 144.792 15.0959 131.821C10.4236 118.637 8.93408 104.384 10.752 90.252C14.7615 59.0811 35.2991 31.9058 64.2783 19.4268Z" />
                    </svg>
                </a>
                <a class="me-2" href="https://mail.google.com/mail/u/0/?fs=1&to=${index.email}&su=VAGA+-+A+vaga+é+sua!&body=Ol%C3%A1+${index.userName},+Tudo+bem?+Você+foi+selecionado!&tf=cm" target="_blank">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20 0C8.95435 0 0 8.9541 0 20V180C0 191.046 8.95435 200 20 200H180C191.046 200 200 191.046 200 180V20C200 8.9541 191.046 0 180 0H20ZM28.3882 52.123C26.0886 50.2715 25.5195 46.6948 27.3503 45.6006C28.6912 44.7998 172.103 44.7998 173.443 45.6006C175.14 46.6143 174.746 50.125 172.737 51.8872C172.173 52.3818 163.267 58.2329 152.947 64.8887C142.625 71.5449 128.038 80.9541 120.529 85.7993C113.021 90.644 106.041 94.8657 105.019 95.1802C102.652 95.9092 98.1636 95.9155 95.8198 95.1938C94.8057 94.8818 83.3743 87.7803 69.8999 79.0928C60.74 73.1865 51.0046 66.9102 44.4041 62.6562L37.7595 58.375C35.5554 56.9556 33.4016 55.5439 31.7051 54.4121C30 53.2749 28.7566 52.4199 28.3882 52.123ZM24.5674 149.223C23.7959 147.031 23.8184 56.6641 24.5908 55.7476C24.9163 55.3613 25.5063 55.21 26.1345 55.3525C26.6938 55.4795 31.5925 59.1465 37.021 63.501C42.4492 67.8555 53.2429 76.4546 61.0066 82.6104C68.7708 88.7656 75.1396 93.9497 75.1594 94.1299C75.1794 94.3096 68.5195 103.379 60.3591 114.284C52.1987 125.188 45.2712 134.559 44.9648 135.107C44.2224 136.437 44.8403 137.291 46.0588 136.618C46.5161 136.366 54.9919 128.037 64.894 118.109C75.812 107.163 83.071 100.176 83.3384 100.355C83.5806 100.518 85.751 102.124 88.1616 103.924C94.4636 108.63 95.7188 109.168 100.397 109.168C105.137 109.168 106.419 108.605 113.113 103.588L117.874 100.02L135.888 118.086C145.797 128.022 154.278 136.36 154.735 136.614C155.956 137.293 156.574 136.436 155.821 135.107C155.357 134.287 137.483 110.308 127.734 97.4258L125.228 94.1147L129.339 90.9805C131.601 89.2568 141.958 80.9355 152.355 72.4888C162.753 64.0425 172.078 56.6284 173.077 56.0127C174.568 55.0952 174.993 54.9922 175.447 55.4395C175.935 55.9194 176 61.4419 176 102.107C176 146.702 175.977 148.284 175.301 149.839C174.916 150.723 173.971 152.169 173.2 153.051C172.819 153.487 172.608 153.86 172.333 154.177C170.59 156.188 166.306 155.998 100.317 155.994L31.5505 155.989L29.7244 154.969C27.5513 153.754 25.2668 151.209 24.5674 149.223Z" />
                    </svg>
                </a>
            </div>
            <h5 class="">Business Interests</h5>
            <div class="student-interests pb-3">
                <a class="me-2" href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[0]}.png" alt=""></a>
                <a class="me-2" href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[1]}.png" alt=""></a>
                <a class="me-2" href="#"><img src="./assets/images/icons/companies/${index.BusinessInterests[2]}.png" alt=""></a>
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

        //ADJUST FONT SIZE NAME
        let userName = document.getElementsByTagName('h2');
        for(let count =0; count < userName.length;count++) {
            if(userName[count].textContent.split('').length > 17) {
                userName[count].style.fontSize = "24px";
            }
            
        }
    }
}

App.init()