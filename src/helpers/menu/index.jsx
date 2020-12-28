import React from 'react';
import menu from '../../assets/json/menu.json';

import './index.scss';

var menuItems = menu.menuItems;

export const MenuItems = () => {
  return (
    <div className="main-content-section menu">
        <ul className="menu__wrapper">
          {
            menuItems.map((section) => {
              return (
                <li 
                  key={section.sectionId}
                  id={section.sectionId}
                  className="menu__section"
                >
                  <h2 className="menu__section-name">{section.sectionName}</h2>
                  <img 
                    className="menu__section-image"
                    src={section.sectionImage}
                    alt={section.sectionImageAlt}
                  />
                  <p className="menu__section-note">{section.sectionNote}</p>
                  <ul className="menu__section-list">
                  {
                    section.sectionItems.map((item) => {
                      return (
                        <li 
                            key={item.title}
                            className="menu__section-list__item"
                        >
                            <div className="item-name">
                              <span className="item-title">{item.title}</span>
                              <span className="item-info">{item.productInfo}</span>
                            </div>
                            <div className="item-price">{item.price}</div>
                            
                        </li>
                        )
                    })
                  }
                  </ul>
                </li>
              )
            })
          }
        </ul>
    </div>        
  );
};

export default MenuItems;