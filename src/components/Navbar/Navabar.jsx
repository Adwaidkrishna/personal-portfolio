import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* Brand Name */}
                <a href="#" className="brand-link">
                    <span className="brand-name">Adwaid Krishna</span>
                </a>

                {/* CSS-Only Mobile Menu Toggle */}
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger-btn" aria-label="Toggle Navigation Menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </label>

                {/* Center Links */}
                <nav className="nav-menu">
                    <a href="#about" className="nav-menu-item active">About</a>
                    <a href="#projects" className="nav-menu-item">Projects</a>
                    <a href="#skills" className="nav-menu-item">Skills</a>
                    <a href="#experience" className="nav-menu-item">Experience</a>
                    <a href="#contact" className="nav-menu-item">Contact</a>
                </nav>

                {/* Right Actions */}
                <div className="header-actions">
                    {/* Theme Toggle Icon (Sun) */}
                    <button className="theme-toggle-btn" aria-label="Toggle Theme">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </button>

                    {/* WhatsApp Contact Button */}
                    <a href="https://wa.me/916238937357" target="_blank" rel="noopener noreferrer" className="whatsapp-contact-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="whatsapp-icon">
                            <path d="M12.031 2C6.49 2 2 6.49 2 12.03c0 1.91.5 3.7 1.48 5.27L2 22l4.89-1.28c1.51.82 3.23 1.3 5.09 1.3 5.54 0 10.03-4.49 10.03-10.03S17.57 2 12.031 2zm0 18.06c-1.63 0-3.23-.42-4.63-1.23l-.33-.2-3.44.9.92-3.35-.22-.35A8.04 8.04 0 0 1 3.97 12c0-4.44 3.61-8.06 8.06-8.06s8.06 3.62 8.06 8.06-3.62 8.06-8.06 8.06zm4.63-6.33c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.12-.57.13-.17.25-.66.83-.81.99-.15.17-.3.19-.55.07-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.5-.42-.42-.57-.43h-.49c-.17 0-.45.06-.68.31-.23.25-.89.87-.89 2.12s.91 2.47 1.03 2.63c.13.17 1.79 2.73 4.33 3.82.6.26 1.08.41 1.45.53.61.19 1.17.17 1.61.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.11-.22-.17-.47-.3z"/>
                        </svg>
                        <span>Contact WhatsApp</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;