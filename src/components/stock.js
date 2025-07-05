import React from "react";
import "./stock.css";

export default function Stock() {
  return (
    <div className="stock">
      {/* Header */}
      <header className="stock-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Market</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="stock-hero">
        <div className="text">
          <h1>Smart Stock & Field Monitoring</h1>
          <p>Learn how real-time IoT sensors and AI help protect your crops and ensure maximum yield.</p>
          <button className="cta-button">Explore Sensors</button>
        </div>
        
      </section>

      {/* Monitoring Details */}
      <section className="stock-details">
        <h2>What Do We Monitor?</h2>
        <div className="monitor-grid">
          <div className="monitor-card">
            <h3>🌡️ Temperature & Humidity</h3>
            <p>Track microclimate variations to optimize watering and crop protection.</p>
          </div>
          <div className="monitor-card">
            <h3>🧪 CO₂ & VOC Levels</h3>
            <p>Monitor air quality to ensure safe grain storage and field environment.</p>
          </div>
          <div className="monitor-card">
            <h3>🌱 Soil Health</h3>
            <p>Measure moisture, pH, and nutrient data in real-time to guide fertilization.</p>
          </div>
          <div className="monitor-card">
            <h3>📦 Storage Spoilage Detection</h3>
            <p>Prevent losses by identifying spoilage signs early in storage facilities.</p>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="stock-alerts">
        <h2>🚨 Instant Alerts</h2>
        <p>Get real-time notifications when your field crosses critical thresholds.</p>
        <ul>
          <li>🔔 High CO₂ levels in storage</li>
          <li>⚠️ Soil dryness detected in Zone A</li>
          <li>🔥 Temperature exceeding 35°C</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA. All rights reserved.</p>
      </footer>
    </div>
  );
}
