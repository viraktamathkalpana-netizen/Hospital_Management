'use client';

import React, { useState } from 'react';
import styles from './dashboard.module.css';

// Reusable SVG Icons for a premium look without extra dependencies
const Icons = {
  Home: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Users: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Calendar: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  Activity: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Settings: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  LogOut: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>,
  Search: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>,
  Bell: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Message: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  TrendingUp: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  TrendingDown: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>,
  Heart: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  const navItems = [
    { name: 'Overview', icon: Icons.Home },
    { name: 'Patients', icon: Icons.Users },
    { name: 'Appointments', icon: Icons.Calendar },
    { name: 'Departments', icon: Icons.Activity },
    { name: 'Settings', icon: Icons.Settings },
  ];

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Icons.Heart />
          </div>
          <span className={styles.logoText}>MediCore</span>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`${styles.navItem} ${activeTab === item.name ? styles.active : ''}`}
              onClick={() => setActiveTab(item.name)}
            >
              <item.icon />
              <span>{item.name}</span>
            </div>
          ))}
          
          <div 
            className={`${styles.navItem} ${styles.logoutBtn}`}
            onClick={() => window.location.href = '/'}
          >
            <Icons.LogOut />
            <span>Sign Out</span>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.searchBar}>
            <Icons.Search />
            <input 
              type="text" 
              placeholder="Search patients, doctors or appointments..." 
              className={styles.searchInput} 
            />
          </div>

          <div className={styles.headerActions}>
            <button className={styles.iconBtn}>
              <Icons.Message />
              <span className={styles.badge}>3</span>
            </button>
            <button className={styles.iconBtn}>
              <Icons.Bell />
              <span className={styles.badge}>5</span>
            </button>
            
            <div className={styles.profile}>
              <div className={styles.avatar}>JD</div>
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>Dr. John Doe</span>
                <span className={styles.profileRole}>Chief Surgeon</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className={styles.dashboardContent}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Welcome back, Dr. Doe</h1>
            <p className={styles.pageSubtitle}>Here's an overview of your hospital operations today.</p>
          </div>

          {/* Statistics Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.iconBlue}`}>
                <Icons.Users />
              </div>
              <div className={styles.trendIndicator} style={{ color: '#15803d', background: '#dcfce7' }}>
                <Icons.TrendingUp /> 12%
              </div>
              <div className={styles.statValue}>1,482</div>
              <div className={styles.statTitle}>Total Patients</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.iconGreen}`}>
                <Icons.Calendar />
              </div>
              <div className={styles.trendIndicator} style={{ color: '#15803d', background: '#dcfce7' }}>
                <Icons.TrendingUp /> 8%
              </div>
              <div className={styles.statValue}>152</div>
              <div className={styles.statTitle}>Appointments Today</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.iconPurple}`}>
                <Icons.Activity />
              </div>
              <div className={styles.trendIndicator} style={{ color: '#b91c1c', background: '#fee2e2' }}>
                <Icons.TrendingDown /> 2%
              </div>
              <div className={styles.statValue}>18</div>
              <div className={styles.statTitle}>Available Doctors</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.iconOrange}`}>
                <Icons.Heart />
              </div>
              <div className={styles.trendIndicator} style={{ color: '#15803d', background: '#dcfce7' }}>
                <Icons.TrendingUp /> 24%
              </div>
              <div className={styles.statValue}>32</div>
              <div className={styles.statTitle}>Emergency Cases</div>
            </div>
          </div>

          {/* Main Grid: Upcoming Appointments & Recent Activity */}
          <div className={styles.mainGrid}>
            <div className={styles.glassPanel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Today's Appointments</h2>
                <button className={styles.actionBtn}>View All</button>
              </div>
              
              <div className={styles.appointmentList}>
                {[
                  { name: 'Sarah Jenkins', type: 'General Checkup', time: '09:00 AM', status: 'Completed', color: 'statusCompleted', initials: 'SJ', bg: '#fef3c7' },
                  { name: 'Michael Chen', type: 'Cardiology Consult', time: '10:30 AM', status: 'Upcoming', color: 'statusUpcoming', initials: 'MC', bg: '#e0e7ff' },
                  { name: 'Emma Watson', type: 'Dental Polish', time: '11:15 AM', status: 'Upcoming', color: 'statusUpcoming', initials: 'EW', bg: '#fce7f3' },
                  { name: 'David Smith', type: 'Orthopedics', time: '01:00 PM', status: 'Upcoming', color: 'statusUpcoming', initials: 'DS', bg: '#dcfce7' },
                ].map((apt, i) => (
                  <div key={i} className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <div className={styles.patientAvatar} style={{ background: apt.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#475569' }}>
                        {apt.initials}
                      </div>
                      <div>
                        <div className={styles.patientName}>{apt.name}</div>
                        <div className={styles.patientDetails}>{apt.type}</div>
                      </div>
                    </div>
                    <div className={styles.appointmentTime}>
                      <div className={styles.timeText}>{apt.time}</div>
                      <div className={`${styles.statusBadge} ${styles[apt.color]}`}>{apt.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.glassPanel}>
              <div className={styles.panelHeader}>
                <h2 className={styles.panelTitle}>Recent Activity</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-main)' }}>New Patient Registered</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Alice Brown was registered.</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>10 mins ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-main)' }}>Surgery successful</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dr. Wilson completed appendectomy.</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>45 mins ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', marginTop: '6px' }}></div>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-main)' }}>Lab results updated</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Blood work for patient #4829 is ready.</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>2 hours ago</div>
                  </div>
                </div>
              </div>
              
              <button 
                style={{ width: '100%', padding: '0.75rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', marginTop: '1.5rem', fontWeight: '600', color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseOver={(e) => e.target.style.background = '#f1f5f9'}
                onMouseOut={(e) => e.target.style.background = '#f8fafc'}
              >
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
