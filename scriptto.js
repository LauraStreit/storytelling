//FUNKTION der får vores sektion, om solen, til at 
//fade ind i window frame, når man scroller ned efter videoen:

//Variabel for hele sol sektionen:
const begyndQiuz = document.getElementById("sol_sektion");

//Event der fortæller at der sker en ændring når man scroller:
window.onscroll = fadeInd;

//Vi kalder en function der via en if-sætning, fortæller 
//at sol_sektion skal få en opacity på 1, når den er 100px inde i vinduet:
function fadeInd(){
    let anden_positionsinfo = begyndQiuz.getBoundingClientRect();

    if (anden_positionsinfo.top < window.innerHeight -100) {
        begyndQiuz.style.opacity = "1";
    }
}

// Her vises vores side der popper frem når man trykker på det forkerte svar på vores start.html side:

// Vores variable:
const forkertSvarEt = document.getElementById("svar_et");
const forkertSvarTo = document.getElementById("svar_to");
const provIgen = document.getElementById("provigen_knap");
const forkertSvarBox = document.getElementById("forkertsvar");


//Her bruger vi events til at fortælle hvad der skal ske, når der klikkes:
forkertSvarEt.onclick = visForkertSvarBox;
forkertSvarTo.onclick = visForkertSvarBox;

//Vores function der gør det muligt at se vores popop, når der klikkes på events, via brug af flex:
function visForkertSvarBox(){
    forkertSvarBox.style.display = "flex";
}

//Event der skal fjerne boxen, når der klikkes på prøv-igen knappen:
provIgen.onclick = fjernForkertSvarBox;

//Vores function der gør det muligt at fjerne vores popop, 
//når der klikkes på "provIgen", via brug af display:none:
function fjernForkertSvarBox(){
    forkertSvarBox.style.display = "none";
}


//Audio rumlyd for start.html - ænding af lydstyrken:
const audio = document.getElementById("rum_musik");

// Lydstyrken er sat lavere, til 0.1 
audio.volume = 0.1;
