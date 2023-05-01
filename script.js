const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.nav-menu');
hamburger.addEventListener("click",()=>{
    navmenu.classList.toggle("left-0");
})
document.querySelectorAll('.nav-item').forEach(n=>n.addEventListener("click",()=>{
    navmenu.classList.remove("left-0");
}))