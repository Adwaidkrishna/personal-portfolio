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
                        <p className="about-card-subtitle">Vadakara Model Polytechnic College</p>
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

                {/* Certification Card */}
                <div className="about-info-card">
                    <div className="about-card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <div className="about-card-content">
                        <span className="about-card-label">Certification</span>
                        <h4 className="about-card-title">MERN Stack Development</h4>
                        <p className="about-card-subtitle">Catalyst Tech Hub</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
