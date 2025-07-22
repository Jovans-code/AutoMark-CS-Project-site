document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[action*='formspree']");
    if (form) {
form.addEventListener("submit", function (e) {
        alert("Thank you for subscribing! We'll keep you updated.");
        e.preventDefault(); // Prevent the default form submission
    });

// Dropdown toggle (optional for touch devices)
const dropdown = document.querySelector(".dropdown");
if (dropdown) {
    dropdown.addEventListener("click", function (e) {
    const content = this.querySelector(".dropdown-content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
        }
    }
    );
    }
});