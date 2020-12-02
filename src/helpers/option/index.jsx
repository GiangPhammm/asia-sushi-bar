import React from 'react';
import options from './orderOptions.json';

import './index.scss';

var optionList = options.optionList;

export const OptionItems = () => {
  return (
    <div className="order">
        <ul className="order-list">
          {
            optionList.map((option) => {
              return (
                <li 
                  key={option.key}
                  className="order-list__option"
                >
                  <h2 className="option-title">{option.title}</h2>
                  {option.sub_title ? <p className="option-subtitle">{option.sub_title}</p> : null}
                  {option.image ? 
                    <img 
                      className="option-logo"
                      src={option.image}
                      alt={option.image_alt}
                    /> 
                    : null}
                  <p className="option-text">{option.text}</p>
                  <div className="option-button">
                    <a 
                      className="option-button-wrapper"
                      href={option.button_url}
                      rel={option.button_relation}
                    >{option.button}</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
    </div>

    );
};

export default OptionItems;