// Fox Growth Agency - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Mobile menu functionality
    initMobileMenu();

    // Smooth scroll for anchor links
    initSmoothScroll();

    // Intersection Observer for scroll animations
    initScrollAnimations();

    // Form handling
    initContactForm();

    // Navbar scroll effect
    initNavbarScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMobileMenu');
    const mobileLinks = mobileMenu?.querySelectorAll('a');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        closeBtn?.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });

        // Close menu when clicking links
        mobileLinks?.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe elements with reveal class
    document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            if (!email || !isValidEmail(email)) {
                showError(emailInput, 'Please enter a valid email address');
                return;
            }

            // Show loading state
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<div class="spinner"></div><span class="ml-2">Sending...</span>';

            // Simulate API call (replace with actual endpoint)
            try {
                await submitForm(email);
                
                // Show success
                form.reset();
                successMessage.classList.remove('hidden');
                submitBtn.innerHTML = '<i data-feather="check" class="w-5 h-5"></i><span class="ml-2">Sent!</span>';
                feather.replace();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    successMessage.classList.add('hidden');
                    feather.replace();
                }, 3000);

            } catch (error) {
                console.error('Form submission error:', error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                showError(emailInput, 'Something went wrong. Please try again.');
            }
        });

        // Real-time validation
        emailInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(this);
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error state
function showError(input, message) {
    input.classList.add('error', 'border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20');
    input.classList.remove('border-slate-700', 'focus:border-fox-500', 'focus:ring-fox-500/20');
    
    // Remove existing error message if any
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-400 text-sm mt-2 text-left';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

// Clear error state
function clearError(input) {
    input.classList.remove('error', 'border-red-500', 'focus:border-red-500', 'focus:ring-red-500/20');
    input.classList.add('border-slate-700', 'focus:border-fox-500', 'focus:ring-fox-500/20');
    
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
}

// Form submission simulation
async function submitForm(email) {
    // In production, replace this with actual API call
    // Example: 
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ 
    //         email: email, 
    //         timestamp: new Date().toISOString(),
    //         source: 'Fox Growth Agency Website'
    //     })
    // });
    
    // For now, simulate network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', {
                email: email,
                timestamp: new Date().toISOString(),
                recipient: '[YOUR EMAIL HERE]'
            });
            resolve({ success: true });
        }, 1500);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const nav = document.querySelector('fox-navbar');
    if (!nav) return;

    const navContainer = nav.shadowRoot?.querySelector('nav');
    if (!navContainer) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navContainer.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
            navContainer.classList.remove('bg-transparent');
        } else {
            navContainer.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
            navContainer.classList.add('bg-transparent');
        }

        lastScroll = currentScroll;
    });
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle resize events
const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth >= 768 && mobileMenu) {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }
}, 250);

window.addEventListener('resize', handleResize);