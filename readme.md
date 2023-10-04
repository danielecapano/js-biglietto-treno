# Calcolo del prezzo del biglietto del treno

- Chiedere al passeggero il numero di km che vuole percorrere

  - inizializzare una variabile totaleKm con un prompt

- Chiedere al passeggero la sua età

  - inizializzare una variabile age con un prompt

- calcolare il prezzo base del biglietto sapendo che costa 0.21 € al km

  - inizializzare una variabile prezzoKm con il valore di 0.21
  - inizializzare una variabile prezzoBase con totaleKm \* prezzoKm
    -dichiariamo una variabile prezzoFinale

- applicare eventuale sconto

  - SE il passeggero ha meno di 18 anni applichiamo uno sconto del 20%
  - assegnamo a prezzoFinale il valore del prezzo scotato
  - ALTRIMENTI SE il passeggero ha più di 65 anni applichiamo uno sconto del 40%
  - assegnamo a prezzoFinale il valore del prezzo scotato

  - ALTRIMENTI lasciamo il prezzo base e assegnamo a prezzoFinale il valore di prezzoBase

- stampare il costo del prezzo finale del biglietto
  - troviamo nel DOM l'elemento con id="prezzo-finale" e salviamolo in una variabile
  - modifichiamo il contenuto con prezzoFinale
