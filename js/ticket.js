// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// richiesta numero di chilometri da percorrere
var kmRichiesti;
kmRichiesti = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("vuoi percorrere " + kmRichiesti + " Km");
document.getElementById("km").innerHTML = kmRichiesti
// richiesta età passeggero
var etaPasseggero;
etaPasseggero = prompt("Quanti anni hai?");
console.log("il passeggero ha " + etaPasseggero + " anni");
document.getElementById("eta").innerHTML = etaPasseggero
// calcolo costo tratta
var costoTratta;
costoTratta = kmRichiesti * 0.21;
console.log("costo tratta: " + costoTratta);

// calcolo costo biglietto
var prezzoBiglietto 

if (etaPasseggero < 18) {
    // indicazione under 18
    prezzoBiglietto = costoTratta - (costoTratta * 0.2);
    console.log(prezzoBiglietto); 

} else if (etaPasseggero > 65) {
    // indicazione over 65
    prezzoBiglietto = costoTratta - (costoTratta * 0.4);
    console.log(prezzoBiglietto);

} else {
    // indicazione biglietto non ridotto
    prezzoBiglietto = costoTratta;
    console.log(prezzoBiglietto);
}

// eventuale arrontondamento a centesimi
var prezzoPubblico = Math.ceil(prezzoBiglietto * 100) / 100;
console.log("il prezzo al pubblico è di: " + prezzoPubblico + "€");
document.getElementById("prezzo-biglietto").innerHTML = prezzoPubblico + "€";