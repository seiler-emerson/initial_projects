let displayDashboard = document.querySelector('#dashboard');
let displayClient = document.querySelector('#client');
let displayClientRegister = document.querySelector('#client-register');
let displayAnnouncement = document.querySelector('#announcement');
let displayAnnouncementRegister = document.querySelector('#announcement-register');
let displayAnnouncementView = document.querySelector('#announcement-view');
let displayReport = document.querySelector('#report');



// MUDANÇA DE TELAS PELO MENU
const Display = {
    dashboard() { 
        displayDashboard.style.display = "flex";
        displayClient.style.display = "none";
        displayAnnouncement.style.display = "none";
        displayReport.style.display = "none";
        displayClientRegister.style.display = "none";
        displayAnnouncementRegister.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    client() { 
        displayClient.style.display = "flex";
        displayDashboard.style.display = "none";
        displayAnnouncement.style.display = "none";
        displayReport.style.display = "none";
        displayClientRegister.style.display = "none";
        displayAnnouncementRegister.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    announcement() { 
        displayAnnouncement.style.display = "flex";
        displayDashboard.style.display = "none";
        displayClient.style.display = "none";
        displayReport.style.display = "none";
        displayClientRegister.style.display = "none";
        displayAnnouncementRegister.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    report() { 
        displayReport.style.display = "flex";
        displayDashboard.style.display = "none";
        displayClient.style.display = "none";
        displayAnnouncement.style.display = "none";
        displayClientRegister.style.display = "none";
        displayAnnouncementRegister.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    clientRegister() {
        displayClientRegister.style.display = "flex";
        displayReport.style.display = "none";
        displayDashboard.style.display = "none";
        displayClient.style.display = "none";
        displayAnnouncement.style.display = "none";
        displayAnnouncementRegister.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    displayAnnouncementRegister() {
        displayAnnouncementRegister.style.display = "flex";
        displayClientRegister.style.display = "none";
        displayReport.style.display = "none";
        displayDashboard.style.display = "none";
        displayClient.style.display = "none";
        displayAnnouncement.style.display = "none";
        displayAnnouncementView.style.display = "none";
    },
    displayAnnouncementView() {
        displayAnnouncementView.style.display = "flex";
        displayAnnouncementRegister.style.display = "none";
        displayClientRegister.style.display = "none";
        displayReport.style.display = "none";
        displayDashboard.style.display = "none";
        displayClient.style.display = "none";
        displayAnnouncement.style.display = "none";
    }
    
}

