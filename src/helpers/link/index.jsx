import React from 'react';

import './index.scss';

export const Link = (props) => {
  return (
    <a 
      className={`link-cta`} 
      href={props.link_url}
    >
      <span className="link-text">
        {props.children}
      </span>
    </a>
  );
}