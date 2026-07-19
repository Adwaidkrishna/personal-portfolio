import React from 'react';
import './Navbar.css';

function Navbar() {
    const closeMenu = () => {
        const checkbox = document.getElementById('menu-toggle');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

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
                    <a href="#about" className="nav-menu-item active" onClick={closeMenu}>About</a>
                    <a href="#projects" className="nav-menu-item" onClick={closeMenu}>Projects</a>
                    <a href="#skills" className="nav-menu-item" onClick={closeMenu}>Skills</a>
                    <a href="#experience" className="nav-menu-item" onClick={closeMenu}>Experience</a>
                    <a href="#contact" className="nav-menu-item" onClick={closeMenu}>Contact</a>
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

                    {/* Connect Me Button */}
                    <a href="#contact" className="connect-me-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="connect-icon">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>Connect Me</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;