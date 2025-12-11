import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Venkatarao gari manavalu</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">Profile</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}
