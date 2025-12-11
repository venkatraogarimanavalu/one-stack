import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login submitted!");
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
    setShowRegister(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Venkatarao gari manavalu</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><button onClick={() => setShowLogin(true)}>Login</button></li>
        <li><button onClick={() => setShowRegister(true)}>Register</button></li>
      </ul>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
  <div className="modal" onClick={() => setShowRegister(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setShowRegister(false)}>×</button>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Father's Name" />
        <input type="text" placeholder="Mother's Name" />
        <input type="text" placeholder="Surname" />
        <input type="date" placeholder="Date of Birth" />
        <select placeholder="Gender">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" placeholder="Village" />
        <input type="tel" placeholder="Phone" />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
)}

    </nav>
  );
}
