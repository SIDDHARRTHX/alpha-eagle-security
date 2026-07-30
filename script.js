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