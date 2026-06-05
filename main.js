console.log("JavaScript connected!");

const navbar = document.getElementById("navbar");
const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});


// intersection observer for principle cards
window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));