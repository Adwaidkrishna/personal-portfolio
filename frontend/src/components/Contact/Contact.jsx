import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: null, message: '' });

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const cleanApiUrl = apiUrl.replace(/\/$/, '');
            const response = await fetch(`${cleanApiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({
                    loading: false,
                    success: true,
                    message: data.message || 'Message sent successfully! 🚀'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({
                    loading: false,
                    success: false,
                    message: data.message || 'Failed to send message.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({
                loading: false,
                success: false,
                message: 'Something went wrong. Please try again later.'
            });
        }
    };

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
                                <span className="card-value">Kozhikode, Kerala, India</span>
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
                        <a href="https://wa.me/916238937357" target="_blank" rel="noopener noreferrer" className="social-square-btn" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.62.962 3.21 1.6 5.421 1.61 5.429.002 9.841-4.41 9.843-9.842.002-2.63-1.012-5.101-2.858-6.95C17.208 2.115 14.733.987 12.1.987 6.678.987 2.27 5.393 2.268 10.82c-.001 2.203.576 4.358 1.67 6.257l-.995 3.637 3.714-.974zm12.352-7.142c-.29-.145-1.714-.847-1.979-.942-.266-.097-.459-.145-.653.146-.193.29-.749.942-.919 1.137-.169.193-.339.217-.629.072-2.825-1.413-4.662-3.128-5.46-4.498-.21-.362-.022-.558.158-.737.162-.162.339-.387.509-.58.17-.193.226-.33.339-.55.113-.217.056-.411-.028-.556-.085-.145-.653-1.57-.895-2.153-.235-.568-.475-.49-.653-.49-.17 0-.363-.01-.557-.01-.194 0-.509.072-.776.362-.266.29-1.018.995-1.018 2.428 0 1.433 1.042 2.818 1.188 3.012.146.193 2.051 3.13 4.969 4.387 2.918 1.258 2.918.839 3.451.79.533-.047 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.073-.12-.266-.194-.557-.34z"/>
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
                        <form className="contact-form-redesign" onSubmit={handleSubmit}>
                            <div className="form-row-redesign">
                                <div className="form-group-redesign">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder=" "
                                        className="form-input-redesign"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                    value={formData.subject}
                                    onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label htmlFor="message" className="form-label-redesign">Message</label>
                            </div>

                            <button type="submit" className="btn-send-message" disabled={status.loading}>
                                <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="send-msg-icon">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>

                            {status.message && (
                                <div className={`form-status-message ${status.success ? 'status-success' : 'status-error'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
