'use client';

export default function Dashboard() {
  return (
    <main className="container" style={{ padding: '2rem' }}>
      <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem' }}>Hospital Dashboard</h1>
          <button className="btn btn-secondary" onClick={() => window.location.href = '/'}>
            Logout
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Total Patients</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>1,284</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Appointments Today</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>42</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Available Doctors</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>15</p>
          </div>
        </div>

        <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--text-main)' }}>Recent Activity</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
              <strong>Dr. Sarah Jenkins</strong> updated a patient record.
            </li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
              <strong>New Appointment</strong> scheduled for John Doe at 2:30 PM.
            </li>
            <li style={{ padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
              <strong>Emergency</strong> reported in Ward 3.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
