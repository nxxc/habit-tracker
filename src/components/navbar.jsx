import React, { memo } from 'react';

const Navbar = (props) => (
  <nav className='navbar'>
    <i className='navbar-logo fas fa-leaf'></i>
    <span>Habit Tracker</span>
    <span className='navbar-count'>{props.totalCount}</span>
  </nav>
);

export default memo(Navbar);
