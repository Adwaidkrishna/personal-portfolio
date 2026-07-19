import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/* Left Column: Let's Work Together */}
                <div className="contact-left">
                    <h2 className="contact-main-heading">Let's Work Together</h2>
                    <p className="contact-subtext">
                        I am currently open to new opportunities, freelance projects, or collaborations. 
                        Feel free to drop a message, and I'll get back to you as soon as possible!
                    </p>

                    <div className="contact-cards-grid">
                        {/* Card 1: Email */}
                        <div className="contact-detail-card">
                            <div className="card-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-svg">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="card-content">
                                <span className="card-label">Email</span>
                                <a href="mailto:adwaidkrishna2@gmail.com" className="card-value">adwaidkrishna2@gmail.com</a>
                            </div>
                        </div>

                        {/* Card 2: Phone */}
                        <div className="contact-detail-card">
                            <div className="card-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-svg">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="card-content">
                                <span className="card-label">Phone</span>
                                <a href="tel:+916238937357" className="card-value">+91 62389 37357</a>
                            </div>
                        </div>

                        {/* Card 3: Location */}
                        <div className="contact-detail-card">
                            <div className="card-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="card-content">
                                <span className="card-label">Location</span>
                                <span className="card-value">Kerala, India</span>
                            </div>
                        </div>

                        {/* Card 4: Availability */}
                        <div className="contact-detail-card">
                            <div className="card-icon-wrapper">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-svg">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <div className="card-content">
                                <span className="card-label">Availability</span>
                                <span className="card-value status-highlight">Open for Opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Square Buttons */}
                    <div className="contact-social-buttons">
                        <a href="https://github.com/Adwaidkrishna" target="_blank" rel="noopener noreferrer" className="social-square-btn" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/adwaid-krishna" target="_blank" rel="noopener noreferrer" className="social-square-btn" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="social-square-btn" aria-label="LeetCode">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a3.75 3.75 0 0 0 0 5.304l3.194 3.194a3.75 3.75 0 0 0 5.304 0l7.162-7.163a1.373 1.373 0 1 0-1.94-1.94l-7.162 7.162a1.002 1.002 0 0 1-1.417 0l-3.193-3.193a1.002 1.002 0 0 1 0-1.417l9.777-9.777A1.372 1.372 0 0 0 13.483 0zm-1.077 4.757a1.375 1.375 0 0 0-.228.029 1.373 1.373 0 1 0 .228-.029zm1.884 1.884a1.375 1.375 0 0 0-.228.029 1.373 1.373 0 1 0 .228-.029z"/>
                            </svg>
                        </a>
                        <a href="mailto:adwaidkrishna2@gmail.com" className="social-square-btn" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: Modern Contact Form */}
                <div className="contact-right">
                    <div className="contact-glass-card">
                        <form className="contact-form-redesign" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row-redesign">
                                <div className="form-group-redesign">
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder=" " 
                                        className="form-input-redesign" 
                                    />
                                    <label htmlFor="name" className="form-label-redesign">Full Name</label>
                                </div>
                                <div className="form-group-redesign">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder=" " 
                                        className="form-input-redesign" 
                                    />
                                    <label htmlFor="email" className="form-label-redesign">Email Address</label>
                                </div>
                            </div>

                            <div className="form-group-redesign">
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    required 
                                    placeholder=" " 
                                    className="form-input-redesign" 
                                />
                                <label htmlFor="subject" className="form-label-redesign">Subject</label>
                            </div>

                            <div className="form-group-redesign">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    required 
                                    placeholder=" " 
                                    className="form-textarea-redesign"
                                ></textarea>
                                <label htmlFor="message" className="form-label-redesign">Message</label>
                            </div>

                            <button type="submit" className="btn-send-message">
                                <span>Send Message</span>
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="send-msg-icon">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
