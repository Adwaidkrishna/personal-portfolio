import React from 'react';
import './LearningJourney.css';

function LearningJourney() {
    return (
        <section id="learning-journey" className="journey-section">
            <div className="journey-header">
                <h2 className="journey-heading">Learning Journey</h2>
                <div className="journey-underline"></div>
            </div>

            <div className="journey-timeline">
                {/* Milestone 1: Professional Experience - Future By Catalyst */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot active-dot"></div>
                        <div className="marker-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <span className="journey-type-badge">Professional Experience</span>
                                <h3 className="journey-title">Full Stack Web Development Intern</h3>
                                <h4 className="institution-name">Future By Catalyst</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">11 Months Internship</span>
                                <span className="journey-location">Calicut, Kerala (On-site)</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Hands-on full-stack software development internship building production-grade web applications, RESTful API integrations, responsive interfaces, and database schemas.
                        </p>

                        <div className="journey-skills-container">
                            <span className="journey-skill-tag">React.js</span>
                            <span className="journey-skill-tag">Node.js</span>
                            <span className="journey-skill-tag">Express.js</span>
                            <span className="journey-skill-tag">MongoDB</span>
                            <span className="journey-skill-tag">JavaScript (ES6+)</span>
                            <span className="journey-skill-tag">REST APIs</span>
                            <span className="journey-skill-tag">Git & GitHub</span>
                        </div>
                    </div>
                </div>

                {/* Milestone 2: Technical Training - Catalyst Tech Hub */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <span className="journey-type-badge training-badge">Technical Training & Certification</span>
                                <h3 className="journey-title">MERN Stack Development</h3>
                                <h4 className="institution-name">Catalyst Tech Hub</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">Certified (2026)</span>
                                <span className="journey-location">Kerala</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Specialized project-driven training mastering modern scalable web architectures, asynchronous React flows, secure authentication protocols, and server deployment workflows.
                        </p>

                        <div className="journey-skills-container">
                            <span className="journey-skill-tag">MERN Stack</span>
                            <span className="journey-skill-tag">JWT & OAuth</span>
                            <span className="journey-skill-tag">AWS EC2 & Nginx</span>
                            <span className="journey-skill-tag">Postman</span>
                            <span className="journey-skill-tag">Clean Code Architecture</span>
                        </div>
                    </div>
                </div>

                {/* Milestone 3: Formal Technical Education - EEE Diploma */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line empty-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <span className="journey-type-badge edu-badge">Formal Education</span>
                                <h3 className="journey-title">Diploma in Electrical & Electronics Engineering</h3>
                                <h4 className="institution-name">Vadakara Model Polytechnic College</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">2021 – 2024</span>
                                <span className="journey-location">Vadakara, Kerala</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Developed core analytical problem-solving skills, engineering mathematics foundations, and systematic troubleshooting methodologies during a 3-year technical program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearningJourney;
