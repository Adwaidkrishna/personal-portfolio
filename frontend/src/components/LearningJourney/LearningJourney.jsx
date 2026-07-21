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
                {/* Milestone 2: makBig Training */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot active-dot"></div>
                        <div className="marker-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <h3 className="journey-title">MERN Stack Development Trainee</h3>
                                <h4 className="institution-name">makBig</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">Oct 2025 – Present</span>
                                <span className="journey-location">Calicut, Kerala (On-site)</span>
                            </div>
                        </div>

                        <p className="journey-card-intro">
                            Engaged in an intensive, full-time training program simulating a professional IT workplace environment.
                        </p>

                        <ul className="journey-details-list">
                            <li>Acquired strong foundations in the MERN Stack (MongoDB, Express.js, React, Node.js) through hands-on projects and guided mentorship.</li>
                            <li>Built clean, responsive web user interfaces and integrated them with custom RESTful backend APIs.</li>
                            <li>Designed database schemas, managed state lifecycles, and debugged full-stack application flows.</li>
                        </ul>

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

                {/* Milestone 1: EEE Diploma */}
                <div className="timeline-item">
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <div className="marker-line empty-line"></div>
                    </div>
                    
                    <div className="timeline-content">
                        <div className="journey-card-header">
                            <div>
                                <h3 className="journey-title">Diploma in Electrical & Electronics Engineering</h3>
                                <h4 className="institution-name">Model Polytechnic College, Vadakara</h4>
                            </div>
                            <div className="journey-meta">
                                <span className="journey-duration">Jul 2021 – May 2024</span>
                                <span className="journey-location">Vadagara, Kerala</span>
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
