import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <div className="projects-title-container">
                    <h2 className="projects-heading">Featured Projects</h2>
                    <div className="projects-underline"></div>
                </div>
                <a href="https://github.com/Adwaidkrishna" target="_blank" rel="noopener noreferrer" className="view-all-link">
                    View all projects on GitHub <span className="arrow">→</span>
                </a>
            </div>

            <div className="featured-projects-container">
                {/* Featured Project 1: URBANIQ Technical Case Study */}
                <div className="project-card">
                    {/* Left Column: CSS-based Dashboard Mockup */}
                    <div className="project-mockup-container">
                        <div className="dashboard-mockup">
                            {/* Sidebar */}
                            <div className="db-sidebar">
                                <div className="db-logo">
                                    <div className="logo-icon">U</div>
                                    <span className="logo-text">URBANIQ</span>
                                </div>
                                <nav className="db-nav">
                                    <div className="db-nav-item active">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="7" height="9" rx="1"></rect>
                                            <rect x="14" y="3" width="7" height="5" rx="1"></rect>
                                            <rect x="14" y="12" width="7" height="9" rx="1"></rect>
                                            <rect x="3" y="16" width="7" height="5" rx="1"></rect>
                                        </svg>
                                        <span>Dashboard</span>
                                    </div>
                                    <div className="db-nav-item">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg>
                                        <span>Products</span>
                                    </div>
                                    <div className="db-nav-item">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        <span>Orders</span>
                                    </div>
                                    <div className="db-nav-item">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <span>Customers</span>
                                    </div>
                                    <div className="db-nav-item">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                        </svg>
                                        <span>Inventory</span>
                                    </div>
                                    <div className="db-nav-item">
                                        <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                        <span>Transactions</span>
                                    </div>
                                </nav>
                            </div>

                            {/* Main dashboard content */}
                            <div className="db-main">
                                {/* Top header bar with prominent Demo Data indicator */}
                                <div className="db-header">
                                    <div className="db-title-container">
                                        <span className="db-title">Dashboard</span>
                                        <span className="demo-badge">Demo Data</span>
                                    </div>
                                    <div className="db-header-actions">
                                        <div className="db-avatar">
                                            <span>A</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stat cards grid */}
                                <div className="db-stats-grid">
                                    <div className="db-stat-card">
                                        <span className="stat-label">Total Orders</span>
                                        <span className="stat-value">1,248</span>
                                    </div>
                                    <div className="db-stat-card">
                                        <span className="stat-label">Total Revenue</span>
                                        <span className="stat-value">₹12,45,000</span>
                                    </div>
                                    <div className="db-stat-card">
                                        <span className="stat-label">Total Customers</span>
                                        <span className="stat-value">932</span>
                                    </div>
                                    <div className="db-stat-card">
                                        <span className="stat-label">Products</span>
                                        <span className="stat-value">360</span>
                                    </div>
                                </div>

                                {/* Recent Orders Table */}
                                <div className="db-table-container">
                                    <div className="table-header">Recent Orders</div>
                                    <div className="db-table-wrapper">
                                        <table className="db-table">
                                            <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Customer</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="order-id">#ORD-0012</td>
                                                    <td>John Doe</td>
                                                    <td>₹2,499</td>
                                                    <td><span className="badge badge-delivered">Delivered</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="order-id">#ORD-0011</td>
                                                    <td>Robert Fox</td>
                                                    <td>₹1,799</td>
                                                    <td><span className="badge badge-shipped">Shipped</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="order-id">#ORD-0010</td>
                                                    <td>Albert Flores</td>
                                                    <td>₹2,199</td>
                                                    <td><span className="badge badge-processing">Processing</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Project Case Study Details */}
                    <div className="project-details">
                        <span className="project-type-badge">Technical Case Study</span>
                        <h3 className="project-title">URBANIQ – eCommerce & Inventory Platform</h3>
                        <p className="project-description">
                            A production-grade full-stack eCommerce application engineered for end-to-end shopping workflows, real-time stock validation, secure payments, and role-based administration.
                        </p>

                        {/* Engineering Case Study Challenge & Solution */}
                        <div className="eng-case-study-box">
                            <div className="eng-box-title">
                                <span>⚡</span> Key Engineering Challenge Solved
                            </div>
                            <p className="eng-box-content">
                                <strong>Concurrency & Stock Integrity:</strong> Solved race conditions and potential overselling during high-traffic checkout by implementing atomic MongoDB updates (conditional <code>$inc</code> validation) and Razorpay webhook idempotency keys to ensure zero double-booking.
                            </p>
                        </div>

                        {/* Features list - 2 columns */}
                        <div className="project-features-grid">
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>JWT Auth & Google OAuth (RBAC)</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Admin Management Dashboard</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Razorpay Live Payments & Wallet</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Real-Time Order Lifecycle Tracking</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>FIFO Inventory & Stock Validation</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>AWS EC2, Nginx & PM2 Deployment</span>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div className="project-tech-list">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Express.js</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">Razorpay</span>
                            <span className="tech-tag">AWS EC2</span>
                            <span className="tech-tag">Nginx</span>
                        </div>

                        {/* Action buttons */}
                        <div className="project-actions">
                            <a href="https://urbantiq.store/" target="_blank" rel="noopener noreferrer" className="btn-demo">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Live Demo
                            </a>
                            <a href="https://github.com/Adwaidkrishna/urbantiq" target="_blank" rel="noopener noreferrer" className="btn-github">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="btn-icon">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                                Case Study Repo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Featured Project 2: SupportDesk Real-Time System */}
                <div className="project-card supportdesk-card">
                    {/* Left Column: Polished SaaS SupportDesk Interface Mockup */}
                    <div className="project-mockup-container">
                        <div className="sd-saas-window" role="region" aria-label="SupportDesk Interface Demo">
                            {/* Top Bar */}
                            <div className="sd-topbar">
                                <div className="sd-topbar-left">
                                    <div className="sd-app-icon">
                                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <span className="sd-app-name">SupportDesk</span>
                                    <span className="sd-demo-tag">DEMO DATA</span>
                                </div>
                                <div className="sd-topbar-right">
                                    <div className="sd-agent-status" title="Agent Availability: Online">
                                        <span className="sd-status-dot"></span>
                                        <span>Agent Online</span>
                                    </div>
                                    <div className="sd-user-avatar" title="Logged in as Support Agent">AK</div>
                                </div>
                            </div>

                            {/* Main SaaS Workspace: 2-Pane Architecture */}
                            <div className="sd-workspace">
                                {/* Left Pane: Priority Ticket Queue */}
                                <div className="sd-queue-panel">
                                    <div className="sd-panel-head">
                                        <span className="sd-panel-title">Active Queue</span>
                                        <span className="sd-queue-indicator">3 Live</span>
                                    </div>
                                    <div className="sd-ticket-rows">
                                        {/* Ticket 1 (Active) */}
                                        <div className="sd-ticket-row active">
                                            <div className="sd-row-top">
                                                <span className="sd-tck-code">#TCK-1042</span>
                                                <span className="sd-badge sd-badge-p1">P1 Urgent</span>
                                            </div>
                                            <div className="sd-row-subject">Payment Webhook Retries</div>
                                            <div className="sd-row-meta">
                                                <span className="sd-status-label open">Open</span>
                                                <span className="sd-sla-time">SLA: 14m</span>
                                            </div>
                                        </div>

                                        {/* Ticket 2 */}
                                        <div className="sd-ticket-row">
                                            <div className="sd-row-top">
                                                <span className="sd-tck-code">#TCK-1039</span>
                                                <span className="sd-badge sd-badge-p2">P2 High</span>
                                            </div>
                                            <div className="sd-row-subject">Inventory Race Condition</div>
                                            <div className="sd-row-meta">
                                                <span className="sd-status-label progress">In Progress</span>
                                                <span className="sd-agent-name">Alex M.</span>
                                            </div>
                                        </div>

                                        {/* Ticket 3 */}
                                        <div className="sd-ticket-row">
                                            <div className="sd-row-top">
                                                <span className="sd-tck-code">#TCK-1036</span>
                                                <span className="sd-badge sd-badge-p3">Normal</span>
                                            </div>
                                            <div className="sd-row-subject">Session Auth Expiry</div>
                                            <div className="sd-row-meta">
                                                <span className="sd-status-label closed">Resolved</span>
                                                <span className="sd-agent-name">Adwaid</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Pane: Live Ticket Conversation & Controls */}
                                <div className="sd-chat-panel">
                                    <div className="sd-chat-header">
                                        <div className="sd-chat-title-wrap">
                                            <div className="sd-chat-ticket-id">#TCK-1042 · Marcus Vance</div>
                                            <div className="sd-chat-meta">Payment Gateway · SLA Target: 14m</div>
                                        </div>
                                        <div className="sd-realtime-badge">
                                            <span className="sd-live-pulse"></span>
                                            <span>Socket.IO Live</span>
                                        </div>
                                    </div>

                                    <div className="sd-messages-stream">
                                        <div className="sd-msg-group incoming">
                                            <div className="sd-msg-sender">Marcus V. <span className="sd-msg-time">10:41 AM</span></div>
                                            <div className="sd-bubble">
                                                Seeing 504 gateway timeouts on Razorpay retry webhook captures.
                                            </div>
                                        </div>

                                        <div className="sd-msg-group outgoing">
                                            <div className="sd-msg-sender">Adwaid (Agent) <span className="sd-msg-time">10:43 AM</span></div>
                                            <div className="sd-bubble">
                                                Race condition resolved in queue handler with idempotency locks. Patch live.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sd-composer-bar">
                                        <span className="sd-composer-placeholder">Reply to customer or leave note...</span>
                                        <button type="button" className="sd-send-btn" aria-label="Send Message" tabIndex={-1}>
                                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: SupportDesk Details */}
                    <div className="project-details">
                        <span className="project-type-badge badge-realtime">Real-Time System</span>
                        <h3 className="project-title">SupportDesk – Support & Escalation Platform</h3>
                        <p className="project-description">
                            A production-ready customer support platform engineered with bidirectional Socket.IO messaging, WebRTC peer-to-peer video/audio calls, and concurrency-safe ticket workflows.
                        </p>

                        {/* Engineering Case Study Highlight */}
                        <div className="eng-case-study-box">
                            <div className="eng-box-title">
                                <span>⚡</span> Key Architectural Highlight
                            </div>
                            <p className="eng-box-content">
                                <strong>Concurrency-Safe Queue & WebRTC:</strong> Implemented optimistic concurrency controls preventing multiple agents from claiming the same ticket, combined with WebRTC peer signaling for instant zero-latency customer screen diagnosis.
                            </p>
                        </div>

                        {/* Features list - 4 High Impact Points */}
                        <div className="project-features-grid">
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Customer, Agent & Admin Roles (RBAC)</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Real-Time Bi-Directional Socket.IO Chat</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>WebRTC Video Calling & Screen Sharing</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Concurrency-Safe Assignment Queue</span>
                            </div>
                        </div>

                        {/* Tech Pills */}
                        <div className="project-tech-list">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Express.js</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">Socket.IO</span>
                            <span className="tech-tag">WebRTC</span>
                        </div>

                        {/* Action buttons */}
                        <div className="project-actions">
                            <a href="https://github.com/Adwaidkrishna/SupportDesk" target="_blank" rel="noopener noreferrer" className="btn-demo">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Explore System
                            </a>
                            <a href="https://github.com/Adwaidkrishna/SupportDesk" target="_blank" rel="noopener noreferrer" className="btn-github">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="btn-icon">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Projects Section */}
            <div className="secondary-projects-header">
                <h3 className="secondary-projects-heading">Other Projects</h3>
            </div>
            
            <div className="secondary-projects-grid">
                {/* Backend Authentication System Project Card */}
                <div className="secondary-project-card">
                    <div className="sec-card-header">
                        <div className="sec-card-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h4 className="sec-project-title">Backend Auth System</h4>
                    </div>
                    
                    <p className="sec-project-description">
                        A secure backend authentication system implementing JWT token sessions, bcrypt password hashing, and input validation.
                    </p>
                    
                    <div className="sec-project-tech">
                        <span className="sec-tech-tag">Node.js</span>
                        <span className="sec-tech-tag">Express</span>
                        <span className="sec-tech-tag">MongoDB</span>
                        <span className="sec-tech-tag">JWT</span>
                        <span className="sec-tech-tag">Bcrypt</span>
                    </div>
                    
                    <div className="sec-project-actions">
                        <a href="https://github.com/Adwaidkrishna/badge-task" target="_blank" rel="noopener noreferrer" className="sec-btn-github">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="btn-icon">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            GitHub Repository
                        </a>
                    </div>
                </div>

                {/* Netflix Clone Project Card */}
                <div className="secondary-project-card">
                    <div className="sec-card-header">
                        <div className="sec-card-icon">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                                <line x1="7" y1="2" x2="7" y2="22"></line>
                                <line x1="17" y1="2" x2="17" y2="22"></line>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <line x1="2" y1="7" x2="7" y2="7"></line>
                                <line x1="2" y1="17" x2="7" y2="17"></line>
                                <line x1="17" y1="17" x2="22" y2="17"></line>
                                <line x1="17" y1="7" x2="22" y2="7"></line>
                            </svg>
                        </div>
                        <h4 className="sec-project-title">Netflix UI Clone</h4>
                    </div>
                    
                    <p className="sec-project-description">
                        A responsive static front-end clone of the Netflix landing and login pages built with clean HTML/CSS and Bootstrap.
                    </p>
                    
                    <div className="sec-project-tech">
                        <span className="sec-tech-tag">HTML</span>
                        <span className="sec-tech-tag">CSS</span>
                        <span className="sec-tech-tag">Bootstrap</span>
                    </div>
                    
                    <div className="sec-project-actions">
                        <a href="https://github.com/Adwaidkrishna/netflix" target="_blank" rel="noopener noreferrer" className="sec-btn-github">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="btn-icon">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            GitHub Repository
                        </a>
                    </div>
                </div>


            </div>

            {/* GitHub More Link Footer */}
            <div className="projects-footer">
                <a href="https://github.com/Adwaidkrishna" target="_blank" rel="noopener noreferrer" className="github-more-link">
                    More projects on GitHub <span className="arrow">→</span>
                </a>
            </div>
        </section>
    );
}

export default Projects;
