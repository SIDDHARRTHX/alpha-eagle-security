const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const requirement = document.getElementById("requirement").value;

    const message =
        "New Security Enquiry\n\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Email: " + email + "\n" +
        "Requirement: " + requirement;

    const whatsappNumber = "917800047970";

    const url = "https://wa.me/" + whatsappNumber +
                "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});

// Logo popup
const logoImage = document.getElementById("logoImage");
const logoModal = document.getElementById("logoModal");
const logoClose = document.querySelector(".logo-close");

logoImage.addEventListener("click", function () {
    logoModal.style.display = "flex";
});

logoClose.addEventListener("click", function () {
    logoModal.style.display = "none";
});

logoModal.addEventListener("click", function (e) {
    if (e.target === logoModal) {
        logoModal.style.display = "none";
    }
});

/* =========================================
   SECURITY GUARD SLIDESHOW
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelector(".guard-slides");
    const dots = document.querySelectorAll(".guard-dot");
    const nextBtn = document.querySelector(".guard-next");
    const prevBtn = document.querySelector(".guard-prev");

    if (!slides) return;

    let currentSlide = 0;
    const totalSlides = 5;

    function showGuardSlide(index) {

        currentSlide = (index + totalSlides) % totalSlides;

        slides.style.transform =
            `translateX(-${currentSlide * 20}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentSlide
            );
        });
    }

    function nextGuardSlide() {
        showGuardSlide(currentSlide + 1);
    }

    function previousGuardSlide() {
        showGuardSlide(currentSlide - 1);
    }

    nextBtn.addEventListener("click", nextGuardSlide);
    prevBtn.addEventListener("click", previousGuardSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showGuardSlide(index);
        });
    });

    /* Automatic slideshow
       Every 5 seconds */

    let autoSlide = setInterval(
        nextGuardSlide,
        5000
    );

    /* Restart timer when user clicks */

    function resetTimer() {
        clearInterval(autoSlide);

        autoSlide = setInterval(
            nextGuardSlide,
            5000
        );
    }

    nextBtn.addEventListener("click", resetTimer);
    prevBtn.addEventListener("click", resetTimer);

    dots.forEach(dot => {
        dot.addEventListener("click", resetTimer);
    });

});