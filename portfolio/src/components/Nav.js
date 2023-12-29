import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <ul>
        <li className={`nav-item ${isActive('/')}`}>
          <Link to="/" style={{ color: isActive('/') ? 'purple' : '' }}>
            Home
          </Link>
        </li>
        <li className={`nav-item ${isActive('/About')}`}>
          <Link to="/About" style={{ color: isActive('/About') ? 'purple' : '' }}>
            About me
          </Link>
        </li>
        <li className={`nav-item ${isActive('/Activities')}`}>
          <Link to="/Activities" style={{ color: isActive('/Activities') ? 'purple' : '' }}>
            Activities
          </Link>
        </li>
        <li className={`nav-item ${isActive('/Projects')}`}>
          <Link to="/Projects" style={{ color: isActive('/Projects') ? 'purple' : '' }}>
            Projects
          </Link>
        </li>
        <li className={`nav-item ${isActive('/Jobs')}`}>
          <Link to="/Jobs" style={{ color: isActive('/Jobs') ? 'purple' : '' }}>
            Jobs
          </Link>
        </li>
        <li className={`nav-item ${isActive('/Education')}`}>
          <Link to="/Education" style={{ color: isActive('/Education') ? 'purple' : '' }}>
            Education
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Nav;
