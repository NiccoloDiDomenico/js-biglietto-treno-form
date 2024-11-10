// DATI
let priceForKm = 0.21;
let fullPrice;
let discount;

// INPUT
const ticketFormInput = document.getElementById("ticket-form")
const userKmInput = document.getElementById("user-km")
const userAgeInput = document.getElementById("user-age")
const generatesBtnInput = document.getElementById("generates-btn")

console.log(ticketFormInput, userKmInput, userAgeInput, generatesBtnInput);


// FORM
ticketFormInput.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    
    // valori del form
    const userKmValue = parseInt(userKmInput.value.trim());
    const userAgeValue = userAgeInput.value.trim();
    console.log(userKmValue, userAgeValue);
    console.log(typeof userKmValue, typeof userAgeValue);
    
    // calcolo il prezzo intero in base ai km dell'utente
    let fullPrice = (userKmValue * priceForKm);
    console.log(fullPrice);

    // CONDITIONS
    // calcolo lo sconto del biglietto 
    if (userAgeValue === `ragazzo`) {
        discount = (fullPrice / 100 * 20);
    } else if (userAgeValue === `anziano`) {
        discount = (fullPrice / 100 * 40);
    } else {
        discount = 0;
    }
    
    // calcolo il prezzo finale del biglietto
    const finalPrice = (fullPrice - discount);
    console.log(finalPrice);
    

    ticketFormInput.reset();
})

    