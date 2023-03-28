const btnOther = document.querySelector("#btn-other");
const quote = document.querySelector("#quote");
window.addEventListener("DOMContentLoaded",()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) =>  quote.textContent =`"${response.slip.advice}"`) 
})
btnOther.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) =>  quote.textContent =`"${response.slip.advice}"`) 
})

