// DATI
let priceForKm = 0.21;
let fullPrice;
let discount;

// INPUT
const ticketFormInput = document.getElementById("ticket-form")
const userNameInput = document.getElementById("user-name")
const userKmInput = document.getElementById("user-km")
const userAgeInput = document.getElementById("user-age")
const generatesBtnInput = document.getElementById("generates-btn")

console.log(ticketFormInput, userNameInput, userKmInput, userAgeInput, generatesBtnInput);

// ELEMENTS
const ticketSectionElement = document.getElementById("ticket-section")
const card1Element = document.getElementById("card1")
const card2Element = document.getElementById("card2")
const card3Element = document.getElementById("card3")
const card4Element = document.getElementById("card4")
console.log(ticketSectionElement, card1Element, card2Element, card3Element, card4Element);


// CALCULATOR SECTION
ticketFormInput.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);

    // valori del form
    const userNameValue = userNameInput.value.trim();
    const userKmValue = parseInt(userKmInput.value.trim());
    const userAgeValue = userAgeInput.value.trim();
    console.log(userNameValue, userKmValue, userAgeValue);
    console.log(typeof userNameValue, typeof userKmValue, typeof userAgeValue);

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

    // TICKET SECTION
    generatesBtnInput.addEventListener("click", function () {
        ticketSectionElement.classList.remove("d-none");

        card1Element.innerHTML = userNameValue;
        card2Element.innerHTML = fullPrice.toFixed(2) + " €";
        if (userAgeValue === `ragazzo`) {
            card3Element.innerHTML = `20% di sconto`;
        } else if (userAgeValue === `anziano`) {
            card3Element.innerHTML = `40% di sconto`;
        } else {
            card3Element.innerHTML = `Nessuno sconto`;
        }
        card4Element.innerHTML = finalPrice.toFixed(2) + " €";

    })
})

