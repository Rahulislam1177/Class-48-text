import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {

const {name} = useContext(AuthContext)

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar {name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/order" className="nav-link " aria-current="page">Order</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link " aria-current="page">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link " aria-current="page">LogIn</Link>
        </li>
        
     
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;