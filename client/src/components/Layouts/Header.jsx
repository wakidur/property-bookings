/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import {  UsersDB  } from '../../utilities/dataStore';

const Header = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(UsersDB);
  }, []);

  

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to="/">
          Property Booking
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-link' to='/' >
                Become a Host
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink activeClassName='active' className='nav-link'  to='/' >
                Help
              </NavLink>
            </li>
          </ul>
          <div className=' d-flex align-items-center'>
            {userInfo && Object.keys(userInfo).length > 0 ? (
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                {userInfo.name}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to="/user/manage-property">Manage Property</Link></li>
                <li><Link className="dropdown-item" to="/">Logout</Link></li>
              </ul>
            </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;