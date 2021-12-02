// Mobile menu
const burgerIcon = document.getElementById("burger");
const navbarMenu = document.getElementById("nav-links");

//Add event listener

burgerIcon.addEventListener("click", ()=>{
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
});