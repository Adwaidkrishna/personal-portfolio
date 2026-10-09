import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Full Stack', 'Real-Time', 'Frontend', 'Backend'];

    const featuredProjects = [
        {
            id: 'supportdesk',
            categories: ['All', 'Full Stack', 'Real-Time', 'Backend'],
            brandLetter: 'S',
            brandBg: '#059669', // Emerald green
            name: 'SupportDesk',
            badge: 'Featured',
            title: 'SupportDesk – Real-Time Support Platform',
            description: 'A full-stack customer support platform featuring role-based ticket management, real-time chat, WebRTC audio/video calls and screen sharing, and automated SLA monitoring.',
            features: [
                {
                    label: 'Real-Time Chat',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    )
                },
                {
                    label: 'WebRTC Calls',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                    )
                },
                {
                    label: 'SLA Monitoring',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    )
                },
                {
                    label: 'Role-Based Access',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    )
                },
                {
                    label: 'Ticket Management',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                    )
                },
                {
                    label: 'Concurrent Assignment',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    )
                }
            ],
            demoUrl: null, // Avoid duplicate link; genuine live demo is not yet deployed
            githubUrl: 'https://github.com/Adwaidkrishna/SupportDesk',
            githubLabel: 'View Source Code',
            techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'JWT', 'Tailwind CSS'],
            highlights: [
                'Designed a layered MVC backend with 30+ REST API endpoints',
                'Implemented atomic ticket assignment to prevent multiple agents from claiming the same ticket',
                'Built real-time ticket messaging and WebRTC-based communication',
                'Developed priority-based SLA monitoring and deadline alerts'
            ]
        },
        {
            id: 'urbantiq',
            categories: ['All', 'Full Stack', 'Backend'],
            brandLetter: 'U',
            brandBg: '#d97706', // Amber gold
            name: 'URBANIQ',
            badge: 'Featured',
            title: 'URBANIQ – eCommerce & Inventory Platform',
            description: "A full-stack men's fashion e-commerce platform featuring product management, secure payments, order processing, and inventory management with purchase and batch tracking.",
            features: [
                {
                    label: 'Product Management',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    )
                },
                {
                    label: 'Inventory & FIFO',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    )
                },
                {
                    label: 'Razorpay Payments',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                    )
                },
                {
                    label: 'Admin Dashboard',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="9" rx="1"></rect>
                            <rect x="14" y="3" width="7" height="5" rx="1"></rect>
                            <rect x="14" y="12" width="7" height="9" rx="1"></rect>
                            <rect x="3" y="16" width="7" height="5" rx="1"></rect>
                        </svg>
                    )
                },
                {
                    label: 'Order Management',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    )
                },
                {
                    label: 'Wallet & Coupons',
                    icon: (
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                    )
                }
            ],
            demoUrl: 'https://urbantiq.store/',
            demoLabel: 'Live Demo',
            githubUrl: 'https://github.com/Adwaidkrishna/urbantiq',
            githubLabel: 'GitHub',
            techStack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'AWS EC2', 'Nginx', 'PM2'],
            highlights: [
                'Implemented FIFO inventory deduction across purchase batches with stock validation during checkout',
                'Integrated Razorpay payments with secure server-side verification and order processing',
                'Built an automated order lifecycle state machine with PDF invoice generation',
                'Deployed the application on AWS EC2 using PM2 process management, Nginx reverse proxy, and HTTPS'
            ]
        }
    ];

    const secondaryProjects = [
        {
            id: 'backend-auth',
            categories: ['All', 'Backend'],
            icon: (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            ),
            iconBg: '#2563eb', // Blue square
            title: 'Backend Auth System',
            description: 'A backend authentication system featuring JWT-based authentication, bcrypt password hashing, and input validation, built with Node.js, Express.js, and MongoDB.',
            githubUrl: 'https://github.com/Adwaidkrishna/badge-task',
            techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt']
        },
        {
            id: 'netflix-clone',
            categories: ['All', 'Frontend'],
            brandLetter: 'N',
            iconBg: '#dc2626', // Red square
            title: 'Netflix UI Clone',
            description: "A responsive recreation of Netflix's landing and login pages using HTML, CSS, and Bootstrap, with interactive modal components and responsive layouts.",
            githubUrl: 'https://github.com/Adwaidkrishna/netflix',
            techStack: ['HTML', 'CSS', 'Bootstrap']
        }
    ];

    const visibleFeatured = featuredProjects.filter(p => p.categories.includes(activeFilter));
    const visibleSecondary = secondaryProjects.filter(p => p.categories.includes(activeFilter));

    return (
        <section id="projects" className="projects-section">
            {/* Header with Kicker, Heading, Subtitle, and Filter Tabs */}
            <div className="projects-header-block">
                <div className="projects-header-left">
                    <span className="projects-kicker">PROJECTS</span>
                    <h2 className="projects-heading">Featured Projects</h2>
                    <p className="projects-subtitle">
                        Full-stack applications demonstrating my development skills, architecture decisions, and real-world problem-solving.
                    </p>
                </div>

                <div className="projects-filter-bar" role="tablist" aria-label="Project category filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            role="tab"
                            aria-selected={activeFilter === filter}
                            className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Projects Cards */}
            <div className="fp-cards-list">
                {visibleFeatured.map((project) => (
                    <article key={project.id} className="fp-card">
                        {/* Left Column: Brand, Title, Description, Feature Badges */}
                        <div className="fp-col-left">
                            <div className="fp-brand-row">
                                <div className="fp-brand-icon" style={{ backgroundColor: project.brandBg }}>
                                    {project.brandLetter}
                                </div>
                                <span className="fp-brand-name">{project.name}</span>
                                <span className="fp-featured-badge">{project.badge}</span>
                            </div>

                            <h3 className="fp-title">{project.title}</h3>
                            <p className="fp-description">{project.description}</p>

                            <div className="fp-features-grid">
                                {project.features.map((feat, idx) => (
                                    <div key={idx} className="fp-feature-pill">
                                        <span className="fp-feat-icon">{feat.icon}</span>
                                        <span className="fp-feat-label">{feat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Actions, Tech Stack, Key Highlights */}
                        <div className="fp-col-right">
                            <div className="fp-actions-row">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fp-btn-demo"
                                    >
                                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        {project.demoLabel || 'Live Demo'}
                                    </a>
                                )}

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fp-btn-github"
                                >
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                    {project.githubLabel || 'GitHub'}
                                </a>
                            </div>

                            {/* Tech Stack */}
                            <div className="fp-meta-block">
                                <span className="fp-section-label">TECH STACK</span>
                                <div className="fp-tech-pills">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="fp-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Highlights (4 Verified Technical Highlights) */}
                            <div className="fp-meta-block">
                                <span className="fp-section-label">KEY TECHNICAL HIGHLIGHTS</span>
                                <ul className="fp-highlights-list">
                                    {project.highlights.map((hl, idx) => (
                                        <li key={idx} className="fp-highlight-item">
                                            <span className="fp-check-bubble">
                                                <svg viewBox="0 0 16 16" width="9" height="9" fill="currentColor">
                                                    <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"></path>
                                                </svg>
                                            </span>
                                            <span>{hl}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Other Projects Section Header */}
            {visibleSecondary.length > 0 && (
                <div className="sec-projects-header">
                    <h3 className="sec-projects-heading">Other Projects</h3>
                </div>
            )}

            {/* Secondary Projects Row (Bottom 2-column grid) */}
            {visibleSecondary.length > 0 && (
                <div className="sec-projects-row">
                    {visibleSecondary.map((proj) => (
                        <div key={proj.id} className="sec-project-card-mini">
                            <div className="sec-top-line">
                                <div className="sec-icon-box" style={{ backgroundColor: proj.iconBg }}>
                                    {proj.brandLetter ? (
                                        <span className="sec-letter-bold">{proj.brandLetter}</span>
                                    ) : (
                                        proj.icon
                                    )}
                                </div>
                                <div className="sec-title-wrap">
                                    <h4 className="sec-title-mini">{proj.title}</h4>
                                </div>
                                <a
                                    href={proj.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sec-btn-github-mini"
                                >
                                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                    GitHub
                                </a>
                            </div>

                            <p className="sec-desc-mini">{proj.description}</p>

                            <div className="sec-pills-mini">
                                {proj.techStack.map((tech) => (
                                    <span key={tech} className="fp-tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;
