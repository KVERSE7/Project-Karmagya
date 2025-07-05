// Dashboard.js
import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  const userRole = "farmer"; // Change this for testing: "buyer", "admin"

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/market">Market</a>
          <button className="logout-button">Logout</button>
        </nav>
      </header>

      {/* Welcome Banner */}
      <section className="dashboard-banner">
        <h1>Welcome Back, {userRole.charAt(0).toUpperCase() + userRole.slice(1)}!</h1>
        <p>Here's your personalized farming dashboard powered by IoT and AI.</p>
      </section>

      {/* Role-Based Content */}
      <section className="dashboard-content">
        {userRole === "farmer" && (
          <>
            <div className="card">🌱 Live Sensor Data: Temperature, Humidity, Soil</div>
            <div className="card">⚠️ Alerts: Pest Risk Detected in Zone B</div>
            <div className="card">🧠 AI Suggestions: Use Bio-Fertilizer this week</div>

          </>
          
          
        )}

        {userRole === "buyer" && (
          <>
            <div className="card">🛒 Orders: 3 items pending delivery</div>
            <div className="card">🧑‍🌾 Live Market: Fresh produce available</div>
            <div className="card">📦 History: Past purchases & receipts</div>
          </>
        )}

        {userRole === "admin" && (
          <>
            <div className="card">👥 Users: 250 Active Farmers, 120 Buyers</div>
            <div className="card">📈 Platform Stats: 80 new transactions today</div>
            <div className="card">🛠️ Manage Listings, Sensors & AI Models</div>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}
