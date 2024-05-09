const btn = document.getElementById("activeNavBtn");
const navbar = document.getElementById("navbar");

btn.addEventListener("click", () => {
    navbar.classList.toggle('active-absolute');
})