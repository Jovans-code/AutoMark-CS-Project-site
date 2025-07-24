document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const form = document.querySelector("form[action*='formspree']");
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you for subscribing! We'll keep you updated.");
        });
    }

    // Menu toggle handlers (consolidated all versions)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            
            // Update aria-expanded for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle hamburger animation if exists
            if (hamburger) {
                hamburger.classList.toggle('active');
            }
        });
    }

    // Handle separate hamburger/navList if they exist
    if (hamburger && navList && (!menuToggle || !navMenu)) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Dropdown toggle handler
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function() {
            const content = this.querySelector('.dropdown-content');
            if (content) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});