import React from "react";
import "./farm.css";

export default function Farm() {
  return (
    <div className="farm-container">
      {/* Header */}
      <header className="farm-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Market</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="farm-hero">
        <div className="hero-text">
          <h1>Transforming Agriculture with Technology</h1>
          <p>Empowering farmers through data-driven insights.</p>
          <button className="cta-button">Get Detail Analysis And AI-Advisory </button>
        </div>
      </section>

      {/* Monitoring Overview */}
      <section className="monitoring">
        <h2>📈 Monitoring Dashboard</h2>
        <div className="monitor-grid">
          <div className="monitor-card">
            <h3>🌡️ Temperature & Humidity</h3>
            <p>25°C / 68% RH</p>
          </div>
          <div className="monitor-card">
            <h3>🌱 Soil Moisture</h3>
            <p>Optimal - 78%</p>
          </div>
          <div className="monitor-card">
            <h3>🌾 Crop Health Status</h3>
            <p>No anomalies detected</p>
          </div>
          <div className="monitor-card">
            <h3>📦 Stock Status</h3>
            <p>Stored Grains: 1.2 Tons | Fresh Produce: 200 kg</p>
          </div>
        </div>
      </section>

      {/* Admin Profile Section */}
      <section className="admin-profile">
        <h2>👨‍💼 Admin Profile</h2>
        <div className="profile-card">
          <img src="/images/admin-avatar.png" alt="Admin Avatar" />
          <div className="profile-info">
            <p><strong>Name:</strong> Rajveer Sharma</p>
            <p><strong>Email:</strong> rajveer@karmagya.com</p>
            <p><strong>Role:</strong> Platform Admin</p>
            <button className="cta-button">Edit Profile</button>
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
