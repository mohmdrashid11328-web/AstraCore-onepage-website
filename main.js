console.log("JavaScript connected!");


const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menuToggle.onclick = () => {
    navbar.classList.add("active");
};

closeBtn.onclick = () => {
    navbar.classList.remove("active");
};

overlay.onclick = () => {
    navbar.classList.remove("active");
};
