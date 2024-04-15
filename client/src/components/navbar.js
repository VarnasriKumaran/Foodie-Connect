import React from 'react'
import './navbar.css';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Junior Biryani
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Locations
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Cart
        </a>
      </li>
      </ul>
  </div>
</nav>
</div>
  )
};
