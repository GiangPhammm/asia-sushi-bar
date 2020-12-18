import React from 'react';
import cateringImgs from '../../assets/json/cateringImages.json';

import './index.scss';

var images = cateringImgs.items;

export const Gallery = () => {
  return (
    <div className="main-content-section gallery">
      <p className="main-content-subtitle">Bei Ihnen steht eine Familien- Firmenfeier bevor und möchten diese bei uns oder mit uns bei Ihnen ausrichten? Besten Dank für Ihr Vertrauen, welches Sie uns entgegenbringen. Unser asiatischer Cateringservice bietet Ihnen vietnamesische, thailandische, japanische oder chinesische Küche außer Haus an. Rufen Sie unter 030 40745645 an und lassen Sie von uns emfehlen!</p>
      <div className="gallery-list">
        {
          images.map((item) => {
            return (
              <div 
                key={item.alt}
                className="gallery-list__item"
              >
                <img 
                  className="gallery-list__item-image" 
                  src={item.path}
                  alt={item.alt}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery;