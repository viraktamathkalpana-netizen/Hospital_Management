'use client';

import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend. For now, alert exactly what was typed.
    alert(`Attempting login for: ${formData.identifier}`);
  };

  return (
    <main className="container hero">
      <div className="glass-card" style={{ maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome Back</h1>
        <p style={{ marginBottom: '2rem' }}>Sign in to continue to Janani Hospital.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>Email or Username</label>
            <input 
              type="text" 
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              placeholder="admin@hospital.com"
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
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Sign In
          </button>
        </form>
        
        <p style={{ marginTop: '2rem', fontSize: '1rem', marginBottom: 0 }}>
          Don't have an account? <a href="/signup" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Create new account</a>
        </p>
      </div>
    </main>
  );
}
