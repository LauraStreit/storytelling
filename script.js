// POP OP AF ERROR for valg fartøj er optaget
// Vores variable:
const ufoKnap = document.getElementById("ufo_knap");
const sattelitKnap = document.getElementById("sat_knap")
const error = document.getElementById("error");
const errorKnap = document.getElementById("error_knap");

// Her vises vores error pop op:

// Her bruger vi events til at fortælle hvad der skal ske, når der klikkes:
ufoKnap.onclick = visError;
sattelitKnap.onclick = visError;

// Dette er vores function til ovenstående events, som viser error ppop når der klikkes:
function visError(){
    error.style.display = "block";
}

// Event der fortæller os hvad errorKnap skal gøre. Den skal fjerne error siden:
errorKnap.onclick = fjernError;

// Via denne function fjerner vi error POP-OP vis style display none
function fjernError(){
    error.style.display = "none";
}


// ROTATION AF ALLE PLANETER:

// Vores variabel:
const roterPlanet = document.getElementById("roter_planet");

//Event der fortæller, at når siden loades skal function roter starte
window.onload = roter;

// Function der fortæller os at vores event skal rotere
function roter() {
    roterPlanet.classList.add("rotate")
}


//AUDIO RUMLYD FOR FARTOJ.HTML:
const audio = document.getElementById("rum_musik");

// Lydstyrken er sat lavere, til 0.1 
audio.volume = 0.1;



