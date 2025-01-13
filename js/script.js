// Input dati utenti
const form = document.querySelector("form");
const button = document.querySelector("button");
let sconto;
const prezzoKm = 0.21;

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    

        const age = document.getElementById("age").value;
        let km = document.getElementById("km").value;
        let prezzoBiglietto = (km * prezzoKm).toFixed(2);
        const tipo = document.getElementById("tipoBiglietto");
        const costo = document.getElementById("costoBiglietto");
        const discount = document.getElementById("scontoBiglietto");
        if (age === "minorenne"){
            sconto = 2/10;
            prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
            console.log(prezzoBiglietto);
            tipo.innerHTML = "Biglietto Ridotto";
            costo.innerHTML = prezzoBiglietto;
            discount.innerHTML = (prezzoBiglietto * sconto).toFixed(2);
            

        }else if(age === "over"){
            sconto = 4/10;
            prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * sconto)).toFixed(2);
            console.log(prezzoBiglietto);
            tipo.innerHTML = "Biglietto Ridotto";
            costo.innerHTML = prezzoBiglietto;
            discount.innerHTML = (prezzoBiglietto * sconto).toFixed(2);
            
        }else{
            console.log(prezzoBiglietto);
            tipo.innerHTML = "Biglietto Standard";
            costo.innerHTML = prezzoBiglietto;
            discount.innerHTML = (prezzoBiglietto * sconto).toFixed(2);
           
        }
        
    })






// Definizione prezzo/km


// Calcolo prezzo biglietto in base ai km (2 cifre decimali)


// SE il passeggero ha meno di 12 anni, applica uno sconto del 20%


// ALTRIMENTI SE il passeggero ha più di 65 anni, applica uno sconto del 40%
// ALTRIMENTI riporta il prezzo base
