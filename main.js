const toggleBtn = document.getElementById("toggle");     //checkbox
const cardContainer = document.querySelector(".card-container");

toggleBtn.addEventListener('change', e => {
    cardContainer.classList.toggle("toggling");
});