// Input dati utenti
const form = document.querySelector("form");
const button = document.querySelector("button");
let sconto;
const prezzoKm = 0.21;

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    button.addEventListener('click', () => {

        const age = document.getElementById("age").value;
        let km = document.getElementById("km").value;
        let prezzoBiglietto = (km * prezzoKm).toFixed(2);
        if (age === "Minorenne"){
            sconto = 2/10;
            prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
            console.log(prezzoBiglietto);
        }else if(age === "Over"){
            sconto = 4/10;
            prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
            console.log(prezzoBiglietto);
        }else{
            console.log(prezzoBiglietto);
        }
        
    })
})






// Definizione prezzo/km


// Calcolo prezzo biglietto in base ai km (2 cifre decimali)


// SE il passeggero ha meno di 12 anni, applica uno sconto del 20%


// ALTRIMENTI SE il passeggero ha più di 65 anni, applica uno sconto del 40%
// ALTRIMENTI riporta il prezzo base
