const scrollNav = document.querySelector(".nav");
const scrollNavMobile = document.querySelector(".navBar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 150) {
        scrollNav.classList.add("active");
        scrollNavMobile.classList.add("scrolled");
       
    } else {
        scrollNav.classList.remove("active");
       scrollNavMobile.classList.remove("scrolled");
    }
});



