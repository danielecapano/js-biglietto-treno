// Chiedere al passeggero il numero di km che vuole percorrere

//inizializzare una variabile totaleKm con un prompt
const totaleKm = prompt("Quanti km devi percorrere?");
console.log(totaleKm);

//Chiedere al passeggero la sua età

//inizializzare una variabile age con un prompt
const age = prompt("Qual è la tua età");
console.log(age);

//calcolare il prezzo base del biglietto sapendo che costa 0.21 € al km

//inizializzare una variabile prezzoKm con il valore di 0.21
let prezzoKm = 0.21;
//inizializzare una variabile prezzoBase con totaleKm \* prezzoKm
const prezzoBase = (totaleKm * prezzoKm).toFixed(2);
console.log(prezzoBase);
//dichiariamo una variabile prezzoFinale
let prezzoFinale;

//applicare eventuale sconto

//dichiariamo una variabile per lo sconto under18
let scontoUnder18 = 20;
//dichiariamo una variabile per lo sconto over65
let scontoOver65 = 40;

//SE il passeggero ha meno di 18 anni applichiamo uno sconto del 20%
if (age < 18) {
  const sconto = ((prezzoBase * scontoUnder18) / 100).toFixed(2);
  console.log(sconto);
  //assegnamo a prezzoFinale il valore del prezzo scotato
  prezzoFinale = (prezzoBase - sconto).toFixed(2);
  console.log(prezzoFinale);
} else if (age >= 65) {
  //ALTRIMENTI SE il passeggero ha più di 65 anni applichiamo uno sconto del 40%
  const sconto = ((prezzoBase * scontoOver65) / 100).toFixed(2);
  console.log(sconto);
  //assegnamo a prezzoFinale il valore del prezzo scotato
  prezzoFinale = (prezzoBase - sconto).toFixed(2);
  console.log(prezzoFinale);
} else {
  //ALTRIMENTI lasciamo il prezzo base e assegnamo a prezzoFinale il valore di prezzoBase
  prezzoFinale = prezzoBase;
}

//stampare il costo del prezzo finale del biglietto

//troviamo nel DOM l'elemento con id="prezzo-finale" e salviamolo in una variabile
const elementDomPrezzoFinale = document.getElementById("prezzo-finale");
//modifichiamo il contenuto con prezzoFinale
elementDomPrezzoFinale.innerHTML = prezzoFinale + " €";
