import React from 'react';
import data from './contactData.json';

import './index.scss';

var contactData = data.contactData;

export const ContactData = () => {
  return (
    <div className="contact">
      <h2 className="tab-name">Asia-Sushi-Bar</h2>
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