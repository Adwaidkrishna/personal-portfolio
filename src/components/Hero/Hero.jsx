import React from 'react';
import './Hero.css';

function Hero({ name, role, about }) {
    return (
        <section className="hero-section">
            {/* Left Content Column */}
            <div className="hero-left">
                {/* MERN Badge */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    <span>MERN Stack Developer</span>
                </div>

                {/* Typography */}
                <h1 className="hero-title">
                    Hi, I'm
                    <span className="text-accent">{name}.</span>
                </h1>
                
                <p className="hero-subtitle">
                    {about}
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span>View Projects</span>
                    </a>
                    <a href="#resume" className="btn-secondary">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>Download Resume</span>
                    </a>
                </div>

                {/* Social links */}
                <div className="hero-socials">
                    <span className="social-label">Connect with me</span>
                    <div className="social-links">
                        {/* GitHub */}
                        <a href="https://github.com" className="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" className="social-icon-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        {/* Gmail */}
                        <a href="mailto:ihyaet@gmail.com" className="social-icon-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column (Circular Photo & Floating Tech Cards) */}
            <div className="hero-right">
                <div className="ambient-glow"></div>
                <div className="profile-frame-wrapper">
                    {/* Background Dot grid */}
                    <div className="dots-grid"></div>

                    {/* Circular Image */}
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQ
                        sJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nz
                        c3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA7EAABAwIEAwUHAwMCBwAAAAABAAIDB
                        BEFEiExBkFREyJhcZEUMkJSgaHRI7HBFeHwYqIlM3KCktLx/8QAGgEAAQUBAAAAAAAAAAAAAAAABAABAgMFBv/EADARAAICAgAEBAQFBQEAAAAA
                        AAABAgMEEQUSITETQVFhIjJxgSMkM0KxBjSRwfAU/9oADAMBAAIRAxEAPwD0pCEKBUC7gbmnYPFcJ+iF5r9G3/hIdLbKDGIzFWyNtZpOYHrdVz1
                        p+I6XtaQTsGsXvf8ATzWYK5POo8K1+51mFYrKl7A3ZR6sqQNlErntaLuOgQiTb0g2L0xhg1Cn0+wWbkxyngLmyMlcdTdo/f8O/8ABmrxnEcSgkbk
                        sVdO6N8UsTnB7HAtdmLtCDY6L07hviWlxaF0MhEdXDpJG7n/AKh1CqypVwfiRjsKvsfJPfkelJUkfdYAlR8XpCWhN3AhCEy4IQhIQIQlTDghCEgC
                        iVd5AD0Cn7pjD/fHkd1AtsK6p9B219W0S4vE3K0eAQpT4t7p6/f1U4u2jC5a2jR4X/ZfwlE18dK500dTKP05mOIafFp3CqMQxSDh6gfUSnM46N
                        aPed4Lzavxipxad00riBfuxg3DR4LPysfw7VZB9jXwcnxaXD1PRMR4uw2jkMcbjI/mWDuhVdTxjhzomPhlc2Rx72duwv15rA1sTY5wAb33UeR/d
                        sW6HQLRjRvqURrrtZvsR4uw9lG90snZEjvP5HwCxT8cwbE6wNlhEbydJDob/ZUKs8D4a/r1HJV1LeG12gHxHkVfkxXh6aKsa183Vfsa9lq6WPL
                        lc4i2pXpPDmLNxagjk3ewZXeaw+GVsNZh8VZSOuxzTbqDyNupWp4XpvZKSVw94yG/oFiZ9SjZGUF1OhwexqUoz7GvY5KkicO7onVpY0udGKx5sV
                        +xfoUiFogwQhCQhUJEJDH//Z"
                        alt="Profile"
                        className="profile-circle"
                    />

                    {/* Floating Cards */}
                    {/* Node.js (Green Hexagon/Leaf representation) */}
                    <div className="tech-card card-node" title="Node.js">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                            <path fill="#339933" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/>
                        </svg>
                    </div>

                    {/* React (Cyan Atom) */}
                    <div className="tech-card card-react" title="React.js">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="#61DAFB" strokeWidth="2" fill="none">
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                        </svg>
                    </div>

                    {/* MongoDB (Green Leaf) */}
                    <div className="tech-card card-mongo" title="MongoDB">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="#47A248">
                            <path d="M12 2C11.5 2 7 6.5 7 12c0 3 2.5 5.5 5 7.5 2.5-2 5-4.5 5-7.5 0-5.5-4.5-10-5-10zm0 15c-1.5-1.2-3-2.8-3-5 0-3.3 2.2-6.2 3-7.2.8 1 3 3.9 3 7.2 0 2.2-1.5 3.8-3 5z"/>
                        </svg>
                    </div>

                    {/* Express.js ("ex" Text representation) */}
                    <div className="tech-card card-express" title="Express.js">
                        <span>ex</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;