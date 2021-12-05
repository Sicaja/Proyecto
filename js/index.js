// Mobile menu
const burgerIcon = document.getElementById("burger");
const navbarMenu = document.getElementById("nav-links");

const detailModal = document.getElementById("modalDetail");

//Add event listener

burgerIcon.addEventListener("click", ()=>{
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
});

function openDetail() {
    detailModal.classList.toggle('is-active');
}