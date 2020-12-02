import React, { Component } from 'react'
import MenuItems from '../helpers/menu/index';
import {Link} from '../helpers/link/index'
import LinkAnchors from '../helpers/menu/linkAnchor.json';

var anchors = LinkAnchors.anchorList;

class Menu extends Component {
  render () {
    return (
      <div className="main-content-container">
        <h1 className="main-content-title">Speisenkarte</h1>
        {/* <div className="menu__wrapper">
            {
              anchors.map((item) => {
                return (
                  <Link
                    link_url={item.url} 
                  >
                    {item.text}
                  </Link>
                )
              })
            }
          </div> */}
          
          <MenuItems></MenuItems>
      </div>
    )
  }
}

export default Menu