import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back to KARMAGYA 🌾</h2>
        <form className="login-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href=" " className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="cta-button">Login</button>

          <div className="divider">or</div>

          <div className="social-login">
            <button className="google-login">Continue with Google</button>
            <button className="facebook-login">Continue with Facebook</button>
          </div>

          <p className="signup-link">
            Don't have an account? <a href=" ">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
