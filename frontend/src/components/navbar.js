import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  // Modals
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Register form states
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [surname, setSurname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [village, setVillage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login form states
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Logged-in user
  const [user, setUser] = useState(null);

  // Persist login across refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  }, []);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      username: loginName,
      password: loginPassword,
    };

    try {
      const response = await fetch("http://127.0.0.1:8001/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        setShowLogin(false);
        setUser(data.username);
        localStorage.setItem("user", data.username); // persist login
      } else {
        alert("Login failed: " + data.error);
      }
    } catch (error) {
      alert("Login request failed");
    }
  };

  // Logout handler
  const handleLogout = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8001/logout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      setUser(null);
      localStorage.removeItem("user");
    } else {
      alert("Logout failed: " + data.error);
    }
  } catch (error) {
    alert("Logout request failed");
  }
};


  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      father,
      mother,
      surname,
      dob,
      gender,
      village,
      phone,
      email,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8001/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        setShowRegister(false);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Failed! Please try again.");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Venkatarao gari manavalu</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>

        {!user ? (
          <>
            <li><button onClick={() => setShowLogin(true)}>Login</button></li>
            <li><button onClick={() => setShowRegister(true)}>Register</button></li>
          </>
        ) : (
          <>
            <li>Hi, {user}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Name / Email"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
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
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Father's Name" value={father} onChange={(e) => setFather(e.target.value)} />
              <input type="text" placeholder="Mother's Name" value={mother} onChange={(e) => setMother(e.target.value)} />
              <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" placeholder="Village" value={village} onChange={(e) => setVillage(e.target.value)} />
              <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
