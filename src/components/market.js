// market.js
import React from "react";
import "./market.css";

export default function Market() {
  return (
    <div className="market">
      {/* Header */}
      <header className="market-header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <button className="login-button">Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="market-hero">
        <h1>Live Market</h1>
        <p>Buy fresh produce directly from trusted farmers.</p>
      </section>

      {/* Product Grid */}
      <section className="market-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="product-card" key={item}>
            <img
              src=""
              alt="Crop"
              className="product-image"
            />
            <h3>Organic Wheat</h3>
            <p>Farmer: karmagya </p>
            <p>Price: ₹1200 / 50kg</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA Market. All rights reserved.</p>
      </footer>
    </div>
  );
}
