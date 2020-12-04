import React from 'react';
import {Link} from '../link/index'

import './index.scss'

export const Teaser = (props) => {
  const typeClass = () => {
    switch (props.type) {
      case 'dark': 
        return 'teaser-dark';
      case 'center':
        return 'teaser-center';
      default:
        return 'teaser';
    }
  };
  
  return (
    <section className={`${typeClass()}`}>
      <div className={`${props.type === 'center' ? 'teaser__in-center' : 'teaser__in-grid'}`}>
        {
          props.image_src && 
          <div className="teaser__item teaser__image-wrapper">
            <img 
              className="teaser__image" 
              loading="lazy" 
              src={props.image_src} 
              alt={props.image_alt}
            />
          </div>
        }
        <div 
          className={`teaser__item ${props.type === 'center' ? 'teaser-center-content' : 'teaser-content'}`}
        >
          <h2
            className={props.type === 'center' ? 'teaser-center-content__headline' : 'teaser-content__headline'}
          >
            {props.headline}
          </h2>
          <p 
            className={props.type === 'center' ? 'teaser-center-content__text' : 'teaser-content__text'}
          >
            {props.text}
          </p>
          {props.link_url ?
            <Link
              link_url={props.link_url} 
            >
              {props.link_text}
            </Link>
          : null}
        </div>   
      </div>
    </section>
  );
}
  
