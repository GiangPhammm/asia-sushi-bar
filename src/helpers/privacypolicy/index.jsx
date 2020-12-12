import React from 'react';
import data from './policy.json';

import './index.scss';

var privacyPolicy = data.sections;

export const PolicyData = () => {
  return (
    <div className="policy">
      <h2 className="tab-name">Datenschutzerklärung</h2>
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