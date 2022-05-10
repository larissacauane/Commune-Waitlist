const btnMobile = document.querySelector(".btn-mobile-nav");

function toggleMenu(){
    const navMobile = document.querySelector(".main-nav");
    navMobile.classList.toggle("active")
}

btnMobile.addEventListener("click", toggleMenu);