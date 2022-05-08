import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.jpg'

const Navbar = () => {
    return (
        <header>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      <img src={logo} height="50px" alt="" />
      Warehouse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="home#items">Items</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="blog">Blog</Link>
        </li>
      </ul>
      <span className="navbar-text">
        User
      </span>
    </div>
  </div>
</nav>
          </div>

        </header>
    );
};

export default Navbar;