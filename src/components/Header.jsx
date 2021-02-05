import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="links">
        <NavLink className="nav-link" to="/itools" exact>
        Graph
      </NavLink>
        <NavLink className="nav-link" to="/other-page" exact>
          Other page
        </NavLink>
      </div>
    </div>
  )
}

export default Header;
