import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard.js";
import Login from "./components/login.js"; 
import Market from "./components/market.js";
import Advisor from "./components/advisor.js";
import Land from "./components/land.js";
import Stock from "./components/stock.js";
import Organic from "./components/organic.js";
import Farm from "./components/farm.js";

function HomePage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">🌾 KARMAGYA</div>
        <nav className="nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Live Market</a>
          
          <Link to="/Login">
            <button className="login-button">Login</button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Transforming Agriculture with Technology</h1>
          <p>Empowering farmers through data-driven insights.</p>
          <Link to="/Farm"> <button className="cta-button">Monitor your farm/stock</button></Link>
        </div>
        <div className="hero-image">
          <img
            src="/images/ChatGPT Image Jun 21, 2025, 06_08_28 PM.png"
            alt="Farmer monitoring with technology"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="feature-card">
          <h3>Smart Stock & Field Monitoring</h3>
          <p>Track field conditions in real-time with sensor data.</p>
        </div>
        <div className="feature-card">
          <h3>AI-Driven Crop Advisor</h3>
          <p>Get intelligent crop recommendations and forecasts.</p>
        </div>
        <div className="feature-card">
          <h3>Verified Organic Farming & Marketplace</h3>
          <p>Ensure organic compliance and connect with buyers.</p>
        </div>
        <div className="feature-card">
          <h3>AI-Powered Farm Land Diagnostic</h3>
          <p>Detect field risks and receive improvement tips.</p>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="detail-section">
        <div className="detail-text">
          <h2>Smart Stock & Field Monitoring</h2>
          <p>Learn more about how this feature benefits your farming journey.</p>
           <Link to="/Stock"> <button className="cta-button">Explore Stock & Field Monitoring</button></Link>
        </div>
        <div className="detail-image">
          <img src="/images/smart-monitoring.png" alt="Smart Monitoring" />
        </div>
      </section>

      <section className="detail-section reverse">
        <div className="detail-text">
          <h2>AI-Driven Crop Advisor</h2>
          <p>Learn more about how this feature benefits your farming journey.</p>
           <Link to="/Advisor"> <button className="cta-button">Explore AI-Advisor</button></Link>
        </div>
        <div className="detail-image">
          <img src="/images/crop-advisor.png" alt="Crop Advisor" />
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-text">
          <h2>Verified Organic Farming & Marketplace</h2>
          <p>Learn more about how this feature benefits your farming journey.</p>
          <Link to="/Organic"> <button className="cta-button">Explore Organic crops</button></Link>
        </div>
        <div className="detail-image">
          <img src="/images/organic-farming.png" alt="Organic Farming" />
        </div>
      </section>

      <section className="detail-section reverse">
        <div className="detail-text">
          <h2>AI-Powered Farm Land Diagnostic</h2>
          <p>Learn more about how this feature benefits your farming journey.</p>
         <Link to="/Land"> <button className="cta-button">Explore Land Diagnostic</button></Link>
        </div>
        <div className="detail-image">
          <img src="/images/land-diagnostics.png" alt="Land Diagnostics" />
        </div>
      </section>

     
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KARMAGYA. All rights reserved.</p>
       
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} />
          <Route path="/advisor" element={<Advisor/>} />
          <Route path="/land" element={<Land/>}/>
          <Route path="/stock" element={<Stock/>}/>
          <Route path="/organic" element={<Organic/>}/>
          <Route path="/Farm" element={<Farm/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
