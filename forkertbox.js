//SCRIPT FOR ALLE UNDERSIDER MED SPØRGSMÅL OM PLANETERNE

//Variable for popop boks:
const planeterSvarEt = document.getElementById("planeter_svar_et");
const planeterSvarTo = document.getElementById("planeter_svar_to");
const forkertBox = document.getElementById("forkertsvar_planeter");
const knap = document.getElementById("provigen_knap_to");


//Her bruger vi events til at fortælle hvad der skal ske, når der klikkes:
planeterSvarEt.onclick = visBox;
planeterSvarTo.onclick = visBox;

//Vores function der gør det muligt at se vores popop, når der klikkes på events, via brug af flex:
function visBox(){
    forkertBox.style.display ="flex";
}

//Event der skal fjerne boxen, når der klikkes på "knap":
knap.onclick = fjernBox;

//Vores function der gør det muligt at fjerne vores popop, 
//når der klikkes på "knap", via brug af display:none:
function fjernBox(){
    forkertBox.style.display = "none";
}


// FADE IND AF PLANETER: 

//Vores variabel:
const fadeIndPlaneter = document.getElementById("planet_fade");

//Event der fortæller, at når sitet loades skal window starte function visPlaneter
window.onload = visPlaneter;

//Vi kalder en function der skal få vores planet sektions til at vise sig med opacity "1"
//når der loades en ny html fil:
function visPlaneter(){
     fadeIndPlaneter.style.opacity = "1";
}

//LYDSPOR PÅ TVÆRS AF HTML-FILER MED SPØRGSÅL OM PLANETER

// Vores variabel til lyd/audio:
const audio = document.getElementById("rum_musik");

// Vi henter den gemte afspilningsposition fra localStorage på vores explorer:
const savedPosition = localStorage.getItem('audioPosition');

// Vores if-sætning fortæller at lydfilen skal gemme den tidligere position, hvilket vil sige
// at den skal fortsætte med at afspille hvor den den slap fra forrige html-fil:
    if (savedPosition) {
        audio.currentTime = parseFloat(savedPosition);
    }

    // Event listener er tilfjøjet til function så den lytter til når lyden stopper
    // og dermed afspiller forfra igen:
    audio.addEventListener('ended', function() {
        // Sætter lyden til at starte fra begyndelsen igen
        audio.currentTime = 0;
        // Afspiller lyden igen
        audio.play();
    });

    // Lydstyrken er sat lavere, til 0.1 
    audio.volume = 0.1;

    // Ved denne function er det muligt at gemme afspilningspositionen i localStorage kan den næste HTML-side derefter
    // hente denne gemte position og fortsætte afspilningen fra det punkt, hvor den forrige side sluttede. 
    // Denne Event listener henter audio.currentTime fra vores if-sætning:
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('audioPosition', audio.currentTime);
    });

    // Starter afspilning efter at have sørget for, at alle elementer er indlæst:
    audio.play();
