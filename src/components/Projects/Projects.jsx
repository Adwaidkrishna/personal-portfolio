import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <div className="projects-title-container">
                    <h2 className="projects-heading">Featured Project</h2>
                    <div className="projects-underline"></div>
                </div>
                <a href="https://urbantiq.store/" target="_blank" rel="noopener noreferrer" className="view-all-link">
                    View all projects <span className="arrow">→</span>
                </a>
            </div>

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
                                <div className="db-nav-item">
                                    <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="20" x2="18" y2="10"></line>
                                        <line x1="12" y1="20" x2="12" y2="4"></line>
                                        <line x1="6" y1="20" x2="6" y2="14"></line>
                                    </svg>
                                    <span>Reports</span>
                                </div>
                                <div className="db-nav-item">
                                    <svg className="db-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                    </svg>
                                    <span>Settings</span>
                                </div>
                            </nav>
                        </div>

                        {/* Main dashboard content */}
                        <div className="db-main">
                            {/* Top header bar */}
                            <div className="db-header">
                                <span className="db-title">Dashboard</span>
                                <div className="db-header-actions">
                                    <div className="db-search">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                    <div className="db-notif">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg>
                                    </div>
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
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="order-id">#ORD-0012</td>
                                                <td>John Doe</td>
                                                <td>₹2,499</td>
                                                <td>12 May 2024</td>
                                                <td><span className="badge badge-delivered">Delivered</span></td>
                                            </tr>
                                            <tr>
                                                <td className="order-id">#ORD-0011</td>
                                                <td>Robert Fox</td>
                                                <td>₹1,799</td>
                                                <td>11 May 2024</td>
                                                <td><span className="badge badge-shipped">Shipped</span></td>
                                            </tr>
                                            <tr>
                                                <td className="order-id">#ORD-0010</td>
                                                <td>Albert Flores</td>
                                                <td>₹2,199</td>
                                                <td>10 May 2024</td>
                                                <td><span className="badge badge-processing">Processing</span></td>
                                            </tr>
                                            <tr>
                                                <td className="order-id">#ORD-0009</td>
                                                <td>Brooklyn Simmons</td>
                                                <td>₹2,099</td>
                                                <td>09 May 2024</td>
                                                <td><span className="badge badge-delivered">Delivered</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Project Details */}
                <div className="project-details">
                    <h3 className="project-title">URBANIQ – eCommerce Platform</h3>
                    <p className="project-description">
                        A full-stack eCommerce platform for men's fashion with advanced inventory management, secure payments, and admin dashboard.
                    </p>

                    {/* Features list - 2 columns */}
                    <div className="project-features-grid">
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>JWT Authentication & Google Login</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Admin Dashboard</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Razorpay Payment Integration</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Order Tracking</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Wallet System</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>FIFO Stock Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>Advanced Inventory Management</span>
                        </div>
                        <div className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>AWS Deployment</span>
                        </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="project-tech-list">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Express.js</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">Razorpay</span>
                        <span className="tech-tag">AWS</span>
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
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-github">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="btn-icon">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
