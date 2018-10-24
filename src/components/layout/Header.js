import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = propos => {
    const branding = propos.branding;
  return (
      <nav className="navbar navbar-expand navbar-dark bg-danger mb-3 py-0">
          <div className="container">
              <a href="/" className="navbar-brand">
                  {branding}
              </a>
              <div>
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">
                              <i className="fas fa-home"></i>Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/about/100" className="nav-link">
                              <i className="fas fa-question"></i>About
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contact/add" className="nav-link">
                              <i className="fas fa-plus"></i>Add Contact
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyling = {color: 'red', fontSize: '50px'}

export default Header;