import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about-section">
            {/* Left Side: About Me text content */}
            <div className="about-intro-col">
                <h2 className="about-heading">About Me</h2>
                <div className="about-underline"></div>
                <p className="about-description">
                    I'm a passionate Full Stack Developer focused on building real-world web applications. 
                    I love solving problems, writing clean code, and learning new technologies.
                </p>
                <a href="#contact" className="about-link">
                    Know more about me <span>→</span>
                </a>
            </div>

            {/* Right Side: Three Cards */}
            <div className="about-card-col">
                {/* Education Card */}
                <div className="about-info-card">
                    <div className="about-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                        </svg>
                    </div>
                    <div className="about-card-content">
                        <span className="about-card-label">Education</span>
                        <h4 className="about-card-title">Diploma in Electrical & Electronics Engineering</h4>
                        <p className="about-card-subtitle">Vadagara Model Polytechnic College</p>
                    </div>
                </div>

                {/* Location Card */}
                <div className="about-info-card">
                    <div className="about-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </div>
                    <div className="about-card-content">
                        <span className="about-card-label">Location</span>
                        <h4 className="about-card-title">Kozhikode, Kerala, India</h4>
                    </div>
                </div>

                {/* Experience Card */}
                <div className="about-info-card">
                    <div className="about-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                            <path d="M8 14h2v2H8zm6 0h2v2h-2z"/>
                        </svg>
                    </div>
                    <div className="about-card-content">
                        <span className="about-card-label">Experience</span>
                        <h4 className="about-card-title">Fresher</h4>
                        <p className="about-card-subtitle">Open to Opportunities</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
