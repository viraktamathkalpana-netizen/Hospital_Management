import './globals.css';

export default function Home() {
  return (
    <main className="container hero">
      <div className="glass-card">
        <h1>CareSync</h1>
        <p>Your Health, Our Priority. The most intuitive hospital management system for modern healthcare.</p>
        <div className="btn-group">
          <a href="/login" className="btn btn-primary">Sign In</a>
          <a href="/signup" className="btn btn-secondary">Sign Up</a>
        </div>
      </div>
    </main>
  );
}
