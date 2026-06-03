console.log("JavaScript connected!");

// hamburger and close icon
const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

if (menuToggle) {
    menuToggle.onclick = () => {
        navbar.classList.add("active");
    };
}

if (closeBtn) {
    closeBtn.onclick = () => {
        navbar.classList.remove("active");
    };
}

if (overlay) {
    overlay.onclick = () => {
        navbar.classList.remove("active");
    };
}