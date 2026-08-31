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
                {/* Milestone 1: Future By Catalyst Internship */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot active-dot"></div>
                        <div className="marker-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <h3 className="journey-title">Full Stack Web Development Internship</h3>
                                <h4 className="institution-name">Future By Catalyst</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">11 Months Internship</span>
                                <span className="journey-location">Calicut, Kerala (On-site)</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Hands-on full-stack web development internship focusing on building production-grade web applications, API integrations, and database schemas.
                        </p>

                        <div className="journey-skills-container">
                            <span className="journey-skill-tag">React.js</span>
                            <span className="journey-skill-tag">Node.js</span>
                            <span className="journey-skill-tag">Express.js</span>
                            <span className="journey-skill-tag">MongoDB</span>
                            <span className="journey-skill-tag">JavaScript (ES6+)</span>
                            <span className="journey-skill-tag">HTML & CSS</span>
                            <span className="journey-skill-tag">Git & GitHub</span>
                        </div>
                    </div>
                </div>



                {/* Milestone 3: EEE Diploma */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line empty-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <h3 className="journey-title">Diploma in Electrical & Electronics Engineering</h3>
                                <h4 className="institution-name">Vadakara Model Polytechnic College</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">2021 – 2024</span>
                                <span className="journey-location">Vadakara, Kerala</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Developed strong logical thinking, engineering mathematics foundations, and analytical problem-solving skills during a 3-year technical education program.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearningJourney;
