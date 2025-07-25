document.addEventListener('DOMContentLoaded', function () {
    // Form submission handler
    const form = document.querySelector("form[action*='formspree']");
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Thank you for subscribing! We'll keep you updated.");
            form.reset(); // Added to reset the form after submission
        });
    }

    // Menu toggle handlers
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            navMenu.classList.toggle('show');
            this.setAttribute('aria-expanded', !isExpanded);
            if (hamburger) {
                hamburger.classList.toggle('active');
            }
        });
    }

    if (hamburger && navList && (!menuToggle || !navMenu)) {
        hamburger.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.classList.toggle('active');
            navList.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Dropdown toggle handler
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event bubbling
            const content = this.querySelector('.dropdown-content');
            if (content) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function() {
            const content = dropdown.querySelector('.dropdown-content');
            if (content) {
                content.style.display = 'none';
            }
        });
    }

    // Slideshow
    let slideIndex = 0;
    let slideInterval; // Store interval for clearing later
    
    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
        
        // Wrap around if at end
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            if (dots[i]) {
                dots[i].classList.remove("active");
            }
        }
        
        // Show current slide
        if (slides[slideIndex]) {
            slides[slideIndex].style.display = "block";
            if (dots[slideIndex]) {
                dots[slideIndex].classList.add("active");
            }
        }
    }
    
    function startSlideshow() {
        clearInterval(slideInterval); // Clear any existing interval
        slideInterval = setInterval(() => {
            slideIndex++;
            showSlides();
        }, 3500);
    }
    
    // Initialize slideshow
    showSlides();
    startSlideshow();

    window.plusSlides = function (n) {
        slideIndex += n;
        showSlides();
        startSlideshow(); // Restart timer after manual navigation
    };

    window.currentSlide = function (n) {
        slideIndex = n - 1;
        showSlides();
        startSlideshow(); // Restart timer after manual navigation
    };

    // Image modal logic
    const modal = document.getElementById("imgModal");
    if (modal) {
        const modalImg = document.getElementById("modal-img");
        const captionText = document.getElementById("caption");

        document.querySelectorAll('.slide-card img').forEach(img => {
            img.addEventListener('click', () => {
                if (modalImg) modalImg.src = img.src;
                if (captionText) captionText.innerHTML = img.alt || "";
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
            });
        });

        window.closeModal = function () {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restore scrolling
        };

        // Close modal on outside click or ESC key
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape" && modal.style.display === "block") {
                closeModal();
            }
        });
    }
});