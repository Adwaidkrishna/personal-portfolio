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

                    {/* Resume Button */}
                    <a href="#" className="resume-download-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;