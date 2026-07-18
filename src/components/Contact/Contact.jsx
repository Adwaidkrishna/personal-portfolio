import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <h2 className="contact-heading">Contact</h2>
                <div className="contact-underline"></div>
            </div>

            <div className="contact-container">
                {/* Info Column */}
                <div className="contact-info">
                    <h3 className="info-title">Let's Connect</h3>
                    <p className="info-desc">
                        I am currently open to new opportunities, freelance projects, or collaborations. 
                        Feel free to drop a message, and I'll get back to you as soon as possible!
                    </p>

                    <div className="info-details">
                        <div className="info-item">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="info-text">
                                <span className="info-label">Email</span>
                                <a href="mailto:adwaidkrishna@example.com" className="info-value">adwaidkrishna@example.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="info-text">
                                <span className="info-label">Location</span>
                                <span className="info-value">Kerala, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Form Column */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                    className="form-input" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                    className="form-input" 
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                placeholder="Enter message subject" 
                                className="form-input" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                placeholder="Type your message here..." 
                                className="form-textarea" 
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit">
                            <span>Send Message</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="send-icon">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
