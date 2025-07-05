// land.js
import React from "react";
import "./land.css";

export default function Land() {
  return (
    <div className="land">
      {/* Header */}
      <header className="land-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Market</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="land-hero">
        <h1>Farm Land Diagnostics</h1>
        <p>AI-powered insights for healthier and more productive land.</p>
      </section>

      {/* Visualization Section */}
      <section className="land-visuals">
        <div className="visual-card">
          <h3>Soil Moisture (Live)</h3>
          <img src="/images/soil-moisture.png" alt="Soil Moisture Chart" />
        </div>
        <div className="visual-card">
          <h3>Temperature Map</h3>
          <img src="/images/temperature-map.png" alt="Temperature Map" />
        </div>
        <div className="visual-card">
          <h3>Crop Health (NDVI)</h3>
          <img src="/images/ndvi-health.png" alt="NDVI Chart" />
        </div>
      </section>

      {/* Risk Analysis */}
      <section className="land-risks">
        <h2>🌾 Risk Detection & Alerts</h2>
        <ul>
          <li>⚠️ Dry Patch Detected in North-East quadrant</li>
          <li>🛑 Pest Infestation Risk in Zone C</li>
          <li>📉 Nitrogen Deficiency likely in Area B</li>
        </ul>
      </section>

      {/* Suggestions */}
      <section className="land-tips">
        <h2>📌 Suggested Improvements</h2>
        <ul>
          <li>Increase irrigation frequency in dry zones</li>
          <li>Apply neem-based pesticide in Zone C</li>
          <li>Use nitrogen-rich compost in Area B</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA. All rights reserved.</p>
      </footer>
    </div>
  );
}
