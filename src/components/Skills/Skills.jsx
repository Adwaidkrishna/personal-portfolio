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
                    <div className="skills-category-header">
                        <span className="category-dot dot-frontend"></span>
                        <h3 className="skills-category-title">Frontend</h3>
                    </div>
                    <div className="skills-list">
                        <div className="skill-pill skill-react">React</div>
                        <div className="skill-pill skill-html">HTML</div>
                        <div className="skill-pill skill-css">CSS</div>
                        <div className="skill-pill skill-bootstrap">Bootstrap</div>
                        <div className="skill-pill skill-tailwind">Tailwind CSS</div>
                    </div>
                </div>

                {/* Backend Column */}
                <div className="skills-column">
                    <div className="skills-category-header">
                        <span className="category-dot dot-backend"></span>
                        <h3 className="skills-category-title">Backend</h3>
                    </div>
                    <div className="skills-list">
                        <div className="skill-pill skill-node">Node.js</div>
                        <div className="skill-pill skill-express">Express.js</div>
                        <div className="skill-pill skill-jwt">JWT</div>
                        <div className="skill-pill skill-rest">REST API</div>
                    </div>
                </div>

                {/* Database Column */}
                <div className="skills-column">
                    <div className="skills-category-header">
                        <span className="category-dot dot-database"></span>
                        <h3 className="skills-category-title">Database</h3>
                    </div>
                    <div className="skills-list">
                        <div className="skill-pill skill-mongodb">MongoDB</div>
                        <div className="skill-pill skill-mongoose">Mongoose</div>
                    </div>
                </div>

                {/* Tools & Others Column */}
                <div className="skills-column wide-card">
                    <div className="skills-category-header">
                        <span className="category-dot dot-tools"></span>
                        <h3 className="skills-category-title">Tools & Others</h3>
                    </div>
                    <div className="skills-list">
                        <div className="skill-pill skill-git">Git</div>
                        <div className="skill-pill skill-github">GitHub</div>
                        <div className="skill-pill skill-aws">AWS EC2</div>
                        <div className="skill-pill skill-nginx">Nginx</div>
                        <div className="skill-pill skill-pm2">PM2</div>
                        <div className="skill-pill skill-postman">Postman</div>
                    </div>
                </div>

                {/* Programming Languages Column */}
                <div className="skills-column">
                    <div className="skills-category-header">
                        <span className="category-dot dot-languages"></span>
                        <h3 className="skills-category-title">Programming Languages</h3>
                    </div>
                    <div className="skills-list">
                        <div className="skill-pill skill-javascript">JavaScript</div>
                        <div className="skill-pill skill-python">Python</div>
                        <div className="skill-pill skill-cpp">C++</div>
                        <div className="skill-pill skill-java">Java</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
