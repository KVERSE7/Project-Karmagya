import React from "react";
import "./organic.css";

export default function Organic() {
  return (
    <div className="organic">
      {/* Header */}
      <header className="organic-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Market</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="organic-hero">
        <div className="text">
          <h1>Verified Organic Farming & Marketplace</h1>
          <p>
            Learn how our platform verifies organic practices and connects you
            directly to trusted buyers.
          </p>
          <button className="cta-button">Verify Your Farm</button>
        </div>
        
      </section>

      {/* Features */}
      <section className="organic-features">
        <h2>How It Works</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📋 Organic Compliance Monitoring</h3>
            <p>
              Track pesticide-free status, certification timelines, and
              chemical-free inputs.
            </p>
          </div>
          <div className="feature-card">
            <h3>🌍 Farmer Profile Verification</h3>
            <p>
              Verify farm origin, past practices, and soil tests through
              uploaded records and sensor data.
            </p>
          </div>
          <div className="feature-card">
            <h3>🛒 Digital Marketplace</h3>
            <p>
              List your verified produce for buyers and bulk retailers in
              real-time.
            </p>
          </div>
          <div className="feature-card">
            <h3>💬 Connect & Negotiate</h3>
            <p>
              Use built-in messaging to clarify deals and share reports
              directly with buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA. All rights reserved.</p>
      </footer>
    </div>
  );
}
