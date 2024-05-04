// Navbar toggle in mobile
let navbar = document.querySelector("[data-navbar]");
let navBtn = document.querySelector("[data-nav-toggle]");

let menuIconFirstSpan = document.querySelector('.menu-icon span:first-child');
let menuIconSecundSpan = document.querySelector('.menu-icon span:nth-child(2)');
let menuIconLastSpan = document.querySelector('.menu-icon span:last-child');

navBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    menuIconFirstSpan.classList.toggle('active');  
    menuIconSecundSpan.classList.toggle('active');  
    menuIconLastSpan.classList.toggle('active');  
})




// navBtn.onclick = function() {
//     navbar.classList.toggle("active");
//     navBtn.classList.toggle("active");
// }

// Header scroll state
let header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})


// Add to favorite button toggle 
let toggleBtns = document.querySelectorAll("[data-toggle-btn]");

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", function() {
        toggleBtn.classList.toggle("active");
    })
})



