const btn = document.querySelector(".btn");
const navBar = document.querySelector(".navBar");


btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    navBar.classList.toggle("active");

});




window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navBar.classList.add("active");


}
 



})



