const button = document.getElementById("#mySwitch");
mySwitch.addEventListener("click", (e) => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const card = document.querySelector(".card-fcbk .card-insta .card-ytb .card-twt");
    const cards = document.querySelector(".card1")
   
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    card.classList.toggle("dark");
    cards.classList.toggle("dark");
})




