'use client';

import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '', 
    role: 'Patient' 
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // TODO: Connect to backend
    alert(`Account created for ${formData.email} as ${formData.role}`);
    window.location.href = '/login';
  };

  return (
    <main className="container hero">
      <div className="glass-card" style={{ maxWidth: '600px', marginTop: '5rem', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Create Account</h1>
        <p style={{ marginBottom: '2rem' }}>Join Hospital Management to get started.</p>
        
        {error && <p style={{ color: '#ef4444', marginBottom: '1rem', fontWeight: 600 }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'left' }}>
          
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Role</label>
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
              }}
            >
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Staff">Staff</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="johndoe"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1rem',
                color: 'var(--text-main)',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Create Account
            </button>
          </div>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '1rem', marginBottom: 0 }}>
          Already have an account? <a href="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign in</a>
        </p>
      </div>
    </main>
  );
}
