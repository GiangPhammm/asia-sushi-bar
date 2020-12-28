import React from 'react';
import data from '../../assets/json/policy.json';

import './index.scss';

var privacyPolicy = data.sections;

export const PolicyData = () => {
  return (
    <div className="main-content-section policy">
      <h1 className="tab-name">Datenschutzerklärung</h1>
      {
        privacyPolicy.map((section) => {
          return (
            <div 
              key={section.id}
              className="policy__section"
            >
              <p className="policy__section-name">{section.sectionTitle}</p>
              {
                section.paragraphs.map((para) => {
                  return (
                    <div
                      className="policy__section-para"
                      key={para.key}
                    >
                      <p className="para-title">{para.paraTitle}</p>
                      <p className="para-content">{para.content.split('\n').map((i, index) => {
                            return (index === 0) ? i : [<br key={index} />, i]})
                          }
                      </p>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default PolicyData;