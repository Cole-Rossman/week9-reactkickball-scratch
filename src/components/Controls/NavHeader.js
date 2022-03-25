import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavHeader() {
  return (
    <div className='nav-header'>
      <ul>
        <div>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink to="/teams">
              Teams
            </NavLink>
          </li>
        </div>
        <div>
          <li>
            <NavLink exact to="/players">
              Players
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
