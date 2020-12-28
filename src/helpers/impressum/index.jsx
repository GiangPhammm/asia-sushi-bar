import React from 'react';
import data from '../../assets/json/contactData.json';

import './index.scss';

var contactData = data.contactData;

export const ContactData = () => {
  return (
    <div className="main-content-section contact">
      <h1 className="tab-name">Asia-Sushi-Bar</h1>
      {
        contactData.map((item) => {
          return (
            <div 
              key={item.key}
              className="contact__item-wrapper"
            >
              <span className="contact__item item-key">{item.key}</span>
              <span className="contact__item item-value">{item.value}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default ContactData;