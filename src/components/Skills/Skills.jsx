import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-header">
                <h2 className="skills-heading">Skills</h2>
                <div className="skills-underline"></div>
            </div>

            <div className="skills-container">
                {/* Frontend Column */}
                <div className="skills-column">
                    <h3 className="skills-category-title">Frontend</h3>
                    <div className="skills-list">
                        <div className="skill-pill">React</div>
                        <div className="skill-pill">HTML</div>
                        <div className="skill-pill">CSS</div>
                        <div className="skill-pill">Bootstrap</div>
                        <div className="skill-pill">Tailwind CSS</div>
                    </div>
                </div>

                {/* Backend Column */}
                <div className="skills-column">
                    <h3 className="skills-category-title">Backend</h3>
                    <div className="skills-list">
                        <div className="skill-pill">Node.js</div>
                        <div className="skill-pill">Express.js</div>
                        <div className="skill-pill">JWT</div>
                        <div className="skill-pill">REST API</div>
                    </div>
                </div>

                {/* Database Column */}
                <div className="skills-column">
                    <h3 className="skills-category-title">Database</h3>
                    <div className="skills-list">
                        <div className="skill-pill">MongoDB</div>
                        <div className="skill-pill">Mongoose</div>
                    </div>
                </div>

                {/* Tools & Others Column */}
                <div className="skills-column wide-card">
                    <h3 className="skills-category-title">Tools & Others</h3>
                    <div className="skills-list">
                        <div className="skill-pill">Git</div>
                        <div className="skill-pill">GitHub</div>
                        <div className="skill-pill">AWS EC2</div>
                        <div className="skill-pill">Nginx</div>
                        <div className="skill-pill">PM2</div>
                        <div className="skill-pill">Postman</div>
                    </div>
                </div>

                {/* Programming Languages Column */}
                <div className="skills-column">
                    <h3 className="skills-category-title">Programming Languages</h3>
                    <div className="skills-list">
                        <div className="skill-pill">JavaScript</div>
                        <div className="skill-pill">Python</div>
                        <div className="skill-pill">C++</div>
                        <div className="skill-pill">Java</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
