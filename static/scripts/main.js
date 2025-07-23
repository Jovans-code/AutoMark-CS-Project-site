document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const form = document.querySelector("form[action*='formspree']");
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for subscribing! We'll keep you updated.");
        });
    }

    // Dropdown toggle handler
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function() {
            const content = this.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Mobile menu toggle handler
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
});