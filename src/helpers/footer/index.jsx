import React from 'react';
import footerItemList from '../../assets/json/footerItems.json';
import footerInformation from '../../assets/json/footerInfo.json';
import './index.scss';

var footerColumns = footerItemList.footerColumns;
var footerInfo = footerInformation.footerInfo;

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__items">
          {
            footerColumns.map((col) => {
              return (
                <div key={col.column}
                     className="footer__column">
                  <p className="footer__column-name">{col.column}</p>
                  <ul className="footer__list">
                    {
                      col.items.map((item) => {
                        return (
                          <li key={item.itemKey}>
                            {
                              "logo" in item &&
                              <img 
                                className="footer__logo" 
                                src={item.logo}
                                alt={item.alt}
                              />
                            }
                            <span className="footer__text">{item.title}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div> 

        <div className="footer__information">
          {
            footerInfo.map((col) => {
              return (
                <div key={col.key}
                     className="footer__column">
                {
                  "conditions" in col &&
                  col.conditions.map((c) => {
                    return (
                      <a 
                        key={c.key}
                        className="footer__data" 
                        href={c.url}
                      >
                        {c.title}
                      </a>
                    )
                  })
                }

                {
                  "media" in col &&
                  col.media.map((m) => {
                    return (
                      <a 
                        key={m.alt}
                        className="footer-media" 
                        href={m.url}
                      >
                        <img 
                          className="footer__media" 
                          src={m.logo}
                          alt={m.alt}
                        />
                      </a>
                    )
                  })
                }

                </div>
              )
            })
          }
        </div>  
      </div>
      
    </div>
    
                    
  );
};

export default Footer;