// Fox Growth Agency - Footer Component

class FoxFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                footer {
                    background: #0f172a;
                    color: white;
                    padding: 3rem 1rem 2rem;
                }
                
                .footer-container {
                    max-width: 1280px;
                    margin: 0 auto;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                @media (min-width: 768px) {
                    .footer-content {
                        grid-template-columns: 2fr 1fr 1fr;
                        gap: 4rem;
                    }
                }
                
                .brand-section {
                    max-width: 300px;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                    text-decoration: none;
                    margin-bottom: 1rem;
                }
                
                .logo-icon {
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .brand-description {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    background: #1e293b;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                
                .social-link:hover {
                    background: #f97316;
                    color: white;
                    transform: translateY(-2px);
                }
                
                .footer-section h4 {
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                    font-size: 0.875rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: #94a3b8;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.2s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .footer-link:hover {
                    color: #f97316;
                }
                
                .footer-bottom {
                    border-top: 1px solid #1e293b;
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    text-align: center;
                }
                
                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                        text-align: left;
                    }
                }
                
                .copyright {
                    color: #64748b;
                    font-size: 0.875rem;
                }
                
                .footer-meta {
                    display: flex;
                    gap: 1.5rem;
                    font-size: 0.875rem;
                }
                
                .footer-meta a {
                    color: #64748b;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                
                .footer-meta a:hover {
                    color: #f97316;
                }
            </style>
<footer>
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="brand-section">
                            <a href="#hero" class="logo">
                                <div class="logo-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 3c-4.5 0-8 3.5-8 8 0 5.25 8 10 8 10s8-4.75 8-10c0-4.5-3.5-8-8-8z"/>
                                        <circle cx="12" cy="11" r="2.5" fill="currentColor"/>
                                    </svg>
                                </div>
                                <span>Fox Growth Agency</span>
                            </a>
                            <p class="brand-description">
                                Turning long-form content into consistent short-form growth. Professional editing for creators, brands, and agencies.
                            </p>
                            <div class="social-links">
                                <a href="https://www.instagram.com/fox.growth.agency/" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
</div>
                        <div class="footer-section">
                            <h4>Company</h4>
                            <ul class="footer-links">
                                <li><a href="#services" class="footer-link">Services</a></li>
                                <li><a href="#workflow" class="footer-link">Process</a></li>
                                <li><a href="#why-us" class="footer-link">Why Us</a></li>
                                <li><a href="#store" class="footer-link">Store</a></li>
                                <li><a href="#contact" class="footer-link">Contact</a></li>
                            </ul>
                        </div>
<div class="footer-section">
                            <h4>Legal</h4>
                            <ul class="footer-links">
                                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                                <li><a href="#" class="footer-link">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p class="copyright">&copy; ${currentYear} Fox Growth Agency. All rights reserved.</p>
</div>
                </div>
            </footer>
        `;
    }
}

customElements.define('fox-footer', FoxFooter);