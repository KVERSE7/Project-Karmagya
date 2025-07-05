// advisor.js
import React, { useState } from "react";
import "./advisor.css";

export default function Advisor() {
  const [formData, setFormData] = useState({
    location: "",
    soil: "",
    crop: "",
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data - replace with AI/ML backend call
    setRecommendation({
      bestCrop: "Maize",
      yield: "3.5 tons/acre",
      fertilizer: "Urea + Compost (Balanced)",
    });
  };

  return (
    <div className="advisor">
      {/* Header */}
      <header className="advisor-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Live Market</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="advisor-hero">
        <h1>AI Crop Advisor</h1>
        <p>Receive data-driven recommendations tailored to your land.</p>
      </section>

      {/* Input Form */}
      <section className="advisor-form-section">
        <form className="advisor-form" onSubmit={handleSubmit}>
          <label>
            🌍 Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            🌱 Soil Type:
            <input
              type="text"
              name="soil"
              value={formData.soil}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            🌾 Intended Crop:
            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Get Recommendation</button>
        </form>
      </section>

      {/* Recommendation Output */}
      {recommendation && (
        <section className="advisor-result">
          <h2>🌟 Recommendation</h2>
          <p><strong>Best Crop:</strong> {recommendation.bestCrop}</p>
          <p><strong>Expected Yield:</strong> {recommendation.yield}</p>
          <p><strong>Recommended Fertilizer:</strong> {recommendation.fertilizer}</p>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA. All rights reserved.</p>
      </footer>
    </div>
  );
}
