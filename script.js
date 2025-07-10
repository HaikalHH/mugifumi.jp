// Load hero background images dynamically
function loadHeroImages() {
    const heroImages = [
        { element: '.hero-top', src: 'assets/hero-main.png' },
        { element: '.hero-bottom', src: 'assets/hero-bottom.png' }
    ];
    
    // Load middle container image separately
    const middleImage = new Image();
    middleImage.onload = function() {
        const middleContainer = document.querySelector('.hero-middle-image');
        if (middleContainer) {
            middleContainer.classList.add('image-loaded');
            console.log('Middle container image loaded: assets/hero-middle.png');
        }
    };
    middleImage.onerror = function() {
        console.log('Middle container image not found: assets/hero-middle.png - showing placeholder');
    };
    middleImage.src = 'assets/hero-middle.png';

    heroImages.forEach(({ element, src }) => {
        const img = new Image();
        img.onload = function() {
            const heroElement = document.querySelector(element);
            if (heroElement) {
                heroElement.style.backgroundImage = `url('${src}')`;
                heroElement.classList.add('image-loaded');
                console.log(`Background image loaded: ${src}`);
            }
        };
        img.onerror = function() {
            console.log(`Image not found: ${src} - using fallback color`);
            // Keep fallback background color
        };
        img.src = src;
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Load hero images first
    loadHeroImages();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Mohon isi semua field yang diperlukan.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Mohon masukkan email yang valid.');
                return;
            }
            
            // Simulate form submission
            alert('Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.');
            this.reset();
        });
    }
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Button interactions
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle specific button actions
            // VIEW MORE button functionality disabled for now
            // if (this.textContent.includes('VIEW MORE')) {
            //     document.querySelector('#history').scrollIntoView({
            //         behavior: 'smooth'
            //     });
            // } 
            if (this.textContent.includes('LEARN MORE')) {
                document.querySelector('#product').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('mobile-active');
            
            // Change hamburger icon
            if (navbar.classList.contains('mobile-active')) {
                hamburger.innerHTML = '✕';
            } else {
                hamburger.innerHTML = '☰';
            }
        });
        
        // Close menu when clicking nav links
        const navLinks = navbar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('mobile-active');
                hamburger.innerHTML = '☰';
            });
        });
        
        // Close menu on window resize if desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navbar.classList.remove('mobile-active');
                hamburger.innerHTML = '☰';
            }
        });
    }
}); 