import React, { useState } from 'react';
import { Link } from "@reach/router";

function Navigation({ navLinks }) {
  return (
    <div className="main-header__navigation">
      <nav className="main-header__navigation-wrapper">
        { navLinks.map((link, index) => 
          <Link
            key={link.text}
            className="main-header__navigation-item"
            to={link.path}
          >
            { link.text }
          </Link>
        )}
      </nav>
    </div>
  )
}

export default Navigation