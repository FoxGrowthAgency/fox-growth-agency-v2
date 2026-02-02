// Fox Growth Agency - Navigation Component

class FoxNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    transition: all 0.3s ease;
                }
                
                .nav-container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .nav-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 80px;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #0f172a;
                    text-decoration: none;
                    transition: transform 0.2s ease;
                }
                
                .logo:hover {
                    transform: scale(1.02);
                }
                
                .logo-icon {
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }
                
                .desktop-links {
                    display: none;
                    align-items: center;
                    gap: 2rem;
                }
                
                @media (min-width: 768px) {
                    .desktop-links {
                        display: flex;
                    }
                }
                
                .nav-link {
                    color: #475569;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.875rem;
                    transition: color 0.2s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #f97316;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #f97316;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .cta-button {
                    background: #0f172a;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                }
                
                .cta-button:hover {
                    background: #f97316;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
                }
                
                .mobile-menu-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    color: #0f172a;
                    padding: 0;
                }
                
                @media (min-width: 768px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }
                
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    max-width: 400px;
                    background: white;
                    z-index: 100;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-in-out;
                    box-shadow: -4px 0 24px rgba(0,0,0,0.1);
                }
                
                .mobile-menu-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                }
                
                .mobile-menu-close {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    color: #475569;
                }
                
                .mobile-menu-links {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .mobile-link {
                    color: #0f172a;
                    text-decoration: none;
                    font-size: 1.125rem;
                    font-weight: 600;
                    padding: 0.75rem 0;
                    border-bottom: 1px solid #f1f5f9;
                    transition: color 0.2s ease;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .mobile-link:hover {
                    color: #f97316;
                }
                
                .mobile-cta {
                    margin-top: 1.5rem;
                    background: #f97316;
                    color: white;
                    padding: 1rem;
                    border-radius: 12px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: 600;
                    display: block;
                }
                
                .overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 99;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <div class="nav-content">
                        <a href="#hero" class="logo">
                            <div class="logo-icon">
                                <img src="https://huggingface.co/spaces/FoxGrowthCharlie/fox-growth-agency/resolve/main/images/FoxGrowthBrand.png" alt="Fox Growth Agency" width="32" height="32" style="object-fit: contain;">
                            </div>
                            <span>Fox Growth Agency</span>
</a>
<div class="desktop-links">
                            <a href="#services" class="nav-link">Services</a>
                            <a href="#workflow" class="nav-link">Process</a>
                            <a href="#why-us" class="nav-link">Why Us</a>
                            <a href="#contact" class="cta-button">Get In Touch</a>
                        </div>
                        
                        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            
            <div class="overlay" id="overlay"></div>
            
            <div class="mobile-menu" id="mobileMenu">
                <div class="mobile-menu-header">
                    <span style="font-weight: 700; font-size: 1.125rem; color: #0f172a;">Menu</span>
                    <button class="mobile-menu-close" id="closeMobileMenu" aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                <div class="mobile-menu-links">
                    <a href="#services" class="mobile-link">
                        Services
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <a href="#workflow" class="mobile-link">
                        Process
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <a href="#audience" class="mobile-link">
                        Who It's For
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <a href="#why-us" class="mobile-link">
                        Why Us
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                    <a href="#contact" class="mobile-cta">Get In Touch</a>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
        const closeMobileMenu = this.shadowRoot.getElementById('closeMobileMenu');
        const mobileMenu = this.shadowRoot.getElementById('mobileMenu');
        const overlay = this.shadowRoot.getElementById('overlay');
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-link, .mobile-cta');

        const openMenu = () => {
            mobileMenu.style.transform = 'translateX(0)';
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.style.transform = 'translateX(100%)';
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileMenuBtn?.addEventListener('click', openMenu);
        closeMobileMenu?.addEventListener('click', closeMenu);
        overlay?.addEventListener('click', closeMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                closeMenu();
                
                // Smooth scroll after menu closes
                setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            });
        });
    }
}

customElements.define('fox-navbar', FoxNavbar);